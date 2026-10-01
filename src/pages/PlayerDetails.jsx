import {useParams,Link} from 'react-router-dom';import {useApi,usePageTitle} from '../hooks.js';import {fetchPlayer} from '../services/footballApi.js';import {getTeam} from '../data/teams.js';
import {Async,Empty,DemoTag} from '../components/ui.jsx';import {Avatar} from '../components/PlayerCard.jsx';
function View({p}){usePageTitle(p.name);const t=getTeam(p.team);
return <><div className="card big left" style={{'--c':t.color}}><Avatar p={p} size={96}/><div><h1>{p.name}</h1><p className="muted"><Link to={'/teams/'+t.id}>{t.name}</Link> · {p.nat} · {p.pos} · Age {p.age}</p><DemoTag/></div></div>
<h2>Season Statistics</h2><div className="grid sm4">{[['Appearances',p.app],['Goals',p.g],['Assists',p.a],['Yellow cards',p.y],['Red cards',p.r]].map(([l,v])=><div key={l} className="card statbox"><b>{v}</b><small>{l}</small></div>)}</div></>}
export default function PlayerDetails(){const {id}=useParams();const s=useApi(()=>fetchPlayer(id),[id]);
return <Async s={s} n={1}>{p=>p?<View p={p}/>:<Empty text="Player not found."/>}</Async>}
