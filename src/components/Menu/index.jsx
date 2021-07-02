import { MenuItem } from '../MenuItem';
import { List, Nav } from './styles';

export function Menu({ menuItems }) {
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
