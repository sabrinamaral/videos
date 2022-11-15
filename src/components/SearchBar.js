import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  handleChange = (e) => {
    this.setState({ term: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="search-bar ui segment" style={{ marginTop: "2rem" }}>
        <form className="ui form">
          <div className="field">
            <label>video search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
