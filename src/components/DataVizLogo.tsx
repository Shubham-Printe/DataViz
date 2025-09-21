interface DataVizLogoProps {
  className?: string;
  size?: number;
}

export default function DataVizLogo({ className = "", size = 32 }: DataVizLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="chartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Main background */}
      <rect
        width="32"
        height="32"
        rx="8"
        fill="url(#logoGradient)"
      />
      
      {/* Chart bars representing data visualization */}
      <g transform="translate(6, 8)">
        {/* Bar 1 - shortest */}
        <rect
          x="1"
          y="12"
          width="3"
          height="4"
          rx="1.5"
          fill="url(#chartGradient)"
        />
        
        {/* Bar 2 - medium */}
        <rect
          x="6"
          y="8"
          width="3"
          height="8"
          rx="1.5"
          fill="url(#chartGradient)"
        />
        
        {/* Bar 3 - tallest */}
        <rect
          x="11"
          y="4"
          width="3"
          height="12"
          rx="1.5"
          fill="url(#chartGradient)"
        />
        
        {/* Bar 4 - medium-high */}
        <rect
          x="16"
          y="6"
          width="3"
          height="10"
          rx="1.5"
          fill="url(#chartGradient)"
        />
      </g>
      
      {/* Subtle data points/dots */}
      <circle cx="8" cy="20" r="1" fill="white" opacity="0.6" />
      <circle cx="13" cy="16" r="1" fill="white" opacity="0.6" />
      <circle cx="18" cy="12" r="1" fill="white" opacity="0.6" />
      <circle cx="23" cy="14" r="1" fill="white" opacity="0.6" />
    </svg>
  );
}

// Alternative simplified version for smaller sizes
export function DataVizLogoSimple({ className = "", size = 24 }: DataVizLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      
      <rect
        width="24"
        height="24"
        rx="6"
        fill="url(#simpleGradient)"
      />
      
      {/* Simple chart representation */}
      <g transform="translate(4, 6)">
        <rect x="1" y="8" width="2" height="4" rx="1" fill="white" opacity="0.9" />
        <rect x="5" y="6" width="2" height="6" rx="1" fill="white" opacity="0.9" />
        <rect x="9" y="4" width="2" height="8" rx="1" fill="white" opacity="0.9" />
        <rect x="13" y="5" width="2" height="7" rx="1" fill="white" opacity="0.9" />
      </g>
    </svg>
  );
} 