import React, { useState } from 'react';

import data from './data';
import Question from './Question';

const App = () => {
  //
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <Question
                title={question.title}
                info={question.info}
                id={question.id}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
