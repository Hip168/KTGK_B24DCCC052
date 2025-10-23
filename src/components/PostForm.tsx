import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'  // ✅ thêm dòng này
import { Post, Category } from '../types'

function genId(){
  return 'p' + Math.random().toString(36).slice(2,9)
}

export default function PostForm({ posts, setPosts, editMode }: { posts: Post[]; setPosts: (p: Post[]) => void; editMode?: boolean }){
  const { id } = useParams()
  const navigate = useNavigate()

  const existing = posts.find(p=>p.id===id)

  const [title, setTitle] = useState(existing?.title || '')
  const [author, setAuthor] = useState(existing?.author || '')
  const [thumbnail, setThumbnail] = useState(existing?.thumbnail || '')
  const [content, setContent] = useState(existing?.content || '')
  const [category, setCategory] = useState<Category>(existing?.category || 'Khác')

  useEffect(()=>{
    if (editMode && !existing){
      navigate('/posts')
    }
  }, [editMode, existing])

  function validate(){
    if (title.trim().length < 10) { alert('Tiêu đề phải ít nhất 10 ký tự'); return false }
    if (author.trim().length < 3) { alert('Tác giả phải ít nhất 3 ký tự'); return false }
    if (content.trim().length < 50) { alert('Nội dung phải ít nhất 50 ký tự'); return false }
    return true
  }

  function handleSubmit(e?: React.FormEvent){
    e?.preventDefault()
    if (!validate()) return

    if (editMode && existing){
      const updated: Post = { ...existing, title, author, thumbnail, content, category }
      setPosts(posts.map(p => p.id === existing.id ? updated : p))
      alert('Cập nhật thành công!')
      navigate(`/posts/${existing.id}`)
      return
    }

    const newPost: Post = {
      id: genId(),
      title,
      author,
      thumbnail: thumbnail || 'https://picsum.photos/400/250',
      content,
      category,
      createdAt: new Date().toISOString()
    }
    setPosts([newPost, ...posts])
    alert('Đăng bài thành công!')
    navigate('/posts')
  }

  return (
    <div style={{padding:20}}>
      <h2>{editMode ? 'Chỉnh sửa bài viết' : 'Tạo bài viết mới'}</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Tiêu đề<input value={title} onChange={e=>setTitle(e.target.value)} /></label>
        <label>Tác giả<input value={author} onChange={e=>setAuthor(e.target.value)} /></label>
        <label>URL ảnh thumbnail<input value={thumbnail} onChange={e=>setThumbnail(e.target.value)} /></label>
        <label>Nội dung<textarea rows={10} value={content} onChange={e=>setContent(e.target.value)} /></label>
        <label>Thể loại
          <select value={category} onChange={e=>setCategory(e.target.value as any)}>
            <option>Công nghệ</option>
            <option>Du lịch</option>
            <option>Ẩm thực</option>
            <option>Đời sống</option>
            <option>Khác</option>
          </select>
        </label>

        <div style={{marginTop:12}}>
          <button type="submit">{editMode ? 'Cập nhật' : 'Đăng bài'}</button>
          <button
            type="button"
            onClick={() => {
              if (editMode) navigate(`/posts/${id}`)
              else navigate('/posts')
            }}
            style={{marginLeft:8}}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  )
}
