import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { de } from 'date-fns/locale';

interface Fight {
  id: string;
  date: Date;
  fighter1: string;
  fighter2: string;
  weightClass: string;
  event: string;
  location: string;
  ticketUrl: string;
}

const fights: Fight[] = [
  {
    id: '1',
    date: new Date('2025-05-24T19:00:00'),
    fighter1: 'Elise Al',
    fighter2: 'Imak',
    weightClass: 'C-Class 63kg',
    event: 'IFP Enfusion',
    location: 'Uni Halle, Wuppertal',
    ticketUrl: 'https://www.eventim.de'
  },
  {
    id: '2',
    date: new Date('2025-05-24T20:00:00'),
    fighter1: 'Urgulu',
    fighter2: 'Mensah',
    weightClass: 'C-Class 80kg',
    event: 'IFP Enfusion',
    location: 'Uni Halle, Wuppertal',
    ticketUrl: 'https://www.eventim.de'
  }
];

const FightAnnouncement = () => {
  const [currentFightIndex, setCurrentFightIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [timeUntilFight, setTimeUntilFight] = useState('');
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const distance = formatDistanceToNow(fights[currentFightIndex].date, {
        addSuffix: true,
        locale: de
      });
      setTimeUntilFight(distance);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentFightIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFightIndex((prev) => (prev + 1) % fights.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => setIsDismissed(true), 300);
    document.documentElement.style.setProperty('--announcement-height', '0px');
  };

  const addToCalendar = (fight: Fight) => {
    const startTime = fight.date.toISOString();
    const endTime = new Date(fight.date.getTime() + 3 * 60 * 60 * 1000).toISOString();
    const title = encodeURIComponent(`${fight.event}: ${fight.fighter1} vs ${fight.fighter2}`);
    const details = encodeURIComponent(`${fight.weightClass}\nLocation: ${fight.location}\nTickets: ${fight.ticketUrl}`);
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime.replace(/[-:]/g, '')}/${endTime.replace(/[-:]/g, '')}&details=${details}&location=${encodeURIComponent(fight.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  if (isDismissed) return null;

  const currentFight = fights[currentFightIndex];

  return (
    <motion.div
      initial={{ height: 'auto' }}
      animate={{ height: isVisible ? 'auto' : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 bg-black text-white overflow-hidden z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentFightIndex((prev) => (prev - 1 + fights.length) % fights.length)}
            className="p-1 hover:bg-gray-800 rounded-full"
          >
            <ChevronLeft size={20} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentFight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 mx-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center"
            >
              <div className="hidden md:block text-left">
                <span className="text-red-600 font-semibold">{currentFight.event}</span>
                <div className="text-sm text-gray-400">{currentFight.location}</div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <span className="font-bold">{currentFight.fighter1}</span>
                <span className="text-red-600 font-bold">vs</span>
                <span className="font-bold">{currentFight.fighter2}</span>
              </div>

              <div className="flex items-center justify-end space-x-4">
                <div className="text-right">
                  <div className="text-sm font-semibold">{timeUntilFight}</div>
                  <div className="text-xs text-gray-400">{currentFight.weightClass}</div>
                </div>

                <button
                  onClick={() => addToCalendar(currentFight)}
                  className="p-1 hover:bg-gray-800 rounded-full transition-colors"
                  title="Zum Kalender hinzufügen"
                >
                  <Calendar size={20} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentFightIndex((prev) => (prev + 1) % fights.length)}
              className="p-1 hover:bg-gray-800 rounded-full"
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-gray-800 rounded-full"
              title="Schließen"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FightAnnouncement;