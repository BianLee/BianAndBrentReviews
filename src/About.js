import React from "react"
import "./App.css";
import "./style1.css";
import { NavLink, Route , useHistory } from 'react-router-dom'; 

export default class About extends React.Component {
    render() {
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
                    
                    {/* 
                    <span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative'}}>
                      <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, paddingTop: '16.730038022813687%'}} /><img alt="rate my dorm logo" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="responsive" style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} />
                      <noscript>&lt;img alt="rate my dorm logo" sizes="100vw" srcSet="/_next/image?url=%2Flogo.png&amp;amp;w=640&amp;amp;q=75 640w, /_next/image?url=%2Flogo.png&amp;amp;w=750&amp;amp;q=75 750w, /_next/image?url=%2Flogo.png&amp;amp;w=828&amp;amp;q=75 828w, /_next/image?url=%2Flogo.png&amp;amp;w=1080&amp;amp;q=75 1080w, /_next/image?url=%2Flogo.png&amp;amp;w=1200&amp;amp;q=75 1200w, /_next/image?url=%2Flogo.png&amp;amp;w=1920&amp;amp;q=75 1920w, /_next/image?url=%2Flogo.png&amp;amp;w=2048&amp;amp;q=75 2048w, /_next/image?url=%2Flogo.png&amp;amp;w=3840&amp;amp;q=75 3840w" src="/_next/image?url=%2Flogo.png&amp;amp;w=3840&amp;amp;q=75" decoding="async" data-nimg="responsive" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" loading="lazy"/&gt;</noscript>
                    </span>
                    */}
                  </a>
                </div>
                <div className="flex space-x-2" style={{color: "white"}}>
                  
                <NavLink style={{fontFamily: "Josefin Sans"}} to="/about">About Us</NavLink>
                  
                </div>
              </div>
            </div>
          </nav>
                 <main>
              <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("img/front.jpg") no-repeat center', backgroundSize: 'cover'}} className="py-40 px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto">
                <h2 className="mx-auto mb-8 font-bold text-white text-3xl md:text-4xl" style={{fontFamily: "Josefin Sans"}}>About Us</h2> 
                <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
                  <p style={{fontFamily: "Josefin Sans", fontSize: "15px"}}>Who are we?</p>
                </div>
              </div>
              {/*
              <div className="bg-gray-50">
                <div className="w-11/12 lg:w-10/12 xl:w-1024 m-auto">
                    asdf
                </div>
              </div>
              */}
              <div className="my-8 md:my-16 w-11/12 lg:w-10/12 xl:w-1024 m-auto">
                <span style={{fontFamily: "Josefin Sans"}}>We first met as college roomates. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br/><br/>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</span>
              </div>
             
              {/*
              <div className="bg-gray-50">
                <div className="py-8 md:y-16 w-11/12 lg:w-10/12 xl:w-1024 m-auto">
                  <div className="font-bold text-3xl text-center my-8">Recent Reviews</div>
                  <div className="flex justify-center space-x-4">
                    <div className="block md:w-4/12 space-y-4">
                      <div>
                        <div className="space-y-4 ">
                          <div className="h-60 w-full shadow-sm rounded border p-4 space-y-8">
                            <div className="flex space-x-4">
                              <div className="w-10 h-10 rounded-full bg-gray-200" />
                              <div className="space-x-0.5"><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span></div>
                            </div>
                            <div className="space-y-2">
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-50" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="space-y-4 ">
                          <div className="h-60 w-full shadow-sm rounded border p-4 space-y-8">
                            <div className="flex space-x-4">
                              <div className="w-10 h-10 rounded-full bg-gray-200" />
                              <div className="space-x-0.5"><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span></div>
                            </div>
                            <div className="space-y-2">
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-50" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block w-4/12 space-y-4">
                      <div>
                        <div className="space-y-4 ">
                          <div className="h-60 w-full shadow-sm rounded border p-4 space-y-8">
                            <div className="flex space-x-4">
                              <div className="w-10 h-10 rounded-full bg-gray-200" />
                              <div className="space-x-0.5"><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span></div>
                            </div>
                            <div className="space-y-2">
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-50" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="space-y-4 ">
                          <div className="h-60 w-full shadow-sm rounded border p-4 space-y-8">
                            <div className="flex space-x-4">
                              <div className="w-10 h-10 rounded-full bg-gray-200" />
                              <div className="space-x-0.5"><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span></div>
                            </div>
                            <div className="space-y-2">
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-50" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block w-4/12 space-y-4">
                      <div>
                        <div className="space-y-4 ">
                          <div className="h-60 w-full shadow-sm rounded border p-4 space-y-8">
                            <div className="flex space-x-4">
                              <div className="w-10 h-10 rounded-full bg-gray-200" />
                              <div className="space-x-0.5"><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span></div>
                            </div>
                            <div className="space-y-2">
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-50" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="space-y-4 ">
                          <div className="h-60 w-full shadow-sm rounded border p-4 space-y-8">
                            <div className="flex space-x-4">
                              <div className="w-10 h-10 rounded-full bg-gray-200" />
                              <div className="space-x-0.5"><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span><span className="text-gray-200">★</span></div>
                            </div>
                            <div className="space-y-2">
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-50" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-200" />
                              <div className="loading-shine h-3 rounded w-full bg-gray-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               */}
            </main>
            </div>
            </div>
            </div>
            </>
        )
    }
}