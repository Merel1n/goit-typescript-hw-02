export interface Image {
  id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
    likes: number;
    user: {name:string, location:string};
    description: string;
}

export interface ModalImage {
  isOpen: boolean;
  onClose?: () => void;
   urls: {
      small: string;
      regular: string;
    },
  alt: string;
  description: string;
  id: null|number;
  likes: null|number;
  user:{name:string, location:string}
}

export interface FetchImages {
  results: Image[];
  total: number;
  total_pages: number;
}