import {Link} from 'react-router-dom';import {Badge} from './ui.jsx';
export default function TeamCard({t}){return <Link to={'/teams/'+t.id} className="card hov team"><Badge t={t} size={56}/><div><h3>{t.name}</h3><small>{t.country} · {t.stadium}</small></div></Link>}
