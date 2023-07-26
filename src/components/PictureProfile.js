import React from "react";

function ProfilePicture(props) {
  return (
    <img
      src={props.obj}
      className="rounded-circle border border-danger border-2 "
      height={45}
      width={45}
      alt="profil"
    />
  );
}

export default ProfilePicture;
