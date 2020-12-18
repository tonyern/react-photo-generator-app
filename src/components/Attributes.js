import React, { Component } from 'react';

class Attributes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            /* Each item has a unique key. */
            ethnicity: {
                "0": "white",
                "1": "latino",
                "2": "asian",
                "3": "black"
            },

            age: {
                "0": "infant",
                "1": "child",
                "2": "young-adult",
                "3": "adult",
                "4": "elderly"
            }
        }
    }

    render() {
        const { ethnicity } = this.state;
        const { age } = this.state;

	    let ethnicityList = Object.keys(ethnicity).map((k) => {
		    return (
			    <option key={k} value={k}>{ethnicity[k]}</option>
		    )
        }, this);
        
        let ageList = Object.keys(age).map((k) => {
		    return (
			    <option key={k} value={k}>{age[k]}</option>
		    )
	    }, this);

	    return (
		    <div>
			    <select name="ethnicity-list">
				    {ethnicityList}
			    </select>

                <select name="age-list">
                    {ageList}
                </select>
		    </div>
	    );
    }
}

export default Attributes;