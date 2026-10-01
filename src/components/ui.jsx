// Small shared pieces: badge, loading skeleton, empty/error states, async wrapper, ball graphic
export const Badge=({t,size=40})=><span className="badge" style={{background:t.color,width:size,height:size,fontSize:size/3}}>{t.short}</span>;
export const Skeleton=({n=3})=><div className="grid">{Array.from({length:n},(_,i)=><div key={i} className="card sk"/>)}</div>;
export const Empty=({text='Nothing to show here yet.'})=><div className="card empty">⚽ {text}</div>;
export const ErrorBox=({error})=><div className="card empty err">API unavailable. Please try again later. ({String(error)})</div>;
// <Async s={useApi(...)}>{data=>...}</Async> shows skeleton, error, or your content
export const Async=({s,n,children})=>s.loading?<Skeleton n={n}/>:s.error?<ErrorBox error={s.error}/>:children(s.data);
export const DemoTag=()=><span className="tag">Demo Data</span>;
export const Ball=()=><svg className="ball" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="90" fill="#0f1d17" stroke="#3dff8b" strokeWidth="3"/><polygon points="100,60 135,85 122,125 78,125 65,85" fill="#3dff8b"/><path d="M100 60V10M135 85l48-16M122 125l30 40M78 125l-30 40M65 85L17 69" stroke="#3dff8b" strokeWidth="3"/></svg>;
