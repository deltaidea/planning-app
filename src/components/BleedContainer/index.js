import React from 'react';

export default props => <div {...props} style={{
  display: 'flex',
  flex: 1
}}>{props.children}</div>;
