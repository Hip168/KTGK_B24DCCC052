import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Post } from '../types'

export default function PostDetail({ posts, setPosts }: { posts: Post[]; setPosts: (p: Post[]) => void }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = posts.find(p => p.id === id)
  if (!post) return <div style={{padding:20}}>Bài viết không tồn tại</div>

  function handleDelete() {
    if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
      setPosts(posts.filter(p => p.id !== post!.id)) // ✅ thêm dấu chấm than
      navigate('/posts')
    }
  }

  return (
    <div style={{padding:20}}>
      <button onClick={() => navigate(-1)}>Quay lại</button>
      <h1>{post.title}</h1>
      <p className="meta">{post.author} • {new Date(post.createdAt).toLocaleString()}</p>
      <img src={post.thumbnail} alt="thumb" style={{maxWidth:'100%', margin:'16px 0'}} />
      <div style={{whiteSpace:'pre-wrap'}}>{post.content}</div>
      <div style={{marginTop:16}}>
        <Link to={`/posts/edit/${post.id}`}><button>Chỉnh sửa</button></Link>
        <button onClick={handleDelete} style={{marginLeft:8}}>Xóa bài viết</button>
      </div>
    </div>
  )
}
