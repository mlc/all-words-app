import classnames from 'classnames';
import { FunctionComponent, h, Fragment } from 'preact';
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

const monthOp = (op: (month: Month) => Month, str: string): string =>
  fmtMonth(op(isoToMonth(str)));

const PostsUi: FunctionComponent = () => {
  const months = useMemo(validMonths, []);
  const [currentSelection, setCurrentSelection] = useState<string>(months[0]);
  const onChange = useCallback(
    ({ target }) => {
      const value = target?.value;
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
      <p>
        <label for="month-selector">{'month: '}</label>
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
        <a class={classnames('action', { disabled: onFirst })} onClick={prev}>
          « back
        </a>
        <a class={classnames('action', { disabled: onLast })} onClick={next}>
          forwards »
        </a>
      </p>
      <PostList source={`posts/${currentSelection}.json`} />
    </>
  );
};

export default PostsUi;
