// Even though react isn't called, we still need to import it
// because webpack will turn <input /> to React.createElement
import React from 'react';

const SearchBar = () => {
	return (
		<input />
	)
};

export default SearchBar;