import React, { useMemo, useState } from 'react'
import { Post } from '../types'
import PostCard from './PostCard'


export default function PostList({ posts, setPosts }: { posts: Post[]; setPosts: (p: Post[]) => void }) {
const [filter, setFilter] = useState('')


const filtered = useMemo(() => {
const q = filter.trim().toLowerCase()
if (!q) return posts
return posts.filter(p => p.title.toLowerCase().includes(q))
}, [filter, posts])


return (
<div style={{padding:20}}>
<h2>Danh sách bài viết ({posts.length})</h2>
<div style={{margin:'10px 0'}}>
<input placeholder="Tìm theo tiêu đề..." value={filter} onChange={e => setFilter(e.target.value)} />
</div>
<div className="grid">
{filtered.map(p => (
<PostCard key={p.id} post={p} onDelete={(id) => setPosts(posts.filter(x => x.id !== id))} />
))}
</div>
</div>
)
}