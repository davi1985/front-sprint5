import { MenuItem } from '../MenuItem';
import { List, Nav } from './styles';

type MenuItemType = {
  id: number;
  label: string;
  link: string;
};

type MenuProps = {
  menuItems: Array<MenuItemType>;
};

export function Menu({ menuItems }: MenuProps) {
  return (
    <Nav className="header__menu menu">
      <List className="menu__list">
        {menuItems.map((item) => (
          <MenuItem label={item.label} link={item.link} key={item.id} />
        ))}
      </List>
    </Nav>
  );
}
