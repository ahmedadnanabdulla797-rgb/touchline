import {Link} from 'react-router-dom';import {getTeam} from '../data/teams.js';import {getLeague} from '../data/leagues.js';import {Badge} from './ui.jsx';
export default function MatchCard({m}){const h=getTeam(m.home),a=getTeam(m.away);
const status=m.status==='NS'?m.time:m.status==='LIVE'?`● LIVE ${m.min}'`:'Full time';
return <article className="card match"><div className="row sm"><span>{getLeague(m.league)?.name}</span><span className={'st '+m.status}>{status}</span></div>
<div className="teams"><Link to={'/teams/'+h.id}><Badge t={h} size={48}/><span>{h.name}</span></Link>
<b className="score">{m.status==='NS'?'vs':`${m.hs} - ${m.as}`}</b>
<Link to={'/teams/'+a.id}><Badge t={a} size={48}/><span>{a.name}</span></Link></div>
<Link className="btn ghost" to={'/matches/'+m.id}>Match Details</Link></article>}
