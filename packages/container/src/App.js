import React from 'react'
import MarketingApp from './components/MarketingApp'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'

const generateClassName = createGenerateClassName({ productionPrefix: 'container' })

export default () => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<BrowserRouter>
				<div>
					<Header />
					<MarketingApp />
					<h2>hello</h2>
				</div>
			</BrowserRouter>
		</StylesProvider>
	)
}
