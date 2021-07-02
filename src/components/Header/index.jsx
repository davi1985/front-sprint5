import { Menu } from '../Menu';
import { Mobile } from '../Mobile';
import { Breadcrumbs } from '../Breadcrumbs';

import riachueloIcon from '../../assets/icons/riachuelo.svg';
import searchIcon from '../../assets/icons/search.svg';

import { Alert } from '../Alert';
import { useAlert } from '../../hooks/useAlert';
import { useFilter } from '../../hooks/useFilter';

import { Container } from './styles';
import { useCategories } from '../../hooks/useCategories';

export function Header() {
  const { setSeachProduct } = useFilter();
  const { menuItems, breadcrumbs } = useCategories();
  const { message } = useAlert();

  return (
    <>
      <Container className="header">
        {message && <Alert alertText={message} />}

        <div className="header__container">
          <Mobile />

          <div className="header__desktop">
            <h1 className="header__logo">
              <img className="header__img" src={riachueloIcon} alt="Logo" />
            </h1>
          </div>

          <div className="header__search">
            <img className="header__icon" src={searchIcon} alt="Search" />
            <input
              className="header__input"
              type="search"
              placeholder="O que você está procurando?"
              onChange={(event) => setSeachProduct(event.target.value)}
            />
          </div>

          <Menu menuItems={menuItems} />
        </div>
      </Container>

      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </>
  );
}
