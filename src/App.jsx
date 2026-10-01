import {Routes,Route,Link} from 'react-router-dom';
import Header from './components/Header.jsx';import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';import Matches from './pages/Matches.jsx';import MatchDetails from './pages/MatchDetails.jsx';
import Leagues from './pages/Leagues.jsx';import LeagueDetails from './pages/LeagueDetails.jsx';import Teams from './pages/Teams.jsx';
import TeamDetails from './pages/TeamDetails.jsx';import Players from './pages/Players.jsx';import PlayerDetails from './pages/PlayerDetails.jsx';
import News from './pages/News.jsx';import Search from './pages/Search.jsx';
export default function App(){return <>
<Header/><main className="wrap"><Routes>
<Route path="/" element={<Home/>}/><Route path="/matches" element={<Matches/>}/><Route path="/matches/:id" element={<MatchDetails/>}/>
<Route path="/leagues" element={<Leagues/>}/><Route path="/leagues/:id" element={<LeagueDetails/>}/>
<Route path="/teams" element={<Teams/>}/><Route path="/teams/:id" element={<TeamDetails/>}/>
<Route path="/players" element={<Players/>}/><Route path="/players/:id" element={<PlayerDetails/>}/>
<Route path="/news" element={<News/>}/><Route path="/search" element={<Search/>}/>
<Route path="*" element={<div className="card empty">Page not found. <Link to="/">Go home</Link></div>}/>
</Routes></main><Footer/></>}
