import React, {Component, Fragment} from 'react';
import './App.css';
import data from './data/data.json';

import {Header} from './components/Header/Header';
import {Cards} from './components/Cards/Cards';


class App extends Component {

  constructor() {
    super();

    this.state = {
      showCards: true
    }
  }
  

  onCardRemove = (e) => {
    console.log(e.target)
  }
    
  switchContent = () => {
    this.setState({
      showCards: !this.state.showCards

    })
  }

  renderCards = () => {
    return this.state.showCards ? <Cards data={data} removeCard={this.onCardRemove} /> : null;
  }

  render () {
    return (
      <Fragment>
        <Header widthClass="full-width" />
        <div className="main-content" onClick={this.switchContent}>
          {this.renderCards()}
        </div>
      </Fragment>
    
    );
  }
}

export default App;

