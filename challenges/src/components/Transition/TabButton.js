import React, { useTransition } from 'react';

function TabButton({children,onClick}) {
    const [isPending,startTransition]=useTransition();
    return (
        <button onClick={() => startTransition(()=>{
            onClick()
        })}>{children}</button>
    );
}

export default TabButton;