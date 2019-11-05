import React, { Component } from 'react';
import { tandartsenArray, assistentenArray, patientenArray } from '../../data/data';

class MonthView extends Component {
    state = {
        tandartsen: tandartsenArray,
        assistenten: assistentenArray,
        patienten: patientenArray
    }

    render() {
        return (
            <div>
                <p>{this.state.tandartsen[0].name}</p>

            </div>
        )
    }
}

export default MonthView; 