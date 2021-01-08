import { FunctionComponent, h, Fragment } from 'preact';
import PostsUi from './PostsUi';

const App: FunctionComponent = () => (
  <>
    <h1>all valid wor(l)ds</h1>
    <p>
      {'a bot by '}
      <a rel="author" href="https://oulipo.social/@mlc">
        mlc
      </a>
      {' which posts random valid bits from public domain books'}
    </p>
    <p>
      <a rel="me" href="https://oulipo.social/@allvalidwords">
        bio on oulipo.social
      </a>
      {' • '}
      <a href="https://github.com/mlc/all-valid-words">javascript on github</a>
    </p>
    <p>
      data from <a href="https://www.gutenberg.org/">affair johnny g.</a>
      {', via '}
      <a href="https://github.com/aparrish/gutenberg-dammit">aparrish</a>
    </p>

    <h2>past posts</h2>
    <PostsUi />
  </>
);

export default App;
