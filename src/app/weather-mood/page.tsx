import Layout from '@/components/layout/Layout';
import WeatherMoodCharts from './WeatherMoodCharts';

export const metadata = {
  title: 'Weather & Mood Analysis - DataViz',
  description: 'Discover how weather patterns influence your daily mood and energy levels',
};

export default function WeatherMoodPage() {
  return (
    <Layout>
      <div className="space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Weather & Mood
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Analysis
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore the correlation between weather conditions and your emotional well-being
          </p>
        </div>
        <WeatherMoodCharts />
      </div>
    </Layout>
  );
} 