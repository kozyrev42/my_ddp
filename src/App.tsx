import React from 'react';
import './App.css';

function App({ store }: { store: any }) {
	return (
		<div className="App">
			<header className="App-header">
				<button onClick=
					{e => {
							store.fetch()
							console.log('click')
						}
					}>
					КНОПКА
				</button>
			</header>
		</div>
	);
}

export default App;
