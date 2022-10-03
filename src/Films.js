import React from "react"
import "./App.css";
import "./style1.css";
import { NavLink, Route , useHistory } from 'react-router-dom';
import TheSocialNetwork from "./reviews/TheSocialNetwork"
import CatchMeIfYouCan from "./reviews/CatchMeIfYouCan"

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            bianscore: props.bianscore,
            brentscore: props.brentscore
        }
    }

    render() {

        let ReviewComponent;
        if (this.state.title == "The Social Network") { ReviewComponent = <TheSocialNetwork/> } 
        else if (this.state.title == "Catch Me If You Can") { ReviewComponent = <CatchMeIfYouCan /> }
        
    

        return (
            <>
            <div>
            <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <title>Bian and Brent Reviews</title>
        <meta property="og:title" content="Bian and Brent Reviews" />
        <meta property="og:description" content="Bian and Brent reviews movies, music records, and books." />
        <meta property="og:image" content="/logo-square.png" />
        <meta name="next-head-count" content={6} />
        
        <link rel="stylesheet" href="/_next/static/css/cb93857eeb06f6a8.css" data-n-g />
        <noscript data-n-css />
        <div id="__next" data-reactroot>
          <div>
            <nav className="shadow">
            <div className="p-6 font-medium" style={{backgroundColor: "black"}}>
              <div className="flex justify-between items-center">
                <div className="w-40 cursor-pointer">
                  <a href="/">
                  <NavLink to="/" style={{color: "white", fontFamily: "Josefin Sans"}}>B&B Reviews</NavLink>
                  </a>
                </div>
                <div className="flex space-x-2" style={{color: "white"}}>
                  
                <NavLink style={{fontFamily: "Josefin Sans"}} to="/about">About Us</NavLink>
                  
                </div>
              </div>
            </div>
          </nav>
                 <main>
              <div style={{height: "100px", background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../img/front.jpg") no-repeat center', backgroundSize: 'cover'}}></div>
              {/*
              <div className="bg-gray-50">
                <div className="w-11/12 lg:w-10/12 xl:w-1024 m-auto">
                    asdf
                </div>
              </div>
              */}
              <div className="my-8 md:my-16 w-11/12 lg:w-10/12 xl:w-1024 m-auto" style={{marginTop: "35px"}}>
                <b><h1 style={{fontFamily: "Josefin Sans", fontSize: "35px", marginBottom: "10px"}}>{this.state.title} • {(this.state.bianscore + this.state.brentscore) / 2}</h1></b>
                
                <span style={{fontFamily: "Josefin Sans"}}>{ReviewComponent}</span>
              </div>
            </main>
            </div>
            </div>
            </div>
            </>
        )
    }
}