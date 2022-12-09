import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Story from '../components/Story'

type Props = {}

const User = (props: Props) => {

  const {userId} = useParams()

  const [stories, setStories] = useState([]);
  const [user, setUser] = useState({
    displayName: ''
  })

  async function getStories() {
    const response = await fetch(`https://tired-gaiters-worm.cyclic.app/stories/user/${userId}`);

    const data = await response.json();

    if (data.status === "ok") {setStories(data.stories); setUser(data.user);}
    else alert(data.error);
  }

  useEffect(() => {
    getStories()
  }, [])
  

  return (
    <div className='row'>
      <h1>{user.displayName}'s Stories</h1>
      {stories.length ? (
          stories.map((story: any) => <Story story={story} user={user} key={story._id} />)
        ) : (
          <h1>No Stories Found</h1>
        )}
    </div>
  )
}

export default User