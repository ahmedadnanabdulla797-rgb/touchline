import {useState} from 'react';import {useNavigate} from 'react-router-dom';import {Search} from 'lucide-react';
export default function SearchBar(){const [q,setQ]=useState('');const go=useNavigate();
return <form className="search" role="search" onSubmit={e=>{e.preventDefault();if(q.trim())go('/search?q='+encodeURIComponent(q.trim()))}}>
<Search size={16}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search teams, players…" aria-label="Search"/></form>}
