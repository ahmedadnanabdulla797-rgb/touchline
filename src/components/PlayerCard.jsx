import {Link} from 'react-router-dom';import {getTeam} from '../data/teams.js';
export const Avatar=({p,size=56})=>{const t=getTeam(p.team);return <span className="badge" style={{background:t.color,width:size,height:size,fontSize:size/3}}>{p.name.split(' ').map(x=>x[0]).slice(0,2).join('')}</span>};
export default function PlayerCard({p}){return <Link to={'/players/'+p.id} className="card hov team"><Avatar p={p}/><div><h3>{p.name}</h3><small>{getTeam(p.team).name} · {p.pos}</small><small>{p.g} goals · {p.a} assists</small></div></Link>}
