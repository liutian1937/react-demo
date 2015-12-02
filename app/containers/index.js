/**
 * base dependencies
 * @type {*|exports}
 */
var React = require('react');
var ReactDOM = require('react-dom');

require('../../styles/base.css');

var Banner = React.createClass({
   render : function(){
       return (
           <div className="ui-banner">
               <img src="https://static.uberx.net.cn/yangtze/1.0.0/ob/images/grid-bg-84191fd5.jpg" />
           </div>
       )
   }
});

var Reflux = require('reflux');
var IndexAction = require('../actions/IndexAction');
var IndexStore = require('../stores/IndexStore');

var Nav = React.createClass({
    mixins: [Reflux.connect(IndexStore)],
    componentDidMount: function () {
        IndexAction.selectNav(0);
    },
    handleSelect : function(event){
        IndexAction.selectNav(event.target.getAttribute('data-id'));
    },
    render : function(){
        var className, navDom = [];
        this.props.resource.map(function(item,key){
            className = key ==  this.state.current ? 'cur' : '';
            navDom.push(<span key={key} data-id={key} className={className} onClick={this.handleSelect}>{item}</span>);
        }.bind(this));

        return (
            <div className="ui-nav">
                {navDom}
            </div>
        )
    }
});

var List = React.createClass({
    mixins: [Reflux.connect(IndexStore)],
    componentDidMount: function () {
        IndexAction.getList();
    },
    render : function(){

        //var ListDom = [];
        //this.state.list.forEach(function(item){
        //   ListDom.push(<div>{item}</div>)
        //});

        return (
            <div className="ui-list">
            {this.state.list}
            </div>
        )
    }
});

var App = React.createClass({
    render : function(){
        return (
            <div className="ui-wrap">
                <Banner />
                <Nav resource={renderData.navList}/>
                <List />
            </div>
        )
    }
});
/**
 * app render
 */
ReactDOM.render(
    <App />,
    document.getElementById('layout')
)