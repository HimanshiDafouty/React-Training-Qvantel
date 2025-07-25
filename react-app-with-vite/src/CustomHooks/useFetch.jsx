import React , {useState , useEffect} from 'react'
const useFetch=(url)=>{
    const [res , setRes] = useState([])
    useEffect(()=>
    {
        fetch(url).then((res)=>res.json()).then((data)=>setRes(data))
    } , [])
    return res;

}

export default useFetch
