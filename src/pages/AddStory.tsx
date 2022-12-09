import React, { useState, useEffect } from "react";

type Props = {};

const AddStory = (props: Props) => {

  useEffect(() => {
    if (!localStorage.getItem("token")) window.location.replace("/login");
  }, []);

  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('public')
  const [story, setStory] = useState('')


  async function addStory(e:any) {
    e.preventDefault()

    //implement post request to add a story
    const req = await fetch("https://tired-gaiters-worm.cyclic.app/stories/createStory", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "x-access-token": localStorage.getItem("token") || '',
      },
      body: JSON.stringify({title: title, status:status, story: story})
    });

    const data = await req.json();
    if(data.status === 'ok'){
      window.location.assign('/dashboard')
    } else alert(data.error)
  }

  return (
    <div>
      <h3>Add Story</h3>
      <div className="row">
        <form onSubmit={addStory} className="col s12">

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
                  <input name="status" type="radio" value='public' defaultChecked onChange={(e) => setStatus(e.target.value)}/>
                  <span>Public</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="status" type="radio" value='private' onChange={(e) => setStatus(e.target.value)} />
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
            <input type="submit" value="Submit" className="btn" />
            <a href="/dashboard" className="btn orange">
              Cancel
            </a>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddStory;
