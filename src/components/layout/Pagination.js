import React from "react";
import { connect } from "react-redux";
import * as actions from "./../../dispatcher/actions/MainActions";

class Pagination extends React.Component {
    handleClick = (event) => {
        this.props.paginationClick(event.target.id);
    }

    render() {
        const { pagination , onPageChange } = this.props;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(pagination.totalData / pagination.perPage); i++) {
          	pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            let activePage = "";
			if(pagination.currentPage === number){
				activePage = "active";
			} else {
                activePage = "";
            }
			return (
				<li key={ number } className={`my-pointer ${ activePage }`}><a id={ number } onClick={this.handleClick}>{number}</a></li>
			);
        });

        return (
			<nav aria-label="Page navigation">
				<ul className="pagination">
					{ renderPageNumbers }
				</ul>
			</nav>
        );
    }
    
};
const mapStateToProps = state => {
    return {
        pagination: state.pagination
    }
}
const mapDispatchToProps = (dispatchEvent, props) => {
    return {       
        onPageChange: (pageChange) => {
            dispatchEvent(actions.ChangePagination(pageChange));
        }
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Pagination);
