import { useState } from 'react';
import './App.css';

function App() {
	const [sek, setSek] = useState('');
	const [eur, setEur] = useState(0);

	const calculate = (e) => {
		setEur(sek * 0.089)
	}

	return (
		<div className='container'>
			<h3>Valuuttalaskuri</h3>
			<form>
				<div>
					<label>Ruotsin kruunut</label>
					<input type="number" value={sek} onChange={e => setSek(e.target.value)}/>
				</div>
				<div>
					<label>Eurot</label>
					<output>{eur.toFixed(2)}</output>
				</div>
				<button type='button' onClick={calculate}>Laske</button>
			</form>
		</div>
	);
}

export default App;
