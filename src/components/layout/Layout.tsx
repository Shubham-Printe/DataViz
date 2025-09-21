import Header from './Header';
import ErrorBoundary from '../ErrorBoundary';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
    </div>
  );
} 