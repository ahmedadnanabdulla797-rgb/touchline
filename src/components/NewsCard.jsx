export default function NewsCard({n}){return <article className="card news"><div className="img" style={{background:`linear-gradient(135deg,${n.color},#0b1210)`}}>⚽</div>
<div className="pad"><span className="tag">{n.cat}</span><h3>{n.title}</h3><p>{n.desc}</p><div className="row sm"><span>{n.date}</span><a href="#" onClick={e=>e.preventDefault()}>Read More →</a></div></div></article>}
