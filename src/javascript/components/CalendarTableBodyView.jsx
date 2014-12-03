/** =========================================================================
 * CalendarTableBodyView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');
var DateUtils = require('../utils/DateUtils.jsx');
var CalendarTableCell = require('./CalendarTableBodyCellView.jsx');


var CalendarTableBodyView = React.createClass({
  render: function(){
    return (
      <tbody className="cal_table_body">
        {this._renderCalendar()}
      </tbody>
    );
  },

  _renderCalendar: function(){
    var calendar = [];
    var calendarRow;
    var rowTotal = 6;
    var columnTotal = 7;
    var day = 0;
    var row, cell;

    var dateRef = new Date(this.props.daySelectedLink.value);
    var month = DateUtils.getMonth(dateRef);
    var year = DateUtils.getYear(dateRef);
    var monthFirstDay = DateUtils.getMonthStartDay(dateRef);
    var monthLength = DateUtils.getMonthLength(dateRef);
    //var prevMonthLength = DateUtils.getMonthLength(dateRef, -1);

    for (row = 0; row < rowTotal; row++) {
      calendarRow = []; // Reset for new row

      for (cell = 0; cell < columnTotal; cell++) {
        // Start day in right place
        if ((row === 0) && (cell === monthFirstDay)) {
          day = 1;
        }
        // Stop day in right place
        if (day > monthLength){
          day = null;
        }

        calendarRow.push(
          <CalendarTableCell 
            day={day ? day : false} 
            date={day ? this._createDate(year, month, day) : false} 
            isVoid={!day}
            daySelectedLink={this.props.daySelectedLink}
          />
        );

        if (day) {
          day += 1;
        }
      }
      // Add row to Calender
      calendar.push(this._renderCalendarRow(calendarRow));
      if (!day) {
        break;
      }
    }
    return calendar;
  },

  _renderCalendarRow: function(days){
    return (
      <tr>
        {days}
      </tr>
    );
  },

  _createDate: function(year,month,day){
    var date = new Date(year,month,day);
    return date.getTime();
  }

});

module.exports = CalendarTableBodyView;
