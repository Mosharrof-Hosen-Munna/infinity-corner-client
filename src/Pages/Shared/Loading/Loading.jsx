import React from 'react'
import { Dna } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="container mx-auto ">
       <div className="flex justify-center items-center py-48">
         <Dna
           visible={true}
           height="250"
           width="250"
           ariaLabel="dna-loading"
           wrapperStyle={{}}
           wrapperClass="dna-wrapper"
         />
       </div>
     </div>
  )
}

export default Loading