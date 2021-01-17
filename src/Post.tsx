import { FunctionComponent, h } from 'preact';
import { PostData } from './api';

interface Props {
  post: PostData;
}

const author = (name?: string[]): string | null => {
  if (name && name.length > 0) {
    return ` by ${name.join(', ')}`;
  } else {
    return null;
  }
};

const Quote: FunctionComponent<{ post: PostData }> = ({
  post: { url, post },
}) => (
  <q>
    <a href={url ?? undefined}>{post}</a>
  </q>
);

const Title: FunctionComponent<{ post: PostData }> = ({
  post: { book, bookId },
}) => (
  <a href={`https://www.gutenberg.org/ebooks/${bookId}`}>{book.join(', ')}</a>
);

const Post: FunctionComponent<Props> = ({ post }) => (
  <li className="post" lang={post.lang}>
    <Quote post={post} />
    <span>
      {'from '}
      <Title post={post} />
      {author(post.author)}
    </span>
  </li>
);

export default Post;
