import type { FunctionComponent } from 'preact';

const Header: FunctionComponent = () => (
  <header>
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
      {' • javascript on github: '}
      <a href="https://github.com/mlc/all-valid-words">bot</a>
      {', '}
      <a href="https://github.com/mlc/all-words-app">app</a>
    </p>
    <p>
      data from <a href="https://www.gutenberg.org/">affair johnny g.</a>
      {', via '}
      <a href="https://github.com/aparrish/gutenberg-dammit">aparrish</a>
    </p>
  </header>
);
export default Header;
