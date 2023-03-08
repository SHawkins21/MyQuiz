import {type NextPage } from 'next'
import React from 'react'
import { api } from "../../utils/api"; 



const MyNote: NextPage = () => {
 const {data, isError, isLoading} = api.my_note.allNotes.useQuery(undefined)

    if (isLoading)
        return <div> 
            Loading...
        </div>
    if (isError)
        console.log(isError); 
        return <div>Error</div>

    
return (
    <div>
          {
        data?.map(({id,title, Catagories}) =>(
                <div key={id}>
                    <h1>{title}</h1>
                    {/* <p> {new Date(createdAt).getFullYear()} </p> */}
                    {/* <h6>Category:{catagories}</h6> */}
                    
                    <p>
                        {
                                Catagories?.map(({title}) => (

                                    <p key={title}>{title}</p>
                                ))


                        }



                    </p>
            

             </div>
            ))
          }
    </div>
    
)
}

export default MyNote