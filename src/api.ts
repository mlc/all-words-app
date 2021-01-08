export interface PostData {
  url: string | null;
  post: string;
  book: Array<string>;
  bookId: string;
  author: Array<string>;
  lang?: string;
  ts?: string;
}
