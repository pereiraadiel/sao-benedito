import { UserEntity } from '../entities/user.entity';
import { HashUtil } from './hash.util';

export const TokenUtil = {
  generateResetToken: (user: UserEntity) => {
    const date = new Date();

    return HashUtil.hash(
      date
        .getTime()
        .toString()
        .concat(user.email)
        .concat(user.id)
        .concat(user.updatedAt.toString()),
    ).replaceAll('=', '');
  },

  generateRefreshToken: (user: UserEntity, authToken: string) => {
    const date = new Date();

    return HashUtil.hash(
      date
        .getTime()
        .toString()
        .concat(user.email)
        .concat(user.id)
        .concat(user.updatedAt.toString())
        .concat(authToken),
    ).replaceAll('=', '');
  },
};
