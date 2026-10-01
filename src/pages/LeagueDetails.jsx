import {useParams} from 'react-router-dom';import {useApi,usePageTitle} from '../hooks.js';import {fetchLeague,getMatches,getPlayers} from '../services/footballApi.js';
import {standings} from '../data/leagues.js';import {getTeam} from '../data/teams.js';import {Async,Empty,DemoTag} from '../components/ui.jsx';
import StandingsTable from '../components/StandingsTable.jsx';import MatchCard from '../components/MatchCard.jsx';import TeamCard from '../components/TeamCard.jsx';import PlayerCard from '../components/PlayerCard.jsx';
// Reusable layout: works for every league because it only depends on the league id
function View({l}){usePageTitle(l.name);const m=useApi(getMatches),p=useApi(getPlayers),rows=standings(l.id);
return <><div className="card big left" style={{'--c':l.color}}><span className="badge" style={{background:l.color,width:72,height:72}}>🏆</span><div><h1>{l.name}</h1><p className="muted">{l.country} · Season {l.season}</p><DemoTag/></div></div>
<h2>Standings</h2><StandingsTable rows={rows}/>
<h2>Recent Matches</h2><Async s={m}>{d=>{const x=d.filter(y=>y.league===l.id&&y.status==='FT');return x.length?<div className="grid">{x.map(y=><MatchCard key={y.id} m={y}/>)}</div>:<Empty text="No recent matches."/>}}</Async>
<h2>Upcoming Fixtures</h2><Async s={m}>{d=>{const x=d.filter(y=>y.league===l.id&&y.status==='NS');return x.length?<div className="grid">{x.map(y=><MatchCard key={y.id} m={y}/>)}</div>:<Empty text="No upcoming fixtures."/>}}</Async>
<h2>Top Scorers</h2><Async s={p}>{d=>{const x=d.filter(y=>getTeam(y.team).league===l.id).sort((a,b)=>b.g-a.g);return x.length?<div className="grid">{x.map(y=><PlayerCard key={y.id} p={y}/>)}</div>:<Empty text="No scorer data."/>}}</Async>
<h2>Teams</h2>{rows.length?<div className="grid">{rows.map(t=><TeamCard key={t.id} t={t}/>)}</div>:<Empty text="No teams listed."/>}</>}
export default function LeagueDetails(){const {id}=useParams();const s=useApi(()=>fetchLeague(id),[id]);
return <Async s={s} n={1}>{l=>l?<View l={l}/>:<Empty text="League not found."/>}</Async>}
