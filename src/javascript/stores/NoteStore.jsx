/** =========================================================================
 * NoteStore.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */

var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var NoteConstants = require('../constants/NoteConstants.jsx');
var CHANGE_EVENT = 'change';

/* Global --------------------------------------------------------------------*/
//var NOTE_LOCAL_STORAGE = 'notes';
var _notes = {};


/* Helper Function -----------------------------------------------------------*/
function createNote(listID, note) {
  //var rawNotes = JSON.parse(localStorage.getItem(NOTE_LOCAL_STORAGE));
  var id = Date.now();
  var newNote = {
    id: id,
    listID: note.listID,
    text: note.text
  };
  _notes[id] = newNote;
  //rawNotes.push(newNote);
  //localStorage.setItem(NOTE_LOCAL_STORAGE, JSON.stringify(rawNotes));
}

function deleteNote(id) {
  delete _notes[id];
}

function updateNote(id, text) {
  var note = _notes[id];
  note.text = text;
}


/* NoteStore -----------------------------------------------------------------*/
var NoteStore = assign({}, EventEmitter.prototype, {

  getAll: function(){
    return _notes;
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  }

});


NoteStore.dispatcherToken = AppDispatcher.register(function(payload){
  var action = payload.action;

  switch (action.actionType) {

    case NoteConstants.NOTE_CREATE:
      createNote(action.listID, action.note);
      NoteStore.emitChange();
      break;
    
    case NoteConstants.NOTE_DELETE:
      deleteNote(action.id);
      NoteStore.emitChange();
      break;
    
    case NoteConstants.NOTE_UPDATE:
      updateNote(action.id, action.text);
      NoteStore.emitChange();
    break;
    
    default:
      // do nothing
  }
  
});

module.exports = NoteStore;
