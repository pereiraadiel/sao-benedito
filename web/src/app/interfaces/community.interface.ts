export type Community = {
  id: string;
  name: string;
  coverUrl: string;
  mapUrl: string;
  masses: {
    day: string;
    times: string[];
  }[];
  confessions: {
    day: string;
    times: string[];
  }[];
};
