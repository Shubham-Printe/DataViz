export default function KeyInsightsSection() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
        Key Insights
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-green-700">Positive Correlations</h3>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Sunshine hours have the strongest positive correlation (0.82)</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Higher temperatures generally improve mood</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Clear, sunny days boost energy and motivation</span>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-red-700">Negative Correlations</h3>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Precipitation has strong negative correlation (-0.65)</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>High humidity and wind can dampen mood</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span>Stormy weather significantly increases stress levels</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
