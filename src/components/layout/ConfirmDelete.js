import React from "react";


import * as actions from "./../../dispatcher/actions/MainActions";
class ConfirmDelete extends React.Component {
    handleClick = () => {
        this.props.deleteClick();
    }    

    render () {
        let { titleModal, msgModal } = this.props;
        return (
            <div className="modal fade" id="myModalConfirm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header-danger">
                            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title" id="myModalLabel">{ titleModal }</h4>
                        </div>
                        <div className="modal-body">
                            { msgModal }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Đóng</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={ this.handleClick }>Xóa</button>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}

module.exports = ConfirmDelete;