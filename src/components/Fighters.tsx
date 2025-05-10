import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

interface Fighter {
  id: number;
  name: string;
  image: string;
}

const fighters: Fighter[] = [
  {
    id: 1,
    name: "Berfin",
    image: "https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Kaempfer/Berfin.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vS2FlbXBmZXIvQmVyZmluLmpwZyIsImlhdCI6MTc0NjgyNjEzMiwiZXhwIjozMTM0NDEwMTMyfQ._hp0GbycuDNy6b-h4ZYtOpzRX-mS2QepnKkqGsDQWD0"
  },
  {
    id: 2,
    name: "Damian",
    image: "https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Kaempfer/Damian.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vS2FlbXBmZXIvRGFtaWFuLmpwZyIsImlhdCI6MTc0NjgyNjE0NCwiZXhwIjo5MTI2MjUwMTQ0fQ.sg2FzFgwoyvD2jhEeOmo6VvXWnhzsVBc2HLL6mWLp5w"
  },
  {
    id: 3,
    name: "Denny",
    image: "https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Kaempfer/Denny.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vS2FlbXBmZXIvRGVubnkuanBnIiwiaWF0IjoxNzQ2ODI2MTU3LCJleHAiOjI3ODc1MTQxNTd9.AdsXRxMFkfhrFT4HN7cCsXW8xBARNMl6lqpoOO1r6pI"
  },
  {
    id: 4,
    name: "Florian",
    image: "https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Kaempfer/Florian.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vS2FlbXBmZXIvRmxvcmlhbi5qcGciLCJpYXQiOjE3NDY4MjYxNzAsImV4cCI6Mjc4NzUxNDE3MH0.Uva64rQ1L2mjwLC3ypeviySXeapsIFMadRb9ST2R9iE"
  },
  {
    id: 5,
    name: "Lauin",
    image: "https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Kaempfer/Lauin.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vS2FlbXBmZXIvTGF1aW4uanBnIiwiaWF0IjoxNzQ2ODI2MTgzLCJleHAiOjI3ODc1MTQxODN9.gw0HA3PB9cXt-aMmmluc5hvMjhekOyKfxjCjZ67P2Io"
  },
  {
    id: 6,
    name: "Livon",
    image: "https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Kaempfer/Livon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vS2FlbXBmZXIvTGl2b24uanBnIiwiaWF0IjoxNzQ2ODI2MjIzLCJleHAiOjE2MDY0MTcwMjIzfQ.BCVA2SmxxKZlkzmvgY7PC0fp6BtYoKs6zk-36lNWZUY"
  },
  {
    id: 7,
    name: "Sebastian",
    image: "https://tibyxmobrwazabhbwptm.supabase.co/storage/v1/object/sign/royal-media/Royal%20Thai%20Box%20Gym/Kaempfer/Sebastian.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2U2NjE2YjJjLTMxODctNDVlOC1hYTIwLWUwZjNkMzgzNTg4MSJ9.eyJ1cmwiOiJyb3lhbC1tZWRpYS9Sb3lhbCBUaGFpIEJveCBHeW0vS2FlbXBmZXIvU2ViYXN0aWFuLmpwZyIsImlhdCI6MTc0NjgyNjIwMywiZXhwIjoyNzg3NTE0MjAzfQ.M8yE3wbeMj2YrA49S0kl0T_xZ_mgAZpdnaCJEumx--k"
  }
];

const Fighters = () => {
  const [currentImage, setCurrentImage] = useState(-1);

  return (
    <div className="min-h-screen pt-[calc(80px+var(--announcement-height,40px))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Unsere Kämpfer</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lernen Sie die Elite-Kämpfer des Royal Thai Box Gym kennen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {fighters.map((fighter, index) => (
            <motion.div
              key={fighter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setCurrentImage(index)}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={fighter.image}
                  alt={fighter.name}
                  className="w-full h-full object-cover object-[center_top] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-white text-xl font-bold text-center">{fighter.name}</h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Lightbox
          open={currentImage >= 0}
          index={currentImage}
          close={() => setCurrentImage(-1)}
          slides={fighters.map(fighter => ({ src: fighter.image }))}
        />
      </div>
    </div>
  );
};

export default Fighters;