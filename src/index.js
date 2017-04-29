import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBMfxzL81xPPHw4FTtFn0W7NAIqdYwJn3M';

// Create a new component. This component should produce
// some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));