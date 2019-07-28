import React from 'react'
import PropTypes from 'prop-types'
import Suggestion from './Suggestion/Suggestion.jsx'
import './Suggestions.scss'


/**
 The component displays auto-suggest keywords,
 by passing each of the keywords to his own 'Suggestion' component.
 *
 */
const Suggestions = (props) => {
    const { keywords = [], redirect } = props

    return (
        <ol className="suggestions">
            {keywords.map((keyword) => (
                <Suggestion
                    key={keyword}
                    keyword={keyword}
                    redirect={redirect}
                />
            ))}
        </ol>
    )
}

Suggestions.propTypes = {
    /** search auto-suggest keywords list to display */
    keywords: PropTypes.array,
     /** passing the 'rediret' function as reference for 'Suggestion' components */
    redirect: PropTypes.func,
}

export default Suggestions