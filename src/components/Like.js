import React, { useEffect, useState, createRef } from 'react'
import { Row, Col, Spinner, Container } from 'reactstrap'
import { randomBytes } from 'crypto'

import { MdDelete } from 'react-icons/md'

import { twtEmbedRE } from '../constants'

import { useInViewport } from 'react-in-viewport'

const Tweet = (props) => {
	const { tweet, add } = props

	const [enteredView, setEnteredView] = useState(false)
	const [loading, setLoading] = useState(false)
	const [loaded, setLoaded] = useState(false)

	const divRef = createRef()
	const config = { disconnectOnLeave: false }
	const { inViewport, enterCount } = useInViewport(divRef, config, props)

	const tweetDOMId = `twt-${tweet}` + randomBytes(8).toString('hex')
	const divDOMId = `div-${tweet}` + randomBytes(8).toString('hex')

	const onLoad = (event) => {
		if (event.target.children.length === 0) {
				return
			}
		if (event.target.children[0].dataset.tweetId === tweet) {
			setLoaded(true)
			setLoading(false)
		}
	}

	useEffect(() => {
		window.twttr.events.bind('rendered', onLoad)
		return () => {
			window.twttr.events.unbind('rendered', onLoad)
		}
	}, [])

	useEffect(() => {
		if (enteredView || enterCount > 1 || !inViewport) {
			return
		}
		if (inViewport) {
			setEnteredView(true)
			return
		}
	}, [inViewport])

	useEffect(() => {
		if (!enteredView) {
			return
		}
		if (enteredView) {
			window.twttr.widgets
				.createTweet(tweet, document.getElementById(tweetDOMId), {
					theme: 'dark',
				})
			setLoading(true)
			return
		}
	}, [enteredView])

	return (
		<>
			<div ref={divRef} className='center' hidden={!loading}>
				<Spinner color='primary' />
			</div>
			<div
				id={divDOMId}
				ref={divRef}
				className='add-tweet'
				onClick={() => add(tweet)}>
				<div id={tweetDOMId}></div>
			</div>
		</>
	)
}

export default Tweet