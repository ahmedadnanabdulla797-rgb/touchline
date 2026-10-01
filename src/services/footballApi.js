// API SERVICE LAYER: pages only call these functions, never the data files directly.
// TO CONNECT A REAL API LATER: replace the body of each function with a fetch() call, e.g.
//   const res=await fetch(`${BASE}/matches`); if(!res.ok) throw new Error('API error'); return res.json();
// Real secret keys must NOT go in frontend code. Put them in a Cloudflare Pages Function
// (functions/api/[[path]].js) using Pages > Settings > Environment variables, and point VITE_API_BASE_URL at '/api'.
import {matches,getMatch} from '../data/matches.js';
import {teams,getTeam} from '../data/teams.js';
import {players,getPlayer} from '../data/players.js';
import {leagues,getLeague} from '../data/leagues.js';
import {news} from '../data/news.js';
export const BASE=import.meta.env.VITE_API_BASE_URL||''; // empty = demo data
const demo=v=>new Promise(r=>setTimeout(()=>r(v),300)); // fake network delay
export const getMatches=()=>demo(matches);
export const fetchMatch=id=>demo(getMatch(id)||null);
export const getTeams=()=>demo(teams);
export const fetchTeam=id=>demo(getTeam(id)||null);
export const getPlayers=()=>demo(players);
export const fetchPlayer=id=>demo(getPlayer(id)||null);
export const getLeagues=()=>demo(leagues);
export const fetchLeague=id=>demo(getLeague(id)||null);
export const getNews=()=>demo(news);
