describe("Given View.DataInput", function () {
    var html = [
        "<div id='inputForm' class='container'><form role='form'><div class='form-group'><label for='urlInput'>URL</label><input id='urlInput' type='url' placeholder='Enter URL' class='form-control'></div><div class='form-group'><label for='dateInput'>Date</label><input id='dateInput' type='date' class='form-control'></div><div class='form-group'><label for='responseTimeInput'>Response Time</label><input id='responseTimeInput' type='number' placeholder='Enter response time in seconds' class='form-control'></div><a id='addData' href='#' class='btn btn-success btn-large'>Add Data</a></form></div>"
    ].join('');

    beforeEach(function () {
        $('body').append(html);
    });

    afterEach(function () {
        $('#inputForm').remove();
    });

    describe("When DataInput View instantiates", function () {
        var DataInputView = NCC.Module.Performance.View.DataInput,
            dataInputView,
            dataCollection = _.extend({
                add: function () {}
            }, Backbone.Events),
            spyAdd;

        beforeEach(function () {
            dataInputView = new DataInputView({
                el: document.getElementById('inputForm'),
                collection: dataCollection
            });

            spyAdd = spyOn(dataInputView.collection, 'add');
        });

        describe("When user enters URL, Date & Response Time", function () {
            beforeEach(function () {
                dataInputView.$el.find('#urlInput').val('http://www.google.com');
                dataInputView.$el.find('#dateInput').val('2013-10-24');
                dataInputView.$el.find('#responseTimeInput').val('5');
            });
            describe("And click on 'Add Data' button", function () {
                beforeEach(function () {
                    dataInputView.$el.find('#addData').click();
                });
                it("Should add URL, Date & Response Time into collection", function () {
                    expect(spyAdd).toHaveBeenCalledWith({
                        url: 'http://www.google.com',
                        date: '2013-10-24',
                        responseTime: '5'
                    });
                })
            });
        });

    });

});