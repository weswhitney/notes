import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('noteTitle');

      if ((body == null) || (title == null)) {
        this.flashMessage('fail', 'You cannot have an empty note.');
      } else {
        var note = this.store.createRecord('note', {title: title, body: body});
        this.set('noteTitle', '');
        this.set('noteCopy', '');
        note.save().then(function() {
          this.flashMessage('Note created');
        }.bind(this));
      }
    },

    deleteNote: function (id) {
      this.store.find('note', id).then(function(note) {
        note.deleteRecord();
        note.save().then(function() {
          this.flashMessage('Deleted!');
        }.bind(this));
      }.bind(this));
    }

  }
});
