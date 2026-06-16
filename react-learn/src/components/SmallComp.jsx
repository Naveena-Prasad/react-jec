import React from 'react'

const SmallComp = ({name,age,college,dept}) => {
  return (
    <>
    <h1>Small Comp</h1>
    <h2>Name : {name}</h2>
    <h2>Age : {age}</h2>
    <h2>College : {college}</h2>
    <h2>Department : {dept}</h2>
    </>
  )
}

export default SmallComp