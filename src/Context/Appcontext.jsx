import React, { createContext } from 'react';

// Create the context
export const Appcontext = createContext();

const ContextProvider = (props) => {
    const phone = "961657632";
    //try to pass the multiple values
    const name="Abhiyuday"
    
    return (
        // <Appcontext.Provider value={phone}>
        //for passing multiple values we use objects inside value to pass it.i.e.double {{}}
        <Appcontext.Provider value={{phone,name}}>   
            {props.children}
        </Appcontext.Provider>
    );
}

export default ContextProvider;
