// Even though react isn't called, we still need to import it
// because webpack will turn <input /> to React.createElement
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
	}
	// Every class must have a render method
	render() {
		return (
			<div className="search-bar">
				<input value={ this.state.term } onChange={ (event) => this.onInputChange(event.target.value) } />
			</div>
		)
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
};

export default SearchBar;