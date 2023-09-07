import * as crypto from 'crypto';

export const HashUtil = {
  hash: (value: string) => {
    const shahash = crypto.createHash('sha256');
    const md5hash = crypto.createHash('md5');
    const stepOne = shahash.update(value).digest('hex');
    const stepTwo = md5hash.update(stepOne).digest('hex');
    shahash.destroy();
    md5hash.destroy();
    return Buffer.from(stepTwo).toString('base64');
  },
};
