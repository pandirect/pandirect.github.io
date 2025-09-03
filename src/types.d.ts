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
  category: TCategoryKey;
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
  testimonial?: TTestimonial;
};

type TCategoryKey = 'all' | 'web' | 'mobile' | 'design' | 'ecommerce' | 'analytics';

type TCategory = {
  key: CategoryKey;
  icon: React.ComponentType<any>;
};

type TTestimonial = {
  client: string;
  post: string;
  text: string;
  fullText?: string;
  avatar: string;
  initials: string;
}