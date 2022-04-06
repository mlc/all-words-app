import type { FunctionComponent } from 'preact';
import Header from './Header';
import PostsUi from './PostsUi';

const App: FunctionComponent = () => (
  <>
    <Header />
    <h2>past posts</h2>
    <PostsUi />
  </>
);

export default App;
