import React, { useState, useEffect } from "react";
import AddBtn from "../components/AddBtn";
import Navbar from "../components/Navbar";
import Story from "../components/Story";

type Props = {};

const PublicStories = (props: Props) => {
  const [stories, setStories] = useState([]);
  const [user, setUser] = useState('')

  async function getStories() {
    const response = await fetch("https://tired-gaiters-worm.cyclic.app/stories/feed");

    const data = await response.json();

    if (data.status === "ok") setStories(data.stories);
    else alert(data.error);
  }

  async function getStoriesAuthed() {
    const response = await fetch("https://tired-gaiters-worm.cyclic.app/stories/userFeed", {
      headers: {
        "Content-Type": 'application/json',
        "x-access-token": localStorage.getItem("token") || '',
      }
    });

    const data = await response.json();

    if (data.status === "ok") {
      setStories(data.stories);
      setUser(data.currentUser)
    }
    else alert(data.error);
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) getStories();
    else getStoriesAuthed()
  }, []);

  return (
    <div>
      <AddBtn />
      <div className="row">
        {stories.length ? (
          stories.map((story: any) => <Story story={story} user={user} key={story._id} />)
        ) : (
          <h1>No Stories Found</h1>
        )}
      </div>
    </div>
  );
};

export default PublicStories;
