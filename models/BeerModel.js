var BeerModel = Backbone.Model.extend({
  defaults: {
    name: '',
    style: '',
    abv: 0,
    image_url: ''
  },

  setBeerName: function (beerName) {
    this.set('name', beerName);
  }

});