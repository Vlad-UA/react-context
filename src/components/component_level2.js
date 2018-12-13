import React from 'react';
import ThemeTogglerButtonLevel3 from './theme_toggler_button_level3';
import ThemeTogglerButtonClassLevel3 from './theme-toggler-button_class_level3';

export default function ComponentLevel2() {
    return (
        <ul>
            <li>
                {`<ThemeContext.Consumer> ({params} => ())`} : <ThemeTogglerButtonLevel3/></li>
            <li>
                {`static contextType = ThemeContext;

                    const {params} = this.context;
                `}: <ThemeTogglerButtonClassLevel3/>
            </li>
        </ul>
    );
}
