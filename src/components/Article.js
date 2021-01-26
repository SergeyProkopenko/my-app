import React from 'react';
import Comments from "./Comments";
import PropTypes from 'prop-types';
import toggleOpen from "../decorators/toggleOpen";

function Article({article, isOpen, toggleOpen}) {

    const getBody = () => {
        return !isOpen ? null :
            <div>
                <section>{article.text}</section>
                <Comments comments={article.comments}/>
            </div>;
    };

    return (
        <div>
            <h3>{article.title}</h3>
            <button onClick={toggleOpen}>
                {isOpen ? "Close article" : "Open article"}
            </button>
            {getBody()}
        </div>
    );
}

Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
    }).isRequired,
};

export default toggleOpen(Article);