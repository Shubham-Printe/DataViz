import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Sleep & Performance Analysis - DataViz',
  description: 'Track how sleep quality affects your next-day productivity and energy',
};

export default function SleepPerformancePage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Sleep & Performance Analysis
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Coming Soon: Track how sleep quality affects your next-day productivity and energy
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <div className="text-6xl mb-4">��</div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Sleep Analytics Coming Soon
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We&apos;re working on comprehensive sleep tracking visualizations that will show you 
            how your sleep patterns correlate with your daily performance, energy levels, and mood.
          </p>
        </div>
      </div>
    </Layout>
  );
} 