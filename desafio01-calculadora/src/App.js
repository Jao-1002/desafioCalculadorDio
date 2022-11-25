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
  const [ currentNumbr, setCurrentNumber ] = useState('0');

  const [ firstNumber, setFirstNumber ] = useState('0')

  const [ operation, setOperation ] = useState('')

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${ prev === '0' ? '' : prev }${number}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0')
    
  }

  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber( currentNumbr );
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number( firstNumber ) + Number( currentNumbr ) ;
      setCurrentNumber ( String( sum  ) ) 
      setOperation('') 
    }
  }

  const handleMinusNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber( currentNumbr );
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const sum = Number( firstNumber ) - Number( currentNumbr ) ;
      setCurrentNumber ( String( sum  ) ) 
      setOperation('') 
    }
  }

  const handleEquals = () => {
    if( firstNumber !== '0' && operation !== '' && currentNumbr !== 0 ){
      switch( operation ) { 
        
        case '+':
          handleSumNumber()
          break
          default: break

        case '-':
          handleMinusNumber ()
          break
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={ currentNumbr } />
        <Row> 
          <Button label="*" onClick={ () => handleAddNumber('*')}/>
          <Button label="/" onClick={ () => handleAddNumber('/')}/>
          <Button label="C" onClick={ () => handleOnClear() }/>
          <Button label="?" onClick={ () => handleAddNumber('?')}/>
        </Row>
        <Row>
          <Button label="7" onClick={ () => handleAddNumber('7')}/>
          <Button label="8" onClick={ () => handleAddNumber('8')}/>
          <Button label="9" onClick={ () => handleAddNumber('9')}/>
          <Button label="-" onClick={ handleMinusNumber }/>
        </Row>
        <Row>
          <Button label="4" onClick={ () => handleAddNumber('4')}/>
          <Button label="5" onClick={ () => handleAddNumber('5')}/>
          <Button label="6" onClick={ () => handleAddNumber('6')}/>
          <Button label="+" onClick={ handleSumNumber }/>
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
