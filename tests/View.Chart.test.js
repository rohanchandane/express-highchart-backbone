describe("Given View.Chart", function () {
    var html = [
        "<div id='charts'></div>"
    ].join('');

    beforeEach(function () {
        $('body').append(html);
    });

    afterEach(function () {
        $('#charts').remove();
    });

    describe("When Chart View instantiates", function () {
        var ChartView = NCC.Module.Performance.View.Chart,
            chartView,
            chartDataModel = _.extend({
            }, Backbone.Events),
            spyHandleChart;

        beforeEach(function () {
            spyHandleChart = spyOn(ChartView.prototype, "handleChart");

            chartView = new ChartView({
                el: document.getElementById('charts'),
                model: chartDataModel
            });
        });

        describe("When Chart Data Collection updated", function () {
            beforeEach(function () {
                chartView.model.trigger("change");
            });
            it("Should call renderChart", function () {
                expect(spyHandleChart).toHaveBeenCalled();
            });
        });

    });

});