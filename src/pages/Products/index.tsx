/* eslint-disable prettier/prettier */
import { useState } from 'react';

import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';

import { Alert } from '../../components/Alert';
import { Filters } from '../../components/Filters';
import { ProductsList } from '../../components/ProductsList';
import { useAlert } from '../../hooks/useAlert';
import { useFilter } from '../../hooks/useFilter';
import { useLoading } from '../../hooks/useLoading';
import { useProducts } from '../../hooks/useProducts';
import { Main } from './styles';

const override = css`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export function Products() {
  const { productsFiltered } = useFilter();
  const { products, filters } = useProducts();

  const { message, success } = useAlert();
  const { loading } = useLoading();

  return (
    <Main>
      {message && <Alert alertText={message} type={success} />}

      <MoonLoader
        css={override}
        size={50}
        color="#6464da"
        loading={loading}
        speedMultiplier={0.5}
      />

      <Filters filters={filters} />

      <ProductsList products={products} productsFiltered={productsFiltered} />
    </Main>
  );
}
