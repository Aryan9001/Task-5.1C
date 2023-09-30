import React, { useState } from 'react';
import './App.css';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

function App() {
  const [selectedPostType, setSelectedPostType] = useState('question');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>New Post</h1>
      </header>
      <div className="post-bar">
        <div className="post-type-buttons">
          <button
            className={selectedPostType === 'question' ? 'active' : ''}
            onClick={() => handlePostTypeChange('question')}
          >
            Question
          </button>
          <button
            className={selectedPostType === 'article' ? 'active' : ''}
            onClick={() => handlePostTypeChange('article')}
          >
            Article
          </button>
        </div>
      </div>
      {selectedPostType === 'question' ? (
        <QuestionForm />
      ) : (
        <ArticleForm />
      )}
    </div>
  );
}

export default App;