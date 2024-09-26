import React from "react"

const Counter = (props) => {
  return (
    <div className="w-100">
        <h1 className="text-center">Simple Counter</h1>
        <p className="text-center">
            {props.count}
        </p>
    </div>
  )
}

export default Counter