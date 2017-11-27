import React from "react";
import { connect } from "react-redux";

import * as actions from "./../../dispatcher/actions/MainActions";

let listProduct = [
    {
        id: 1,
        name: "iphone X",
        price: 10000
    },
    {
        id: 2,
        name: "samsung note 7",
        price: 15000
    },
    {
        id: 3,
        name: "sony XZ",
        price: 20000
    }
]

class List extends React.Component {
    
    clickMe = () => {
        alert("Hellllo");
    }
    render () {

        let tableData = listProduct.map((product, index) => {
            return (
                <tr key={ index }>
                    <td>{ product.id }</td>
                    <td>{ product.name }</td>
                    <td>{ product.price }</td>
                    <td><button>fdfadfdfdaf</button></td>
                </tr>
            )
        });

        return (
            <div className="table-responsive"> 
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Ten</th>
                            <th>Gia</th>
                            <th>Chinh sua</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tableData }
                    </tbody>
                </table>
            </div>            
        );
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(List);