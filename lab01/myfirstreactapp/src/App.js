import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SelectedBeast from './SelectedBeast';
import hornsdata from './hornsdata.json';
import { throwStatement } from '@babel/types';

 class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dataOfHorns:hornsdata,
      show:false,
      modalData:{},
    }
  }
    viewShow=(data)=>{
      this.setState({
        show:true,
        modalData:data,
      })
    }
    closeShow=()=>{
      this.setState({
        show:false,
      })
    }
  
  render() {
    return (
      <div>
        <Header/>
        <Container>
    <Main selectModal={this.viewShow} data={this.state.dataOfHorns}/>
    
    </Container>
    <SelectedBeast closeModal={this.closeShow} closeData={this.state.show} modaldata={this.state.modalData}/>
  <Footer/>
      </div>
    )
  }
}




export default App;
