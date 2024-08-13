import { ImageType } from './businessListType';

export type BookingType = {
  business: {
    name: string;
    images: string[];
    contactPerson: string;
    address: string;
  };
  date: string;
  time: string;
};
