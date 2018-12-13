import React, {Component} from 'react';
import ComponentLevel2 from './component_level2';
import {ThemeContext, themes} from '../context/themes-context';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        // State also contains the updater function so it will
        // be passed down into the context provider
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    toggleTheme = () => {
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    };


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ThemeContext.Provider value={this.state}>
                        <ComponentLevel2/>
                    </ThemeContext.Provider>
                </header>
            </div>
        );
    }
}

export default App;
