import React, { Component } from 'react';

export class Experience extends Component {
    static displayName = Experience.name;

    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={require('../img/p6.png')} alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="subheading">LuminateOne</h4>
                                    <p>Software Developer<br />August 2019- March 2020</p>

                                </div>
                                <div className="timeline-body">
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={require('../img/p2.png')} alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="subheading">Aimy Plus</h4>
                                    <p>Full Stack Developer<br />March 2019- July 2019</p>
                                </div>
                                <div className="timeline-body">

                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={require('../img/p7.png')} alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="subheading">MVP Studio</h4>
                                    <p>Full Stack Developer<br />October 2018-March 2019</p>
                                </div>
                                <div className="timeline-body">

                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={require('../img/p1.png')} alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="subheading">Destm Technologies</h4>
                                    <p>Web Developer<br />May 2016- August 2017</p>
                                </div>
                                <div className="timeline-body">

                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={require('../img/p4.png')} alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="subheading">D. A. V. College (India)</h4>
                                    <p>Lecturer/Lab Instructure<br />August 2013- April 2016</p>
                                </div>
                                <div className="timeline-body">

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
