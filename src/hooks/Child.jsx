import React,{memo} from 'react'

const Child = () => {
    console.log('child component is rendering')
  return (
    <div>
        <h2>Hello</h2>
    </div>
  )
}

export default memo(Child)
