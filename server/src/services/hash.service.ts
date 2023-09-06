import { Injectable } from '@nestjs/common';
import { hash as genHash, compare } from 'bcrypt';

@Injectable()
export class HashService {
  async hash(value: string) {
    return genHash(value, 8);
  }

  async verify(value: string, hash: string) {
    return compare(value, hash);
  }
}
