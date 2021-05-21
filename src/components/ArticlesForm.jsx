import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ArticlesForm = ({ articles, setArticles, articleSelected, setArticleSelected }) => {

    const [ articlesInput, setArticlesInput ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const titlesArray = articlesInput.match(/[^\r\n]+/g);

        const articlesToSend = titlesArray.map(eachArticleToSend => {
            return {
                id: uuidv4(), 
                title: eachArticleToSend
            }
        });
        setArticles([...articles, ...articlesToSend]);
    }

    const onEdit = () => {
        const newArticles = articles.map(eachArticle => {
            if(articleSelected.id === eachArticle.id) return articleSelected;
            return eachArticle
        });
        setArticles(newArticles);
        setArticleSelected({});
    }


    const handleChange = (e) => {
        if(articleSelected.id){
            setArticleSelected({...articleSelected, title: e.target.value});
        }else{
            setArticlesInput(e.target.value);
        }
    }

    return (
        <form className="articlesForm">
            <label htmlFor="articleInput" className="formTitle">Title</label>
            <textarea 
                className="articleInputs" id="articleInput" 
                onChange={e => handleChange(e)}
                type="text"
                value={articleSelected.id ? articleSelected.title : articlesInput}
            />

            {
                articleSelected.id ?
                <div className="articleSubmit">
                    <button  onClick={() => onEdit()}>Confirm</button>
                    <button  onClick={() => setArticleSelected({})}>Cancel</button>
                </div>
                :
                <button className="articleSubmit" onClick={e => onSubmit(e)}>Add</button>
            }
        </form>
    );
}
 
export default ArticlesForm;