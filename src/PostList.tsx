import { Component, h, FunctionComponent } from 'preact';
import { PostData } from './api';
import Post from './Post';

interface Props {
  source: string;
}

interface State {
  error: Error | null;
  toots: PostData[];
  tootSource?: string;
}

const Loading: FunctionComponent = ({ children }) => (
  <p id="loading">{children}</p>
);

class PostList extends Component<Props, State> {
  constructor(props?: Props) {
    super(props);
    this.state = { error: null, toots: [] };
  }

  componentDidMount() {
    const { source } = this.props;
    this.doFetch(source);
  }

  componentDidUpdate({ source: prevSource }: Props) {
    const { source } = this.props;
    if (source !== prevSource) {
      this.doFetch(source);
    }
  }

  doFetch = (source: string) => {
    fetch(source)
      .then((r) =>
        r.ok
          ? (r.json() as Promise<PostData[]>)
          : Promise.reject(new Error(r.statusText))
      )
      .then((posts) => {
        this.setState((prevState, { source: propsSource }) => {
          if (propsSource === source) {
            return { error: null, toots: posts, tootSource: source };
          } else {
            return {};
          }
        });
      })
      .catch((error) => {
        this.setState({ error });
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };

  render() {
    const { source } = this.props;
    const { toots, tootSource, error } = this.state;

    if (error) {
      return <Loading>Oh no! It didn’t work!</Loading>;
    } else if (toots.length === 0 || tootSource !== source) {
      return <Loading>Loading…</Loading>;
    } else {
      return (
        <ul>
          {toots.map((post) => (
            <Post post={post} key={post.url} />
          ))}
        </ul>
      );
    }
  }
}

export default PostList;
