export const RedisConstant = {
  url: process.env.REDIS_URL || 'redis://localhost:6379',
} as const;
