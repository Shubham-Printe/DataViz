export interface Prediction {
  type: 'mood' | 'activity' | 'wellness';
  title: string;
  description: string;
  confidence: number;
  icon: string;
  color: string;
  recommendations: string[];
}
