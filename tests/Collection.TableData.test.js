describe("Given Collection.TableData", function () {

    describe("When TableData Collection instantiates", function () {
        var TableDataCollection = NCC.Module.Performance.Collection.TableData,
            tableDataCollection,
            spyTrigger;

        beforeEach(function () {
            tableDataCollection = new TableDataCollection();

            spyTrigger = spyOn(Backbone.Events, 'trigger');
        });
        describe("When collection is added with 5 different records", function () {
            beforeEach(function () {
                tableDataCollection.add([{
                        url: 'http://www.google.com',
                        date: '2013-10-24',
                        responseTime: '5'
                    },
                    {
                        url: 'http://www.google.com',
                        date: '2013-10-24',
                        responseTime: '4'
                    },
                    {
                        url: 'http://www.google.com',
                        date: '2013-10-24',
                        responseTime: '4'
                    },
                    {
                        url: 'http://www.google.com',
                        date: '2013-10-24',
                        responseTime: '1'
                    },
                    {
                        url: 'http://www.google.com',
                        date: '2013-10-24',
                        responseTime: '1'
                    }], {silent: true}
                )
            });

            describe("When 'extractDataFor' method called with url 'http://www.google.com' ", function () {
                beforeEach(function () {
                    tableDataCollection.extractDataFor("http://www.google.com");
                });

                it("Should trigger 'NCC.Module.Performance.Model.Update' event with { responseTime: ['1', '4', '5'], numberOfItems: [2,2,1] } object", function () {
                    expect(spyTrigger).toHaveBeenCalledWith('NCC.Module.Performance.Model.Update', { responseTime: ['1', '4', '5'], numberOfItems: [2,2,1] });
                });
            });
        });


    });

});