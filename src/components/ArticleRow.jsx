import React from 'react';

const ArticleRow = ({ articleSelected, setArticleSelected, currentArticle, onEdit, onDelete }) => {
    return ( 
        articleSelected.id != null && articleSelected.id === currentArticle.id ? 
            <tr key={currentArticle.id} className="articleRow">
                <td className="articlesTitle">
                    <input value={articleSelected.title} onChange={e => setArticleSelected({...articleSelected, title: e.target.value})}/>
                </td>
                <td className="articlesActions">
                    <button onClick={() => onEdit(currentArticle)}>Confirm</button>
                    <button onClick={() => setArticleSelected({})}>Cancel</button>
                </td>
            </tr>  
            :
            <tr key={currentArticle.id} className="articleRow">
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