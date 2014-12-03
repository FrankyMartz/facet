/** =========================================================================
 * CalendarTableBodyCellView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react/addons');
var cx = React.addons.classSet;
var getMonthString = require('../utils/DateUtils.jsx').getMonthString;


var CalendarTableBodyCellView = React.createClass({
  
  render: function(){
    var today = new Date().getDate();
    var classes = cx({
      'cal_table_body_day': !this.props.isVoid && (this.props.day !== today),
      'cal_table_body_day-today': this.props.day === today,
      'cal_table_body_day-void': this.props.isVoid
    });
    var day = this.props.day;
    var month = '';
    if (day === 1 && day !== today) {
      month = getMonthString(this.props.date).slice(0,3);
    }
    return this._renderCell(
      <span className={classes}>
        {month} {day}
      </span>
    );
  },

  _onClick: function(){
    this.props.daySelectedLink.requestChange(this.props.date);
  },

  _renderCell: function(content){
    if (this.props.isVoid) {
      return (<td>{content}</td>);
    }
    return (<td className="cursor-pointer" onClick={this._onClick}>{content}</td>);
  }

});

module.exports = CalendarTableBodyCellView;
