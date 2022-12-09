import React, { useEffect, useState } from "react";
import AddBtn from "../components/AddBtn";
import DashStory from "../components/DashStory";

type Props = {};

const Dashboard = (props: Props) => {
  const [stories, setStories] = useState([]);
  const [user, setUser] = useState("");

  async function dashboardData() {
    const response = await fetch("https://tired-gaiters-worm.cyclic.app/stories/dashboard", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token") || "",
      },
    });
    const data = await response.json();
    setStories(data.stories);
    setUser(data.user.displayName);
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) window.location.replace("/login");
    else dashboardData();
  }, []);

  return (
    <div>
      <h4>Dashboard</h4>
      <h3>Welcome {user}</h3>
      <p>Here are your stories</p>
      {stories.length ? (
        <table className="striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{stories.map((story:any) => <DashStory key={story._id} story={story} />)}</tbody>
        </table>
      ) : (
        <p>You have not created any stories</p>
      )}

      <AddBtn />
    </div>
  );
};

export default Dashboard;
