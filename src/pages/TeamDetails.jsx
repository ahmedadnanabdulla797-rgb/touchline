import {useParams} from 'react-router-dom';import {useApi,usePageTitle} from '../hooks.js';import {fetchTeam,getMatches,getPlayers} from '../services/footballApi.js';
import {standings,getLeague} from '../data/leagues.js';import {Async,Empty,Badge,DemoTag} from '../components/ui.jsx';import MatchCard from '../components/MatchCard.jsx';import PlayerCard from '../components/PlayerCard.jsx';
function View({t}){usePageTitle(t.name);const m=useApi(getMatches),p=useApi(getPlayers);const pos=standings(t.league).findIndex(x=>x.id===t.id)+1;
const mine=d=>d.filter(x=>x.home===t.id||x.away===t.id);
return <><div className="card big left" style={{'--c':t.color}}><Badge t={t} size={84}/><div><h1>{t.name}</h1><p className="muted">{t.country} · {t.stadium} · Coach: {t.coach}</p><p className="muted">{getLeague(t.league)?.name} · Position {pos}</p><DemoTag/></div></div>
<h2>Recent Form</h2><div className="form">{t.form.split('').map((r,i)=><span key={i} className={'f'+r}>{r}</span>)}</div>
<h2>Upcoming Matches</h2><Async s={m}>{d=>{const x=mine(d).filter(y=>y.status==='NS');return x.length?<div className="grid">{x.map(y=><MatchCard key={y.id} m={y}/>)}</div>:<Empty text="No upcoming matches."/>}}</Async>
<h2>Recent Results</h2><Async s={m}>{d=>{const x=mine(d).filter(y=>y.status==='FT');return x.length?<div className="grid">{x.map(y=><MatchCard key={y.id} m={y}/>)}</div>:<Empty text="No results yet."/>}}</Async>
<h2>Squad</h2><Async s={p}>{d=>{const x=d.filter(y=>y.team===t.id);return x.length?<div className="grid">{x.map(y=><PlayerCard key={y.id} p={y}/>)}</div>:<Empty text="Squad not available."/>}}</Async></>}
export default function TeamDetails(){const {id}=useParams();const s=useApi(()=>fetchTeam(id),[id]);
return <Async s={s} n={1}>{t=>t?<View t={t}/>:<Empty text="Team not found."/>}</Async>}
