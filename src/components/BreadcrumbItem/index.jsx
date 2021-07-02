import { Item } from './styles';

export function BreadcrumbItem({ label, link, active }) {
  return (
    <Item
      className={
        active
          ? 'breadcrumbs__item breadcrumbs__item--active'
          : 'breadcrumbs__item'
      }
    >
      <a className="breadcrumbs__link" href={link}>
        {label}
      </a>
    </Item>
  );
}
