'use client';

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { weatherMoodData } from '@/data/weatherMoodData';

// Helper function to format date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
};

export default function WeatherMoodTimeSeriesChart() {
  // Prepare data for time series
  const lineData = weatherMoodData.map(entry => ({
    date: formatDate(entry.date),
    temperature: entry.weather.temperature,
    mood: entry.mood.overall,
    energy: entry.mood.energy,
    stress: entry.mood.stress,
    sunshine: entry.weather.sunshine_hours
  }));

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          Weather & Mood Trends Over Time
        </h2>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
          <YAxis yAxisId="left" stroke="#6b7280" fontSize={12} />
          <YAxis yAxisId="right" orientation="right" stroke="#6b7280" fontSize={12} />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="sunshine" fill="#fbbf24" name="Sunshine Hours" radius={[4, 4, 0, 0]} />
          <Line yAxisId="right" type="monotone" dataKey="mood" stroke="#3b82f6" strokeWidth={3} name="Mood" dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
          <Line yAxisId="right" type="monotone" dataKey="energy" stroke="#10b981" strokeWidth={2} name="Energy" dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
