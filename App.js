// src/App.js
import React from 'react';
import Todo from './components/Todo';
import './index.css'; // Подключаем общие стили
import sign1 from './images/sign1.png';
import sign2 from './images/sign2.png';
import sign3 from './images/sign3.png';

function App() {
  return (
    <div className="section" id="section2">
      <div className="container">
        <div className="div4">Что Вам необходимо?</div>
        <div className="group2">
          <Todo
            title="Стратегии"
            caption1="Стратегии"
            caption2="Индивидуальный подход к каждому клиенту. Профессиональная поддержка."
            imgSrc={sign1}
          />
          <Todo
            title="Решения"
            caption1="Решения"
            caption2="Готовые решения для достижения целей и повышения эффективности."
            imgSrc={sign2}
          />
          <Todo
            title="Инновации"
            caption1="Инновации"
            caption2="Анализ и оптимизация процессов, которые помогут вам выделиться."
            imgSrc={sign3}
          />
        </div>
      </div>
    </div>
  );
}

export default App;