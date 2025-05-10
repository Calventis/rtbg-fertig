import React from 'react';

const courses = [
  {
    title: 'Muay Thai Anfänger',
    description: 'Perfekt für Einsteiger. Lerne die Grundlagen des thailändischen Boxens.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    level: 'Anfänger',
    duration: '60 Min'
  },
  {
    title: 'Muay Thai Fortgeschrittene',
    description: 'Intensive Technikarbeit und Sparring für Fortgeschrittene.',
    image: 'https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    level: 'Fortgeschritten',
    duration: '90 Min'
  },
  {
    title: 'Fitness Boxing',
    description: 'Hochintensives Cardio-Training mit Boxelementen.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    level: 'Alle Level',
    duration: '45 Min'
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Unsere Kurse</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Von Anfängern bis zu Fortgeschrittenen – wir bieten für jeden das passende Training.
            Alle Kurse werden von erfahrenen Trainern geleitet.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Level: {course.level}</span>
                  <span>Dauer: {course.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://calendly.com/jschultehoefinghoff/probetraining"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors text-lg font-semibold"
          >
            Kostenlos testen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;