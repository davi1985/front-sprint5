import { Item } from './styles';

export function MenuItem({ label, link }) {
  return (
    <Item>
      <a className="menu__link" href={link}>
        <span>{label}</span>
      </a>
    </Item>
  );
}
