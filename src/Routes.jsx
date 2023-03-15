import React from 'react'
import PropTypes from 'prop-types'
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import {HomeIndex,AboutIndex,InformationIndex} from './pages/';
import { NoMatch } from './pages/NoMatch';
import { LoginIndex } from './pages/Login/Login.Index';
// import { InformationIndex } from './pages/Information/Information.Index';

const Routes = props => {
  return (
    <ReactRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeIndex />} />
          <Route path="about" element={<AboutIndex />} />
          <Route path="login" element={<LoginIndex/>}/>
          <Route path="information" element={<InformationIndex/>}/>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </ReactRoutes>
  )
}

Routes.propTypes = {}

export { Routes}