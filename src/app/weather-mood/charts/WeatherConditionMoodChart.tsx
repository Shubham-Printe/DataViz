'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { weatherMoodData } from '@/data/weatherMoodData';

// Helper function to get condition color
const getConditionColor = (condition: string) => {
  const colors: { [key: string]: string } = {
    'sunny': '#FFD700',
    'hot_sunny': '#FF8C00',
    'perfect_sunny': '#32CD32',
    'partly_cloudy': '#87CEEB',
    'clear': '#87CEEB',
    'cloudy': '#708090',
    'overcast': '#696969',
    'rainy': '#4169E1',
    'drizzle': '#6495ED',
    'heavy_rain': '#0000CD',
    'stormy': '#8B0000'
  };
  return colors[condition] || '#808080';
};

export default function WeatherConditionMoodChart() {
  // Calculate average mood by weather condition
  const conditionMoodData = weatherMoodData.reduce((acc, entry) => {
    const condition = entry.weather.condition;
    if (!acc[condition]) {
      acc[condition] = { condition, totalMood: 0, count: 0 };
    }
    acc[condition].totalMood += entry.mood.overall;
    acc[condition].count += 1;
    return acc;
  }, {} as { [key: string]: { condition: string; totalMood: number; count: number } });

  const conditionAverages = Object.values(conditionMoodData).map(item => ({
    condition: item.condition,
    avgMood: (item.totalMood / item.count).toFixed(1),
    count: item.count,
    color: getConditionColor(item.condition)
  }));

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          Average Mood by Weather Condition
        </h2>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={conditionAverages}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis dataKey="condition" stroke="#6b7280" fontSize={12} />
          <YAxis stroke="#6b7280" fontSize={12} />
          <Tooltip 
            formatter={(value) => [value, 'Average Mood']}
            labelFormatter={(label) => `Condition: ${label}`}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Bar dataKey="avgMood" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
