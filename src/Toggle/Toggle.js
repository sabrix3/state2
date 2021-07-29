import React, { useState } from 'react'

const Toggle = () => {
  const [toggle, setToggle] = useState(false)

  return(
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle Dropdown Markup</button>
      {toggle && (
        <ul>
          <li>Show me</li>
          <li>Only when</li>
          <li>Toggle === true</li>
        </ul>
      )}
    </>
  )
}

export default Toggle;