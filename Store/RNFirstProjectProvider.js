import React, { useState } from "react";
import RNFirstProjectContext from "./RNFirstProjectContext";
const RNFirstProjectProvider = (props) => {

    const [scree1_c, setScreen1_c] = useState(0)
    const [scree2_c, setScreen2_c] = useState(0)

    const providerValue = {
        scree1_c,
        setScreen1_c,
        scree2_c,
        setScreen2_c
    }

    return (
        <RNFirstProjectContext.Provider value={providerValue}>
            {props.children}
        </RNFirstProjectContext.Provider>
    )

}

export default RNFirstProjectProvider;
