export default function PatternAnalysis() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
        Pattern Analysis
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🌞</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Strongest Correlation
          </h3>
          <p className="text-gray-600 text-sm">
            Sunshine hours → Mood (0.82 correlation)
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💪</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Best Predictor
          </h3>
          <p className="text-gray-600 text-sm">
            Weather condition → Energy level (85% accuracy)
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Mood Boost
          </h3>
          <p className="text-gray-600 text-sm">
            Outdoor activities + sunny weather (+2.3 avg)
          </p>
        </div>
      </div>
    </div>
  );
}
