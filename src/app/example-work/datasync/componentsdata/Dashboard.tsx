'use client';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip } from 'chart.js';
ChartJS.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip);

type ChartData = { labels: string[]; datasets: { label: string; data: number[]; borderColor: string; tension: number; }[]; };
type TimeRange = '7 Days' | '30 Days' | '90 Days';
type DataSets = { [key in TimeRange]: ChartData };

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7 Days');
  const dataSets: DataSets = {
    '7 Days': { labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], datasets:[{ label:'Revenue (EUR)', data:[300,450,200,600,800,500,700], borderColor:'#22d3ee', tension:0.3 }]},
    '30 Days': { labels: ['W1','W2','W3','W4'], datasets:[{ label:'Revenue (EUR)', data:[1200,1800,1500,2100], borderColor:'#22d3ee', tension:0.3 }]},
    '90 Days': { labels: ['M1','M2','M3'], datasets:[{ label:'Revenue (EUR)', data:[5000,6000,7500], borderColor:'#22d3ee', tension:0.3 }]},
  };
  const options = { responsive: true, plugins: { legend: { display: true } } };

  return (
    <section id="dashboard" className="py-16 bg-neutral-bg">
      <h2 className="text-3xl font-bold text-center mb-6 text-text-base">Sales Dashboard</h2>
      <div className="flex justify-center mb-6 gap-2">
        {(['7 Days','30 Days','90 Days'] as TimeRange[]).map(range => (
          <button key={range} onClick={() => setTimeRange(range)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${timeRange===range?'bg-gradient-cta text-neutral-900':'bg-neutral-mid text-text-base hover:ring-1 hover:ring-white/10'}`}>
            {range}
          </button>
        ))}
      </div>
      <div className="p-4 bg-neutral-mid rounded-lg ring-1 ring-white/10 shadow max-w-3xl mx-auto">
        <Line data={dataSets[timeRange]} options={options} />
      </div>
    </section>
  );
}
