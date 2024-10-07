// import GhostContentAPI from '@tryghost/content-api';
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(request: NextRequest) {
//     const { searchParams } = new URL(request.url);
//     const tag = searchParams.get('tag');
//     const page = searchParams.get('page');
//     const limit = searchParams.get('limit');
//     const api = new GhostContentAPI({
//         url: process.env.NEXT_PUBLIC_GHOST_URL,
//         key: process.env.NEXT_PUBLIC_GHOST_KEY,
//         version: 'v4',
//     });

//     const posts = await api.posts
//         .browse({
//             limit: limit ? Number(limit) : undefined,
//             include: 'tags',
//             page: page ? Number(page) : undefined,
//             tags: tag ? [tag] : undefined,
//         })
//         .catch((error) => {
//             console.error(error);
//             return [];
//         });

//     return NextResponse.json(posts);
// }