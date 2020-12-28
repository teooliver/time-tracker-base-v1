import React, { useEffect, useRef, useState } from "react";
import { calculateTimer } from "../helper/Timer";
import { ILapData } from "../interfaces/Laps";
import Controls from "./Controls";
import EventsTable from "./EventsTable";
// import { events } from "../helper/Events";

// let lapData: ILapData = {
//   event: "Dishes",
//   laps: [12, 34, 78],
// };

const Stopwatch = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  const [eventName, setEventName] = useState("");
  const [eventData, setEventData] = useState<ILapData>({
    event: "",
    time: 0,
  });

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <>
      <input
        type='text'
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <section className='Stopwatch'>
        <p className='time-text'>{timerArray[0]}</p>
        <span>:</span>
        <p className='time-text'>{timerArray[1]}</p>
        <span>:</span>
        <p className='time-text'>{timerArray[2]}</p>
      </section>
      <Controls
        setTimeInSeconds={setTimeInSeconds}
        timeInSeconds={timeInSeconds}
        eventName={eventName}
      />
      <EventsTable />
    </>
  );
};

export default Stopwatch;
