# DataViz - Personal Data Analytics Dashboard

> Interactive data visualization platform that transforms personal lifestyle data into actionable insights through advanced charting and predictive analytics.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38B2AC)](https://tailwindcss.com/)

## 🌟 Features

- **Weather-Mood Correlation Analysis** - Discover how weather patterns influence your daily mood and energy levels
- **Interactive Visualizations** - Multiple chart types including scatter plots, time series, and correlation charts
- **Predictive Analytics** - Machine learning-based forecasting with timeframe selection
- **Real-time Pattern Recognition** - Advanced filtering and trend analysis
- **Responsive Design** - Modern UI/UX optimized for all devices
- **Accessibility Compliant** - WCAG guidelines implementation
- **Production Ready** - Comprehensive error handling, loading states, and SEO optimization

## 🚀 Live Demo

[View Live Application](https://your-charts-app-url.vercel.app/)

## 📊 Current Analytics

### ✅ Implemented
- **Weather & Mood Analysis**
  - Temperature vs mood scatter plots
  - Weather condition mood charts
  - Time series analysis
  - Correlation matrices
  - Predictive insights
  - Key insights extraction

### 🔄 Coming Soon
- **Sleep & Performance Tracking**
- **Spending Pattern Analysis**

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Charts**: Recharts 3.2.0
- **Runtime**: React 19.1.0
- **Build Tool**: Turbopack

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ and npm 8+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/charts-app.git
cd charts-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
charts-app/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── weather-mood/       # Weather-mood analysis
│   │   │   ├── charts/         # Chart components
│   │   │   ├── components/     # Feature components
│   │   │   └── hooks/          # Custom hooks
│   │   ├── sleep-performance/  # Sleep analysis (coming soon)
│   │   └── spending-patterns/  # Spending analysis (coming soon)
│   ├── components/             # Shared components
│   │   ├── layout/             # Layout components
│   │   ├── ErrorBoundary.tsx   # Error handling
│   │   └── LoadingSpinner.tsx  # Loading states
│   └── data/                   # Data sources
├── public/                     # Static assets
├── DEPLOYMENT.md               # Deployment guide
└── README.md                   # This file
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking
npm run build:analyze # Analyze bundle size
npm run clean        # Clean build artifacts
```

### Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="DataViz"
```

For production deployment, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`from-blue-600 to-cyan-600`)
- **Secondary**: Purple gradient (`from-purple-500 to-pink-500`)
- **Accent**: Green gradient (`from-green-500 to-emerald-500`)
- **Background**: Gray-50 (`#f9fafb`)
- **Surface**: White with subtle shadows

### Typography
- **Primary Font**: Geist Sans
- **Monospace**: Geist Mono
- **Headings**: Bold, tracking-tight
- **Body**: Regular, leading-relaxed

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All metrics in green
- **Bundle Size**: Optimized with code splitting
- **Loading Time**: < 2s on 3G networks

### Optimizations Implemented

- ✅ Image optimization with WebP/AVIF
- ✅ Code splitting and lazy loading
- ✅ Compression and caching
- ✅ Error boundaries and loading states
- ✅ SEO metadata and structured data
- ✅ Security headers
- ✅ Accessibility compliance

## 🔒 Security

- Security headers configured
- XSS protection enabled
- CSRF protection
- Content Security Policy ready
- No sensitive data exposure

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- High contrast support
- Focus management
- Semantic HTML structure

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions including:
- Netlify
- Docker
- Custom hosting
- Environment configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shubham Printe**
- GitHub: [@shubhamprinte](https://github.com/shubhamprinte)
- LinkedIn: [Shubham Printe](https://linkedin.com/in/shubhamprinte)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Recharts](https://recharts.org/) for beautiful chart components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vercel](https://vercel.com/) for seamless deployment

---

**Built with ❤️ using Next.js and TypeScript**
