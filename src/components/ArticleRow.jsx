import React from 'react';

const ArticleRow = ({ setArticleSelected, currentArticle, onDelete }) => {
    return (  
        <tr className="articleRow">
            <td className="articlesTitle">
                <h3>{currentArticle.title}</h3>
            </td>
            <td className="articlesActions">
                <button onClick={() => setArticleSelected(currentArticle)}>Edit</button>
                <button onClick={() => onDelete(currentArticle)}>Delete</button>
            </td>
        </tr>
    );
}
 
export default ArticleRow;