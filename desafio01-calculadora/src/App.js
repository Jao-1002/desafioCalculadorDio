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

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${number}${ prev }`)
  }
  return (
    <Container>
      <Content>
        <Input value={ currentNumbr } />
        <Row> 
          <Button label="*"/>
          <Button label="/"/>
          <Button label="C"/>
          <Button label="?"/>
        </Row>
        <Row>
          <Button label="7"/>
          <Button label="8"/>
          <Button label="9"/>
          <Button label="-"/>
        </Row>
        <Row>
          <Button label="4"/>
          <Button label="5"/>
          <Button label="6"/>
          <Button label="+"/>
        </Row>
        <Row>
          <Button label="1" onClick={ () => handleAddNumber('')}/>
          <Button label="2" onClick={ () => handleAddNumber('')}/>
          <Button label="3" onClick={ () => handleAddNumber('')}/>
          <Button label="=" onClick={ () => handleAddNumber('')}/>
        </Row>
        
        
      </Content>
  </Container>
  );
}

export default App;
