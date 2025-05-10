import React from 'react';

interface CourseBlock {
  time: string;
  name: string;
  location: string;
  age: string;
  calendlyUrl: string;
  bgColor: string;
}

const Schedule = () => {
  const handleCourseClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="schedule" className="py-20 relative scroll-mt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Bilder%20alte%20website/royalthaiboxgym-foto-2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vQmlsZGVyIGFsdGUgd2Vic2l0ZS9yb3lhbHRoYWlib3hneW0tZm90by0yLmpwZyIsImlhdCI6MTc0NjQ0ODUwOCwiZXhwIjozODI3ODI0NTA4fQ.hLROzkg7tYwUhYzHwJ7vF1GUiFTvra6YU03SMkbOLQw"
          alt="Background"
          className="w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out"
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            target.classList.remove('opacity-0');
            target.classList.add('opacity-40');
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Kursplan</h2>
        </div>

        <div className="overflow-x-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-2">
          <div className="min-w-[800px] scale-[0.85] md:scale-100 origin-top-left mx-auto">
            {/* Schedule Header */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              <div className="bg-gray-100 p-2 font-semibold"></div>
              <div className="bg-gray-100 p-2 font-semibold text-center">Montag</div>
              <div className="bg-gray-100 p-2 font-semibold text-center">Dienstag</div>
              <div className="bg-gray-100 p-2 font-semibold text-center">Mittwoch</div>
              <div className="bg-gray-100 p-2 font-semibold text-center">Donnerstag</div>
              <div className="bg-gray-100 p-2 font-semibold text-center">Freitag</div>
              <div className="bg-gray-100 p-2 font-semibold text-center">Samstag</div>
            </div>

            {/* Morning Slot */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              <div className="bg-gray-100 p-2 font-semibold">Morgen</div>
              <div className="bg-gray-50 p-2 h-20"></div>
              <div className="bg-gray-50 p-2 h-20"></div>
              <div className="bg-gray-50 p-2 h-20"></div>
              <div className="bg-gray-50 p-2 h-20"></div>
              <div className="bg-gray-50 p-2 h-20"></div>
              <div className="bg-gray-200 p-2 h-20">
                <div className="text-sm font-semibold">10:00-11:30</div>
                <div className="font-medium">Sparring</div>
                <div className="text-xs text-gray-600">nach Absprache</div>
                <div className="text-xs text-gray-600">Erwachsene</div>
              </div>
            </div>

            {/* Afternoon Slot 1 */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              <div className="bg-gray-100 p-2 font-semibold">Nachmittag</div>
              <div 
                className="bg-pink-200 p-2 cursor-pointer hover:bg-pink-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/little-dragons-5-9-j-probetraining')}
              >
                <div className="text-sm font-semibold">16:45-17:45</div>
                <div className="font-medium">Little Dragons</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">5-9 Jahre</div>
              </div>
              <div 
                className="bg-blue-200 p-2 cursor-pointer hover:bg-blue-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/kickthaiboxen-12-16-j-probetraining')}
              >
                <div className="text-sm font-semibold">17:00-18:00</div>
                <div className="font-medium">Kickthaiboxen</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">12-16 Jahre</div>
              </div>
              <div 
                className="bg-orange-200 p-2 cursor-pointer hover:bg-orange-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/little-dragons-9-12-j-probetraining')}
              >
                <div className="text-sm font-semibold">17:00-18:00</div>
                <div className="font-medium">Little Dragons</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">9-12 Jahre</div>
              </div>
              <div 
                className="bg-blue-200 p-2 cursor-pointer hover:bg-blue-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/kickthaiboxen-12-16-j-probetraining')}
              >
                <div className="text-sm font-semibold">17:00-18:00</div>
                <div className="font-medium">Kickthaiboxen</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">12-16 Jahre</div>
              </div>
              <div 
                className="bg-pink-200 p-2 cursor-pointer hover:bg-pink-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/little-dragons-5-9-j-probetraining')}
              >
                <div className="text-sm font-semibold">17:00-18:00</div>
                <div className="font-medium">Little Dragons</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">5-9 Jahre</div>
              </div>
              <div 
                className="bg-blue-100 p-2 cursor-pointer hover:bg-blue-200 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/beginnerkurs-ab-12-j-probetraining-rtbg')}
              >
                <div className="text-sm font-semibold">11:30-12:30</div>
                <div className="font-medium">Beginnerkurs</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">Ab 12 Jahre</div>
              </div>
            </div>

            {/* Afternoon Slot 2 */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              <div className="bg-gray-100 p-2 font-semibold"></div>
              <div 
                className="bg-orange-200 p-2 cursor-pointer hover:bg-orange-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/little-dragons-9-12-j-probetraining')}
              >
                <div className="text-sm font-semibold">17:50-18:50</div>
                <div className="font-medium">Little Dragons</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">9-12 Jahre</div>
              </div>
              <div 
                className="bg-yellow-200 p-2 cursor-pointer hover:bg-yellow-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/boxen')}
              >
                <div className="text-sm font-semibold">18:15-19:30</div>
                <div className="font-medium">Boxen</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">Erwachsene</div>
              </div>
              <div 
                className="bg-blue-100 p-2 cursor-pointer hover:bg-blue-200 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/beginnerkurs-ab-12-j-probetraining-rtbg')}
              >
                <div className="text-sm font-semibold">18:00-19:15</div>
                <div className="font-medium">Beginnerkurs</div>
                <div className="text-xs">Halle 2</div>
                <div className="text-xs">Ab 12 Jahre</div>
              </div>
              <div 
                className="bg-yellow-200 p-2 cursor-pointer hover:bg-yellow-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/boxen')}
              >
                <div className="text-sm font-semibold">18:15-19:30</div>
                <div className="font-medium">Boxen</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">Erwachsene</div>
              </div>
              <div 
                className="bg-green-200 p-2 cursor-pointer hover:bg-green-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/kickthaiboxen-erwachsene-probetraining')}
              >
                <div className="text-sm font-semibold">18:15-19:45</div>
                <div className="font-medium">Kickthaiboxen</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">Erwachsene</div>
              </div>
              <div className="bg-gray-50 p-2"></div>
            </div>

            {/* Evening Slot */}
            <div className="grid grid-cols-7 gap-1">
              <div className="bg-gray-100 p-2 font-semibold">Abend</div>
              <div 
                className="bg-green-200 p-2 cursor-pointer hover:bg-green-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/kickthaiboxen-erwachsene-probetraining')}
              >
                <div className="text-sm font-semibold">19:00-20:30</div>
                <div className="font-medium">Kickthaiboxen</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">Erwachsene</div>
              </div>
              <div 
                className="bg-purple-200 p-2 cursor-pointer hover:bg-purple-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/frauenkurs-probetraining')}
              >
                <div className="text-sm font-semibold">18:15-19:30</div>
                <div className="font-medium">Frauenkurs</div>
                <div className="text-xs">Halle 2</div>
                <div className="text-xs">Fitness</div>
              </div>
              <div 
                className="bg-green-200 p-2 cursor-pointer hover:bg-green-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/kickthaiboxen-erwachsene-probetraining')}
              >
                <div className="text-sm font-semibold">18:15-19:30</div>
                <div className="font-medium">Kickthaiboxen</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">Erwachsene</div>
              </div>
              <div 
                className="bg-red-200 p-2"
              >
                <div className="text-sm font-semibold">18:15-19:30</div>
                <div className="font-medium">Muay Thai</div>
                <div className="text-xs">Halle 2</div>
                <div className="text-xs">nach Absprache</div>
              </div>
              <div 
                className="bg-yellow-200 p-2 cursor-pointer hover:bg-yellow-300 transition-colors"
                onClick={() => handleCourseClick('https://calendly.com/jschultehoefinghoff/boxen')}
              >
                <div className="text-sm font-semibold">20:00-21:15</div>
                <div className="font-medium">Boxen</div>
                <div className="text-xs">Halle 1</div>
                <div className="text-xs">Erwachsene</div>
              </div>
              <div className="bg-gray-50 p-2"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#courses"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors text-lg font-semibold"
          >
            Kostenlos testen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;