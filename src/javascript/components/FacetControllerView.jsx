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
    notes: NoteStore.getAll()
  };
}



/* Facet App -----------------------------------------------------------------*/
var FacetApp = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return {
      notes: NoteStore.getAll(),
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
    return (
      <div className="app">
        <Calendar notes={this.state.notes} daySelectedLink={this.linkState('daySelected')} />
        <Notes notes={this.state.notes} daySelectedLink={this.linkState('daySelected')} />
      </div>
    );
  },

  _onChange: function(){
    this.setState(getNoteStoreState());
  }

});

module.exports = FacetApp;
