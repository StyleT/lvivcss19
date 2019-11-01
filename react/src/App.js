import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-accordion';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.addTab = this.addTab.bind(this);
        this.tabChanged = this.tabChanged.bind(this);
        this.counter = 4;
        this.tabsWc = null;

        this.state = {
            selected: 1,
            tabs: [
                {name: 'Tab one'},
                {name: 'Tab two'},
                {name: 'Tab three'},
            ],
        };
    }

    componentDidMount() {
        this.tabsWc.addEventListener('selected-changed', this.tabChanged);
    }

    tabChanged(e) {
        e.preventDefault();

        this.setState({
            selected: e.detail.value
        });
    }

    addTab(e) {
        e.preventDefault();

        this.setState((state, props) => {
            return {
                tabs: state.tabs.concat([{name: `Tab ${this.counter++}`}])
            }
        });
    }

    render() {
        return (
            <div className="App">
                <div className="tabs-container">
                    <vaadin-accordion>

                        <vaadin-accordion-panel>
                            <div slot="summary">Tabs</div>

                            <button onClick={this.addTab}>Add tab</button>
                            <p>
                                Selected tab: {this.state.selected + 1}
                            </p>

                            <vaadin-tabs selected={this.state.selected} ref={(el) => this.tabsWc = el}>
                                {
                                    this.state.tabs.map(v =>
                                        <vaadin-tab key={v.name}>{v.name}</vaadin-tab>
                                    )
                                }
                            </vaadin-tabs>
                        </vaadin-accordion-panel>

                        <vaadin-accordion-panel>
                            <div slot="summary">Not tabs</div>

                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo"/>
                                <p>
                                    Edit <code>src/App.js</code> and save to reload.
                                </p>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React
                                </a>
                            </header>

                        </vaadin-accordion-panel>
                    </vaadin-accordion>

                </div>
            </div>
        );
    }
}

export default App;
