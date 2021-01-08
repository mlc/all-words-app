import { FunctionComponent, h, Fragment } from 'preact';
import { useCallback, useMemo, useState } from 'preact/hooks';
import { validMonths } from './date';
import PostList from './PostList';

const PostsUi: FunctionComponent = () => {
  const months = useMemo(validMonths, []);
  const [currentSelection, setCurrentSelection] = useState(months[0]);
  const onChange = useCallback(
    ({ target }) => {
      const value = target?.value;
      if (value) {
        setCurrentSelection(value);
      }
    },
    [setCurrentSelection]
  );

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
      </p>
      <PostList source={`posts/${currentSelection}.json`} />
    </>
  );
};

export default PostsUi;
