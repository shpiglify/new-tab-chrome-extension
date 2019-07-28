import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import './HistoryWidget.scss'
import HistoryItem from './HistoryItem/HistoryItem'

/* 
 'window.chrome' object is 'undefined' during development.
 we initiate the 'history' variable in development mode only.
 */
let history = []
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    history = [
        { url: 'https://www.google.com/package/selenium-webdriver', title: 'selenium' },
        { url: 'https://www.npmjs.com/package/selenium-webdriver', title: 'selenium' },
        { url: 'https://www.npmjs.com/package/selenium-webdriver', title: 'selenium' },
        { url: 'https://www.npmjs.com/package/selenium-webdriver', title: 'selenium' },
        { url: 'https://www.npmjs.com/package/selenium-webdriver', title: 'selenium' },
        { url: 'https://www.npmjs.com/package/selenium-webdriver', title: 'selenium' },
        { url: 'https://www.npmjs.com/package/selenium-webdriver', title: 'selenium' },
        { url: 'https://www.npmjs.com/package/selenium-webdriver', title: 'selenium' },
        { url: 'https://www.npmjs.com/package/selenium-webdriver', title: 'selenium' },
        { url: 'https://www.npmjs.com/package/selenium-webdriver', title: 'selenium' },
    ]
}

/**
 * The component displays user's history links.
 */

class HistoryWidget extends Component {

    state = {
        history,
    }

    componentDidMount = () => {
        if (!window.chrome || !window.chrome.history) return
        const { itemCount  } = this.props

        window.chrome.history.search({ text: '', maxResults: itemCount }, (historySites) => {
            const formattedHistory = historySites.map(({ url, title }) => ({ url, title }))
            this.setState({ history: formattedHistory })
        })
    }

    render = () => {
        const { history } = this.state

        return !!history.length && (
            <div className="history-widget">
                {history.map(historyItem => <HistoryItem key={uuid.v4()} {...historyItem} />)}
            </div>
        )
    }
}

HistoryWidget.propTypes = {
    /** Amount of history links the component will display */
    itemCount: PropTypes.number
}

HistoryWidget.defaultProps={
    itemCount: 10
}
    

export default HistoryWidget
