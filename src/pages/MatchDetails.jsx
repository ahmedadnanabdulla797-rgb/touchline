import {useParams,Link} from 'react-router-dom';import {useApi,usePageTitle} from '../hooks.js';import {fetchMatch} from '../services/footballApi.js';
import {getTeam} from '../data/teams.js';import {getLeague} from '../data/leagues.js';import {Async,Empty,Badge,DemoTag} from '../components/ui.jsx';
const icon={goal:'⚽',yellow:'🟨',red:'🟥',sub:'🔁'};
function View({m}){usePageTitle(`${getTeam(m.home).name} vs ${getTeam(m.away).name}`);const h=getTeam(m.home),a=getTeam(m.away);
if(!m)return null;
return <><DemoTag/><p className="muted">{getLeague(m.league)?.name} · {new Date(m.date).toDateString()} · {m.time} · {m.stadium}</p>
<div className="card big"><Link to={'/teams/'+h.id}><Badge t={h} size={72}/><h2>{h.name}</h2></Link><div><b className="score xl">{m.status==='NS'?'vs':`${m.hs} - ${m.as}`}</b><p className={'st '+m.status}>{m.status==='NS'?'Not started':m.status==='LIVE'?`LIVE ${m.min}'`:'Full time'}</p></div><Link to={'/teams/'+a.id}><Badge t={a} size={72}/><h2>{a.name}</h2></Link></div>
<h2>Match Events</h2>{m.events.length?<div className="card">{m.events.map((e,i)=><div key={i} className={'ev '+(e[2]===m.home?'l':'r')}>{e[0]}' {icon[e[1]]} {e[3]}</div>)}</div>:<Empty text="No events yet."/>}
<h2>Match Statistics</h2>{m.status==='NS'?<Empty text="Statistics appear once the match starts."/>:<div className="card">{m.stats.map(([l,x,y])=><div key={l} className="stat"><div className="row sm"><b>{x}</b><span>{l}</span><b>{y}</b></div><div className="bar"><i style={{width:100*x/(x+y)+'%'}}/></div></div>)}</div>}</>}
export default function MatchDetails(){const {id}=useParams();const s=useApi(()=>fetchMatch(id),[id]);
return <Async s={s} n={1}>{m=>m?<View m={m}/>:<Empty text="Match not found."/>}</Async>}
