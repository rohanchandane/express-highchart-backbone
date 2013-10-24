/**
 * Created by Rohan on 10/23/13.
 */
var NCC = NCC || {};
NCC.Module = NCC.Module || {};
NCC.Module.Performance = NCC.Module.Performance|| {};
NCC.Module.Performance.Collection = NCC.Module.Performance.View || {};

NCC.Module.Performance.Collection.TableData = Backbone.Collection.extend({
    // test

    extractDataFor: function (url) {
        var similarUrlObject,
            counts = {};

        similarUrlObject = this.filter(function(model){
            return model.get('url') === url;
        });

        for(var i = 0; i < similarUrlObject.length; i ++ ) {
            var num = similarUrlObject[i].get('responseTime');
            counts[num] = counts[num] ? counts[num]+1 : 1;
        }

        Backbone.Events.trigger('NCC.Module.Performance.Model.Update', {
            responseTime: _.keys(counts),
            numberOfItems: _.values(counts)
        });
    }
});