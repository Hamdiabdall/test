import React from 'react'

const UserInfo = ({name,age,location,phone}) => {
  return (
    <div>
      <ul className='container'>
        <li>{name}</li>
        <li>{age}</li>
        <li>{location}</li>
        <li>{phone}</li>
      </ul>
    </div>
  )
}

export default UserInfo
