import React, {Component} from 'react';
import Article from "./Article";
import PropTypes from 'prop-types';
import accordion from "../decorators/accordion";
import {connect} from 'react-redux';
import {deleteArticle} from "../actionCreators/articleActions";

class Articles extends Component {

    render() {
        const {articles, openItemId, toggle, deleteArticle} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article
                    isOpen={openItemId === article.id}
                    article={article}
                    toggle={toggle(article.id)}
                    deleteArticle={deleteArticle}
                />
            </li>);
        return (
            <ul>{articleElements}</ul>
        );
    }
}

Articles.propTypes = {
    articles: PropTypes.array,
    openItemId: PropTypes.string,
    toggle: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: (id) => dispatch(deleteArticle(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(accordion(Articles));