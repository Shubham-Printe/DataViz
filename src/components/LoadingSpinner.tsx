interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export default function LoadingSpinner({ size = 'md', className = '', text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin`}>
        <svg className="w-full h-full text-blue-600" fill="none" viewBox="0 0 24 24">
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      {text && (
        <p className="mt-3 text-sm text-gray-600 animate-pulse">{text}</p>
      )}
    </div>
  );
}

export function ChartLoadingSkeleton() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 animate-pulse">
      <div className="space-y-6">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        
        {/* Chart area skeleton */}
        <div className="h-64 bg-gray-100 rounded-lg flex items-end justify-between p-4 space-x-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className="bg-gray-200 rounded-t"
              style={{ 
                height: `${Math.random() * 80 + 20}%`,
                width: '12%'
              }}
            />
          ))}
        </div>
        
        {/* Legend skeleton */}
        <div className="flex space-x-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PageLoadingSkeleton() {
  return (
    <div className="space-y-16 animate-pulse">
      {/* Header skeleton */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="h-12 bg-gray-200 rounded w-2/3 mx-auto"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>
      
      {/* Charts skeleton */}
      <div className="space-y-16">
        {Array.from({ length: 3 }).map((_, i) => (
          <ChartLoadingSkeleton key={i} />
        ))}
      </div>
    </div>
  );
} 