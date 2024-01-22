export const DayEnum = {
  domingo: 'Domingo',
  segunda: 'Segunda',
  terca: 'Terca',
  quarta: 'Quarta',
  quinta: 'Quinta',
  sexta: 'Sexta',
  sabado: 'Sabado',
} as const;

export type DayEnum = (typeof DayEnum)[keyof typeof DayEnum];
