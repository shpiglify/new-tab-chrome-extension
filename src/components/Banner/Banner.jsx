import React from 'react'
import './Banner.scss'

/**
 * Simple presentational component that renders the logo image.
 */
const Banner = () => {
    return (
       <img className="Banner" src={require('../../assets/img/bing-logo.png')} alt="logo"/>
    )
}

export default Banner