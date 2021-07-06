import filterIcon from "../../assets/icons/filter.svg";

import { Item } from "./styles";

type FilterItemProps = {
  label: string;
};

export function FilterItem({ label }: FilterItemProps) {
  return (
    <Item>
      <span>{label}</span>
      <img src={filterIcon} alt="lupa" />
    </Item>
  );
}
