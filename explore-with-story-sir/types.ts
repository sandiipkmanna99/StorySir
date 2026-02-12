export interface Story {
  id: string;
  title: string;
  excerpt: string;
  location: string;
  image: string;
  category: 'Mountains' | 'Temples' | 'Villages' | 'Solitude';
  date: string;
  readTime: string;
  fullContent?: string; // HTML string for demo purposes
}

export interface NavLink {
  label: string;
  path: string;
}

export interface AnimationProps {
  initial?: object;
  animate?: object;
  transition?: object;
  whileHover?: object;
  viewport?: object;
  whileInView?: object;
}