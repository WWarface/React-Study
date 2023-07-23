import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

let mapStateToProps = state => {
	return {
		isLogged: state.auth.isLogged
	}
}

export const withAuthRedirect = Component => {
	class ComponentWrapper extends React.Component {
		render() {
			debugger
			if (!this.props.isLogged) return <Navigate to={'/login'} />

			return <Component {...this.props} />
		}
	}

	let ConnectedComponent = connect(mapStateToProps)(ComponentWrapper)

	return ConnectedComponent
}
