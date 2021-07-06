import { Item } from './styles';

export type Breadcrumb = {
  id: number;
  label: string;
  link: string;
  active: boolean;
};

export function BreadcrumbItem({ label, link, active }: Breadcrumb) {
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
