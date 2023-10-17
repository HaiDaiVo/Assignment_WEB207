import { useEffect, useState } from "react";


function TimeRemaining(props) {
      const [timeRemaining, setTimeRemaining] = useState(props.initialTime);
      useEffect(() => {
            const interval = setInterval(() => {
                  if (timeRemaining > 0) {
                        setTimeRemaining(prev => prev + -1);
                  }
            }, 1000);
            return () => {
                  clearInterval(interval);
            };
      }, []);

      if (timeRemaining === 0) {
            props.finishFunc();
            return (
                  <span className="m-auto text-2xl font-bold text-[#f51f1f]">Time&apos;s up </span>
            );
      };

      if (timeRemaining > 300) {
            return (
                  <span className="m-auto text-2xl font-bold text-[#413ef4]">
                        {timeCount(timeRemaining)}
                  </span>
            );
      } else if (timeRemaining > 0) {
            return (
                  <span className="m-auto text-2xl font-bold text-[#f52a1f]">
                        {timeCount(timeRemaining)}
                  </span>
            );
      }
}

function timeCount(timeRemaining) {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining - minutes * 60;
      if (seconds < 10) return minutes + " : 0" + seconds;
      return minutes + " : " + seconds;
}

export default TimeRemaining;
