import { FunctionComponent, h } from 'preact';
import { PostData } from './api';

interface Props {
  post: PostData;
}

const Author: FunctionComponent<{ author?: string[] }> = ({ author }) => {
  if (author?.length > 0) {
    return <>{` by ${author.join(', ')}`}</>;
  } else {
    return null;
  }
};

const Post: FunctionComponent<Props> = ({ post }) => (
  <li lang={post.lang}>
    “<a href={post.url}>{post.post}</a>”
    <br />
    <span class="dat">
      {'from '}
      <a href={`https://www.gutenberg.org/ebooks/${post.bookId}`}>
        {post.book.join(', ')}
      </a>
      <Author author={post.author} />
    </span>
  </li>
);

export default Post;
