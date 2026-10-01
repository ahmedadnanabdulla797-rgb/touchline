import {useState} from 'react';import {useApi,usePageTitle} from '../hooks.js';import {getMatches} from '../services/footballApi.js';import {Async,Empty} from '../components/ui.jsx';import MatchCard from '../components/MatchCard.jsx';
const days={Today:m=>m.day===0,Tomorrow:m=>m.day===1,Yesterday:m=>m.day===-1,Upcoming:m=>m.status==='NS',Finished:m=>m.status==='FT'};
const comps=[['all','All'],['premier-league','Premier League'],['la-liga','La Liga'],['serie-a','Serie A'],['bundesliga','Bundesliga'],['ligue-1','Ligue 1'],['champions-league','Champions League']];
export default function Matches(){usePageTitle('Matches','Today, upcoming and recent football matches.');
const [d,setD]=useState('Today'),[c,setC]=useState('all'),s=useApi(getMatches);
return <><h1>Matches</h1><div className="chips">{Object.keys(days).map(k=><button key={k} className={d===k?'on':''} onClick={()=>setD(k)}>{k}</button>)}</div>
<div className="chips">{comps.map(([k,l])=><button key={k} className={c===k?'on':''} onClick={()=>setC(k)}>{l}</button>)}</div>
<Async s={s}>{all=>{const x=all.filter(days[d]).filter(m=>c==='all'||m.league===c);return x.length?<div className="grid">{x.map(m=><MatchCard key={m.id} m={m}/>)}</div>:<Empty text="No matches for these filters."/>}}</Async></>}
