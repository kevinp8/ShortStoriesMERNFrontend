import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

type Props = {}

const StoryPage = (props: Props) => {

  const {storyId} = useParams()

  const [story, setStory] = useState({
    title:'',
    body: '',
    createdAt: '',
    user: {
        displayName: '',
        _id: ''
    }
  })

  async function getStory(){
    const response = await fetch(`https://tired-gaiters-worm.cyclic.app/stories/${storyId}`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token") || "",
      },
    })
    const data = await response.json()
    
    if (data.status === 'ok') setStory(data.story)
    else alert('failed to load this story')
  }

  function formatDate(date: Date|string, format:string){
    return moment(date).format(format)
  }

  useEffect(() => {
    getStory()
  }, [])

  return (
    <div className="row">
    <div className="col s12 m8">
        <h3>{story.title}
        </h3>
        <div className="card story">
            <div className="card-content">
                <span className="card-title">{formatDate(story.createdAt, 'MMMM Do YYYY, h:mm:ss a')}</span>
                {story.body}
            </div>
        </div>
    </div>
    <div className="col s12 m4">
        <div className="card center-align">
            <div className="card-content">
                <span className="card-title">{story.user.displayName}</span>
            </div>
            <div className="card-action">
                <a href={`/user/${story.user._id}`}>More From {story.user.displayName}</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default StoryPage