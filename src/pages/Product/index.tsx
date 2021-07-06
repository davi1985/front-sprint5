import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { useAlert } from '../../hooks/useAlert';

import { currencyFormatter } from '../../utils/currencyFormatter';
import { fetchData } from '../../service/ServiceUtils';

import {
  Card,
  Container,
  Details,
  Sizes,
  Button,
  Size,
  ImageContainer,
  Span,
} from './styles';

import { ProductType } from '../../components/Product';

type SizeType = {
  size: number
  selected?: boolean
}

const sizesModel: Array<SizeType> = [{ size: 4 }, { size: 6 }, { size: 8 }, { size: 10 }];

export function Product() {
  const [product, setProduct] = useState<ProductType>();

  const id = useLocation().pathname.replace(/\D/gim, '');

  const { alert } = useAlert();

  const history = useHistory();

  const [sizes, setSizes] = useState(sizesModel);
  const [size, setSize] = useState(sizes[0].size);

  function get() {
    fetchData(`products?sku=${id}`)
      .then((response) => {
        setProduct(response[0])
      }).catch((err) => err);
  }

  useEffect(() => {
    get();
  }, []);

  function handleChangeSize(event: Event): void {
    console.log(event)
    const sizeChoice = 1

    const update = sizes.map((item) => {
      if (item.size === sizeChoice) {
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    });

    setSizes(update);
    setSize(sizeChoice);
  }

  function addCart() {
    alert('Produto adicionado ao Carrinho', true);

    history.push('/');
  }

  return (
    <Container>
      <ImageContainer>
        <img
          src={`${window.location.origin}/${product?.image}`}
          alt={product?.description}
        />
      </ImageContainer>

      <Details>
        <h2>{product?.description}</h2>

        <Sizes>
          <span>
            Selecionar Tamanho:
            {size}
          </span>

          <Size>
            {sizes.map((item) => (
              <Span
                key={item.size}
                className={item.selected === true ? 'selected' : ''}
                onClick={(event) => handleChangeSize}
              >
                {item.size}
              </Span>
            ))}
          </Size>
        </Sizes>

        <Card>
          <span>{currencyFormatter(product?.price)}</span>

          <Button color="green" onClick={addCart}>
            Adicionar à sacola
          </Button>

          <Button color="red">
            <Link to="/">Cancelar</Link>
          </Button>
        </Card>
      </Details>
    </Container>
  );
}
