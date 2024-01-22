import { Media } from '../../interfaces/media.interface';
import { Community } from './communities.contract';

export type Project = {
  id: string;
  title: string;
  description: string;
  finishedIn?: Date;
  medias: Media[];
  community: Community;
};

export type Projects = Project[];
