"use client";

import { useEffect } from "react";

import { scenarios, job } from "./mocks/data";

const { servers, jobs } = scenarios["simple"];

function checkTimeNeeded(time: number, element: job) {
  const jobRunning: Array<number> = [];

  for (let i = 0; i < time; i++) {
    jobRunning.push(i);
  }

  pushJobToServer(jobRunning, element);
}

function pushJobToServer(jobRunning: Array<number>, element: job) {
  const duration = element.time;

  const currentTime = servers[0].running?.length ?? 0;

  const availableServers = servers.filter((server) => {
    if (!server.running) server.running = [];

    for (let t = currentTime; t < currentTime + duration; t++) {
      if (server.running[t] !== undefined) {
        return false;
      }
    }

    return true;
  });

  console.log("Available Servers:", availableServers);

  if (availableServers.length < element.demands) {
    console.log(
      `Cannot push ${element.name} because ther server is not available`,
    );
    return;
  }

  const selectedServers = availableServers.slice(0, element.demands);

  selectedServers.forEach((server) => {
    if (!server.running) {
      server.running = [];
    }

    jobRunning.forEach((_, i) => {
      server.running![currentTime + i] = {
        time: currentTime + i,
        job: element.name,
      };
    });
  });
}

export default function Home() {
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
