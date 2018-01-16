import React,{Component} from 'react';
import NavBar from '../components/NavBar'
export default class Forum extends Component {
  
    constructor(props) {
      super(props);
    
    }

render() {
    return (

      <div className="content">
			<NavBar></NavBar>
        <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
        
          <section id="page-splash">
            <h3 class="logo">Database Web Quickstart</h3>
            <div>
              <button id="sign-in-button" class="mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect"><i class="material-icons">account_circle</i> Sign in with Google</button>
            </div>
          </section>
        
          <header class="header mdl-layout__header mdl-color-text--white mdl-color--light-blue-700">
        
            <div class="mdl-layout__header-row titlebar">
              <h3 class="logo">Database Web Quickstart</h3>
              <button id="sign-out-button" class="mdl-button--raised mdl-button mdl-js-button mdl-js-ripple-effect"><i class="material-icons">account_circle</i> Sign out</button>
            </div>
     
            <div class="tab mdl-layout__header-row mdl-color--light-blue-600">
              <div class="mdl-tab">
                <div id="menu-recent" class="mdl-layout__tab is-active mdl-button mdl-js-button mdl-js-ripple-effect">
                  <i className="material-icons">new_releases</i> Recent
                </div>
                <div id="menu-my-posts" class="mdl-layout__tab mdl-button mdl-js-button mdl-js-ripple-effect">
                  <i className="material-icons">home</i> My posts
                </div>
                <div id="menu-my-top-posts" class="mdl-layout__tab mdl-button mdl-js-button mdl-js-ripple-effect">
                  <i className="material-icons">trending_up</i> My top posts
                </div>
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-color--amber-400 mdl-shadow--4dp mdl-js-ripple-effect" id="add">
                  <i className="material-icons">mode_edit</i>
                </button>
              </div>
            </div>
          </header>
        
          <main class="mdl-layout__content mdl-color--grey-100">
     
            <section class="mdl-grid content" id="add-post" styles="display:none">
              <div class="mdl-cell mdl-cell--12-col mdl-grid">
        
                  <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--6-col-desktop">
                    <div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">
                      <h2 class="mdl-card__title-text">New Post</h2>
                    </div>
                    <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                      <form id="message-form" action="#">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <input class="mdl-textfield__input" type="text" id="new-post-title"/>
                          <label class="mdl-textfield__label" for="new-post-title">Post title...</label>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                          <textarea class="mdl-textfield__input" rows="3" id="new-post-message"></textarea>
                          <label class="mdl-textfield__label" for="new-post-message">Post message...</label>
                        </div>
                        <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                          Add post
                        </button>
                      </form>
                    </div>
                </div>
              </div>
            </section>
    
            <section class="mdl-grid content" id="recent-posts-list" styles="display:none">
              <div class="posts-container mdl-cell mdl-cell--12-col mdl-grid">
              </div>
            </section>
        

            <section class="mdl-grid content" id="user-posts-list" styles="display:none">
              <div class="posts-container mdl-cell mdl-cell--12-col mdl-grid">
              </div>
            </section>
        
            <section class="mdl-grid content" id="top-user-posts-list" style="display:none">
              <div class="posts-container mdl-cell mdl-cell--12-col mdl-grid">
              </div>
            </section>
          </main>
        </div>
        </div>
    )
  }
}