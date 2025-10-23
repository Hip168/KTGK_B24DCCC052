import { Post } from '../types'


const KEY = 'ktgk_posts_v1'


export function loadPosts(): Post[] {
const raw = localStorage.getItem(KEY)
if (!raw) return []
try {
return JSON.parse(raw) as Post[]
} catch {
return []
}
}


export function savePosts(posts: Post[]) {
localStorage.setItem(KEY, JSON.stringify(posts))
}