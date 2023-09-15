import { CreateOneProjectDAO } from './../../daos/projects/createOneProject.dao';
import { ProjectEntity } from '../../entities/project.entity';
import { UpdateOneProjectDAO } from '../../daos/projects/updateOneProject.dao';
import { GetAllProjectsDAO } from '../../daos/projects/getAllProjects.dao';

export const PROJECTS_REPOSITORY = 'PROJECTS_REPOSITORY';

export interface ProjectsRepository {
  createOne(dao: CreateOneProjectDAO): Promise<ProjectEntity>;
  findOneId(id: string): Promise<ProjectEntity | null>;
  findMany(dao: GetAllProjectsDAO): Promise<ProjectEntity[]>;
  updateOne(dao: UpdateOneProjectDAO): Promise<ProjectEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
