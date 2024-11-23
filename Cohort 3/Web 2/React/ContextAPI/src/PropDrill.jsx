import React from 'react'
// **Prop drilling** occurs when you need to pass data from a higher-level component down to a lower-level component that is several 
// layers deep in the component tree. This often leads to the following issues:

// - **Complexity:** You may have to pass props through many intermediate components that don’t use the props themselves, just to get 
// them to the component that needs them.
// - **Maintenance:** It can make the code harder to maintain, as changes in the props structure require updates in multiple components.
import React, { useState } from "react";

function Parent() {
    const [fName, setfName] = useState("firstName");
    const [lName, setlName] = useState("LastName");
    return (
        <>
            <div>This is a Parent component</div>
            <br />
            <ChildA fName={fName} lName={lName} />
        </>
    );
}

function ChildA({ fName, lName }) {
    return (
        <>
            This is ChildA Component.
            <br />
            <ChildB fName={fName} lName={lName} />
        </>
    );
}

function ChildB({ fName, lName }) {
    return (
        <>
            This is ChildB Component.
            <br />
            <ChildC fName={fName} lName={lName} />
        </>
    );
}

function ChildC({ fName, lName }) {
    return (
        <>
            This is ChildC component.
            <br />
            <h3> Data from Parent component is as follows:</h3>
            <h4>{fName}</h4>
            <h4>{lName}</h4>
        </>
    );
}

export default Parent;