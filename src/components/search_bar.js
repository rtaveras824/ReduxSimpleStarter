// Even though react isn't called, we still need to import it
// because webpack will turn <input /> to React.createElement
import React, { Component } from 'react';

class SearchBar extends Component {
	// Every class must have a render method
	render() {
		return <input onChange={ this.onInputChange } />
	}

	onInputChange(event) {
		console.log(event.target.value);
	}
};

export default SearchBar;