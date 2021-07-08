import { Content } from './styles';

type AlertProps = {
  alertText: string;
  type?: boolean;
};

export function Alert({ alertText, type }: AlertProps): JSX.Element {
  return <Content className={type ? 'success' : ''}>{alertText}</Content>;
}
