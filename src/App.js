import React, {Component} from 'react';
import './App.css';
import TopNav from './TopNav.js';
import RegionMap from "./RegionMap";

class App extends Component {
    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.loadPageComponents = this.loadPageComponents.bind(this);
    }

    handlePageChange(pageName) {
        this.loadPageComponents(pageName);
    }

    loadPageComponents(pageName) {
        alert('Should load page components here! ' + pageName);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header" id="nav-header">
                    <TopNav
                        onPageChange={this.handlePageChange}/>
                </header>
                <section id="one" className="wrapper special">
                    <RegionMap/>
                </section>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
