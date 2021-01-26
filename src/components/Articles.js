import React from 'react';
import Article from "./Article";
import PropTypes from 'prop-types';

export default function Articles({articles}) {
    return (
        <ul>
            {articles.map(article => {
                return (
                    <li key={article.id}>
                        <Article article={article} />
                    </li>
                )
            })}
        </ul>
    );
}

Articles.propTypes = {
    articles: PropTypes.array
};