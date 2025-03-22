import React from 'react'
import useFetch from './useFetch'

const App = () => {

  const { datas } = useFetch('https://newsapi.org/v2/everything?q=apple&from=2025-03-19&to=2025-03-19&sortBy=popularity&pageSize=10&apiKey=6eea67bca3884f1ab90372ac184ac945')
    
    

  return (
    <div>
        <h1 className='text-center border-4 border-indigo-500/100 text-[#000]'>
          Hello world!
        </h1> 
        <h1>
        {datas.map((data) => 
          <ul className='card [&>*]:pb-8' key={data.source.id}>
              <li>
                  {data.title}
              </li>   
              <li>
                {data.urlToImage} 
              </li>
              <li>
                {data.description}  
              </li>
              <li>
                {data.publishedAt}
              </li>
              <img src="https://gizmodo.com/app/uploads/2025/03/Dark_Matter.jpg" alt="" className='w-1/2'/>
          </ul>
        )}
        </h1>


    
    </div>
  )
}

export default App