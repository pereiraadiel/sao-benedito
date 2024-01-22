export const DeviceAgentEnum = {
  mobile: 'Mobile',
  desktop: 'Desktop',
} as const;

export type DeviceAgentEnum =
  (typeof DeviceAgentEnum)[keyof typeof DeviceAgentEnum];
