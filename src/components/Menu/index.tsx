import { MenuItemType } from '../../@types/components/Menu';
import { MenuItem } from '../MenuItem';
import { List, Nav } from './styles';

type MenuProps = {
  menuItems: MenuItemType[];
};
export function Menu({ menuItems }: MenuProps): JSX.Element {
  return (
    <Nav className="header__menu menu">
      <List className="menu__list">
        {menuItems.map((item: MenuItemType) => (
          <MenuItem label={item.label} link={item.link} key={item.id} />
        ))}
      </List>
    </Nav>
  );
}
