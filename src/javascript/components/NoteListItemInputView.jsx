/** =========================================================================
 * NoteListItemInputView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');
var NoteActions = require('../actions/NoteActions.jsx');

var NoteListItemInputView = React.createClass({

  //TODO: Connect with Parent. Parent should store state.
  render: function(){
    return (
      <input
        className="note_list_item_edit"
        type="text"
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.props.message}
        autoFocus={true}
      />
    );
  },

  // TODO: Maybe set Update Action
  _save: function(){
    return;
  },

  _onChange: function(){
    this._save(this.props.message);
  },

  _onKeyDown: function(event){
    if (event.key === 'Enter') {
      this._save();
    }
  }



});

module.exports = NoteListItemInputView;
