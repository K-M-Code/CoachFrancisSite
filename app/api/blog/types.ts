// app/api/blog/types.ts
export interface GhostTag {
    name: string;
  }
  
  export interface GhostPost {
    id: string;
    title: string;
    custom_excerpt: string;
    feature_image: string | null; // Allow for null image
    published_at: string;
    primary_tag: GhostTag | null; // Allow for null tag
    slug: string;
  }
  