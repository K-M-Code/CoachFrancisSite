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
  

  export interface Author {
    id: string;
    name: string;
    slug: string;
    profile_image: string | null;
    cover_image: string | null;
    bio: string | null;
    website: string | null;
    location: string | null;
    facebook: string | null;
    twitter: string | null;
    meta_title: string | null;
    meta_description: string | null;
    url: string;
  }

  export interface Tag {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    feature_image: string | null;
    visibility: "public" | "internal";
    meta_title: string | null;
    meta_description: string | null;
    url: string;
  }
  export interface Post {
    id: string;
    uuid: string;
    title: string;
    slug: string;
    html: string;
    comment_id: string;
    feature_image: string | null;
    featured: boolean;
    visibility: "public" | "members" | "paid";
    created_at: string;
    updated_at: string;
    published_at: string | null;
    custom_excerpt: string | null;
    codeinjection_head: string | null;
    codeinjection_foot: string | null;
    custom_template: string | null;
    canonical_url: string | null;
    tags: Tag[];
    authors: Author[];
    primary_author: Author;
    primary_tag: Tag | null;
    url: string;
    excerpt: string;
    reading_time: number;
    access: boolean;
    comments: boolean;
    og_image: string | null;
    og_title: string | null;
    og_description: string | null;
    twitter_image: string | null;
    twitter_title: string | null;
    twitter_description: string | null;
    meta_title: string | null;
    meta_description: string | null;
    email_subject: string | null;
  }