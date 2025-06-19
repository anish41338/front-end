import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Stats: React.FC = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#9CA3AF',
          font: { size: 12 }
        }
      },
    },
    scales: {
      x: {
        grid: { color: '#374151' },
        ticks: { color: '#9CA3AF' }
      },
      y: {
        grid: { color: '#374151' },
        ticks: { color: '#9CA3AF' }
      }
    }
  };

  const growthData = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: '5G Network Coverage (%)',
        data: [5, 15, 35, 55, 75, 95],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'IoT Device Connections (Billions)',
        data: [12, 18, 27, 38, 52, 70],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
      }
    ],
  };

  const adoptionData = {
    labels: ['AI Integration', 'Edge Computing', 'Quantum Networks', 'Smart Cities', 'AR/VR'],
    datasets: [
      {
        label: 'Adoption Rate (%)',
        data: [85, 72, 45, 68, 59],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#8B5CF6',
          '#F59E0B',
          '#EF4444'
        ],
        borderWidth: 0,
      },
    ],
  };

  const performanceData = {
    labels: ['Speed', 'Reliability', 'Security', 'Coverage'],
    datasets: [
      {
        data: [95, 98, 99, 92],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#8B5CF6',
          '#F59E0B'
        ],
        borderWidth: 0,
      },
    ],
  };

  const statsCards = [
    { title: '5G Base Stations', value: '2.5M+', growth: '+45%', icon: '📡' },
    { title: 'Connected Devices', value: '50B+', growth: '+32%', icon: '📱' },
    { title: 'Network Uptime', value: '99.9%', growth: '+0.2%', icon: '⚡' },
    { title: 'Global Coverage', value: '195', growth: '+12', icon: '🌍' },
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Driving the Future with Data
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time insights and analytics powering the next generation of connectivity
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {statsCards.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm mb-2">{stat.title}</p>
              <div className="flex items-center">
                <span className="text-green-400 text-sm font-medium">{stat.growth}</span>
                <span className="text-gray-500 text-sm ml-1">vs last year</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Growth Chart */}
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Technology Growth Trends</h3>
            <div className="h-64">
              <Line data={growthData} options={chartOptions} />
            </div>
          </motion.div>

          {/* Adoption Chart */}
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Technology Adoption Rates</h3>
            <div className="h-64">
              <Bar data={adoptionData} options={chartOptions} />
            </div>
          </motion.div>
        </div>

        {/* Performance Chart */}
        <motion.div
          className="max-w-md mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Network Performance Metrics</h3>
          <div className="h-64">
            <Doughnut 
              data={performanceData} 
              options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  legend: {
                    position: 'bottom' as const,
                    labels: {
                      color: '#9CA3AF',
                      font: { size: 12 },
                      padding: 20
                    }
                  }
                }
              }} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;