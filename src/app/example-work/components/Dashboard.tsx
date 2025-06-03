'use client';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip);

// Define the type for chart data
type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension: number;
  }[];
};

// Define the allowed time range keys
type TimeRange = '7 Days' | '30 Days' | '90 Days';

// Define the type for dataSets
type DataSets = {
  [key in TimeRange]: ChartData;
};

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7 Days');

  const dataSets: DataSets = {
    '7 Days': {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      datasets: [
        {
          label: 'Revenue (EUR)',
          data: [300, 450, 200, 600, 800, 500, 700],
          borderColor: '#ff6b6b',
          tension: 0.3,
        },
      ],
    },
    '30 Days': {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Revenue (EUR)',
          data: [1200, 1800, 1500, 2100],
          borderColor: '#ff6b6b',
          tension: 0.3,
        },
      ],
    },
    '90 Days': {
      labels: ['Month 1', 'Month 2', 'Month 3'],
      datasets: [
        {
          label: 'Revenue (EUR)',
          data: [5000, 6000, 7500],
          borderColor: '#ff6b6b',
          tension: 0.3,
        },
      ],
    },
  };

  const options = { responsive: true, plugins: { legend: { display: true } } };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#1f2937] dark:text-[#e5e7eb]">
        Sales Dashboard
      </h2>
      <div className="flex justify-center mb-6 gap-2">
        {(['7 Days', '30 Days', '90 Days'] as TimeRange[]).map(range => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              timeRange === range
                ? 'bg-[#ff6b6b] text-white'
                : 'bg-gray-200 dark:bg-gray-600 text-[#1f2937] dark:text-[#e5e7eb] hover:bg-[#ff8e53] hover:text-white'
            }`}
          >
            {range}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow max-w-3xl mx-auto">
        <Line data={dataSets[timeRange]} options={options} />
      </div>
    </section>
  );
}