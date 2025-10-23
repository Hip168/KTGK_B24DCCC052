import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import PostForm from './components/PostForm'
import { Post } from './types'
import { SAMPLE_POSTS } from './data'
import { loadPosts, savePosts } from './utils/storage'


function App() {
const [posts, setPosts] = useState<Post[]>([])


useEffect(() => {
const stored = loadPosts()
if (stored.length === 0) {
setPosts(SAMPLE_POSTS)
savePosts(SAMPLE_POSTS)
} else {
setPosts(stored)
}
}, [])


useEffect(() => {
savePosts(posts)
}, [posts])


return (
<div>
<Navbar />
<main className="container">
<Routes>
<Route path="/" element={<Navigate to="/posts" replace />} />
<Route path="/posts" element={<PostList posts={posts} setPosts={setPosts} />} />
<Route path="/posts/create" element={<PostForm posts={posts} setPosts={setPosts} />} />
<Route path="/posts/edit/:id" element={<PostForm posts={posts} setPosts={setPosts} editMode />} />
<Route path="/posts/:id" element={<PostDetail posts={posts} setPosts={setPosts} />} />
<Route path="*" element={<div style={{padding:20}}>404 - Not found</div>} />
</Routes>
</main>
</div>
)
}


export default App