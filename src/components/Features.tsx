import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Globe, 
  Smartphone, 
  Cloud, 
  BarChart3,
  Network,
  Settings
} from 'lucide-react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'billing',
      title: 'Smart Billing',
      icon: BarChart3,
      description: 'Advanced billing solutions with real-time processing and automated reconciliation.',
      content: {
        title: 'Next-Generation Billing Platform',
        points: [
          'Real-time usage tracking and billing',
          'Multi-currency and multi-tenant support',
          'Automated invoice generation',
          'Advanced analytics and reporting',
          'API-first architecture for seamless integration'
        ],
        image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'charging',
      title: 'Dynamic Charging',
      icon: Zap,
      description: 'Flexible charging models with AI-powered optimization and real-time adjustments.',
      content: {
        title: 'Intelligent Charging Solutions',
        points: [
          'Dynamic pricing based on demand',
          'AI-powered rate optimization',
          'Real-time charging adjustments',
          'Usage-based and subscription models',
          'Fraud detection and prevention'
        ],
        image: 'https://images.pexels.com/photos/8358834/pexels-photo-8358834.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'catalog',
      title: 'Service Catalog',
      icon: Globe,
      description: 'Comprehensive service management with automated provisioning and lifecycle management.',
      content: {
        title: 'Unified Service Catalog',
        points: [
          'Centralized service management',
          'Automated service provisioning',
          'Digital product catalog',
          'Bundle and package management',
          'Self-service customer portal'
        ],
        image: 'https://images.pexels.com/photos/7887807/pexels-photo-7887807.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    {
      id: 'events',
      title: 'Event Processing',
      icon: Network,
      description: 'Real-time event processing with advanced analytics and intelligent routing.',
      content: {
        title: 'Real-Time Event Engine',
        points: [
          'High-throughput event processing',
          'Real-time analytics and insights',
          'Intelligent event routing',
          'Custom event triggers and actions',
          'Scalable microservices architecture'
        ],
        image: 'https://images.pexels.com/photos/8358850/pexels-photo-8358850.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern Telecom
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your digital transformation
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center mb-12 bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                  activeTab === index
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconComponent className="w-5 h-5" />
                <span className="hidden sm:inline">{feature.title}</span>
                {activeTab === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl -z-10"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {features[activeTab].content.title}
              </h3>
              <ul className="space-y-4">
                {features[activeTab].content.points.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={features[activeTab].content.image}
                alt={features[activeTab].content.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    {React.createElement(features[activeTab].icon, {
                      className: "w-5 h-5 text-blue-500"
                    })}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {features[activeTab].title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {features[activeTab].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Features;