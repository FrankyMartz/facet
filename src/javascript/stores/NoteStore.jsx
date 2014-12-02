/** =========================================================================
 * NoteStore.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */

var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/NoteConstants.jsx');
var merge = require('object-assign');


/* Global --------------------------------------------------------------------*/
//var NOTE_LOCAL_STORAGE = 'notes';
var CHANGE_EVENT = 'change';
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
var NoteStore = merge(EventEmitter.prototype, {

  getAll: function(){
    return _notes;
  },

  getNote: function(id){
    return _notes[id];
  },

  getNoteList: function(listID){
    var noteList = [];
    var note, id;
    for (id in _notes) {
      if (_notes.isOwnProperty(id)) {
        note = _notes[id];
        if (note.listID === listID) {
          noteList.push(note);
        }
      }
    }
    return noteList;
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action;

    switch (action.actionType) {

      case TodoConstants.NOTE_CREATE:
        createNote(action.listID, action.note);
        break;
      
      case TodoConstants.NOTE_DELETE:
        deleteNote(action.id);
        break;
      
        case TodoConstants.NOTE_UPDATE:
          updateNote(action.id, action.text);
        break;
      
      default:
        return true;
    }
    NoteStore.emitChange();
    return true;
  })
});

module.exports = NoteStore;
