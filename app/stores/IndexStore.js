var Reflux = require('reflux');

var IndexAction = require('../actions/IndexAction');

module.exports = Reflux.createStore({
    current : 0,
    listenables: [IndexAction],
    onSelectNav: function (data) {
        this.current = data;
        this.trigger({current:this.current});
        this.trigger({list:this.current});
    },
    onGetList: function () {
        this.trigger({list:this.current});
    }
});