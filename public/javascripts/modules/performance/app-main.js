/**
 * Created by Rohan on 10/23/13.
 */
(function($) {

    $(function() {
        var chartDataModel = new NCC.Module.Performance.Model.ChartDataModel();

        var tableDataCollection = new NCC.Module.Performance.Collection.TableData();

        var dataInputView = new NCC.Module.Performance.View.DataInput({
            el: document.getElementById('inputForm'),
            collection: tableDataCollection
        });

        var dataTableView = new NCC.Module.Performance.View.DataTable({
            el: document.getElementById('performanceDataTable'),
            collection: tableDataCollection
        });

        var chartView = new NCC.Module.Performance.View.Chart({
            el: document.getElementById('charts'),
            model: chartDataModel
        });

        //chartDataModel.set({responseTime: [1,2,3,4,5,6], numberOfItems: [4,6,50,8,2,5]});
    });

})(jQuery);