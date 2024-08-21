import React, { useState } from 'react';
import UserContext from './UserContext';

const UserproviderContext = ({children}) => {
    let [name, setName]=useState('Type you ID');
   
    return (
        <UserContext.Provider value={{name, setName}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserproviderContext;