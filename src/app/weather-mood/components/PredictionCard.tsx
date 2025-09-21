interface Prediction {
  type: 'mood' | 'activity' | 'wellness';
  title: string;
  description: string;
  confidence: number;
  icon: string;
  color: string;
  recommendations: string[];
}

interface PredictionCardProps {
  prediction: Prediction;
}

export default function PredictionCard({ prediction }: PredictionCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center">
          <div className={`w-12 h-12 bg-gradient-to-br ${prediction.color} rounded-2xl flex items-center justify-center mr-4`}>
            <span className="text-2xl">{prediction.icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              {prediction.title}
            </h3>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              <span className="text-sm text-gray-600">
                {prediction.confidence}% confidence
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {prediction.description}
      </p>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Recommendations
        </h4>
        <ul className="space-y-3">
          {prediction.recommendations.map((rec, recIndex) => (
            <li key={recIndex} className="flex items-start">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-gray-700 text-sm leading-relaxed">{rec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
