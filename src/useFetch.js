import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) => {

    const [datas, SetDatas] = useState([])
    
    useEffect(() => {
      // setTimeout(() => {
        axios
        .get(url)
        .then(response => {
            if(response.status === 200){
                console.log(response.data.articles)
                SetDatas(response.data.articles)             
            }else{
                throw Error ("can fetch from that resource")
            }
        }).catch(error => {
            console.log(error.message)

        })
    // }, 1000)
    }, [url])

    console.log(datas);
    

return { datas } 

}


export default useFetch;