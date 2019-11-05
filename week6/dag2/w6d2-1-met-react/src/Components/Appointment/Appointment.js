import React from 'react';

const appointment = (props) => {
    if (props.monthView) {
        return (
            <div>
                <p>Patient: {props.patient.name} {props.patient.surname} </p>
            </div>
        )
    } else return (
        <div>
            <p>Patient: {props.patient.name} {props.patient.surname}</p>
            <p>Tandarts: {props.tandarts.name} {props.tandarts.surname}</p>
            <p>Assistent: {props.assistent.name} {props.assistent.surname}</p>
        </div>
    )
};

export default appointment; 