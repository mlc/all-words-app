import clsx from 'clsx';
import { FunctionComponent, h, Fragment, JSX } from 'preact';
import { useCallback, useMemo, useState } from 'preact/hooks';
import {
  addMonth,
  fmt as fmtMonth,
  isoToMonth,
  Month,
  subtractMonth,
  validMonths,
} from './date';
import PostList from './PostList';
import styles from './styles.css';

const monthOp = (op: (month: Month) => Month, str: string): string =>
  fmtMonth(op(isoToMonth(str)));

interface NavElementProps {
  onClick: JSX.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const NavElement: FunctionComponent<NavElementProps> = ({
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

const PostsUi: FunctionComponent = () => {
  const months = useMemo(validMonths, []);
  const [currentSelection, setCurrentSelection] = useState<string>(months[0]);
  const onChange: JSX.GenericEventHandler<HTMLSelectElement> = useCallback(
    ({ target }) => {
      const value = (target as HTMLSelectElement | null)?.value;
      if (value) {
        setCurrentSelection(value);
      }
    },
    [setCurrentSelection]
  );
  const next = useCallback(() => {
    setCurrentSelection((cs) =>
      cs === months[0] ? cs : monthOp(addMonth, cs)
    );
  }, [months, setCurrentSelection]);
  const prev = useCallback(() => {
    setCurrentSelection((cs) =>
      cs === months[months.length - 1] ? cs : monthOp(subtractMonth, cs)
    );
  }, [months, setCurrentSelection]);

  const onFirst = currentSelection === months[months.length - 1];
  const onLast = currentSelection === months[0];

  return (
    <>
      <nav>
        <label htmlFor="month-selector">{'month: '}</label>
        <select id="month-selector" onChange={onChange}>
          {months.map((month) => (
            <option
              value={month}
              key={month}
              selected={month === currentSelection}
            >
              {month}
            </option>
          ))}
        </select>
        <NavElement onClick={prev} disabled={onFirst}>
          « back
        </NavElement>
        <NavElement onClick={next} disabled={onLast}>
          forwards »
        </NavElement>
      </nav>
      <PostList source={`posts/${currentSelection}.json`} />
    </>
  );
};

export default PostsUi;
