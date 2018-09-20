import React from 'react';
import { Link } from 'react-router-dom';

export default function CreatedEntrySuccess(props) {
  // console.log('CreatedEntrySuccess props: ', props);
  // console.log('CreatedEntrySuccess user_id: ', props.location.state);
  console.log('CreatedEntrySuccess props:', props);
  return (
    <div className="created-entry-success">
      <h1>Entry Successfully Created!</h1>
      <Link to={props.history.goBack()}>Back to user profile</Link>
    {/** Render Void
    */}
    </div>
  );
}
