'use client';

import {
  ScatterChart,
  Scatter,
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

// Helper function to format date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
};

export default function TemperatureVsMoodScatterChart() {
  // Prepare data for scatter plot
  const scatterData = weatherMoodData.map(entry => ({
    date: formatDate(entry.date),
    temperature: entry.weather.temperature,
    mood: entry.mood.overall,
    condition: entry.weather.condition,
    color: getConditionColor(entry.weather.condition)
  }));

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          Temperature vs. Overall Mood
        </h2>
        <p className="text-gray-600">
          Each point represents a day. Hover to see details.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart data={scatterData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis 
            type="number" 
            dataKey="temperature" 
            name="Temperature (°C)"
            label={{ value: 'Temperature (°C)', position: 'insideBottom', offset: -5 }}
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            type="number" 
            dataKey="mood" 
            name="Mood (1-10)"
            label={{ value: 'Mood Rating', angle: -90, position: 'insideLeft' }}
            stroke="#6b7280"
            fontSize={12}
          />
          <Tooltip 
            formatter={(value, name) => [value, name === 'mood' ? 'Mood Rating' : 'Temperature (°C)']}
            labelFormatter={(label) => `Date: ${label}`}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Scatter 
            dataKey="mood" 
            fill="#3b82f6"
            r={8}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
