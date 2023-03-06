import { NextPage } from 'next';
import {useRouter} from "next/router";
import React from 'react';


const NoteDetail: NextPage = () => {
    const router = useRouter()
    const NotesId = router.query.id as string
  return (
    <div> {NotesId} </div>
  )
}

export default NoteDetail 