import React, { useContext, useEffect, useState } from 'react'

import { Container, Spinner, Row, Col } from 'reactstrap'

import { toast } from 'react-toastify'

import { AppContext } from '../context/Context'

import { useHistory } from 'react-router-dom'

import { getSharedFolder } from '../api/folders'

import Tweet from '../components/Tweet'

const Shared = () => {
	const { state } = useContext(AppContext)
	const { sharedFolder } = state
    const history = useHistory()

	const [isLoading, setIsLoading] = useState(true)
	const [twtObjs, setTwtObjs] = useState([])
    const [components, setComponents] = useState([])
    const [folder, setFolder] = useState(null)
    const [gotFolder, setGotFolder] = useState(false)

	useEffect(() => {
        if (!sharedFolder) {
            history.push('/')
            return
        }
        if (gotFolder) {
            return
        }
        (async () => {
            setIsLoading(true)
            const result = await getSharedFolder(sharedFolder)
            if (result.error) {
                toast(result.error, { type: 'error'})
                history.push('/')
                return
            }
            setFolder(result.folder)
            setGotFolder(true)
            setIsLoading(false)
        })()
    }, [gotFolder])

	useEffect(() => {
		if (folder?.tweets?.length === 0 || !folder) {
			return
		}
		setTwtObjs(
			folder.tweets.map((tweet) => ({
				twtId: tweet.twtId,
				tweet: tweet,
				like: false,
                share: true,
			}))
		)
	}, [folder])

	useEffect(() => {
		if (twtObjs.length === 0) {
			return
		}
        const compArray = twtObjs.map((tweet) => (
					<div className='share-tweetcard'>
						<Tweet
							tweet={tweet.tweet}
							key={tweet.twtId}
							like={false}
							shared={true}
						/>
					</div>
				))
        setComponents(compArray)
    }, [twtObjs])

	if (isLoading) {
		return (
			<div className='center-spinner'>
				<Spinner color='primary' />
				<div className='text-primary'>Loading...</div>
			</div>
		)
	} else {
		return (
			<>
				<Container className='folder-title'>
					<Row className='justify-content-md-center'>
						<Col md='auto'>
							<div className='folderName'>{folder.folderName}</div>
						</Col>
					</Row>
				</Container>
				<Container fluid scrollable={`true`} className='mt-4 mb-5 share share-list'>
					{components}
				</Container>
			</>
		)
        
	}
}

export default Shared