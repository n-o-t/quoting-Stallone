import React from 'react';

class Citation extends React.Component {
	render() {
	
		return (
			
			<div>
				<div id="citation">	{this.props.details.citation}</div>
				<div id="auteur"> - {this.props.details.auteur}</div>
			</div>

		)
	}
}

export default Citation;