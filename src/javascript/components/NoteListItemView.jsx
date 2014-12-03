/** =========================================================================
 * NoteListItemView.jsx
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react/addons');
var NoteActions = require('../actions/NoteActions.jsx');
var cx = React.addons.classSet;

var NoteListItemView = React.createClass({

  getInitialState: function() {
      return {
        inEdit: false,
        value: this.props.note.text || 'Say Something.'
      };
    },

    componentWillReceiveProps: function(nextProps) {
      this.setState({
        value: nextProps.note.text
      });
    }, 

  render: function(){
    return (
      <li className="note_list_item">
        <div className={cx({
          "note_list_item_wrap": true,
          "hidden": this.state.inEdit
        })}>
          <label className="note_list_item_label" onDoubleClick={this._onDoubleClick}>{this.state.value}</label>
          <button className="note_list_item_btn_del" onClick={this._onDeleteClick} >&times;</button>
        </div>
        <input
          className={cx({
            "note_list_item_edit": true,
            "hidden": !this.state.inEdit
          })}
          type="text"
          placeholder="Say Something."
          onBlur={this._save}
          onKeyDown={this._onKeyDown}
          value={this.state.value}
          onChange={this._onChange}
          autoFocus={true}
        />
      </li>
    );
  },

  _save: function(){
    NoteActions.update(this.props.note.id, this.state.value);
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
    NoteActions.delete(this.props.note.id);
  }

});

module.exports = NoteListItemView;
