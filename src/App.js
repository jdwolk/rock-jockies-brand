import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import DocumentTitle from 'react-document-title'
import * as R from 'ramda'
import { BrowserRouter, Route } from 'react-router-dom'
import FontSelector from './FontSelector'

const Theme = (name) => (props) => {
  const styles = require(`./themes/${name}.css`)
  const otherStyles = require('./App.css')

  return (<FontSelector {...props} />)
}

const App = (props) => {
  return (
    <DocumentTitle title="Asteroid Mining Game Fonts">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Theme('theme1')} />
          <Route exact path="/theme1" component={Theme('theme1')} />

          {/*
          <Route path="/theme2" component={Theme('theme2')} />
          <Route path="/theme3" component={Theme('theme3')} />
          <Route path="/theme4" component={Theme('theme4')} />
          */}
        </div>
      </BrowserRouter>
    </DocumentTitle>
  )
}

export default (styles) => App(styles);
