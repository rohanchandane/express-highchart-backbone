/**
 * Created by Rohan on 10/24/13.
 */
var NCC = NCC || {};
NCC.Module = NCC.Module || {};
NCC.Module.Performance = NCC.Module.Performance|| {};
NCC.Module.Performance.Model = NCC.Module.Performance.View || {};

NCC.Module.Performance.Model.ChartDataModel = Backbone.Model.extend({
    defaults: {
        responseTime: [],
        numberOfItems: []
    },
    // test
    initialize: function () {
        Backbone.Events.on('NCC.Module.Performance.Model.Update', this.updateModel, this);
    },

    updateModel: function (data) {
        this.set({ responseTime: data.responseTime, numberOfItems: data.numberOfItems });
    }
});