import { FilterItem } from "../FilterItem";

import { Container, List } from "./styles";

type Filter = {
  id: string;
  label: string;
};

type FiltersProps = {
  filters: Array<Filter>;
};

export function Filters({ filters }: FiltersProps) {
  return (
    <Container className="main__filters">
      <List>
        {filters &&
          filters.map((filter) => (
            <FilterItem key={filter.id} label={filter.label} />
          ))}
      </List>
    </Container>
  );
}
