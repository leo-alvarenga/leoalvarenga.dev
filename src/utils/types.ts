export type OpenGraphOptionsImage = {
  alt: string;
  src: string;
};

export type OpenGraphOptions = {
  author?: string;
  description?: string;
  title?: string;
  pathname?: string;
  image?: {
    default?: OpenGraphOptionsImage;
    square?: OpenGraphOptionsImage;
  };
};
