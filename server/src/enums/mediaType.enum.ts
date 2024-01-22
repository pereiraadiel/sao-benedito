export const MediaTypeEnum = {
  video: 'video',
  image: 'image',
} as const;

export type MediaTypeEnum = (typeof MediaTypeEnum)[keyof typeof MediaTypeEnum];
