/** =========================================================================
 * NoteListItemView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react/addons');
var NoteActions = require('../actions/NoteActions.jsx');
//var cx = React.addons.classSet;

var NoteListItemView = React.createClass({

  getInitialState: function() {
      return {
        inEdit: false,
        value: this.props.message
      };
    },
  

  render: function(){
    return (
      <li>
        <div className="note_list_item">
          <label className="note_list_item_label" onDoubleClick={this._onDoubleClick}>{this.props.message}</label>
          <button className="note_list_item_btn_del" onClick={this._onDeleteClick} >&times;</button>
        </div>
        <input
          className="note_list_item_edit"
          type="text"
          placeholder="Say Something."
          onBlur={this._save}
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
          value={this.props.message}
          autoFocus={true}
        />
      </li>
    );
  },

  _save: function(){
    NoteActions.update(this.props.key, this.props.message);
    this.setState({inEdit: false});
  },

  _onChange: function(event){
    this.setState({
      value: event.target.value
    });
  },

  _onKeyDown: function(event){
    if (event.key === 'Enter') {
      this._save();
    }
  },

  _onDoubleClick: function() {
    this.setState({inEdit: true});
  },

  _onDeleteClick: function(){
    NoteActions.delete(this.props.key);
  }

});

module.exports = NoteListItemView;
