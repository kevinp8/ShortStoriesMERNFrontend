import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


type Props = {}

const Edit = (props: Props) => {

  const {storyId} = useParams()

  useEffect(() => {
    if (!localStorage.getItem("token")) window.location.replace("/login");
    else getStory()
  }, []);

  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [story, setStory] = useState('')

  async function getStory(){
    const req = await fetch(`http://localhost:8000/stories/${storyId}`);
    const data = await req.json()
    setTitle(data.story.title)
    setStatus(data.story.status)
    setStory(data.story.body)
  }

  async function editStory(e:any) {
    e.preventDefault()

    const req = await fetch(`https://tired-gaiters-worm.cyclic.app/stories/edit/${storyId}`, {
      method: 'PUT',
      headers: {
        "Content-Type": 'application/json',
        "x-access-token": localStorage.getItem("token") || '',
      },
      body: JSON.stringify({title: title, status:status, story: story})
    });

    const data = await req.json();
    if(data.status === 'ok'){
      window.location.assign('/story/${storyId}')
    } else alert(data.error)
  }

  return (
    <div>
      <h3>Add Story</h3>
      <div className="row">
        <form onSubmit={editStory} className="col s12">

          <div className="row">
            <div className="input-field">
              <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <label htmlFor="title">Title</label>
            </div>
          </div>

          <div className="row">
            <div className="">
              <p>
                <label >
                  <input name="status" type="radio" value='public' checked={status === 'public'} onChange={(e) => setStatus(e.target.value)}/>
                  <span>Public</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="status" type="radio" value='private' checked={status === 'private'} onChange={(e) => setStatus(e.target.value)} />
                  <span>Private</span>
                </label>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="input-field">
              <h5>Tell Us Your Story:</h5>
              <textarea id="body" name="body" value={story} onChange={(e) => setStory(e.target.value)}></textarea>
            </div>
          </div>

          <div className="row">
            <input type="submit" value="Save" className="btn" />
            <a href="/dashboard" className="btn orange">
              Cancel
            </a>
          </div>

        </form>
      </div>
    
    </div>
  );
}

export default Edit