/** =========================================================================
 * NoteHeadView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');
var DateUtils = require('../utils/DateUtils.jsx');
var NoteActions = require('../actions/NoteActions.jsx');

/* NoteHeadView --------------------------------------------------------------*/
var NoteHeadView = React.createClass({

  render: function(){
    return (
      <header className="note_head">
        {this._renderHeaderDate()}
        <button className="note_head_btn_add" onClick={this._onClick}>+</button>
      </header>
    );
  },
  
  _onClick: function(){
    var listID = DateUtils.createDateID(this.props.daySelected);
    NoteActions.create(listID);
  },

  _renderHeaderDate: function(){
    var date = new Date(this.props.daySelected);
    var dayName = DateUtils.getDayString(date);
    var monthName = DateUtils.getMonthString(date).slice(0,3);
    var day = DateUtils.getDay(date);
    var year = DateUtils.getYear(date);
    return (
      <time dateTime={date.toString()}><b>{dayName}</b> {monthName} {day}, {year}</time>
    );
  }

});

module.exports = NoteHeadView;
