"use client";

import { useEffect } from "react";

import { jobs, servers, job } from "./mocks/data";

function checkTimeNeeded(time: number, element: job) {
  const jobRunning: Array<number> = [];

  for (let i = 0; i < time; i++) {
    jobRunning.push(i);
  }

  pushJobToServer(jobRunning, element);
}

function pushJobToServer(jobRunning: Array<number>, element: job) {
  if (element.demands === 1) {
    // 1 server
    // Handle the time

    if (jobRunning) {
      const temporaryServer = servers[0];

      if (!temporaryServer.running) {
        temporaryServer.running = [];
      }

      jobRunning.forEach(() => {
        temporaryServer.running?.push(element.name);
      });
    }
  }

  // if (element.demands === 2) {
  //   // 2 server
  //   // Handle the time
  //   jobs.push("");
  // }
}

export default function Home() {
  //1:  interaction (for) in the Jobs
  //2: Ask the question Iteract until the time is done
  // 3: Keep the loop for the next job

  // Add use effect to avoid react re-render
  useEffect(() => {
    jobs.forEach((element) => {
      checkTimeNeeded(element.time, element);
    });

    console.log(servers[0].running);
  }, []);

  return (
    <div className="flex flex-col flex-1 border items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex">
        <h2 className="mr-2 font-bold">Buyer infos:</h2>
      </div>
    </div>
  );
}
