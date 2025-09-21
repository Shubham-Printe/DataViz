import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Personal data analytics dashboard with interactive visualizations for weather-mood correlation, sleep performance, and spending patterns.',
};

const chartCategories = [
  {
    title: 'Weather & Mood Analysis',
    description: 'Discover how weather patterns influence your daily mood and energy levels',
    href: '/weather-mood',
    color: 'from-blue-500 to-cyan-500',
    icon: '🌤️',
    insights: ['Temperature correlation', 'Sunshine impact', 'Precipitation effects'],
    status: 'active'
  },
  {
    title: 'Sleep & Performance',
    description: 'Track how sleep quality affects your next-day productivity and energy',
    href: '/sleep-performance',
    color: 'from-purple-500 to-pink-500',
    icon: '💤',
    insights: ['Sleep duration impact', 'Quality vs quantity', 'Performance correlation'],
    status: 'coming-soon'
  },
  {
    title: 'Spending Patterns',
    description: 'Analyze your spending habits by day, category, and mood triggers',
    href: '/spending-patterns',
    color: 'from-green-500 to-emerald-500',
    icon: '💰',
    insights: ['Daily spending trends', 'Category analysis', 'Mood-based spending'],
    status: 'coming-soon'
  }
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto" aria-labelledby="hero-title">
          <h1 id="hero-title" className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Personal Data
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Analytics
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Uncover hidden patterns in your daily life through interactive data visualizations. 
            Make data-driven decisions to optimize your lifestyle and well-being.
          </p>
        </section>

        {/* Chart Categories */}
        <section aria-labelledby="categories-title">
          <h2 id="categories-title" className="sr-only">Analytics Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chartCategories.map((category) => (
              <article
                key={category.title}
                className="group block bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 relative"
              >
                {category.status === 'coming-soon' && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}
                
                <div className={`h-1 bg-gradient-to-r ${category.color}`} />
                
                {category.status === 'active' ? (
                  <Link
                    href={category.href}
                    className="block p-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                    aria-describedby={`${category.title.replace(/\s+/g, '-').toLowerCase()}-description`}
                  >
                    <CategoryContent category={category} />
                  </Link>
                ) : (
                  <div className="p-8 cursor-not-allowed opacity-75">
                    <CategoryContent category={category} />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12" aria-labelledby="features-title">
          <h2 id="features-title" className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">
            Why Personal Data Visualization?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <span className="text-3xl" role="img" aria-label="Chart">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data-Driven Insights
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Move beyond assumptions and discover what actually influences your daily life
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <span className="text-3xl" role="img" aria-label="Target">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Actionable Patterns
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Identify specific patterns that can help you optimize your lifestyle choices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <span className="text-3xl" role="img" aria-label="Magnifying glass">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hidden Correlations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Uncover surprising connections between different aspects of your life
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function CategoryContent({ category }: { category: typeof chartCategories[0] }) {
  return (
    <>
      <div className="flex items-center mb-6">
        <span className="text-4xl mr-4" role="img" aria-label={category.title}>
          {category.icon}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {category.title}
        </h3>
      </div>
      <p 
        id={`${category.title.replace(/\s+/g, '-').toLowerCase()}-description`}
        className="text-gray-600 mb-6 leading-relaxed"
      >
        {category.description}
      </p>
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Key Insights
        </h4>
        <ul className="text-sm text-gray-600 space-y-2" role="list">
          {category.insights.map((insight, index) => (
            <li key={index} className="flex items-center">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" aria-hidden="true" />
              {insight}
            </li>
          ))}
        </ul>
      </div>
      {category.status === 'active' && (
        <div className="mt-6 flex items-center text-blue-600 text-sm font-medium group-hover:underline">
          Explore Charts
          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  );
}
