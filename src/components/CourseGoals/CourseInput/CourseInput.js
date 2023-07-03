import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

/*const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => (props.invalid ? 'red' : 'black')}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : "#ccc")};
  background: ${props => (props.invalid ? '#ffd7d7' : "transparent")}
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`*/

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);  

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().lenght > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
/**Esse componente é o que controla a entrada de elementos e a princípio ele não tinha
 * um controle sobre a inclusão de novos itens sem nada digitado, quando o sistema
 * criava um quadrado vazio para isso foi criado o if que verifica se o comprimento é 
 * igual 0, quando, então, o código pára. Depois foi adicionada a mudança de estado 
 * no setIsValid (acima criado) para alertar o usuário quando ele tentar incluir um item vazio.
 * Depois, dentro do return, foi inserida a seguinte lógica para deixar o componente vermelho
 * se não houver nenhum item, ou seja, a cor do item vai depender se o isValid é false ou não
 * <label style={{ color: !isValid ? 'red' : 'black'}}>Course Goal</label>
 */
  const formSubmitHandler = event => {
    event.preventDefault();
    if( enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
/**Na aula 97 foram inseridos styles de forma inline, ou seja, dentro da tag, o que acaba
 * tendo precedência sobre todos os outros, mas depois foi modificado para essa sintaxe dentro
 * do className onde a lógica é a seguinte, criou-se uma classe de nome form-control.invalid no CSS
 * e aqui esse nome é atribuído automaticamente se o isValid for true, ou do contrário será 
 * uma string vazia deixando só o nome form-control. Reparar que as aspas ao contrário ``(backsticks)
 * transformam todo o resultado em uma string e o $ deixa o componente dinâmico.
 * Assim, o style é aplicado de maneira dinâmica e o componente muda a cor a depender se
 * o input está preenchido ou não
 *  <div className={`form-control ${isValid ? 'invalid':''}`}>
 * Depois, na aula 100, foi apagado para inclusão do styled component dentro do componente, 
 * e dada essa opção className={!isValid && 'invalid'} que se for dentro da div do FormControl
 * faz a mesma coisa acima, ou seja, se não for válido, aplica as tags invalid.
 * Por fim, criou essa variável que vai receber o estado de inválido (!isValid) que vai servir como
 * props para inserir a lógica dentro do styled (que está acima), da seguinte forma:
 * background: ${props => (props.invalid ? '#ffd7d7' : "transparent")}
 * ou seja, se for inválido, aplica a primeira cor, se não, a segunda.
 * Na aula 103 é mostrada a opção de styled component também para esse componente, para isso, novamente,
 * foi modificado o nome do móduclo e acima foi importado o styles (que pode ser qualquer nome),
 * abaixo o form-control (que é o nome q está no css) foi colocado dentro de [] 
 * pois o nome com - é inválido, então foi usado o $ e `` para deixar o componente
 * dinâmico e para transformar tudo dentro do {} em uma string, aqui
 * também foi aplicada a lógica para caso o componente seja inválido, ou seja,
 * se o formulário não estiver preenchido, é aplicado o css invalid   
 */
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']}${!isValid && styles.invalid}`} >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
