/**
 * Created by Rohan on 10/23/13.
 */
var NCC = NCC || {};
NCC.Module = NCC.Module || {};
NCC.Module.Performance = NCC.Module.Performance|| {};
NCC.Module.Performance.View = NCC.Module.Performance.View || {};

NCC.Module.Performance.View.DataTable = Backbone.View.extend({
    events: {
        "click .btn-info" : "handleInfoChartClick"
    },
    initialize: function () {
        this.collection.on('add', this.handleDataChange, this);
    },

    handleDataChange: function () {
        this.resetTable();
        this.tableRowHtml = this.renderTemplate();
        this.$el.find(('table tbody')).append(this.tableRowHtml);
    },

    resetTable: function () {
        this.$el.find(('table tbody')).empty();
    },

    renderTemplate: function () {
        return _.template( $("#dataTemplate").html(), { dataList: this.collection.models });
    },

    handleInfoChartClick: function (e) {
        this.collection.extractDataFor($(e.currentTarget.parentElement.parentElement).find('.url').text());
    }
});