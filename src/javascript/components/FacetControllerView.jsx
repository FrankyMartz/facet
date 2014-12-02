/** =========================================================================
 * FacetControllerView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */

var React = require('react/addons');
var Calendar = require('./CalendarView.jsx');
var Notes = require('./NoteView.jsx');
var NoteStore = require('../stores/NoteStore.jsx');
var createDateID = require('../utils/DateUtils.jsx').createDateID;

/* Helper Functions ----------------------------------------------------------*/
function getNoteStoreState(){
  return {
    allNotes: NoteStore.getAll()
  }
}

function getNoteList(listID, notes) {
  var list = [];
  var note, id;
  for (id in notes) {
    if (notes.isOwnProperty(id)) {
      note = notes[id];
      if (note.listID === listID) {
        list.push(note);
      }
    }
  }
  return list;
}


/* Facet App -----------------------------------------------------------------*/
var FacetApp = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return {
      allNotes: NoteStore.getAll(),
      daySelected: createDateID()
    };
  },

  componentDidMount: function(){
    NoteStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    NoteStore.removeChangeListener(this._onChange);
  },

  render: function(){
    var noteList = getNoteList(this.state.daySelected, this.state.allNotes);
    return (
      <div className="app">
        <Calendar />
        <Notes notes={noteList} daySelected={this.state.daySelected} />
      </div>
    );
  },
        //<Calendar allNotes={this.state.allNotes} daySelectedLink={this.linkState('daySelected')} />

  _onChange: function(){
    this.setState(getNoteStoreState());
  }

});

module.exports = FacetApp;
