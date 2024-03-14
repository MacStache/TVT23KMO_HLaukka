import React from 'react'

export default function Logout({setUser}) {
    setUser(null);
    return (
    <div>You have logged out</div>
  )
}
