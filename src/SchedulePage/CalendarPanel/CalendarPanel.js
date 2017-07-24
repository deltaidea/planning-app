import React, { Component } from 'react';

import './CalendarPanel.css';

import iconArrowLeft from './icon-arrow-left.png'
import iconArrowRight from './icon-arrow-right.png'

export default class CalendarPanel extends Component {
  render() {
    return (
      <div className="calendar-container">
        <div className="month-selection">
          <img src={iconArrowLeft} className="arrow"/>
          <span className="current-month">sep 2016</span>
          <img src={iconArrowRight} className="arrow"/>
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
            <tr>
              <td className="other-month">28</td>
              <td className="other-month">29</td>
              <td className="other-month">30</td>
              <td className="other-month">31</td>
              <td className="today">1</td>
              <td className="busy">2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td className="busy">7</td>
              <td>8</td>
              <td className="busy">9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>11</td>
              <td className="busy">12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
            </tr>
            <tr>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td className="busy">21</td>
              <td className="busy">22</td>
              <td>23</td>
              <td>24</td>
            </tr>
            <tr>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td className="other-month">1</td>
            </tr>
            <tr>
              <td className="other-month">2</td>
              <td className="other-month">3</td>
              <td className="other-month">4</td>
              <td className="other-month">5</td>
              <td className="other-month">6</td>
              <td className="other-month">7</td>
              <td className="other-month">8</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
