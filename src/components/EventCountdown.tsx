import React, { useState, useEffect } from 'react';

const EventCountdown = () => {
  const calculateTimeLeft = () => {
    // Target: March 28, 2026, 15:30:00 (Peru Time, UTC-5)
    // ISO format: 2026-03-28T15:30:00-05:00
    const targetDate = new Date('2026-03-28T15:30:00-05:00');
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) return null;
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="w-full py-12 bg-obsidian border-y border-gold/20 text-center">
        <h3 className="text-3xl md:text-4xl font-display font-bold text-gold animate-pulse">
          ¡El evento ha comenzado!
        </h3>
      </div>
    );
  }

  return (
    <div className="w-full py-12 bg-obsidian border-y border-gold/20">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-4 gap-4">
        {[
          { label: 'Días', value: timeLeft.days },
          { label: 'Horas', value: timeLeft.hours },
          { label: 'Minutos', value: timeLeft.minutes },
          { label: 'Segundos', value: timeLeft.seconds },
        ].map((item, index) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gold ${index === 3 ? 'animate-pulse' : ''}`}>
              {item.value.toString().padStart(2, '0')}
            </span>
            <span className="text-white/70 text-xs md:text-sm uppercase tracking-widest mt-2 font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCountdown;
