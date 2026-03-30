import React from 'react'

function Link({item}) {
  return (
    <li className='mr-10'>
        <a href={item.path}>{item.name}</a>
    </li>
  )
}

export default Link