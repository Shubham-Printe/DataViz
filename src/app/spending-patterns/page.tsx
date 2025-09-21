import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Spending Patterns Analysis - DataViz',
  description: 'Analyze your spending habits by day, category, and mood triggers',
};

export default function SpendingPatternsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Spending Patterns Analysis
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Coming Soon: Analyze your spending habits by day, category, and mood triggers
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <div className="text-6xl mb-4">��</div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Financial Analytics Coming Soon
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We&apos;re developing spending pattern visualizations that will reveal your unconscious 
            spending habits, mood-based purchases, and optimal budgeting strategies.
          </p>
        </div>
      </div>
    </Layout>
  );
} 