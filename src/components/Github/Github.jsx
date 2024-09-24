import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'

function Github() {
    const data = useLoaderData()

  return (
    <>
    <div className="container">
        <h2>Github Followers : {data.followers}</h2>
        <img src={data.avatar_url} alt="" height="300" width="300"/>
    </div>
    </>
  )
}

export default Github

export const getGithubInfo = async () => {
    const res = await fetch(`https://api.github.com/users/prashrijan`)
    return res.json()
}