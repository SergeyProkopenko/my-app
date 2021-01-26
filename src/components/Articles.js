import React, {Component} from 'react';
import Article from "./Article";
import PropTypes from 'prop-types';
import accordion from "../decorators/accordion";

class Articles extends Component {

    render() {
        const {articles, openItemId, toggle} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article
                    isOpen={openItemId === article.id}
                    article={article}
                    toggle={toggle(article.id)}
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

export default accordion(Articles);