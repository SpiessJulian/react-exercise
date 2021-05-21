import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ArticlesForm = ({ articles, setArticles}) => {

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


    return (
        <form className="articlesForm">
            <label htmlFor="articleInput" className="formTitle">Title</label>
            <textarea 
                className="articleInputs" id="articleInput" 
                onChange={e => setArticlesInput(e.target.value)}
                type="text"/>
            
            <button className="articleSubmit" onClick={e => onSubmit(e)}>Add</button>
        </form>
    );
}
 
export default ArticlesForm;