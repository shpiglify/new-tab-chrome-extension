import React from 'react'
import PropTypes from 'prop-types'
import './Suggestion.scss'

/**
  User's click on keyword will redirect to the keyword's search page
 *
 */
const Suggestions = (props) => {
    const { redirect, keyword } = props

    return (
        <li className="suggestion" onClick={redirect.bind(this, keyword)}>
            <span>{keyword}</span>
        </li>
    )
}


Suggestions.propTypes = {
    /** The keyword presented to the User */
    keyword: PropTypes.string,
     /** The function responsible for the redirection on user's click */
    redirect: PropTypes.func,
}


export default Suggestions