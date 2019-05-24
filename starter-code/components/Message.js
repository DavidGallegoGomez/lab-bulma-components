import React from 'react';

const Message = (props) => (
  <div className="container">
   <article className="message">
      <div className="message-header">
        <p>Hello World</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.children}
      </div>
    </article>
  </div>
)

export default Message