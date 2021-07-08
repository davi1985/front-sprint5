import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AlertProvider } from './contexts/AlertContext';
import { LoadingProvider } from './contexts/LoadingContext';
import { ProductsProvider } from './contexts/ProductsContext';
import { FilterProvider } from './contexts/FilterContext';
import { Header } from './components/Header';
import { Products } from './pages/Products';
import { Product } from './pages/Product';
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';
import { CategoriesProvider } from './contexts/CategoriesContext';

export function App(): JSX.Element {
  return (
    <AlertProvider>
      <LoadingProvider>
        <ProductsProvider>
          <FilterProvider>
            <CategoriesProvider>
              <Header />
            </CategoriesProvider>

            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Products />
                </Route>

                <Route exact path="/products/:id">
                  <Product />
                </Route>

                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </BrowserRouter>

            <Footer />
          </FilterProvider>
        </ProductsProvider>
      </LoadingProvider>
    </AlertProvider>
  );
}
