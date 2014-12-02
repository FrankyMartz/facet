/** =========================================================================
 * NoteFootView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');

var NoteFootView = React.createClass({
  render: function(){
    return (
      <footer className="note_foot">
        <button className="note_foot_btn_today">today</button>
        <span className="note_foot_count"><strong>2</strong> notes</span>
      </footer>
    );
  }
});

module.exports = NoteFootView;
