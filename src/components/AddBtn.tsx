import React from "react";

type Props = {};

const AddBtn = (props: Props) => {
  return (
    <div className="fixed-action-btn">
      <a
        href="/addStory"
        className="btn-floating btn-large waves-effect waves-light blue"
      >
        <i className="fas fa-plus"></i>
      </a>
    </div>
  );
};

export default AddBtn;
