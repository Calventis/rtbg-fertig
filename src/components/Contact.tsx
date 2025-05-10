import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://hook.eu2.make.com/fhvbupclapna1du3ajemh8gryn6ifkoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-[240px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Kontakt & Anfahrt</h2>
            <p className="text-gray-600 mb-8">
              Hast du Fragen? Kontaktiere uns oder komm direkt vorbei. 
              Wir freuen uns darauf, dich kennenzulernen!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    Regentenstraße 74<br />
                    42389 Wuppertal
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <p className="text-gray-600">
                    <a href="tel:015901122335" className="hover:text-red-600 transition-colors">
                      015901122335
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">E-Mail</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@royalthaiboxgym.de" className="hover:text-red-600 transition-colors">
                      info@royalthaiboxgym.de
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Öffnungszeiten</h3>
                  <p className="text-gray-600">
                    Mo-Fr: 07:00 - 22:00<br />
                    Sa: 09:00 - 18:00<br />
                    So: 10:00 - 16:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Schreib uns eine Nachricht</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:border-red-600`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:border-red-600`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:border-red-600`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center mt-4">
                    Deine Nachricht wurde erfolgreich gesendet!
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center mt-4">
                    Es gab einen Fehler beim Senden deiner Nachricht. Bitte versuche es später erneut.
                  </p>
                )}
              </div>
            </form>
            
            <div className="mt-8 h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2495.833158529318!2d7.254002476406905!3d51.27739012748057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9297f1a9a3f2d%3A0x683e0e89dfd0f8c1!2sRegentenstraße%2074%2C%2042389%20Wuppertal!5e0!3m2!1sde!2sde!4v1744964877676!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Royal Thai Box Gym"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;