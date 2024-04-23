import React, {useState} from 'react';
import './requestQuote.scss';

export const RequestQuote = () => {
    const [requestType, setRequestType] = useState("");



    const options = [
        {name: "Call", value: "call"},
        {name: "Visit", value: "visit"}
    ]

    const onchange = (event: any) => {
        setRequestType(event.target.value)
    }

    return (
        <div className="request-quote">
            <h1>Request Call or Schedule Visit</h1>

            <select name="request-type" id="request-type" onChange={onchange}>
                {options.map(({name, value}, index) => (
                    <option key={'request-type-option' + index} value={value}>{name}</option>
                ))}
            </select>
        </div>
    );
};
