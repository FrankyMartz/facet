/** =========================================================================
 * CalendarTableView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');
var CalendarTableBodyView = require('./CalendarTableBodyView.jsx');

var CalenderTableView = React.createClass({
  render: function() {
    return (
      <table className="cal_table">
        <colgroup>
          <col className="cal_table_col-edge"/>
          <col span="5"/>
          <col className="cal_table_col-edge"/>
        </colgroup>
        <thead className="cal_table_head">
          <tr>
            <th>sun</th>
            <th>mon</th>
            <th>tue</th>
            <th>wed</th>
            <th>thu</th>
            <th>fri</th>
            <th>sat</th>
          </tr>
        </thead>
        <CalendarTableBodyView {...this.props} />
      </table>
    );
  }
});

module.exports = CalenderTableView;
