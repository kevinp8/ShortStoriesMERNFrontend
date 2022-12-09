import React from 'react'

type Props = {
  story: any;
  user: any;
}

const Story = ({story, user}: Props) => {

  function onlyShow(str:string, len:number){
    str.replace(/<(?:.|\n)*?>/gm, '')
    if (str.length > len && str.length > 0) {
      let new_str = str + ' '
      new_str = str.substr(0, len)
      new_str = str.substr(0, new_str.lastIndexOf(' '))
      new_str = new_str.length > 0 ? new_str : str.substr(0, len)
      return new_str + '...'
    }
    return str
  }

  return (
    <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    {//show edit icon if story.user._id equal to current user._id
                    story.user.email === user ? <a href={`/edit/${story._id}`} className="btn-floating halfway-fab blue"><i className="fas fa-edit fa-small"></i></a> : null
                    }
                </div>
                <div className="card-content center-align">
                    <h5>{story.title}</h5>
                    <p>{onlyShow(story.body, story.body.length)}</p>
                    <br/>
                    <div className="chip">
                        <a href={`/user/${story.user._id}`}>{story.user.displayName}</a>
                    </div>
                </div>
                <div className="card-action center-align">
                    <a href={`/story/${story._id}`} className="btn grey">Read More</a>
                </div>
            </div>
        </div>
  )
}

export default Story