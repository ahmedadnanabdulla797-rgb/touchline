import {useApi,usePageTitle} from '../hooks.js';import {getLeagues} from '../services/footballApi.js';import {Async} from '../components/ui.jsx';import LeagueCard from '../components/LeagueCard.jsx';
export default function Leagues(){usePageTitle('Leagues','Browse football competitions.');const s=useApi(getLeagues);
return <><h1>Leagues</h1><Async s={s} n={4}>{d=><div className="grid sm4">{d.map(l=><LeagueCard key={l.id} l={l}/>)}</div>}</Async></>}
