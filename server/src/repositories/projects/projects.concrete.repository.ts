import { Injectable } from '@nestjs/common';
import { ProjectsRepository } from './projects.repository';
import { CreateOneProjectDAO } from '../../daos/projects/createOneProject.dao';
import { UpdateOneProjectDAO } from '../../daos/projects/updateOneProject.dao';
import { ProjectEntity } from '../../entities/project.entity';
import { PrismaService } from '../../services/prisma.service';
import { GetAllProjectsDAO } from '../../daos/projects/getAllProjects.dao';

@Injectable()
export class ProjectsConcreteRepository implements ProjectsRepository {
  constructor(private readonly database: PrismaService) {}

  async createOne(dao: CreateOneProjectDAO): Promise<ProjectEntity> {
    const entity = new ProjectEntity(dao);
    delete (entity as any).communityId;

    const project = await this.database.project.create({
      data: {
        ...entity,
        medias: undefined,
        community: {
          connect: {
            id: dao.communityId,
          },
        },
      },
      include: {
        community: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return project as unknown as ProjectEntity;
  }

  async findOneId(id: string): Promise<ProjectEntity> {
    const project = await this.database.project.findUnique({
      where: {
        id,
      },
      include: {
        community: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return project as unknown as ProjectEntity;
  }

  async findMany(dao: GetAllProjectsDAO): Promise<ProjectEntity[]> {
    const projects = await this.database.project.findMany({
      include: {
        community: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
      where: {
        community: dao.communityId
          ? {
              id: {
                equals: dao.communityId,
              },
            }
          : undefined,
      },
    });
    return projects as unknown as ProjectEntity[];
  }

  async updateOne(dao: UpdateOneProjectDAO): Promise<ProjectEntity> {
    const updateDao = {
      title: dao.title,
      description: dao.description,
      finishedIn: dao.finishedIn,
      id: undefined,
      communityId: undefined,
      updatedAt: new Date(),
    };

    const project = await this.database.project.update({
      where: {
        id: dao.id,
      },
      data: updateDao,
      include: {
        community: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return project as unknown as ProjectEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.project.delete({
      where: {
        id,
      },
    });
  }
}
