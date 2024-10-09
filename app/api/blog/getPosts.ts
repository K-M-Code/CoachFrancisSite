

// export async function getAllBlogPosts() {
//   try {
//     const response = await fetch(`${process.env.GHOST_URL}/ghost/api/content/posts/?key=${process.env.GHOST_KEY}&limit=all`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch posts');
//     }
//     const { posts } = await response.json();
//     console.log('Fetched posts:', posts);
//     return NextResponse.json(posts);
//   } catch (error: unknown) {
//     console.error('Error in API call:', error);
//     return NextResponse.json({ error: String(error) });
//   }
// }

// const { GHOST_URL, GHOST_KEY } = process.env;

// export async function getPosts() {
//   const res: any = await fetch(
//     `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_KEY}&fields=title,slug,custom_excerpt,feature_image,reading_time,published_at,meta_title,meta_description&formats=html`
//   ).then((res) => res.json());

//   const posts = res.posts;

//   console.log('posts:', posts);

//   return posts;
// }