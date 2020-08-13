import React, { Component } from 'react';

export default class SkillsBar extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: true };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ collapsed: false })
        }, 3000);
    }

    render() {
        const { collapsed } = this.state;
        const { hue, saturation, skills } = this.props;

        return (
            <div className={`container ${collapsed ? 'collapsed' : ''}`}>
                <ul className="skills">
                    {skills.map((skill, index) =>
                        <li
                            key={skill.type}
                            style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${(index + 50)}%)` }}
                        >
                            <p>{skill.type}<span>{skill.level}</span></p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}