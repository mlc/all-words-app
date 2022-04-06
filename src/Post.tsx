import type { FunctionComponent } from 'preact';
import type { PostData } from './api';
import styles from './styles.css';

interface Props {
  post: PostData;
}

const Author: FunctionComponent<{ post: PostData }> = ({
  post: { author },
}) => {
  if (author && author.length > 0) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{` by ${author.join(', ')}`}</>;
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
  <li className={styles.post} lang={post.lang}>
    <Quote post={post} />
    <div className={styles.info}>
      {'from '}
      <Title post={post} />
      <Author post={post} />
    </div>
  </li>
);

export default Post;
