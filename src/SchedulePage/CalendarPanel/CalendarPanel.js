import React, { Component } from 'react';
import classNames from 'classnames';
import { parseDate, formatMoment } from '../../redux/calendar';

import './CalendarPanel.css';
import iconArrowLeft from './icon-arrow-left.png'
import iconArrowRight from './icon-arrow-right.png'

export default class CalendarPanel extends Component {
  getOtherMonth(direction) {
    const addOrSubtract = (direction === -1) ? 'subtract' : 'add';
    return parseDate(this.getDate())[addOrSubtract](1, 'month');
  }

  getDate() {
    return this.props.calendar.selectedDate;
  }

  getTodayDate() {
    return this.props.calendar.todayDate;
  }

  getMonthBoundaries(date) {
    return {
      start: parseDate(date).startOf('month').startOf('week'),
      end: parseDate(date).startOf('month').startOf('week').add(6, 'week')
    };
  }

  renderDay(day) {
    return (
      <td onClick={() => this.props.goToDate(day)} className={classNames({
        'busy': this.props.meetings.some(x => x.date === formatMoment(day)),
        'highlighted today': this.getTodayDate() === formatMoment(day),
        'highlighted selected': this.getDate() === formatMoment(day),
        'other-month': parseDate(this.getDate()).month() !== day.month()
      })}>{day.date()}</td>
    );
  }

  renderWeek(monday) {
    return (
      <tr key={formatMoment(monday)}>
        {this.renderDay(monday)}
        {this.renderDay(monday.clone().add(1, 'day'))}
        {this.renderDay(monday.clone().add(2, 'day'))}
        {this.renderDay(monday.clone().add(3, 'day'))}
        {this.renderDay(monday.clone().add(4, 'day'))}
        {this.renderDay(monday.clone().add(5, 'day'))}
        {this.renderDay(monday.clone().add(6, 'day'))}
      </tr>
    );
  }

  renderAllWeeks(boundaries) {
    const rows = [];
    let curMonday = boundaries.start.clone();

    while (curMonday.isBefore(boundaries.end)) {
      rows.push(this.renderWeek(curMonday));
      curMonday = curMonday.add(7, 'days');
    }

    return rows;
  }

  render() {
    const boundaries = this.getMonthBoundaries(this.getDate());

    return (
      <div className="calendar-container">
        <div className="month-selection">
          <img src={iconArrowLeft} onClick={() => this.props.goToDate(this.getOtherMonth(-1))} className="arrow"/>
          <span className="current-month">{parseDate(this.getDate()).format('MMM YYYY')}</span>
          <img src={iconArrowRight} onClick={() => this.props.goToDate(this.getOtherMonth(1))} className="arrow"/>
        </div>

        <table className="calendar">
          <thead>
            <tr>
              <td>mon</td>
              <td>tue</td>
              <td>wed</td>
              <td>thu</td>
              <td>fri</td>
              <td>sat</td>
              <td>sun</td>
            </tr>
          </thead>
          <tbody>
            {this.renderAllWeeks(boundaries)}
          </tbody>
        </table>
      </div>
    );
  }
}
