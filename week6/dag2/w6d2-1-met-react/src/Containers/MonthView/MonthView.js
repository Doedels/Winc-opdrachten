import React, { Component } from 'react';
import Appointment from '../../Components/Appointment/Appointment';
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
                <Appointment
                    monthView={true}
                    patient={this.state.patienten[0]}
                    tandarts={this.state.tandartsen[0]}
                    assistent={this.state.assistenten[0]}
                />
                <Appointment
                    patient={this.state.patienten[0]}
                    tandarts={this.state.tandartsen[0]}
                    assistent={this.state.assistenten[0]}
                />

            </div>
        )
    }
}

export default MonthView; 