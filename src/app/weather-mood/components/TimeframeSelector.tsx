'use client';

interface TimeframeSelectorProps {
  selectedTimeframe: 'today' | 'tomorrow' | 'week';
  onTimeframeChange: (timeframe: 'today' | 'tomorrow' | 'week') => void;
}

export default function TimeframeSelector({ selectedTimeframe, onTimeframeChange }: TimeframeSelectorProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          Predictive Insights
        </h2>
        <div className="flex bg-gray-100 rounded-full p-1">
          {(['today', 'tomorrow', 'week'] as const).map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => onTimeframeChange(timeframe)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTimeframe === timeframe
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">
        AI-powered predictions based on your personal weather-mood patterns and historical data analysis.
      </p>
    </div>
  );
}
