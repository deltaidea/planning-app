import React, { Component } from 'react';
import _ from 'lodash';
import { ContentPanel, PanelHeader, PanelContent } from '../ContentPanel';

import './ClientList.css';

export class ClientList extends Component {
  groupByLetter() {
    // Group by first letter, convert to pairs [letter, clients], sort by letter.
    return _(this.props.clients).groupBy(x => x.name[0]).toPairs().sortBy(x => x[0]).value();
  }

  render() {
    return (
      <ContentPanel>
        <PanelHeader>My clients</PanelHeader>
        <PanelContent>
          {this.groupByLetter().map(([letter, clients]) => (
            <div key={letter} className="client-list-section">
              <div key={letter} className="section-header">{letter}</div>
              {clients.map(client => (
                <div key={client.id} className="client">{client.name}</div>
              ))}
            </div>
          ))}
        </PanelContent>
      </ContentPanel>
    );
  }
}
