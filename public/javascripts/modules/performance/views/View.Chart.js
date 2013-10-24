/**
 * Created by Rohan on 10/23/13.
 */
var NCC = NCC || {};
NCC.Module = NCC.Module || {};
NCC.Module.Performance = NCC.Module.Performance|| {};
NCC.Module.Performance.View = NCC.Module.Performance.View || {};

NCC.Module.Performance.View.Chart = Backbone.View.extend({

    initialize: function () {
        this.model.on('change', this.handleChart, this);
        //this.handleChart();
    },

    handleChart: function () {
        var categories = this.model.get('responseTime'),// [1,2,3,4,5,6]
            series = [{
                name: 'Number of Items',
                data: this.model.get('numberOfItems')// [4,6,23,8,2,5]

            }];
        this.renderChart(categories, series);
    },

    renderChart: function (categories, series) {
        this.$el.highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Website Performance Chart'
            },
            subtitle: {
                text: 'Source: Above data'
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Items'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">For response time: {point.key} seconds</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: series
        });
    }
});