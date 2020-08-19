import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            isDeleting: false,
            loopNum: 0,
            typingSpeed: 300,
        }
    }

    componentDidMount() {
        this.handleType();
    }

    handleType = () => {
        let dataText = ["Front End Developer", "Back End Developer", "Full Stack Developer"];
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        const i = loopNum % dataText.length;
        const fullText = dataText[i];

        this.setState({
            text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
            typingSpeed: isDeleting ? 100 : 300
        });

        if (!isDeleting && text === fullText) {

            setTimeout(() => this.setState({ isDeleting: true }), 500);

        } else if (isDeleting && text === '') {

            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1
            });

        }

        setTimeout(this.handleType, typingSpeed);
    };

    render() {
        return (
            <div>
               <div className="landing-page">
                    <div className="content">
                        <h1 className="name">I'm Gurjeet Kaur</h1>
                        <h3 className="job typewriter">A {this.state.text}</h3>
                        <button className="btn btn-primary btn-xl" onClick={() => this.props.history.push('/about')} >RESUME</button>
                        <a className="btn btn-primary btn-xl" href="#">FIND MORE</a>
                    </div>
                </div> 
            </div>                        
        );
    }
}
