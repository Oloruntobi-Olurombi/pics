import React from "react";

//Alternative way of writing Line 16.
// <input type="text" onChange={(e) => console.log(e.target.vaule)}  />
class SearchBar extends React.Component {
  //Controlled Element Way
  state = { term: "Hi There" };

  /* UnControlled Element Way
  onInputChange(event){
   console.log(event.target.value);
   
   <input type="text" onChange={this.onInputChange} />
  }
  */
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search For Images!!!</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
