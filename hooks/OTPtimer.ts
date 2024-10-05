import { useState } from 'react';

const useOtpTimer = (durationInMinutes = 2) => {
  const initialSeconds = durationInMinutes * 60; // Convert minutes to seconds
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);

  const formattedTime = (seconds: number) => {
    const formattedTimeRemaining = `${seconds} sec`;

    return `Time left: ${formattedTimeRemaining}`;
  };

  const startTimer = () => {
    resetTimer();
    const timer = setInterval(() => {
      setSecondsRemaining((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(timer);
          setTimerInterval(null);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    setTimerInterval(timer);
  };

  const stopTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  const resetTimer = () => {
    setSecondsRemaining(initialSeconds);
    stopTimer();
  };

  return {
    startTimer,
    stopTimer,
    secondsRemaining,
    formattedTime,
  };
};

export default useOtpTimer;
