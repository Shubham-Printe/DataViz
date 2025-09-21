'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

export default function WeatherMoodCorrelationChart() {
  const correlationData = [
    { metric: 'Temperature', correlation: 0.78, color: '#10b981' },
    { metric: 'Sunshine Hours', correlation: 0.82, color: '#10b981' },
    { metric: 'Precipitation', correlation: -0.65, color: '#ef4444' },
    { metric: 'Humidity', correlation: -0.45, color: '#ef4444' },
    { metric: 'Wind Speed', correlation: -0.32, color: '#ef4444' }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          How Weather Affects Your Mood
        </h2>
        <p className="text-gray-600">
          The stronger the correlation, the more that weather factor influences your mood. 
          Positive values = better mood, negative values = worse mood.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart 
          data={correlationData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis 
            dataKey="metric"
            stroke="#6b7280" 
            fontSize={12}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            stroke="#6b7280" 
            fontSize={12}
            domain={[-1, 1]}
            tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
          />
          <Tooltip 
            formatter={(value) => [`${(Number(value) * 100).toFixed(1)}%`, 'Mood Impact']}
            labelFormatter={(label) => `Weather Factor: ${label}`}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              color: '#111827'
            }}
          />
          <Bar 
            dataKey="correlation" 
            radius={[4, 4, 0, 0]} 
          >
            {correlationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      {/* Legend and Explanation */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            What This Means
          </h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
              <span>Green bars = Weather improves your mood</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3" />
              <span>Red bars = Weather worsens your mood</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-3" />
              <span>Taller bars = Stronger effect on your mood</span>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Key Insights
          </h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Sunshine has the biggest positive impact (+82%)</li>
            <li>• Rain significantly lowers your mood (-65%)</li>
            <li>• Temperature has a moderate positive effect (+78%)</li>
            <li>• Wind and humidity have smaller negative effects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
