/** =========================================================================
 * NoteListItemView
 *
 * @author Franky Martinez <frankymartz@gmail.com>
 * @copyright FrankyMartz 2014
 * ========================================================================== */
var React = require('react');

var NoteListItemView = React.createClass({
  render: function(){
    return (
      <li>
        <div className="note_list_item">
          <label className="note_list_item_label"></label>
          <button className="note_list_item_btn_del">&times;</button>
        </div>
        <input className="note_list_item_edit" type="text" name="note_list_item_edit"/>
      </li>
    );
  }
});

module.exports = NoteListItemView;
