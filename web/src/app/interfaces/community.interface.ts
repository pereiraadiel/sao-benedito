export type Community = {
  id: string;
  name: string;
  coverUrl: string;
  mapUrl: string;
  masses: {
    day: string;
    time: string;
  }[];
  confessions: {
    day: string;
    time: string;
  }[];
};
