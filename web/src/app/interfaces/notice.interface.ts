import { Media } from "./media.interface";

export type Notice = {
  id: string;
  title: string;
  description: string;
  finalDate: Date;
  medias: Media[]
}
