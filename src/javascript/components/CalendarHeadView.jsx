/** =========================================================================
 * CalendarHeaderView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');
var DateUtils = require('../utils/DateUtils.jsx');

var CalendarHeaderView = React.createClass({
  render: function() {
    return (
      <header className="cal_head">
          <button className="cal_head_btn cal_head_btn-last hidden">
            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <title>arrow_left</title>
              <path className="cal_head_btn_arrow" d="M21.822.746v21.31L.542 11.4 21.822.747z"/>
            </svg>
          </button>
          {this._renderHeaderTitle()}
          <button className="cal_head_btn cal_head_btn-next hidden">
            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <title>arrow_right</title>
              <path className="cal_head_btn_arrow" d="M.21.746v21.31L21.49 11.4.21.747z"/>
            </svg>
          </button>
      </header>
    );
  },

  _renderHeaderTitle: function(){
    var date = new Date(this.props.daySelected);
    var month = DateUtils.getMonthString(date);
    var year = DateUtils.getYear(date);
    return (
      <span className="cal_head_title">{month} <i>{year}</i></span>
    );
  }

});

module.exports = CalendarHeaderView;
