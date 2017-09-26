import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term:''};
    this.onInputChange = this.onInputChange.bind(this);
  }


  render(){
    return (
      <div>
        <input onChange={this.onInputChange}/>
        <br></br>
        Your input: {this.state.term}
        <input value={this.state.term}/>
      </div>
    );
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

}

export default SearchBar;
