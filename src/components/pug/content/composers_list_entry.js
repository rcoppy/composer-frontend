import React from 'react';

const ComposersListEntry = (props) => <> 
    <a className="composers-list-entry" href={props.composer_url}>
      <div className="img-container">
        <img src={props.avatar_url}></img>
      </div>
      <div className="text-copy">
        <h3>{props.composer_name}</h3>
        <p>{props.composer_bio}</p>
      </div>
    </a>
</>;

export default ComposersListEntry;
    
    