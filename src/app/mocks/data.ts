type server = {
  id: number;
  name: string;
  running?: { time: number; job: string }[];
};

export type job = {
  id: number;
  name: string;
  demands: number;
  time: number;
};

type scenario = {
  simple: {
    servers: Array<server>;
    jobs: Array<job>;
  };
  multiServer: {
    servers: Array<server>;
    jobs: Array<job>;
  };
  heavyQueue: {
    servers: Array<server>;
    jobs: Array<job>;
  };
};

export const scenarios: scenario = {
  simple: {
    servers: [{ id: 1, name: "s_1", running: [] }],
    jobs: [
      { id: 1, name: "j_1", demands: 1, time: 3 },
      { id: 2, name: "j_2", demands: 1, time: 2 },
      { id: 3, name: "j_3", demands: 1, time: 4 },
    ],
  },

  multiServer: {
    servers: [
      { id: 1, name: "s_1", running: [] },
      { id: 2, name: "s_2", running: [] },
      { id: 3, name: "s_3", running: [] },
    ],
    jobs: [
      { id: 1, name: "j_1", demands: 2, time: 3 },
      { id: 2, name: "j_2", demands: 1, time: 2 },
      { id: 3, name: "j_3", demands: 3, time: 4 },
    ],
  },

  heavyQueue: {
    servers: [
      { id: 1, name: "s_1", running: [] },
      { id: 2, name: "s_2", running: [] },
    ],
    jobs: [
      { id: 1, name: "j_1", demands: 2, time: 5 },
      { id: 2, name: "j_2", demands: 2, time: 3 },
      { id: 3, name: "j_3", demands: 1, time: 2 },
    ],
  },
};
