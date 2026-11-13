export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  image: string;
  features: string[];
  popularChoice?: boolean;
  typicalDuration: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  propertyType: string;
  message: string;
}

export interface LeadDetails {
  name?: string;
  phone?: string;
  service?: string;
  dimensions?: string;
  preferredTime?: string;
  summary?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  isArabic?: boolean;
  leadDetails?: LeadDetails;
}
