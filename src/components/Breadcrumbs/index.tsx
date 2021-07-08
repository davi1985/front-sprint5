import { Breadcrumb } from '../../@types/components/Breadcrumb';
import { BreadcrumbItem } from '../BreadcrumbItem';
import { Container } from './styles';

type BreadcrumbsProps = {
  breadcrumbs: Array<Breadcrumb>;
};

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <Container className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">
          {breadcrumbs &&
            breadcrumbs.map((item, index) => (
              <BreadcrumbItem
                key={item.id}
                label={item.label}
                link={item.link}
                active={breadcrumbs.length - 1 === index}
              />
            ))}
        </ol>
      </nav>
    </Container>
  );
}
