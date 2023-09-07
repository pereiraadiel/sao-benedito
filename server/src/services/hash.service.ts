import { Injectable } from '@nestjs/common';
import { hash as genHash, compare } from 'bcrypt';
import { HashUtil } from '../utils/hash.util';

@Injectable()
export class HashService {
  async hash(value: string) {
    return genHash(HashUtil.hash(value), 8);
  }

  async verify(value: string, hash: string) {
    return compare(value, hash);
  }
}
