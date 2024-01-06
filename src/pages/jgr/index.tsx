import React from 'react'
import { useRouter } from 'next/router'
export default function index() {
 const Router=useRouter();
 const user=Router.query;
 

  return (
    <div>
               {user.name}<br/>
               {user.email}
               
             
    </div>
  )
}
