import React from "react";
import { connect } from "react-redux";
import ReactDOM from 'react-dom';

import * as actions from "./../../dispatcher/actions/MainActions";
class Notification extends React.Component {

    onCloseNotification = () => {
        let { onHideNotification } = this.props;
        onHideNotification();
    }
    render () {
        let { notification } = this.props;
        let toggleShowHide = "hide";
        if(notification.alertStatus && notification.msg){
            toggleShowHide = "show";
        }
        return (            
            <div className={ `alert ${ notification.alertStatus } alert-dismissable ${ toggleShowHide }` } >
                <button type="button" className="close"  onClick={ this.onCloseNotification }>×</button>
                { notification.msg }
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        let { notification } = nextProps;
        if(notification.alertStatus && notification.msg){
            let { onHideNotification } = this.props;
            setTimeout(() => {
                onHideNotification()
            }, 3500);        
        }
    }
}

const mapStateToProps = state => {
    return {
        notification: state.notification
    }
}

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        onHideNotification: () => {
            dispatchEvent(actions.HideNotification());
        }
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Notification);