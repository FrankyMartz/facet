/** =========================================================================
 * NoteView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');
var NoteHead = require('./NoteHeadView.jsx');
var NoteList = require('./NoteListView.jsx');
var NoteFoot = require('./NoteFootView.jsx');

var NoteView = React.createClass({
  render: function(){
    return (
      <aside className="note">
        <div className="note-wrap">
          <NoteHead daySelected={this.props.daySelectedLink.value} />
          <NoteList notes={this.props.notes} />
        </div>
        <NoteFoot
          total={this.props.notes.length}
          daySelectedLink={this.props.daySelectedLink}
        />
      </aside>
    );
  }
});

module.exports = NoteView;
