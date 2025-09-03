type TCase = {
  slug: string;
  title: string;
  tagline: string;
  card: {
    title: string;
    subtitle: string;
  };
  categories: TCategoryKey[];
  detail: {
    type: string;
    image: string;
    client?: string;
    industry: string;
    technologies: string[];
    goal: string;
    solution: string;
    results: string;
    resultUrl?: string;
  };
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