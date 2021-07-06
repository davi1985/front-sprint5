import { Item } from "./styles";

type MenuItemProps = {
  label: string;
  link: string;
};

export function MenuItem({ label, link }: MenuItemProps) {
  return (
    <Item>
      <a className="menu__link" href={link}>
        <span>{label}</span>
      </a>
    </Item>
  );
}
