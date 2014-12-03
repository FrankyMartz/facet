/** =========================================================================
 * NoteFootView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');
var createDateID = require('../utils/DateUtils.jsx').createDateID;

var NoteFootView = React.createClass({

  render: function(){
    var total = this.props.total;
    return (
      <footer className="note_foot">
        <button className="note_foot_btn_today" onClick={this._onClick}>today</button>
        <span className="note_foot_count"><b>{total}</b> {length === 1 ? 'note' : 'notes'}</span>
      </footer>
    );
  },

  _onClick: function(){
    var now = Date.now();
    var date = createDateID(now);
    this.props.daySelectedLink.requestChange(date);
  }

});

module.exports = NoteFootView;
