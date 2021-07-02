import { FilterItem } from '../FilterItem';

import { Container, List } from './styles';

export function Filters({ filters }) {
  return (
    <Container className="main__filters">
      <List>
        {filters
          && filters.map((filter) => (
            <FilterItem key={filter.id} label={filter.label} />
          ))}
      </List>
    </Container>
  );
}
