/** =========================================================================
 * NoteActions.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */

var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var NoteConstants = require('../constants/NoteConstants.jsx');

var NoteActions = {

  create: function(listID, note){
    AppDispatcher.handleViewAction({
      actionType: NoteConstants.NOTE_CREATE,
      listID: listID,
      note: note
    });
  },

  delete: function(id){
    AppDispatcher.handleViewAction({
      actionType: NoteConstants.NOTE_DELETE,
      id: id
    });
  },

  update: function(id, text){
    AppDispatcher.handleViewAction({
      actionType: NoteConstants.NOTE_UPDATE,
      id: id,
      text: text
    });
  }

};

module.exports = NoteActions;
