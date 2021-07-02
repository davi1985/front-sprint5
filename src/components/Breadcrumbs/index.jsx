import { BreadcrumbItem } from '../BreadcrumbItem';

import { Container } from './styles';

export function Breadcrumbs({ breadcrumbs }) {
  return (
    <Container className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">
          {breadcrumbs && breadcrumbs.map((item, index) => (
            <BreadcrumbItem
              key={item.label}
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
