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
    var list = this._getNoteList();
    var total = list.length;
    return (
      <aside className="note">
        <div className="note-wrap">
          <NoteHead daySelected={this.props.daySelectedLink.value} />
          <NoteList notes={list} />
        </div>
        <NoteFoot
          total={total}
          daySelectedLink={this.props.daySelectedLink}
        />
      </aside>
    );
  },

  _getNoteList: function(){
    var notes = this.props.notes;
    var day = this.props.daySelectedLink.value;
    var list = [];
    var id;
    for (id in notes){
      if (notes[id].listID === day) {
          list.push(notes[id]);
      }
    }
    return list;
  }
});

module.exports = NoteView;
