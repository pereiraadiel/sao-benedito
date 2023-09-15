console.log(process.env);
export const StorageContant = {
  access: {
    key: process.env.APP_STORAGE_ACCESS_KEY,
    secret: process.env.APP_STORAGE_ACCESS_SECRET,
  },
  bucket: process.env.APP_STORAGE_BUCKET,
  endpoint: process.env.APP_STORAGE_ENDPOINT,
} as const;
