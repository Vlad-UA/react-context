import React from 'react';
import {ThemeContext} from '../context/themes-context';

export default class ThemeTogglerButtonClassLevel3 extends React.Component {

    static contextType = ThemeContext;

    render() {
        const {toggleTheme, theme :{background: backgroundColor}} = this.context;
        return (
            <button
                onClick={toggleTheme}
                style={{backgroundColor}}>
                Toggle Theme
            </button>
        )
    }
}
