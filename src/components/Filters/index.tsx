import { Filter } from '../../@types/components/Filter';
import { FilterItem } from '../FilterItem';
import { Container, List } from './styles';

type FiltersProps = {
  filters: Array<Filter>;
};

export function Filters({ filters }: FiltersProps): JSX.Element {
  return (
    <Container className="main__filters">
      <List>
        {filters &&
          filters.map((filter) => (
            <FilterItem key={filter.id} label={filter.label} id={filter.id} />
          ))}
      </List>
    </Container>
  );
}
