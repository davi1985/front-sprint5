import { useState } from 'react';

import filterIcon from '../../assets/icons/filter.svg';
import { useProducts } from '../../hooks/useProducts';
import { Item } from './styles';

type FilterItemProps = {
  id: string;
  label: string;
};

export function FilterItem({ label, id }: FilterItemProps) {
  const [active, setActive] = useState(false);
  const { handleSortByName, handleSortByPrice } = useProducts();

  // eslint-disable-next-line consistent-return
  function sortProducts(value: string): void {
    if (value === 'name') {
      setActive(true);
      return handleSortByName();
    }

    if (value === 'price') {
      setActive(true);
      return handleSortByPrice();
    }
  }

  return (
    <Item onClick={() => sortProducts(id)}>
      <span>{label}</span>
      <img src={filterIcon} alt="lupa" className={active ? 'active' : ''} />
    </Item>
  );
}
