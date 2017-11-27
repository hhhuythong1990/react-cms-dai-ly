import React from "react";

import Nav from "./../layout/Nav";

class Home1 extends React.Component {
    render () {
        return (            
            <div id="page-wrapper" style={{ "minHeight": 390}}>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Bạn không có quyền truy cập vào trang này</h1>
                </div>
            </div>
        </div>  
        );
        
    }
}

module.exports = Home1; 