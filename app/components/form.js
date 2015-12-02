var React = require('react');
var ReactDOM = require('react-dom');

require('../../styles/base.css');
require('../../styles/form.css');

var InputText = React.createClass({
    getInitialState : function(){
    return {
        label : this.props.label,
        value : this.props.value,
        active : false
    }
},
changeHandle : function(event){
    this.setState({
        value : event.target.value
    })
},
focusHandle : function(event){
    if(this.props.value && this.props.value == event.target.value){
        this.setState({
            active : true,
            value : ''
        });
    }else{
        this.setState({
            active : true
        });
    }

},
blurHandle : function(event){
    if(this.props.value && event.target.value == ''){
        this.setState({
            active : false,
            value : this.props.value
        });
    }else{
        this.setState({
            active : false
        });
    }
},
render : function(){
    var activeClass = this.state.active ? 'active' : '',
        className = 'ui-form-input '+activeClass;

    return (
        <div className="ui-form-item">
            <label className="ui-form-item-label">{this.state.label}</label>
            <div className="ui-form-item-wrap">
                <input type="text" className={className} value={this.state.value} onFocus={this.focusHandle} onBlur={this.blurHandle} onChange={this.changeHandle}  />
            </div>
        </div>
    )
}
});

var Form = React.createClass({
    render : function(){
        return (
            <div className="ui-form">
        Form Start
        </div>
        )
    }
});

module.exports = {
    InputText : InputText,
    Form : Form
}