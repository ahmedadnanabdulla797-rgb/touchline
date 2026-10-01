import {useApi,usePageTitle} from '../hooks.js';import {getPlayers} from '../services/footballApi.js';import {Async} from '../components/ui.jsx';import PlayerCard from '../components/PlayerCard.jsx';
export default function Players(){usePageTitle('Players','Football player profiles and stats.');const s=useApi(getPlayers);
return <><h1>Players</h1><Async s={s}>{d=><div className="grid">{d.map(p=><PlayerCard key={p.id} p={p}/>)}</div>}</Async></>}
