import { useEffect, useState, type FC } from "react";

import { ClockUI } from "../ui/clock";

export const Clock: FC = () => {
  const [date, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  return <ClockUI date={date} />;
};
