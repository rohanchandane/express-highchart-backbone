describe("Given View.DataTable", function () {
    var html = [
        "<div id='performanceDataTable' class='container'><h1>Website performance data table</h1><table class='table table-striped'><thead><tr><th>#</th><th>URL</th><th>Date</th><th>Response Time (seconds)</th></tr></thead><tbody></tbody></table></div>",
        "<script id='dataTemplate' type='text/template'><% _.forEach( dataList , function(data) { %><tr><td>#</td><td class='url'><%= data.url %></td><td class='date'><%= data.date %></td><td class='response-time'><%= data.responseTime %></td><td class='action'><button type='button' class='btn btn-info'>Info Chart</button></td></tr><% }) %></script>"
    ].join('');

    beforeEach(function () {
        $('body').append(html);
    });

    afterEach(function () {
        $('#performanceDataTable').remove();
    });

    describe("When DataTable View instantiates", function () {
        var DataTableView = NCC.Module.Performance.View.DataTable,
            dataTableView,
            dataTableCollection = _.extend({
                extractDataFor: function () {}
            }, Backbone.Events),
            spyExtractDataFor,
            spyResetTable;

        beforeEach(function () {
            spyResetTable = spyOn(DataTableView.prototype, "resetTable");

            dataTableView = new DataTableView({
                el: document.getElementById('performanceDataTable'),
                collection: dataTableCollection
            });

            spyExtractDataFor = spyOn(dataTableView.collection, "extractDataFor");
        });

        describe("When Table Data Collection updated with new record", function () {
            var tableRowHtml = '<tr><td>#</td><td class="url">http://www.google.com</td><td class="date">2013-10-24</td><td class="response-time">5</td><td class="action"><button type="button" class="btn btn-info">Info Chart</button></td></tr>'

            beforeEach(function () {
                dataTableView.collection.models = [{
                    url: 'http://www.google.com',
                    date: '2013-10-24',
                    responseTime: '5',
                    get: function (param) {
                        if(param === 'url') {
                            return this.url;
                        }
                        if(param === 'date') {
                            return this.date;
                        }
                        if(param === 'responseTime') {
                            return this.responseTime;
                        }
                    }
                }];
                dataTableView.collection.trigger("add");
            });

            it("Should call resetTable", function () {
                expect(spyResetTable).toHaveBeenCalled();
            });

            it("Should update table row with related collection data", function () {
                expect(dataTableView.$el.find('table tbody').html()).toEqual(tableRowHtml);
            });

            describe("When 'Info Chart' button clicked", function () {
                beforeEach(function () {
                    dataTableView.$el.find('.btn-info').click();
                });
                it("Should call extractDataFor method from collection with 'http://www.google.com' ", function () {
                    expect(spyExtractDataFor).toHaveBeenCalledWith('http://www.google.com');
                });
            });
        });


    });

});