export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    name?: string;
    description?: string;
    icon?: string;
    icon_image?: {
      url: string;
      imgix_url: string;
    };
    display_order?: number;
  };
}

export interface PricingTier extends CosmicObject {
  type: 'pricing-tiers';
  metadata: {
    plan_name?: string;
    price?: number;
    billing_period?: string;
    description?: string;
    features_included?: string;
    cta_text?: string;
    cta_link?: string;
    is_popular?: boolean;
    display_order?: number;
  };
}

export interface Faq extends CosmicObject {
  type: 'faqs';
  metadata: {
    question?: string;
    answer?: string;
    category?: string;
    display_order?: number;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    customer_name?: string;
    role?: string;
    company?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    rating?: number;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}