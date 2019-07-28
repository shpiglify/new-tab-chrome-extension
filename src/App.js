import React from 'react'
import SearchBox from './components/SearchBox/SearchBox.jsx'
import HistoryWidget from './components/Widgets/HistoryWidget/HistoryWidget'
import Banner from './components/Banner/Banner.jsx'


function App() {
  return (
    <div className="App">
      { (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') && <h4>This is development mode. Features are limited. To activate full app features visit my<a href="https://github.com/shpiglify/new-tab-chrome-extension"> Github Repository</a> and follow the 'Getting started' instructions.</h4> }
      <Banner/>
      <SearchBox />
      <HistoryWidget />
    </div>
  )
}

export default App
