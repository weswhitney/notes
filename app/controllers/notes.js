import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title = this.get('noteTitle');

      if (title !== undefined) {
        if (body !== undefined) {
          if (title.trim() !== '') {
            if (body.trim() !== '') {
              var note = this.store.createRecord('note', {title: title, body: body});
              note.save();
              this.set('noteTitle', '');
              this.set('noteCopy', '');
            }
          }
        }
      }
    },

    deleteNote: function (id) {
      this.store.find('note', id).then(function(note) {
        note.deleteRecord();
        note.save();
      });
    }

  }
});
