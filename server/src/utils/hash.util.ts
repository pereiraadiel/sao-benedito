import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { AuthConstant } from '../constants/auth.constant';

export const HashUtil = {
  hash: (plain: string) => {
    const secret = HashUtil.encode(AuthConstant.jwt.secret);

    const value = HashUtil.encode(plain);

    const stepOne =
      '$2a$12$' + crypto.createHash('sha256').update(secret).digest('hex');

    const stepTwo = bcrypt.hashSync(value, stepOne);

    const stepThree = stepTwo
      .slice(stepTwo.length - 13, stepTwo.length)
      .concat(stepTwo.slice(7, 10));

    return Buffer.from(Buffer.from(stepThree).toString('hex')).toString(
      'base64',
    );
  },

  encode: (value: string) => {
    return Buffer.from(value, 'ascii').toString('base64');
  },

  decode: (value: string) => {
    return Buffer.from(value, 'base64').toString('ascii');
  },
};
