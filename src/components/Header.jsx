import {useState} from 'react';import {Link,NavLink} from 'react-router-dom';import {Menu,X} from 'lucide-react';import SearchBar from './SearchBar.jsx';
export const Logo=()=><Link to="/" className="logo"><svg viewBox="0 0 32 32" width="30" height="30"><circle cx="16" cy="16" r="12" fill="none" stroke="#3dff8b" strokeWidth="3"/><path d="M16 4v24M4 16h24" stroke="#3dff8b" strokeWidth="2"/></svg>TOUCH<b>LINE</b></Link>;
const links=[['/','Home'],['/matches','Matches'],['/leagues','Leagues'],['/teams','Teams'],['/players','Players'],['/news','News']];
export default function Header(){const [open,setOpen]=useState(false);
return <header className="hdr"><div className="wrap bar2"><Logo/>
<nav className={open?'nav open':'nav'} onClick={()=>setOpen(false)}>{links.map(([to,l])=><NavLink key={to} to={to} end={to==='/'}>{l}</NavLink>)}</nav>
<SearchBar/><button className="burger" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>}
