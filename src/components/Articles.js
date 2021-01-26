import React, {Component} from 'react';
import Article from "./Article";
import PropTypes from 'prop-types';

export default class Articles extends Component {

    state = {
        openArticleId: null
    };

    render() {
        const {openArticleId} = this.state;
        const {articles} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article
                    isOpen={openArticleId === article.id}
                    article={article}
                    toggleOpen={this.toggleOpenArticle(article.id)}
                />
            </li>);
        return (
            <ul>{articleElements}</ul>
        );
    }

    toggleOpenArticle = (openArticleId) => event => {
        this.setState({openArticleId});
    };
}

Articles.propTypes = {
    articles: PropTypes.array
};