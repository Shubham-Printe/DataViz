'use client';

import { useState } from 'react';
import TimeframeSelector from './components/TimeframeSelector';
import PredictionCard from './components/PredictionCard';
import PatternAnalysis from './components/PatternAnalysis';
import { usePredictions } from './hooks/usePredictions';

export default function PredictiveInsights() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'today' | 'tomorrow' | 'week'>('tomorrow');
  const predictions = usePredictions(selectedTimeframe);

  return (
    <div className="space-y-8">
      {/* Timeframe Selector */}
      <TimeframeSelector 
        selectedTimeframe={selectedTimeframe}
        onTimeframeChange={setSelectedTimeframe}
      />

      {/* Predictions Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {predictions.map((prediction, index) => (
          <PredictionCard key={index} prediction={prediction} />
        ))}
      </div>

      {/* Pattern Analysis */}
      <PatternAnalysis />
    </div>
  );
}
