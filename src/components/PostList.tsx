import React, { useMemo, useState, useEffect, useRef } from 'react'
import { Post } from '../types'
import PostCard from './PostCard'

// Simple debounce hook
function useDebouncedValue<T>(value: T, delay = 250) {
	const [v, setV] = useState(value)
	useEffect(() => {
		const t = setTimeout(() => setV(value), delay)
		return () => clearTimeout(t)
	}, [value, delay])
	return v
}

export default function PostList({ posts, setPosts }: { posts: Post[]; setPosts: (p: Post[]) => void }) {
	const [filter, setFilter] = useState('')
	const debounced = useDebouncedValue(filter, 220)
	const inputRef = useRef<HTMLInputElement | null>(null)

	const filtered = useMemo(() => {
		const q = debounced.trim().toLowerCase()
		if (!q) return posts
		return posts.filter(p => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q))
	}, [debounced, posts])

	function clear() {
		setFilter('')
		inputRef.current?.focus()
	}

	return (
		<div style={{ padding: 20 }}>
			<h2>Danh sách bài viết ({posts.length})</h2>

			<div className="search-row" style={{ margin: '14px 0' }}>
				<div className="search-box">
					<svg className="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11 4a7 7 0 1 0 4.95 11.95l4.3 4.3 1.4-1.4-4.3-4.3A7 7 0 0 0 11 4z" stroke="#9aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<input
						ref={inputRef}
						className="search-input"
						placeholder="Tìm theo tiêu đề hoặc nội dung..."
						value={filter}
						onChange={e => setFilter(e.target.value)}
						aria-label="Search posts"
					/>
					{filter ? (
						<button className="search-clear" onClick={clear} aria-label="Clear search">✕</button>
					) : null}
				</div>
			</div>

			<div className="grid">
				{filtered.map(p => (
					<PostCard key={p.id} post={p} onDelete={(id) => setPosts(posts.filter(x => x.id !== id))} />
				))}
			</div>

			{filtered.length === 0 && (
				<p style={{ marginTop: 20, color: '#666' }}>Không tìm thấy bài viết phù hợp. Thử từ khóa khác.</p>
			)}
		</div>
	)
}