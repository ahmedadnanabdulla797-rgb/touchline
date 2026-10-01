// DEMO DATA. st = [played, won, drawn, lost, goalDifference]
export const teams=[
{id:'arsenal',name:'Arsenal',short:'ARS',country:'England',league:'premier-league',stadium:'Emirates Stadium',coach:'Mikel Arteta',color:'#d61a1f',form:'WWDWW',st:[8,6,1,1,12]},
{id:'man-city',name:'Manchester City',short:'MCI',country:'England',league:'premier-league',stadium:'Etihad Stadium',coach:'Pep Guardiola',color:'#4aa3df',form:'WWWDL',st:[8,6,1,1,15]},
{id:'liverpool',name:'Liverpool',short:'LIV',country:'England',league:'premier-league',stadium:'Anfield',coach:'Arne Slot',color:'#c8102e',form:'WLWWW',st:[8,5,2,1,10]},
{id:'man-united',name:'Manchester United',short:'MUN',country:'England',league:'premier-league',stadium:'Old Trafford',coach:'Demo Coach',color:'#da291c',form:'DLWDW',st:[8,3,2,3,1]},
{id:'chelsea',name:'Chelsea',short:'CHE',country:'England',league:'premier-league',stadium:'Stamford Bridge',coach:'Demo Coach',color:'#034694',form:'WDLWL',st:[8,4,2,2,5]},
{id:'real-madrid',name:'Real Madrid',short:'RMA',country:'Spain',league:'la-liga',stadium:'Santiago Bernabéu',coach:'Demo Coach',color:'#c9b26a',form:'WWWWD',st:[8,7,1,0,16]},
{id:'barcelona',name:'Barcelona',short:'BAR',country:'Spain',league:'la-liga',stadium:'Camp Nou',coach:'Hansi Flick',color:'#a50044',form:'WWLWW',st:[8,6,0,2,14]},
{id:'bayern',name:'Bayern Munich',short:'BAY',country:'Germany',league:'bundesliga',stadium:'Allianz Arena',coach:'Vincent Kompany',color:'#dc052d',form:'WWWWW',st:[8,8,0,0,20]},
{id:'psg',name:'PSG',short:'PSG',country:'France',league:'ligue-1',stadium:'Parc des Princes',coach:'Luis Enrique',color:'#1c3f94',form:'WDWWW',st:[8,6,2,0,17]},
{id:'inter',name:'Inter Milan',short:'INT',country:'Italy',league:'serie-a',stadium:'San Siro',coach:'Demo Coach',color:'#0068a8',form:'WWDLW',st:[8,5,2,1,9]}];
export const getTeam=id=>teams.find(t=>t.id===id);
export const pts=t=>t.st[1]*3+t.st[2];
