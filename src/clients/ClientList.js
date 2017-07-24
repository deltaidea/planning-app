import React, { Component } from 'react';
import './ClientList.css';

export class ClientList extends Component {
  render() {
    return (
      <div className="client-list">
        <div className="header">My clients</div>
        <div className="section-header">E</div>
        <div className="client">Eddie Albert</div>
        <div className="client">Eddy Arnold</div>
        <div className="section-header">N</div>
        <div className="client">Neil Armstrong</div>
        <div className="client">Nils Asther</div>
        <div className="section-header">S</div>
        <div className="client">Stella Adler</div>
        <div className="client">Steve Allen</div>
      </div>
    );
  }
}
