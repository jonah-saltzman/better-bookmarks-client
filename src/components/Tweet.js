import React, { useEffect, useState, createRef } from 'react'
import { Row, Col, Spinner } from 'reactstrap'

import { MdDelete } from 'react-icons/md'

import { twtEmbedRE  } from '../constants'

import { useInViewport } from 'react-in-viewport'

const Tweet = (props) => {

	const { tweet, load, embed } = props

	const [enteredView, setEnteredView] = useState(false)
	const [ twtUrl, setTwtUrl ] = useState(tweet.twtHtml.match(twtEmbedRE)[0])

	const tweetRef = createRef()
	const divRef = createRef()
	const config = { disconnectOnLeave: false}
	const { inViewport, enterCount } = useInViewport(
		divRef,
		config,
		props
	)

	const tweetDOMId = `twt-${tweet.twtId}`

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
			console.log('div entered view:')
			console.log(divRef)
			load(tweetDOMId)
			return
		}
	},[enteredView])

	// useEffect(() => {
	// 	if (Object.keys(compHtml).length !== 0) {
	// 		return
	// 	}
	// 	const url = tweet.twtHtml.match(twtEmbedRE)[0]
	// 	// const html =
	// 	// 	twtEmbedPrefix.slice(0, 12) +
	// 	// 	`id="${tweetDOMId}" ` +
	// 	// 	twtEmbedPrefix.slice(12) +
	// 	// 	url +
	// 	// 	twtEmbedSuffix
	// 	// console.log(html)
	// 	// setCompHtml({ __html: html })
	// }, [compHtml])

	// const loaded = () => {
	// 	setIsLoading(false)
	// }

	// useEffect(() => {
	// 	if (isLoaded) {
	// 		return
	// 	}
	// 	setIsLoaded(true)
	// 	setShowTweet(true)
	// }, [isLoaded])

	const deleteTweet = () => {
		// Modal?
		return
	}

	return (
		<div id={`div-${tweet.twtId}`} ref={divRef}>
			<div>
				<Row>
					<Col md='10'>
						<div className='center' hidden={embed}>
							<Spinner color='primary' />
						</div>
						<div ref={tweetRef}>
							<blockquote
								id={tweetDOMId}
								className='twitter-tweet'
								data-conversation='none'
								data-dnt='true'
								data-theme='dark'>
								<a href={twtUrl}></a>
							</blockquote>
						</div>
					</Col>
					<Col
						md='2'
						className='d-flex justify-content-center align-items-center'>
						<div className='iconbtn'>
							<MdDelete
								onClick={() => deleteTweet()}
								color='#FF6370'
								className=' icon'
								style={{ zIndex: '1' }}
							/>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Tweet
