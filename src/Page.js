import React, { Component } from 'react'

export default class Page extends Component {
	render() {
		return (
			<div style={{
				backgroundColor: 'white',
				height: '100vh',
				width: '100%'
			}}>
				{this.props.children}
			</div>
		)
	}
}
