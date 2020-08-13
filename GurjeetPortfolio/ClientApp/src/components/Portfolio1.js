import React, { Component } from 'react';

export class Portfolio extends Component {
    static displayName = Portfolio.name;
    constructor(props) {
        super(props);
        this.state = {
            projectTitle: "",
            projectIntro: "",
            projectImage: "",
            projectDescription: "",
            projectTechnologies: "",
            projectDemoLink: ""
        };
    }


    render() {
        return (
            <div id="portfolio">
                <div className="row">
                   
                    <div className="col-md-6 col-sm-6 portfolio-item">
                        <a className="portfolio-link" onClick={() => {
                            var modalBG = document.getElementById(
                                "portfolioModal1"
                            );
                           
                            modalBG.style.display = "block";
                            
                        }}> 
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={require('../img/p4.png')} alt="" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>Talent</h4>
                            <p className="text-muted">Online Job Portal</p>
                        </div>
                    </div>

                </div>

                <div className="portfolio-modal modal fade" id="portfolioModal1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="close-modal" data-dismiss="modal">
                                <div className="lr">
                                    <div className="rl"></div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        <div className="modal-body">
                                           
                                            <h2 className="text-uppercase">EziBuy</h2>
                                            <p className="item-intro text-muted">Online Shopping Store</p>
                                            <img className="img-fluid d-block mx-auto" src={require('../img/p4.png')} alt="" />
                                                <p>EziBuy is an Online shopping website. It provides the registeration and login feature.
                                Users are able to explore the several categories of products and can add the selected product in shopping cart. </p>
                                                <p>EziBuy is a responsive website using the SQL database to store the users and products detail.
                                                 In addition, this site have two views user and admin which is maintain using authentication.
                                Admin authorized with all CRUD operations like Create, Read, Update and delete. On the other hand, users are only able to change their own personal details and shop any products</p>
                                            <ul className="list-inline">
                                                    <li><b>Technologies : </b>ASP.NET, MVC, C#, Bootstrap, CSS, HTML, JavaScript, jQuery, AJAX, Microsoft SQL</li>
                                                    <li></li>
                                                    <li><a href="https://github.com/gurjeetmor/EziBuy" target="_blank"><b>View Project</b></a></li>
                                                </ul>
                                            <button className="btn btn-primary" data-dismiss="modal" type="button">
                                                <i className="fas fa-times"></i>
                                                    Close
                                </button>
                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
    
            </div>
        );
    }
}
