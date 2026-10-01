import {teams,pts} from './teams.js';
// DEMO DATA
export const leagues=[
{id:'premier-league',name:'Premier League',country:'England',season:'2025/26',color:'#7b2ff7'},
{id:'la-liga',name:'La Liga',country:'Spain',season:'2025/26',color:'#ff6b35'},
{id:'serie-a',name:'Serie A',country:'Italy',season:'2025/26',color:'#1e90ff'},
{id:'bundesliga',name:'Bundesliga',country:'Germany',season:'2025/26',color:'#e63946'},
{id:'ligue-1',name:'Ligue 1',country:'France',season:'2025/26',color:'#3a86ff'},
{id:'champions-league',name:'Champions League',country:'Europe',season:'2025/26',color:'#2b59c3'},
{id:'mls',name:'MLS',country:'USA',season:'2026',color:'#00a86b'},
{id:'world-cup',name:'FIFA World Cup',country:'International',season:'2026',color:'#b8860b'}];
export const getLeague=id=>leagues.find(l=>l.id===id);
export const standings=id=>teams.filter(t=>t.league===id).sort((a,b)=>pts(b)-pts(a)||b.st[4]-a.st[4]);
