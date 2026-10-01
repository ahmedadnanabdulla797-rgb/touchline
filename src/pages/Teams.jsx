import {useApi,usePageTitle} from '../hooks.js';import {getTeams} from '../services/footballApi.js';import {Async} from '../components/ui.jsx';import TeamCard from '../components/TeamCard.jsx';
export default function Teams(){usePageTitle('Teams','Football club profiles.');const s=useApi(getTeams);
return <><h1>Teams</h1><Async s={s}>{d=><div className="grid">{d.map(t=><TeamCard key={t.id} t={t}/>)}</div>}</Async></>}
