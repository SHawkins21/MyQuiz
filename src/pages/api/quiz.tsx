import React from 'react'
import { api } from "y/utils/api";


const quiz = () => {

    const {data:qu} = api.question.getQuestions.useQuery()



  return (
    <div>

        {
                qu?.map(({id,question}) => (
                    <li key={id}>{question}</li>
                ))

        }



    </div>
  )
}

export default quiz