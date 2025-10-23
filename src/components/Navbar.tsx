import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


export default function Navbar() {
const navigate = useNavigate()
return (
<nav className="navbar">
<div className="nav-inner container">
<div className="logo" onClick={() => navigate('/posts')} style={{cursor:'pointer'}}>KTGK Blog</div>
<div className="links">
<NavLink to="/posts" className={({isActive}) => isActive ? 'active' : ''}>Trang chủ</NavLink>
<NavLink to="/posts/create" className={({isActive}) => isActive ? 'active' : ''}>Viết bài</NavLink>
</div>
</div>
</nav>
)
}