import { Content } from './styles';

export function Alert({ alertText, type }) {
  return alertText ? (
    <Content className={type ? 'success' : ''}>{alertText}</Content>
  ) : (
    ''
  );
}
