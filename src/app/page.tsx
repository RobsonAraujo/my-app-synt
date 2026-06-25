"use client";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import orders from "./mocks/orders.json";

import { useState } from "react";
import { IOrder } from "./types/orders";
import { jobs, servers, job } from "./mocks/data";

function checkTimeNeeded(time: number, element: job) {
  if (time == 3) {
    //generate an array with 1 interaction
    const jobRunning: Array<number> = [];
    jobRunning.push(3);
    pushJobToServer(jobRunning, element);
  }
}

function pushJobToServer(jobRunning: Array<number>, element: job) {
  console.log("pushJobToServer");
  if (element.demands === 1) {
    // 1 server
    // Handle the time

    if (jobRunning) {
      const temporaryServer = servers;
      temporaryServer[0].running?.push(3);
      console.log("**temporaryServer", temporaryServer);
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

  jobs.forEach((element) => {
    checkTimeNeeded(element.time, element);
  });

  return (
    <div className="flex flex-col flex-1 border items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex">
        <h2 className="mr-2 font-bold">Buyer infos:</h2>
        <p>{orders.customer.name}</p>
      </div>
    </div>
  );
}
