import {Link} from 'react-router-dom';import {Trophy} from 'lucide-react';
export default function LeagueCard({l}){return <Link to={'/leagues/'+l.id} className="card hov league" style={{'--c':l.color}}><Trophy/><h3>{l.name}</h3><small>{l.country} · {l.season}</small></Link>}
