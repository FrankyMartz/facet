/** =========================================================================
 * NoteListView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');
var NoteListItem = require('./NoteListItemView.jsx');

var NoteListView = React.createClass({
  render: function(){
    return (
      <ul className="note_list">{this._renderNoteList()}</ul>
    );
  },

  _renderNoteList: function(){
    var notes = this.props.notes.map(function(note){
      return (
        <NoteListItem note={note} />
      );
    });
    return notes;
  }

});

module.exports = NoteListView;
