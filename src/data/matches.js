import {players} from './players.js';
// DEMO DATA. day: 0=today, 1=tomorrow, -1=yesterday. status: NS (not started), LIVE, FT (finished)
const base=[
[1,'premier-league','arsenal','chelsea',0,'17:30','LIVE',1,1,67],
[2,'la-liga','real-madrid','barcelona',0,'20:00','NS',0,0,0],
[3,'premier-league','man-city','liverpool',0,'15:00','FT',2,1,90],
[4,'champions-league','inter','bayern',1,'20:00','NS',0,0,0],
[5,'champions-league','psg','real-madrid',-1,'20:00','FT',1,1,90],
[6,'premier-league','man-united','arsenal',2,'16:00','NS',0,0,0],
[7,'champions-league','barcelona','bayern',-1,'20:00','FT',3,2,90],
[8,'premier-league','chelsea','man-city',-2,'17:30','FT',0,2,90],
[9,'premier-league','liverpool','man-united',3,'16:30','NS',0,0,0]];
const who=t=>players.find(p=>p.team===t)?.name||t;
export const matches=base.map(([id,league,home,away,day,time,status,hs,aw,min])=>{
  const date=new Date();date.setDate(date.getDate()+day);
  const goals=(n,team,off)=>Array.from({length:n},(_,i)=>[10+off+i*25+id,'goal',team,who(team)]);
  const events=status==='NS'?[]:[...goals(hs,home,2),...goals(aw,away,9),[35,'yellow',home,'Yellow card'],[58,'sub',away,'Substitution'],...(id%3===0?[[74,'red',away,'Red card']]:[])].filter(e=>e[0]<=min).sort((a,b)=>a[0]-b[0]);
  const poss=48+id%12;
  const stats=[['Possession',poss,100-poss],['Shots',10+id%6,8+id%5],['Shots on target',5+id%3,3+id%4],['Corners',6,4+id%3],['Fouls',10,12],['Offsides',2,1+id%3]];
  return {id,league,home,away,day,time,status,hs,as:aw,min,date:date.toISOString(),stadium:'Demo Stadium',events,stats};
});
export const getMatch=id=>matches.find(m=>m.id===Number(id));
