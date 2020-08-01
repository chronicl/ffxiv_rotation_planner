import React from 'react'

export default function Action({ action, type }) {
  return (
    <div className="Action" style={{display: 'inline'}}>
    <img src={action.img_link} alt={action.name} className={type}/>
    </div>
  )
}
