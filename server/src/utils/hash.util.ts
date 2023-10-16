// import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { AuthConstant } from '../constants/auth.constant';

export const HashUtil = {
  hash: (value: string) => {
    const secret = AuthConstant.jwt.secret;

    const stepOne = bcrypt.genSaltSync(8);

    const stepTwo = bcrypt.hashSync(
      value.concat(bcrypt.hashSync(secret, 8)),
      stepOne,
    );

    const stepThree = stepTwo
      .slice(stepTwo.length - 8, stepTwo.length)
      .concat(stepTwo.slice(7, 15));
    console.log(
      stepOne,
      stepTwo,
      stepThree,
      Buffer.from(stepThree).toString('hex'),
      Buffer.from(stepThree).toString('hex').length,
    );

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

const a = () => {
  console.time('a');
  const hash = HashUtil.hash('teste com uma mensagem um pouco maior');
  console.log(hash, hash.length);
  console.timeEnd('a');
};
a();
