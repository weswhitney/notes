import Ember from "ember";
import EmberValidations from 'ember-validations';

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('noteTitle');

      if (!body) {
        return;
      }

      // typeof
      // false, undefined, !
      // else

      var note = this.store.createRecord('note', { body: body, title: title });
      this.set('noteCopy', '');
      this.set('noteTitle', '');
      note.save();
    }
  }
});
