type server = {
  id: number;
  name: string;
  running?: Array<number>;
};

export type job = {
  id: number;
  name: string;
  demands: number;
  time: number;
};

export const servers: Array<server> = [{ id: 1, name: "s_1" }];

export const jobs: Array<job> = [
  {
    id: 1,
    name: "j_1",
    demands: 1,
    time: 3,
  },
  {
    id: 2,
    name: "j_2",
    demands: 1,
    time: 2,
  },
  {
    id: 2,
    name: "j_3",
    demands: 1,
    time: 4,
  },
];
