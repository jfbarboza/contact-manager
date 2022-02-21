import React from 'react'
import { useParams } from 'react-router-dom';

export default (props) => {
    let params = useParams();
  return (
    <div>
        <h1 className='display-4'>{params.id}</h1>
        <p className='lead'>Simple app to manage contacts</p>
        <p className="text-secondary">Version 1.0.0</p>
    </div>
  )
}
