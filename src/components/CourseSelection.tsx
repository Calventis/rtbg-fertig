import React from 'react';
import { motion } from 'framer-motion';
import { Users, Baby, UserCircle2, Heart, GraduationCap } from 'lucide-react';

// Custom SVG icons for boxing and kickboxing
const BoxingGlove = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 14c0-1.66 1.34-3 3-3h7c1.66 0 3 1.34 3 3v0c0 1.66-1.34 3-3 3h-7c-1.66 0-3-1.34-3-3z" />
    <path d="M4 17v-8c0-1.66 1.34-3 3-3h7c1.66 0 3 1.34 3 3v1" />
    <path d="M20 14v4c0 1.66-1.34 3-3 3h-7c-1.66 0-3-1.34-3-3v-4" />
  </svg>
);

const PunchingBag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 3h4v4" />
    <path d="M7 3H3v4" />
    <path d="M17 21h4v-4" />
    <path d="M7 21H3v-4" />
    <rect x="8" y="7" width="8" height="10" rx="2" />
    <line x1="12" y1="7" x2="12" y2="17" />
  </svg>
);

interface Course {
  id: string;
  name: string;
  location: string;
  ageGroup: string;
  icon: React.ReactNode;
  description: string;
  schedule: string[];
  calendlyUrl: string;
}

const courses: Course[] = [
  {
    id: 'little-dragons-1',
    name: 'Little Dragons',
    location: 'Halle 1',
    ageGroup: '5-9 Jahre',
    icon: <Baby size={32} />,
    description: 'Spielerisches Erlernen von Grundtechniken und Bewegungsabläufen für die Kleinsten.',
    schedule: ['Montag 16:45-17:45', 'Mittwoch 17:00-18:00', 'Freitag 17:00-18:00'],
    calendlyUrl: 'https://calendly.com/jschultehoefinghoff/little-dragons-5-9-j-probetraining'
  },
  {
    id: 'little-dragons-2',
    name: 'Little Dragons',
    location: 'Halle 1',
    ageGroup: '9-12 Jahre',
    icon: <Users size={32} />,
    description: 'Fortgeschrittenes Training für Kinder mit Fokus auf Technik und Koordination.',
    schedule: ['Montag 17:50-18:50', 'Mittwoch 17:00-18:00'],
    calendlyUrl: 'https://calendly.com/jschultehoefinghoff/little-dragons-9-12-j-probetraining'
  },
  {
    id: 'kickthaiboxing-adults',
    name: 'Kickthaiboxen',
    location: 'Halle 1',
    ageGroup: 'Erwachsene',
    icon: <PunchingBag />,
    description: 'Intensives Training der traditionellen Muay Thai Techniken für Erwachsene.',
    schedule: ['Montag 19:00-20:30', 'Mittwoch 18:15-19:30', 'Freitag 18:15-19:45'],
    calendlyUrl: 'https://calendly.com/jschultehoefinghoff/kickthaiboxen-erwachsene-probetraining'
  },
  {
    id: 'kickthaiboxing-teens',
    name: 'Kickthaiboxen',
    location: 'Halle 1',
    ageGroup: '12-16 Jahre',
    icon: <UserCircle2 size={32} />,
    description: 'Altersgerechtes Kickthaiboxen-Training für Jugendliche.',
    schedule: ['Dienstag 17:00-18:00', 'Donnerstag 17:00-18:00'],
    calendlyUrl: 'https://calendly.com/jschultehoefinghoff/kickthaiboxen-12-16-j-probetraining'
  },
  {
    id: 'boxing-adults',
    name: 'Boxen',
    location: 'Halle 1',
    ageGroup: 'Erwachsene',
    icon: <BoxingGlove />,
    description: 'Klassisches Boxtraining mit Fokus auf Technik und Kondition.',
    schedule: ['Dienstag 18:15-19:30', 'Donnerstag 18:15-19:30', 'Freitag 20:00-21:15'],
    calendlyUrl: 'https://calendly.com/jschultehoefinghoff/boxen'
  },
  {
    id: 'women-only',
    name: 'Frauenkurs',
    location: 'Halle 2',
    ageGroup: 'Erwachsene',
    icon: <Heart size={32} />,
    description: 'Spezielles Fitness- und Kampfsporttraining nur für Frauen.',
    schedule: ['Dienstag 18:15-19:30'],
    calendlyUrl: 'https://calendly.com/jschultehoefinghoff/frauenkurs-probetraining'
  },
  {
    id: 'beginner',
    name: 'Beginnerkurs',
    location: 'Halle 2',
    ageGroup: 'ab 12 Jahre',
    icon: <GraduationCap size={32} />,
    description: 'Grundlagenkurs für alle Neueinsteiger.',
    schedule: ['Mittwoch 18:00-19:15', 'Samstag 11:30-12:30'],
    calendlyUrl: 'https://calendly.com/jschultehoefinghoff/beginnerkurs-ab-12-j-probetraining-rtbg'
  }
];

const CourseSelection = () => {
  const handleCourseSelect = (calendlyUrl: string) => {
    window.open(calendlyUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-[calc(80px+var(--announcement-height,40px))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Wähle deinen Kurs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wähle den Kurs, der am besten zu dir passt. Nach der Auswahl kannst du direkt einen
            Termin für dein kostenloses Probetraining vereinbaren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-red-600">{course.icon}</div>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {course.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{course.ageGroup}</p>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Trainingszeiten:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {course.schedule.map((time, index) => (
                      <li key={index}>{time}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleCourseSelect(course.calendlyUrl)}
                  className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors"
                >
                  Probetraining buchen
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSelection;