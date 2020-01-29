import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import MovieGrid from './MovieGrid'
import Single from './Single'
import Footer from './Footer';


const Main = (props) => {
  return (
    <div className="wrapper">
      <Header/>
      <article>
        <Route exact path='/' render={() => <MovieGrid {...props} bootstrap_col='col-md-3' />} />
        <Route path={`${props.match.url}view/:postId`} render={({match}) => <Single {...props} match={match} bootstrap_col='col-12'/>} />
      </article>
      <Footer/>
    </div>
  )
}

export default Main;