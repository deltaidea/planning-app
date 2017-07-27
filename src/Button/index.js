import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

export const PrimaryButton = props => <Link {...props} className="button primary">{props.children}</Link>;
export const SecondaryButton = props => <Link {...props} className="button secondary">{props.children}</Link>;
