import {Link} from 'react-router-dom';import {useApi,usePageTitle} from '../hooks.js';import {getMatches,getLeagues,getNews,getTeams} from '../services/footballApi.js';
import {standings} from '../data/leagues.js';import {Async,Empty,Ball,DemoTag} from '../components/ui.jsx';
import MatchCard from '../components/MatchCard.jsx';import LeagueCard from '../components/LeagueCard.jsx';import NewsCard from '../components/NewsCard.jsx';import StandingsTable from '../components/StandingsTable.jsx';
export default function Home(){usePageTitle('Football, all in one place');
const m=useApi(getMatches),l=useApi(getLeagues),n=useApi(getNews),t=useApi(getTeams);
return <>
<section className="hero"><div><DemoTag/><h1>Football, <span>all in one place.</span></h1><p>Follow matches, results, standings, teams and football news, all in one fast, simple app.</p><Link className="btn" to="/matches">View Matches</Link></div><Ball/></section>
<section><h2>Today's Matches</h2><Async s={m}>{d=>{const x=d.filter(y=>y.day===0);return x.length?<div className="grid">{x.map(y=><MatchCard key={y.id} m={y}/>)}</div>:<Empty text="No matches today."/>}}</Async></section>
<section><h2>Popular Competitions</h2><Async s={l} n={4}>{d=><div className="grid sm4">{d.map(x=><LeagueCard key={x.id} l={x}/>)}</div>}</Async></section>
<section><div className="row"><h2>Premier League Table</h2><Link className="btn ghost" to="/leagues/premier-league">View Full Table</Link></div><Async s={t} n={1}>{()=><StandingsTable rows={standings('premier-league')}/>}</Async></section>
<section><h2>Latest Football News</h2><Async s={n}>{d=><div className="grid">{d.slice(0,3).map(x=><NewsCard key={x.id} n={x}/>)}</div>}</Async></section></>}
