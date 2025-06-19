import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Zap, Globe, Shield, Smartphone } from 'lucide-react';

const Showcase: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      title: '5G Network Infrastructure',
      description: 'Ultra-fast 5G deployment with edge computing capabilities and AI-powered optimization.',
      image: 'https://images.pexels.com/photos/8358834/pexels-photo-8358834.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Zap,
      tags: ['5G', 'Edge Computing', 'AI'],
      color: 'from-blue-500 to-cyan-500',
      stats: { coverage: '95%', speed: '10Gbps', latency: '<1ms' }
    },
    {
      title: 'IoT Ecosystem Platform',
      description: 'Comprehensive IoT management with real-time analytics and device orchestration.',
      image: 'https://images.pexels.com/photos/7887807/pexels-photo-7887807.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Globe,
      tags: ['IoT', 'Analytics', 'Cloud'],
      color: 'from-green-500 to-emerald-500',
      stats: { devices: '50M+', uptime: '99.9%', locations: '195' }
    },
    {
      title: 'Quantum Security Suite',
      description: 'Next-generation security with quantum encryption and zero-trust architecture.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Shield,
      tags: ['Quantum', 'Security', 'Encryption'],
      color: 'from-purple-500 to-pink-500',
      stats: { encryption: 'Quantum', incidents: '0', compliance: '100%' }
    },
    {
      title: 'Smart City Integration',
      description: 'Connected infrastructure solutions for intelligent urban environments.',
      image: 'https://images.pexels.com/photos/8358850/pexels-photo-8358850.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Smartphone,
      tags: ['Smart City', 'Integration', 'Sustainability'],
      color: 'from-orange-500 to-red-500',
      stats: { cities: '50+', sensors: '2M+', efficiency: '+40%' }
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Innovation Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge solutions that are shaping the future of global connectivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon */}
                  <motion.div
                    className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full"
                    animate={hoveredCard === index ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View Details</span>
                    </motion.button>
                    
                    <motion.button
                      className="flex items-center justify-center p-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Code className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite]" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;