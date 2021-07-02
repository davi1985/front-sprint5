import filterIcon from '../../assets/icons/filter.svg';

import { Item } from './styles';

export function FilterItem({ label }) {
  return (
    <Item>
      <span>{label}</span>
      <img src={filterIcon} alt="lupa" />
    </Item>
  );
}
