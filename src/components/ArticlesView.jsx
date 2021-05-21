import React, { useState } from 'react';
import ArticleRow from './ArticleRow';

const ArticlesView = ({ articles, setArticles, setArticleSelected }) => {


    const onDelete = (articleToDelete) => {
        const newArticles = articles.filter(eachArticle => eachArticle.id !== articleToDelete.id);
        setArticles(newArticles);
    }


    return ( 
        <div className="articlesView">
            <table className="articlesTable">
                <thead className="articlesTableHead">
                    <tr>
                        <th><h2>Title</h2></th>
                        <th><h2>Actions</h2></th>
                    </tr>
                </thead>
                <tbody className="articlesTableBody">
                    {
                        articles.map(eachArticle => {
                            return (
                                <ArticleRow 
                                    setArticleSelected={setArticleSelected}
                                    currentArticle={eachArticle}
                                    onDelete={onDelete}
                                /> 
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default ArticlesView;