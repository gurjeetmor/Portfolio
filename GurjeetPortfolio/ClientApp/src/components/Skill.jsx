import React, { Component } from 'react';
import SkillsBar from "./SkillsBar";


export class Skill extends Component {
    static displayName = Skill.name;

    render() {
        const frontEnd = [
            { type: "HTML", level: 100 },
            { type: "CSS", level: 100 },
            { type: "JavaScript", level: 100 },
            { type: "SCSS", level: 90 }
        ];
        const backEnd = [
            { type: "C#", level: 100 },
            { type: "PHP", level: 100 },
            { type: "Entity Framework", level: 100 }
        ];
        const cloudServices = [
            { type: "AWS(EC2, S3, RDS)", level: 100 },
            { type: "AZURE(APP Service, SQL)", level: 100 },
        ];
        const javaScriptFrameworks = [
            { type: "ReactJS", level: 100 },
            { type: "VueJS", level: 100 },
            { type: "Redux", level: 90 },
            { type: "Vuex", level: 100 },
            { type: "NodeJS", level: 40 },
        ];
        const database = [
            { type: "Microsoft SQL Server", level: 100 },
            { type: "MySQL", level: 100 },
            { type: "MongoDB", level: 50 }
        ];
        const frameworks = [
            { type: ".NET Core", level: 100 },
            { type: "ASP.NET", level: 100 },
            { type: "Laravel", level: 100 },
            { type: "BootStrap", level: 100 },
            { type: "Semantic UI", level: 90 },
            { type: "Ant Design UI", level: 60 },
        ];
        const tools = [
            { type: "Visual Studio", level: 100 },
            { type: "Visual Studio Code", level: 100 },
            { type: "PhpStorm", level: 100 },
            { type: "JIRA", level: 100 },
            { type: "WorkflowMax", level: 100 },
            { type: "BitBucket", level: 100 },
            { type: "Sentry", level: 90 },
        ];
        const other = [
            { type: "GitBash", level: 100 },
            { type: "Webpack", level: 80 },
            { type: "NPM", level: 100 },
            { type: "LAMP", level: 90 },
            { type: "Confluence", level: 100 },
            { type: "Xero", level: 70 },
        ];
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <h3>Front End</h3>
                        <SkillsBar hue="46.37" saturation="99.21" skills={frontEnd} />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <h3>Back End</h3>
                        <SkillsBar hue="46.37" saturation="99.21" skills={backEnd} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <h3>Frameworks</h3>
                        <SkillsBar hue="46.37" saturation="99.21" skills={frameworks} />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <h3>JavaScript Frameworks</h3>
                        <SkillsBar hue="46.37" saturation="99.21" skills={javaScriptFrameworks} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <h3>Cloud Services</h3>
                        <SkillsBar hue="46.37" saturation="99.21" skills={cloudServices} />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <h3>Database</h3>
                        <SkillsBar hue="46.37" saturation="99.21" skills={database} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <h3>Tools</h3>
                        <SkillsBar hue="46.37" saturation="99.21" skills={tools} />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <h3>Additional</h3>
                        <SkillsBar hue="46.37" saturation="99.21" skills={other} />
                    </div>
                </div>
            </div>
        );
    }
}

