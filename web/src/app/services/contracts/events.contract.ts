import { Media } from '../../interfaces/media.interface';
import { Community } from './communities.contract';

export type Event = {
  id: string;
  title: string;
  description: string;
  initialDate: Date;
  finalDate: Date;
  medias: Media[];
  community: Community;
};

export type Events = Event[];
