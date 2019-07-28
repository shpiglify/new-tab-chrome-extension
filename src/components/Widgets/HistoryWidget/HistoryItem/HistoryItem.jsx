import React from 'react'
import PropTypes from 'prop-types';
import './HistoryItem.scss'

/**
 * User's click will redirect to the displayed website
 */

const HistoryItem = (props) => {

    const { url, title } = props
    const src = `https://www.google.com/s2/favicons?domain=${url}`

    return (
        <div className="history-item">
            <a href={url}>
                <img src={src} alt={title} />
                <p>{title}</p>
            </a>
        </div>
    )
}

HistoryItem.propTypes ={
    /** The link src URL */
    url: PropTypes.string,
    /** Name of the link's website */
    title:PropTypes.string
}

export default HistoryItem
