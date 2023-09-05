import React,{useCallback, useState} from 'react'
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
      };
    //   const fun=useCallback(()=>{
    //     console.log('hello')
    //   },data)
  return (
    <div>
        <Child/>
        {/* <Child data={data} fun={fun}/> */}
     <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Parent
