import React, { Component } from 'react';

export class Education extends Component {
    static displayName = Education.name;

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-7">
                        <h4 className="education-title">Post Graduate Diploma in Management (Information System)</h4>
                        <p>
                            Whitireia New Zealand <br />
                            Merit Scholar
                    </p>
                    </div>
                    <div className="col-md-5"><p>September 2017- September 2018</p></div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <h4 className="education-title">Master's in Computer Science</h4>
                        <p>
                            Kurukshetra University (India) <br />
                            Assessed as comparable to New Zealand Master’s Degree by New Zealand Qualification Authority (NZQA)
                    </p>
                    </div>
                    <div className="col-md-5"><p>July 2011- May 2013</p></div>
                </div>
            </div>
        );
    }
}
