'use client';

import { Suspense } from 'react';
import TemperatureVsMoodScatterChart from './charts/TemperatureVsMoodScatterChart';
import WeatherMoodTimeSeriesChart from './charts/WeatherMoodTimeSeriesChart';
import WeatherConditionMoodChart from './charts/WeatherConditionMoodChart';
import WeatherMoodCorrelationChart from './charts/WeatherMoodCorrelationChart';
import KeyInsightsSection from './charts/KeyInsightsSection';
import PredictiveInsights from './PredictiveInsights';
import { ChartLoadingSkeleton } from '@/components/LoadingSpinner';
import ErrorBoundary from '@/components/ErrorBoundary';

function ChartErrorFallback({ resetError }: { error?: Error; resetError: () => void }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Chart Error</h3>
      <p className="text-gray-600 mb-4">Unable to load this chart. Please try again.</p>
      <button
        onClick={resetError}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Retry
      </button>
    </div>
  );
}

export default function WeatherMoodCharts() {
  return (
    <div className="space-y-16">
      <ErrorBoundary fallback={ChartErrorFallback}>
        <Suspense fallback={<ChartLoadingSkeleton />}>
          <TemperatureVsMoodScatterChart />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary fallback={ChartErrorFallback}>
        <Suspense fallback={<ChartLoadingSkeleton />}>
          <WeatherMoodTimeSeriesChart />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary fallback={ChartErrorFallback}>
        <Suspense fallback={<ChartLoadingSkeleton />}>
          <WeatherConditionMoodChart />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary fallback={ChartErrorFallback}>
        <Suspense fallback={<ChartLoadingSkeleton />}>
          <WeatherMoodCorrelationChart />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary fallback={ChartErrorFallback}>
        <Suspense fallback={<ChartLoadingSkeleton />}>
          <PredictiveInsights />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary fallback={ChartErrorFallback}>
        <Suspense fallback={<ChartLoadingSkeleton />}>
          <KeyInsightsSection />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
