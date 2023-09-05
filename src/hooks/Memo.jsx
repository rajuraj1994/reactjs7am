import React, { useState, useMemo } from 'react';

const Memo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

    // without using memo
//   const squaredCount = () => {
//     console.log('Calculating squared count...');
//     return count * count;
//   };

  // Use useMemo to calculate and memoize the square of the count
  const squaredCount = useMemo(() => {
    console.log('Calculating squared count...');
    return count * count;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <p>Squared Count (memoized): {squaredCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <h1>Value:{data}</h1>
      <button onClick={()=>setData(data+1)}>Increment Value</button>
    </>
  );
};

export default Memo;
