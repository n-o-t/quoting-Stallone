import React from 'react';
import Citation from './Citation';
import citations from '../citations';

class App extends React.Component{

	state = {};

	componentWillMount(){
		this.genererCitation();
	}

	genererCitation = e => {
		// on transforme les citations en Array
		const KeyArray = Object.keys(citations);
		
		// Une citation au hasard
		const randomKey = KeyArray[Math.floor(Math.random()*KeyArray.length)];
		
		if (toString(this.state.citation) === citations[randomKey].citation){
			console.log("2 fois la même !!!");
			console.log(this.state.citation);
			console.log(citations[randomKey].citation);
			this.genererCitation();
			return;
		}
		this.setState(citations[randomKey]);
		//console.log(citations[randomKey].auteur);
		// faire le switch case pour changer le bg en fonction de l'auteur
		
	};

	render(){
		console.log('App state: '+this.state.bg)
		var sectionStyle = {
		  backgroundImage: 'url('+this.state.bg+')',
		};
		return (
			<div style={sectionStyle}>
				<Citation details={this.state} />
				<button onClick={e =>this.genererCitation(e)}>
					Envoie la poésie poupée !
				</button>
			</div>
		)		
	}
}

export default App;