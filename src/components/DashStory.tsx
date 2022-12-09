import React from "react";
import moment from 'moment'

type Props = {
  story:any
};

const DashStory = ({story}: Props) => {

  async function deleteStory(e:any){
    e.preventDefault()

    const response = await fetch(`https://tired-gaiters-worm.cyclic.app/stories/delete/${story._id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token") || "",
      },
    })
    const data = await response.json()
    if (data.status === 'ok') {
      alert('story deleted')
      window.location.href = '/dashboard'
    }
    else alert('failed to delete story')
  }

  function formatDate(date: Date, format:string){
    return moment(date).format(format)
  }

  return (
    <tr>
      <td>
        <a href={`/story/${story._id}`}>{story.title}</a>
      </td>
      <td>{formatDate(story.createdAt, 'MMMM Do YYYY, h:mm:ss a')}</td>
      <td>
        <span className="dash-status">{story.status}</span>
      </td>
      <td>
        <a href={`/edit/${story._id}`} className="btn btn-float">
          <i className="fas fa-edit"></i>
        </a>

        <form onSubmit={deleteStory} id="delete-form">
          <input type="hidden" name="_method" value="DELETE" />
          <button className="btn red" type="submit">
            <i className="fas fa-trash"></i>
          </button>
        </form>

      </td>
    </tr>
  );
};

export default DashStory;
