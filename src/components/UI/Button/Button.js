import React from "react";
import styles from './Button.module.css'

//import styled from 'styled-components';
/**Na aula 99 foi introduzido o conceito de Styled Component que me pareceu um tipo de bootstrap
 * usado para estilizar componentes.
 * No código abaixo o button, que está comentado, trazia uma classe css, aqui, o mesmo style foi 
 * todo copiado para dentro das `` e assim funcionou da mesma maneira. Diz o professor que
 * a vantagem é garantir o estilo para aquele componente pois em projetos grandes, com vários 
 * programadores, pode acontecer de nomes de classes serem repetidos.
 * Na aula 101 foi incluído o @media que controla o tamanho do componente a depender
 * do tamanho da tela que está sendo exibido, aqui, no caso, o componente button aumenta
 * de tamanho se a tela ficar menor.
 */
/*const Button = styled.button `
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;*/
/**Já na aula 102 é inserido o conceito de CSS modules que funciona de maneira
 * parecida com o CSS mas evitando o conflito de nomes caso sejam criados
 * dois componentes com o mesmo nome, pois ele cria um nome único. Para usá-lo
 * tem que fazer a importação acima, mudar o nome do componente,
 * nesse caso, Button.module.css e abaixo é feita a ligação dentro
 * do className sendo button o nome que está no componente css e styles um 
 * nome aleatório q acima importado, transforma todos os itens dentro do
 * componente css em seus atributos.
 * Esse é o modo que o professor recomenda.
 */
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
