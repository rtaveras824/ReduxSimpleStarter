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
			<div>
				<input value={ this.state.term } onChange={ this.onInputChange } />
			</div>
		)
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
		console.log(this.state.term, event.target.value);
	}
};

export default SearchBar;