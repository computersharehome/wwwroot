// Initialize the model
var filterModel = new Backbone.Model();
filterModel.set({
    'actions': ['Sell'],
    'orderType': 'Limit'
});

// Define views
var FilterView = Backbone.View.extend({
    bindings: {
        '.action': 'actions',
        '.order-type': 'orderType'
    },
    render: function () {
        this.stickit();
    }
});

var OutputView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function () {
        var data = this.model.toJSON();
        $('#actions-value').html(JSON.stringify(data.actions));
        $('#order-type-value').html(JSON.stringify(data.orderType));
    }
});

// Instantiate and render views
var filterView = new FilterView({
    model: filterModel,
    el: '#filter'
});


var outputView = new OutputView({
    model: filterModel,
    el: '#output'
});


filterView.render();
outputView.render();

