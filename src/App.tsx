import { FunctionComponent, h, Fragment } from 'preact';
import PostsUi from './PostsUi';

const App: FunctionComponent = () => (
  <>
    <h2>past posts</h2>
    <PostsUi />
  </>
);

export default App;
