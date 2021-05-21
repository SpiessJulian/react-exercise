import React, { useState } from 'react';
import ArticlesForm from './components/ArticlesForm';
import ArticlesView from './components/ArticlesView';

const App = () => {

  const [ articles, setArticles ] = useState([]);
  const [ articleSelected, setArticleSelected ] = useState({});

  return (
    <div className="mainContainer">
      <h1 className="mainTitle">DevLights Excercice</h1>
      <ArticlesForm articles={articles} setArticles={setArticles} articleSelected={articleSelected} setArticleSelected={setArticleSelected} />
      <ArticlesView articles={articles} setArticles={setArticles}  setArticleSelected={setArticleSelected}/>
    </div>
  );
}

export default App;
