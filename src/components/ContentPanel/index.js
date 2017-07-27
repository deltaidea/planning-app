import React from 'react';

import './ContentPanel.css';

export const ContentPanel = props => <div className="content-panel">{props.children}</div>;
export const PanelHeader = props => <div className="header">{props.children}</div>;
export const PanelContent = props => <div className="content">{props.children}</div>;
