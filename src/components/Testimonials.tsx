import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO at TechGlobal Inc.',
      company: 'TechGlobal Inc.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The 5G infrastructure solutions have transformed our operations. We\'ve seen a 300% increase in network efficiency and our customers are experiencing unprecedented connectivity speeds.',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Innovation',
      company: 'ConnectCorp',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Their IoT platform has enabled us to connect over 50,000 devices seamlessly. The real-time analytics and AI-driven insights have given us a competitive edge in the market.',
      rating: 5,
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Tech Lead at FutureNetworks',
      company: 'FutureNetworks',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The security and reliability of their quantum communication protocols are unmatched. We\'ve successfully deployed secure networks across 15 countries with zero security incidents.',
      rating: 5,
    },
    {
      name: 'James Park',
      role: 'VP of Engineering',
      company: 'SmartCity Solutions',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Their edge computing solutions have reduced our latency by 90% and enabled real-time processing for our smart city initiatives. Absolutely game-changing technology.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Industry Leaders Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by leading organizations worldwide for next-generation connectivity solutions
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-500" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-500" />
          </button>

          {/* Testimonial Cards */}
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="p-8 md:p-12"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Profile Image */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-blue-500 mb-4 mx-auto md:mx-0" />

                    {/* Stars */}
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author Info */}
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-500 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-lg font-semibold text-gray-600 dark:text-gray-400 mb-8">
            Trusted by industry leaders worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-gray-400 dark:text-gray-600"
              >
                {testimonial.company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;