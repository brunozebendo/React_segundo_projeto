/**Esse projeto vai ensinar a fazer CSS interativo, mas ele já veio com a parte de REACT
 * /**Esse projeto vai ensinar a fazer CSS interativo, mas ele já veio com a parte de REACT
 * escrita
 *Este é um código em React que define um componente chamado App. O componente App é uma função que 
 usa o hook useState para gerenciar um estado chamado courseGoals, que é um array de objetos com
  propriedades text e id. O estado inicial de courseGoals é definido como um array com dois objetos.

O componente App também define duas funções: addGoalHandler e deleteItemHandler.
 A função addGoalHandler é chamada quando um novo objetivo é adicionado
 . Ela usa a função setCourseGoals para atualizar o estado de courseGoals,
  adicionando um novo objeto ao início do array. A função deleteItemHandler é chamada quando 
  um objetivo é excluído. Ela usa a função setCourseGoals para atualizar o estado de courseGoals,
   removendo o objeto com o id correspondente do array.

O componente App renderiza dois componentes filhos: CourseInput e CourseGoalList.
 O componente CourseInput recebe a propriedade onAddGoal, que é definida como a função addGoalHandler. 
 O componente CourseGoalList recebe as propriedades items, que é definida como o estado de courseGoals,
  e onDeleteItem, que é definida como a função deleteItemHandler.

Se o array de courseGoals estiver vazio, o componente renderiza um parágrafo com o texto
 “No goals found. Maybe add one?”. Caso contrário, ele renderiza o componente CourseGoalList.
  O código também inclui comentários que mostram uma maneira alternativa de renderizar condicionalmente 
  o conteúdo usando uma expressão lógica.
 */

import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
