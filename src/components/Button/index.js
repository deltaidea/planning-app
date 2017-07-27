import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
  if (props.to) {
    return <Link {...props} className={'button ' + props.type}>{props.children}</Link>;
  } else {
    return <span {...props} className={'button ' + props.type}>{props.children}</span>;
  }
}

export const PrimaryButton = props => <Button {...props} type="primary"/>;
export const SecondaryButton = props => <Button {...props} type="secondary"/>;

export const IconButton = props => {
  if (props.to) {
    return <Link to={props.to}><img {...props} className={'icon-button ' + props.className || ''} alt={props.alt || ''}/></Link>;
  } else {
    return <img {...props} className={'icon-button ' + props.className || ''} alt={props.alt || ''}/>;
  }
}
