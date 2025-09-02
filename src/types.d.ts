type TCase = {
  slug: string;
  title: string;
  tagline: string;
  card: {
    title: string;
    subtitle: string;
    result: string;
  };
  description: string;
  // TODO: set TCategoryKey as type
  category: string;
  projectType: string;
  src: string;
  hint: string;
  technologies: string[];
  client?: string;
  industry: string;
  websiteUrl?: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial?: {
    name: string;
    title: string;
    quote: string;
    avatar: string;
    initials: string;
  };
};

type TCategoryKey = 'all' | 'web' | 'mobile' | 'design' | 'ecommerce' | 'analytics';

type TCategory = {
  key: CategoryKey;
  icon: React.ComponentType<any>;
};