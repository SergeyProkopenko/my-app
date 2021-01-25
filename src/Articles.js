import React from 'react';
import Article from "./Article";

export default function Articles({articles}) {
    return (
        <ul>
            {articles.map(item => {
                return (
                    <li key={item.id}>
                        <Article article={item} />
                    </li>
                )
            })}
        </ul>
    );
}