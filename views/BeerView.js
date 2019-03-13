var BeerView = Backbone.View.extend({
  className: 'beer',

  events: {
    'click .remove': 'removeBeer',
    'click .edit': 'editBeer',
    'keypress .edit-mode': 'createOnEnter',
  },

  template: Handlebars.compile($('#beer-template').html()),

  initialize: function () {
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  createOnEnter: function (e) {
    if (e.which === 13) {

      var inputName = this.$el.find('.edit-mode').val();
      console.log(this.model.set('name', inputName));
      this.$el.find('.beer-name').text(inputName);
      this.$el.find('.edit-mode').css('display', 'none');

    }
  },

  editBeer(e) {
    this.$el.find('.edit-mode').css('display', 'block');
  },

  removeBeer() {
    this.model.destroy();
  }
});