import type { FunctionComponent, JSX } from 'preact';
import { clsx } from 'clsx';
import styles from './styles.css';

interface Props {
  onClick: JSX.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const NavElement: FunctionComponent<Props> = ({
  onClick,
  disabled = false,
  children,
}) => (
  <button
    type="button"
    className={clsx(styles.action, { [styles.disabled]: disabled })}
    onClick={onClick}
    aria-disabled={disabled}
  >
    {children}
  </button>
);

export default NavElement;
