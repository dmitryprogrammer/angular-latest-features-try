export interface IApisMain {
  count: number;
  entries: IApisEntry[];
}

export interface IApisEntry {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean,
  Cors: 'yes' | 'no',
  Link: string;
  Category: string;
}
