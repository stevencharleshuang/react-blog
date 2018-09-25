import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default function CreatedEntrySuccess(props) {
  // console.log('CreatedEntrySuccess props: ', props);
  // console.log('CreatedEntrySuccess user_id: ', props.location.state);
  const user = props.location.state;
  return (
    <div className="created-entry-success">
      <h1>Entry Successfully Created!</h1>
      <Link to={
        {
          pathname: `/user/${user.id}`,
          state: { user }
        }
      }>Back to user profile</Link>
    {/** Render Void
    */}
    </div>
  );
}
