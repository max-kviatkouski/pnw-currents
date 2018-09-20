import React, {Component} from 'react';
import './TopNav.css'

export default class TopNav extends Component {
    NAVIGATION_PAGES = ['map', 'filter'];
    NAVIGATION_LABELS = [
        'Map',
        'Find best slack'
    ];

    constructor(props) {
        super(props);
        this.state = {
          currentPageIdx: 0
        };
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }

    render() {
        return (
            <ul className="actions">
                {this.state.currentPageIdx > 0 &&
                    <li>
                        <span onClick={this.prevPage}>← {this.NAVIGATION_LABELS[this.state.currentPageIdx - 1]}</span>
                    </li>
                }
                {this.state.currentPageIdx < this.NAVIGATION_PAGES.length - 1 &&
                    <li>
                        <span onClick={this.nextPage}>{this.NAVIGATION_LABELS[this.state.currentPageIdx + 1]} →</span>
                    </li>
                }
            </ul>
        );
    }

    nextPage() {
        if (this.state.currentPageIdx < this.NAVIGATION_PAGES.length - 1) {
            this.setState({
                currentPageIdx: this.state.currentPageIdx + 1
            });
        }
    }

    prevPage() {
        if (this.state.currentPageIdx > 0) {
            this.setState({
                currentPageIdx: this.state.currentPageIdx - 1
            });
        }
    }
}