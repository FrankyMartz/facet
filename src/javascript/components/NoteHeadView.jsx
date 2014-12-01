/** =========================================================================
 * NoteHeadView
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');

var NoteHeadView = React.createClass({
  render: function(){
    return (
      <header className="note_head">
        <time datetime=""><b>Monday</b> Nov 23, 2014</time>
        <button className="note_head_btn_add">+</button>
      </header>
    );
  }
});

module.exports = NoteHeadView;
