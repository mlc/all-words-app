import { FunctionComponent, h } from 'preact';
import { PostData } from './api';

interface Props {
  post: PostData;
}

const author = (name?: string[]): string | null => {
  if (name?.length > 0) {
    return ` by ${name.join(', ')}`;
  } else {
    return null;
  }
};

const Title: FunctionComponent<{ post: PostData }> = ({
  post: { book, bookId },
}) => (
  <a href={`https://www.gutenberg.org/ebooks/${bookId}`}>{book.join(', ')}</a>
);

const Post: FunctionComponent<Props> = ({ post }) => (
  <li lang={post.lang}>
    “<a href={post.url}>{post.post}</a>”
    <br />
    <span className="dat">
      {'from '}
      <Title post={post} />
      {author(post.author)}
    </span>
  </li>
);

export default Post;
