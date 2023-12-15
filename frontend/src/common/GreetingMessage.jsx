import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

const GreetingMessage = ({ name }) => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const getCurrentTimeOfDay = () => {
      const currentHour = currentTime.getHours();

      if (currentHour >= 5 && currentHour < 12) {
        return "Morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "Afternoon";
      } else {
        return "Evening";
      }
    };

    setTimeOfDay(getCurrentTimeOfDay());

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  const dayOfWeek = currentTime.toLocaleDateString(undefined, {
    weekday: "long",
  });

  return (
    <div>
      <Typography variant="h6">
        Good {timeOfDay} {name}.
      </Typography>
      <Typography variant="body2" className="text-mui-primary-tertiary">
        {dayOfWeek}, {currentTime.toLocaleTimeString()}
      </Typography>
    </div>
  );
};

export default GreetingMessage;
