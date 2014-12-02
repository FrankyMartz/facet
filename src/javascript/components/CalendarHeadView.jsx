/** =========================================================================
 * CalendarHeaderView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');

var CalendarHeaderView = React.createClass({
  render: function() {
    return (
      <header className="cal_head">
          <button className="cal_head_btn cal_head_btn-last">
            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <title>arrow_left</title>
              <path className="cal_head_btn_arrow" d="M21.822.746v21.31L.542 11.4 21.822.747z"/>
            </svg>
          </button>
          <span className="cal_head_title">November <i>2014</i></span>
          <button className="cal_head_btn cal_head_btn-next">
            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <title>arrow_right</title>
              <path className="cal_head_btn_arrow" d="M.21.746v21.31L21.49 11.4.21.747z"/>
            </svg>
          </button>
      </header>
    );
  }
});

module.exports = CalendarHeaderView;
