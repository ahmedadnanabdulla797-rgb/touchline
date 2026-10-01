import {useState} from 'react';import {useApi,usePageTitle} from '../hooks.js';import {getNews} from '../services/footballApi.js';import {newsCategories} from '../data/news.js';import {Async,Empty} from '../components/ui.jsx';import NewsCard from '../components/NewsCard.jsx';
export default function News(){usePageTitle('News','Latest football news.');const [c,setC]=useState('All'),s=useApi(getNews);
return <><h1>Football News</h1><div className="chips">{['All',...newsCategories].map(k=><button key={k} className={c===k?'on':''} onClick={()=>setC(k)}>{k}</button>)}</div>
<Async s={s}>{d=>{const x=d.filter(n=>c==='All'||n.cat===c);return x.length?<div className="grid">{x.map(n=><NewsCard key={n.id} n={n}/>)}</div>:<Empty text="No stories in this category yet."/>}}</Async></>}
