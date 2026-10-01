// DEMO DATA. Stats are invented for demo purposes.
export const players=[
{id:'saka',name:'Bukayo Saka',team:'arsenal',nat:'England',pos:'Right Winger',age:24,app:8,g:5,a:4,y:1,r:0},
{id:'haaland',name:'Erling Haaland',team:'man-city',nat:'Norway',pos:'Striker',age:25,app:8,g:9,a:1,y:0,r:0},
{id:'salah',name:'Mohamed Salah',team:'liverpool',nat:'Egypt',pos:'Right Winger',age:33,app:8,g:6,a:5,y:0,r:0},
{id:'bruno',name:'Bruno Fernandes',team:'man-united',nat:'Portugal',pos:'Midfielder',age:31,app:8,g:3,a:4,y:3,r:0},
{id:'palmer',name:'Cole Palmer',team:'chelsea',nat:'England',pos:'Attacking Mid',age:24,app:8,g:5,a:3,y:1,r:0},
{id:'mbappe',name:'Kylian Mbappé',team:'real-madrid',nat:'France',pos:'Striker',age:27,app:8,g:8,a:2,y:1,r:0},
{id:'yamal',name:'Lamine Yamal',team:'barcelona',nat:'Spain',pos:'Right Winger',age:18,app:8,g:4,a:6,y:0,r:0},
{id:'kane',name:'Harry Kane',team:'bayern',nat:'England',pos:'Striker',age:32,app:8,g:10,a:3,y:1,r:0},
{id:'dembele',name:'Ousmane Dembélé',team:'psg',nat:'France',pos:'Winger',age:29,app:8,g:5,a:5,y:2,r:0},
{id:'lautaro',name:'Lautaro Martínez',team:'inter',nat:'Argentina',pos:'Striker',age:28,app:8,g:6,a:2,y:2,r:1}];
export const getPlayer=id=>players.find(p=>p.id===id);
