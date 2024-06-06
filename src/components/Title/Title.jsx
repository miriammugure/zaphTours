import React from 'react'
import "./Title.css"
function Title({titleName}) {
  return (
    <div>
      <div className="title">
        <div className="titlename">
            <h2>{titleName}</h2>
        </div>
      </div>
    </div>
  )
}

export default Title
