import React, {Component} from 'react';
import './App.css';
import TopNav from './TopNav.js';
import RegionMap from "./RegionMap";
import SearchForm from "./SearchForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageContent: <RegionMap/>
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        this.loadPageComponents = this.loadPageComponents.bind(this);
    }

    handlePageChange(pageName) {
        this.loadPageComponents(pageName);
    }

    loadPageComponents(pageName) {
        if (pageName === 'map') {
            this.setState({
                pageContent: <RegionMap/>
            })
        } else if (pageName === 'filter') {
            this.setState({
                pageContent: <SearchForm/>
            });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header" id="nav-header">
                    <TopNav
                        onPageChange={this.handlePageChange}/>
                </header>
                <section id="one" className="wrapper special">
                    {this.state.pageContent}
                </section>
            </div>
        );
    }
}

export default App;
