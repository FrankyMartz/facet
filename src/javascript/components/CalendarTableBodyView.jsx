/** =========================================================================
 * CalendarTableBodyView
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');

var calendarDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var calendarMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var calendarMonths = ['January', 'February', 'March', 'April',
                     'May', 'June', 'July', 'August', 'September',
                     'October', 'November', 'December'];



// TODO: Create Iteration for creation table view rows + cells
var CalendarTableBodyView = React.createClass({
  render: function(){
    //var tableView = [];
    //for (var i = 6; i >= 0; i--) {
      //tableView.push();
    //}
    return (
      <tbody className="cal_table_body">
      </tbody>
    );
  }
});

module.exports = CalendarTableBodyView;
