import {Link} from 'react-router-dom';import {pts} from '../data/teams.js';import {Empty} from './ui.jsx';
export default function StandingsTable({rows}){if(!rows.length)return <Empty text="No standings available for this competition."/>;
return <div className="scroll card"><table><thead><tr><th>Pos</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr></thead>
<tbody>{rows.map((t,i)=><tr key={t.id}><td>{i+1}</td><td><Link to={'/teams/'+t.id}>{t.name}</Link></td>{t.st.map((v,j)=><td key={j}>{v}</td>)}<td><b>{pts(t)}</b></td></tr>)}</tbody></table></div>}
