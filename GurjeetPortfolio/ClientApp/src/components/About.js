import React, { Component } from 'react';

export class About extends Component {
    static displayName = About.name;

    render() {
        return (
            <div className="row">
                <div className="about col-xs-12 col-sm-12 col-md-6">
                    <div className="">

                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <p>
                        I am a highly efficient and detail oriented full stack software developer with commercial experience in software and web development.
                        I am currently working as a Full Stack Developer in MVP Studio developing cloud-based web application.
                        I am passionate about software development and I am committed to continual learning, and advancement of my programming knowledge.  In addition to my technical skills, I enjoy outdoor travelling and arts.
                        I enjoy working in a collaborative team environment and delivering applications with excellent user experiences.
                    </p>
                    <p>
                        I am actively looking for a Software Developer position. I am committed to growing a career in the local IT industry.
                    </p>

                    <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <a href="https://github.com/gurjeetmor">
                                <img src={require('../img/phone.svg')} style={{ height: "20px" }} alt="" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/gurjeetmor">
                                <img src={require('../img/email.svg')} style={{ height: "20px" }} alt=""/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/gurjeetmor">
                                <img src={require('../img/skype.svg')} style={{ height: "20px" }} alt=""/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/gurjeetmor">
                                <img src={require('../img/linkedin.svg')} style={{ height: "20px" }} alt=""/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/gurjeetmor">
                                <img src={require('../img/github.svg')} style={{ height: "20px" }} alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
