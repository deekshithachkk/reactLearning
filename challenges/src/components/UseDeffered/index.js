import { jsonData } from 'constant';
import React, { Suspense, useEffect, useState } from 'react';

function UseDeffered() {

    const [searchText,setSearchText]=useState('deekshitha');
    const HandleSearch=()=>{

        return <h3>{jsonData.find(item=>item.toLocaleLowerCase()==searchText.toLowerCase())}</h3>
        
    }
    function use(promise) {
        if (promise.status === 'fulfilled') {
          return promise.value;
        } else if (promise.status === 'rejected') {
          throw promise.reason;
        } else if (promise.status === 'pending') {
          throw promise;
        } else {
          promise.status = 'pending';
          promise.then(
            result => {
              promise.status = 'fulfilled';
              promise.value = result;
            },
            reason => {
              promise.status = 'rejected';
              promise.reason = reason;
            },      
          );
          throw promise;
        }
      }
      
    return (
        <div>
            <input placeholder='search the data' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <Suspense fallback={<h2>Loading.....</h2>}>
            <HandleSearch />
        </Suspense>
        
        </div>
    );
}

export default UseDeffered;