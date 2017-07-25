import React, { Component } from 'react';
import _ from 'lodash';
import './ClientList.css';

export class ClientList extends Component {
  groupByLetter() {
    // Group by first letter, convert to pairs [key, array], sort by [0] to get guaranteed alphabetical order.
    return _(this.props.clients).groupBy(x => x.name[0]).toPairs().sortBy(x => x[0]).value();
  }

  render() {
    return (
      <div className="client-list">
        <div className="header">My clients</div>
        {this.groupByLetter().map(section => (
          <div key={section[0]}>
            <div key={section[0]} className="section-header">{section[0]}</div>
            {section[1].map(client => (
              <div key={client.id} className="client">{client.name}</div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
