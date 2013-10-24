/**
 * Created by Rohan on 10/23/13.
 */
var NCC = NCC || {};
NCC.Module = NCC.Module || {};
NCC.Module.Performance = NCC.Module.Performance|| {};
NCC.Module.Performance.View = NCC.Module.Performance.View || {};

NCC.Module.Performance.View.DataInput = Backbone.View.extend({
    events: {
        "click #addData": "handleClick"
    },

    initialize: function () {
        console.log("init view");
    },

    handleClick: function () {
        this.collection.add({
            url: this.$el.find('#urlInput').val(),
            date: this.$el.find('#dateInput').val(),
            responseTime: this.$el.find('#responseTimeInput').val()
        })
    }
});