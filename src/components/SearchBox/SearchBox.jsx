import React, { Component } from 'react'
import axios from 'axios'
import onClickOutside from "react-onclickoutside"
import debounce from 'lodash/debounce'
import './SearchBox.scss'
import Suggestions from './Suggestions/Suggestions.jsx'

/* 
 API calls to the server from the browser are blocked by CORS policy,
 therefore we overcome this problem by using the third party 'cors-anywhere' service. 

 This service is NOT used in production environment.
 */
let searchUrl = ''
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    searchUrl += 'https://cors-anywhere.herokuapp.com/'
}
searchUrl += 'https://api.bing.com/osjson.aspx?query='

/**
 * User's typing will generate a list of auto suggest keywords,
 * received the *Auto-suggest API*
 * User's submit will invoke the handleSubmit function,
 * then redirecting the page into search results page,
 * using the *Search-redirect API*
 *
 */

class SearchBox extends Component {
    state = {
        suggestKeywords: [],
        isShowSuggestions: true,
    }   
    //UI behaviour function
    handleClickOutside = () => {
        this.setState({ isShowSuggestions: false })
    }
    //UI behaviour function
    handleFormFocus = () => {
        this.setState({ isShowSuggestions: true })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.persist()

        const searchTerm = e.target[0].value
        this.redirect(searchTerm)
    }

    handleInput = (e) => {
        e.persist()
        const searchTerm = e.target.value
        this.getSuggestions(searchTerm)        
    }
    
    getSuggestions = debounce((searchTerm) => {
        axios.get(searchUrl + searchTerm)
            .then(({ data }) => {
                this.setState({ suggestKeywords: data[1] })
            })
    }, 100)

    redirect = (searchTerm) => {
        window.location.assign(`https://www.bing.com/search?q=${searchTerm}`)
    }

    render() {
        const { isShowSuggestions, suggestKeywords } = this.state

        return (
            <form
                className="search-box"
                onFocus={this.handleFormFocus}
                onSubmit={this.handleSubmit}
            >
                <input type="text" onInput={this.handleInput} />
                {isShowSuggestions && !!suggestKeywords.length && (
                    <Suggestions redirect={this.redirect} keywords={suggestKeywords} />
                )}
            </form>
        )
    }
}

export default onClickOutside(SearchBox)