import React, { useState } from 'react';
import ArticleRow from './ArticleRow';

const ArticlesView = ({ articles, setArticles }) => {

    const [ articleSelected, setArticleSelected] = useState({});

    const onDelete = (articleToDelete) => {
        const newArticles = articles.filter(eachArticle => eachArticle.id !== articleToDelete.id);
        setArticles(newArticles);
    }

    /* Edit the corresponding article on the list*/
    const onEdit = () => {
        const newArticles = articles.map(eachArticle => {
            if(eachArticle.id === articleSelected.id) {
                return articleSelected;
            }else{
                return eachArticle;
            }
        });
        setArticles(newArticles);
        setArticleSelected({});
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
                                    articleSelected={articleSelected} 
                                    setArticleSelected={setArticleSelected}
                                    currentArticle={eachArticle}
                                    onEdit={onEdit}
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