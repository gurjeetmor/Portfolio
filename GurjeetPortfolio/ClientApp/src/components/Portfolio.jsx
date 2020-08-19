import React, { Component } from 'react';

export class Portfolio extends Component {
    static displayName = Portfolio.name;

    render() {
        return (
            <section id="work" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Portfolio</h3>
                                <p className="subtitle-a">
                                    Incididunt nostrud id aute culpa excepteur pariatur consequat
                                    elit culpa nulla enim anim incididunt.
                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="work-box">
                                <div className="work-img">
                                    <img src={require('../img/01-full.jpg')} alt="" className="img-fluid" />
                                </div>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h2 className="w-title">EziBuy</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">
                                                    ASP.NET, MVC, C#, Bootstrap, CSS, HTML, JavaScript, jQuery, SQL
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="w-link-group">
                                                <a href="https://ezibuy20200803072457.azurewebsites.net/" target="_blank" className="w-link">
                                                    View Live
                                                </a>
                                                <a href="https://github.com/gurjeetmor/EziBuy" target="_blank" className="w-link">
                                                    GitHub Link
                                                </a>
                                                <a href={require('../img/ezibuy.png')} data-lightbox="gallery-ezibuy" className="lightbox-display w-link">
                                                    Explore
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a href={require('../img/ezibuy1.png')}
                                    data-lightbox="gallery-ezibuy"
                                    style={{ display: "none" }}>
                                    Ezibuy
                                </a>
                                <a href={require('../img/ezibuy2.png')}
                                    data-lightbox="gallery-ezibuy"
                                    style={{ display: "none" }}>
                                    Ezibuy
                                </a>
                                <a href={require('../img/ezibuy3.png')}
                                    data-lightbox="gallery-ezibuy"
                                    style={{ display: "none" }}>
                                    Ezibuy
                                </a>
                                <a href={require('../img/ezibuy4.png')}
                                    data-lightbox="gallery-ezibuy"
                                    style={{ display: "none" }}>
                                    Ezibuy
                                </a>
                                <a href={require('../img/ezibuy5.png')}
                                    data-lightbox="gallery-ezibuy"
                                    style={{ display: "none" }}>
                                    Ezibuy
                                </a>
                                <a href={require('../img/ezibuy6.png')}
                                    data-lightbox="gallery-ezibuy"
                                    style={{ display: "none" }}>
                                    Ezibuy
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="work-box">
                                <div className="work-img">
                                    <img src={require('../img/RPS.jpg')} alt="" className="img-fluid" />
                                </div>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h2 className="w-title">Rock Paper Scissors</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">
                                                    CSS, HTML, JavaScript
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="w-link-group">
                                                <a href="https://gurjeetmor.github.io/RockPaperScissorsGame/" target="_blank" className="w-link">
                                                    View Live
                                                </a>
                                                <a href="https://github.com/gurjeetmor/RockPaperScissorsGame" target="_blank" className="w-link">
                                                    GitHub Link
                                                </a>
                                                <a href={require('../img/rps1.png')} data-lightbox="gallery-rps" className="lightbox-display w-link">
                                                    Explore
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a href={require('../img/rps2.png')}
                                    data-lightbox="gallery-rps"
                                    style={{ display: "none" }}>
                                    RPS
                                </a>
                                <a href={require('../img/rps3.png')}
                                    data-lightbox="gallery-rps"
                                    style={{ display: "none" }}>
                                    RPS
                                </a>
                                <a href={require('../img/rps4.png')}
                                    data-lightbox="gallery-rps"
                                    style={{ display: "none" }}>
                                    RPS
                                </a>
                            </div>
                        </div> 

                        <div className="col-md-6">
                            <div className="work-box">
                                <div className="work-img">
                                    <img src={require('../img/react-crud.jpg')} alt="" className="img-fluid" />
                                </div>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h2 className="w-title">React CRUD App</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">
                                                    ReactJs, ES6, CSS, HTML, JavaScript, Semantic UI, jQuery, Webpack
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="w-link-group">
                                                <a href="#" className="w-link">
                                                    View Live
                                                </a>
                                                <a href="https://github.com/gurjeetmor/ReactCrudOperation" target="_blank" className="w-link">
                                                    GitHub Link
                                                </a>
                                                <a href={require('../img/ReactCRUD.gif')} data-lightbox="gallery-react-crud" className="lightbox-display w-link">
                                                    Explore
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>                               
                            </div>
                        </div>                        

                        <div className="col-md-6">
                            <div className="work-box">
                                <div className="work-img">
                                    <img src={require('../img/more-projects.png')} alt="" className="img-fluid" />
                                </div>
                                <div className="work-content">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h2 className="w-title">Github Projects</h2>
                                            <div className="w-more">
                                                <span className="w-ctegory">
                                                    Explore more projects
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="w-link-group">                                               
                                                <a href="https://github.com/gurjeetmor" target="_blank" className="w-link">
                                                    GitHub Link
                                                </a>                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        

                    </div>
                </div>
            </section>
        );
    }
}
