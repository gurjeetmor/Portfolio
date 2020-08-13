import React, { Component } from 'react';

export class About extends Component {
    static displayName = About.name;

    render() {
        return (
            <div className="row">
                <div className="col-md-7">
                    <p>
                        I am a highly efficient and detail oriented full stack software developer with commercial experience in software and web development.
                        I am currently working as a Full Stack Developer in MVP Studio developing cloud-based web application.
                        I am passionate about software development and I am committed to continual learning, and advancement of my programming knowledge.  In addition to my technical skills, I enjoy outdoor travelling and arts.
                        I enjoy working in a collaborative team environment and delivering applications with excellent user experiences.
                    </p>
                    <p>
                        I am actively looking for a Software Developer position. I am committed to growing a career in the local IT industry.
                    </p>
                </div>
                <div className="col-md-5">

                    <table>
                        <tbody>
                        <tr><td><b>EMAIL:</b></td><td>gurjeet.mor@yahoo.com</td></tr>
                        <tr><td><b>ADDRESS:</b></td><td>AUCKLAND, NEW ZEALAND</td></tr>
                            <tr><td><b>LANGUAGE:</b></td><td>ENGLISH, HINDI, PUNJABI</td></tr>
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}
