import React from "react";

export function UserIdDisplay({ user }) {
  return (
    <div>
      <div>{user.id}</div>
    </div>
  );
}

export function UserNameDisplay({ user }) {
  return (
    <div>
      <div id={user.id}> {user.name}</div>
    </div>
  );
}
