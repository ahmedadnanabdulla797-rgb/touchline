import {useEffect,useState} from 'react';
// Runs an API function and returns {loading,data,error}
export function useApi(fn,deps=[]){
  const [s,set]=useState({loading:true});
  useEffect(()=>{let ok=true;set({loading:true});
    fn().then(data=>ok&&set({data,loading:false})).catch(error=>ok&&set({error,loading:false}));
    return()=>{ok=false}; // eslint-disable-next-line
  },deps);
  return s;
}
// Sets the page title and meta description (SEO)
export function usePageTitle(t,d='Touchline: matches, results, standings, teams, players and football news.'){
  useEffect(()=>{document.title=t+' | Touchline';document.querySelector('meta[name=description]')?.setAttribute('content',d);window.scrollTo(0,0)},[t,d]);
}
