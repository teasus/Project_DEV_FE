import React from 'react'


const Counter = () => {

    const [first, setfirst] = React.useState(0);

    setTimeout(() => {
        setfirst(first+1);
    }, 1000);
    
  return (
    <div>Counter= {first}</div>
  )
}

export default Counter;