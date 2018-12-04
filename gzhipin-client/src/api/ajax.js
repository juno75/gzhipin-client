import axios from 'axios';

export default async function (url,data,method='GET') {
   let qs = '';
   if(data){
       const arr = Object.keys(data);
       arr.forEach(key=>{
           qs += `${key}=${data[key]}`
       })
       qs = qs.substring(0,qs.length-1);
   }


    const type = method.toUpperCase();
    if(method==='GET'){
        const result = await axios.get(url+'?'+qs);
        return result.data;
    }else if(method==='POST'){
        const result = await axios.post(url,qs,{
            'content-type': 'application/x-www-form-urlencoded'
        })
        return result.data;
    }
}
