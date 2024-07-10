export type BusinessListType = {
  about: string;
  address: string;
  contactPerson: string;
  email: string;
  images: ImageType[];
  id: string;
  name: string;
  category: {
    name: string;
  };
};

export type ImageType = {
  url: string;
};
