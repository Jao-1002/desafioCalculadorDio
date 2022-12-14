import { 
  Container,
  Content,
  Column,
  Row
} from './styles'

import Input from './components/input'

import Button from './components/button'; 

import { useState } from 'react'

const App = () => {
  let [ currentNumber, setCurrentNumber ] = useState('0');

  // const [ firstNumber, setFirstNumber ] = useState('0')

  // const [ operation, setOperation ] = useState('')

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${ prev === '0' ? '' : prev }${number}`)
  }
 
  function trocar(resul) {
    setCurrentNumber(resul)
  }


  const handleOnClear = () => {
    setCurrentNumber('0')
  }

  const handleRemoveNumber = () => {
    let result = currentNumber
    result = result.substring(0, result.length - 1);
    if (result === "" || result === undefined) {
      setCurrentNumber(prev => `${ prev === '0' ? '' : "0" }`)
    }else{
      trocar(result)
    }
    
  }
  
  const handleEquals = () => {
    let resul 
    if (currentNumber.substring(currentNumber.length -1) === "+" || currentNumber.substring(currentNumber.length -1) === "-" || currentNumber.substring(currentNumber.length -1) === "*" || currentNumber.substring(currentNumber.length -1) === "/") {

      resul = currentNumber
      resul = resul.substring(0, resul.length - 1);
      
      trocar(resul)

    }

    console.log(currentNumber);
    let resultado = eval(currentNumber) 
    setCurrentNumber(resultado)
  }

  return (
    <Container>
      <Content>
        <Input value={ currentNumber } />
        <Row> 
          <Button label="*" onClick={ () => handleAddNumber('*')}/>
          <Button label="/" onClick={ () => handleAddNumber('/')}/>
          <Button label="C" onClick={ () => handleOnClear() }/>
          <Button label="X" onClick={ handleRemoveNumber}/>
        </Row>
        <Row>
          <Button label="7" onClick={ () => handleAddNumber('7')}/>
          <Button label="8" onClick={ () => handleAddNumber('8')}/>
          <Button label="9" onClick={ () => handleAddNumber('9')}/>
          <Button label="-" onClick={ () => handleAddNumber('-') }/>
        </Row>
        <Row>
          <Button label="4" onClick={ () => handleAddNumber('4')}/>
          <Button label="5" onClick={ () => handleAddNumber('5')}/>
          <Button label="6" onClick={ () => handleAddNumber('6')}/>
          <Button label="+" onClick={ () => handleAddNumber('+') }/>
        </Row>
        <Row>
          <Button label="1" onClick={ () => handleAddNumber('1')}/>
          <Button label="2"  onClick={ () => handleAddNumber('2')}/>
          <Button label="3" onClick={ () => handleAddNumber('3')}/>
          <Button label="=" onClick={ handleEquals }/>
        </Row>
        
        
      </Content>
  </Container>
  );
}

export default App;
