import {useSearchParams} from 'react-router-dom';import {teams,getTeam} from '../data/teams.js';import {players} from '../data/players.js';import {leagues} from '../data/leagues.js';import {matches} from '../data/matches.js';
import {usePageTitle} from '../hooks.js';import {Empty} from '../components/ui.jsx';import TeamCard from '../components/TeamCard.jsx';import PlayerCard from '../components/PlayerCard.jsx';import LeagueCard from '../components/LeagueCard.jsx';import MatchCard from '../components/MatchCard.jsx';
// Searches demo data locally. With a real API, call a search endpoint from services/footballApi.js instead.
export default function Search(){const [p]=useSearchParams();const q=(p.get('q')||'').toLowerCase();usePageTitle('Search');
const has=s=>s.toLowerCase().includes(q);
const T=teams.filter(t=>has(t.name)),P=players.filter(x=>has(x.name)),L=leagues.filter(l=>has(l.name)),M=matches.filter(m=>has(getTeam(m.home).name)||has(getTeam(m.away).name));
const none=!T.length&&!P.length&&!L.length&&!M.length;
const Sec=({t,a,C,k})=>a.length?<><h2>{t}</h2><div className="grid">{a.map(x=><C key={x.id} {...{[k]:x}}/>)}</div></>:null;
return <><h1>Search results for “{p.get('q')}”</h1>{none?<Empty text="No results found. Try a team, player or competition."/>:<>
<Sec t="Teams" a={T} C={TeamCard} k="t"/><Sec t="Players" a={P} C={PlayerCard} k="p"/><Sec t="Competitions" a={L} C={LeagueCard} k="l"/><Sec t="Matches" a={M} C={MatchCard} k="m"/></>}</>}
