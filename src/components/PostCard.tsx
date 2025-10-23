import React from 'react'
import { Post } from '../types'
import { Link, useNavigate } from 'react-router-dom'


export default function PostCard({ post, onDelete }: { post: Post; onDelete: (id: string) => void }) {
const navigate = useNavigate()
function handleDelete() {
if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
onDelete(post.id)
}
}


return (
<div className="card">
<img src={post.thumbnail} alt={post.title} />
<div className="card-body">
<h3>{post.title}</h3>
<p className="meta">{post.author} • {new Date(post.createdAt).toLocaleDateString()}</p>
<p>{post.content.slice(0,100)}{post.content.length>100? '...': ''}</p>
<div className="actions">
<Link to={`/posts/${post.id}`}>Đọc thêm</Link>
<button onClick={handleDelete}>Xóa</button>
</div>
</div>
</div>
)
}