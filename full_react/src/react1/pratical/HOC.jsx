import React from "react";

function Withborder(Wrappedcomponet) {
    return function Enhanced(props) {
        return (
            <div style={{ border: "2px solid black", padding: "10px" }}>
                <Wrappedcomponet {...props}/>
            </div>
        )
    }
}


function Box(props) {
    return <p>{props.text }</p>
}

const BoxwithBorder = Withborder(Box)

export default function App() {
    return <BoxwithBorder text="This is inside a border!" />
}