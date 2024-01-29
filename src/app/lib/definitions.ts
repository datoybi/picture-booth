export type Photo = {
  id: string;
  url: string;
  slug: string;
};

export type PhotoDetail = {
  id: string;
  slug: string;
  width: string;
  height: string;
  downloads: string;
  url: string;
  downloadUrl: string;
  userName: string;
  createdAt: string;
  tags: string[];
};
