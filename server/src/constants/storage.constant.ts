export const StorageContant = {
  access: {
    key: process.env.APP_STORAGE_ACCESS_KEY,
    secret: process.env.APP_STORAGE_ACCESS_SECRET,
  },
  bucket: process.env.APP_STORAGE_BUCKET,
} as const;
