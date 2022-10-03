import React from "react"
import "./App.css";
import "./style1.css";
import movies from "./data/movies.json";
import { NavLink, Route , useHistory } from 'react-router-dom'; 


export default class App extends React.Component {

  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchQuery: ""
    }
  }

  handleSearch(e) {
    console.log(e.target.value);
    this.setState({
      searchQuery: e.target.value 
    })
  }

 


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
                <h1 className="mx-auto mb-8 font-bold text-white text-3xl md:text-4xl" style={{fontFamily: "Josefin Sans"}}><span style={{color: "#FFD700", fontFamily: "Josefin Sans"}}>Bian</span> and <span style={{color: "#f8b8ff", fontFamily: "Josefin Sans"}}>Brent</span> Reviews</h1> 
                <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
                  <div className="relative z-30 text-base text-black" style={{fontFamily: "Josefin Sans"}}><input onChange={(e)  => this.handleSearch(e)} style={{background: "#ede9e8", color: "black"}}type="text" placeholder="Search movies, albums or books" className="mt-2 focus:outline-none rounded py-2 
                        px-4 block w-full" /></div>
                </div>
              </div>
              {/* 
              <div className="bg-gray-50">
                <div className="w-11/12 lg:w-10/12 xl:w-1024 m-auto">
                  
                  <div className="py-8 md:py-16 md:flex md:space-x-8">
                    <div className="md:w-7/12">
                      <div className="font-bold text-3xl">Choosing a dorm just got easier</div>
                      <div className="mt-10 space-y-8 md:space-y-10">
                        <div className="relative">
                          <div className="absolute flex items-center justify-center h-12 w-12 text-3xl"><span className="emoji" role="img" aria-label="school" aria-hidden="false">🏫</span></div>
                          <p className="ml-16 text-xl leading-6 font-medium text-gray-900">Read student reviews</p>
                          <div className="mt-2 ml-16 text-base text-gray-600">
                            <div>We've collected reviews for over 1,000 dorms in the United States. Find your school and browse our student-generated reviews to help you find your next dorm.</div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute flex items-center justify-center h-12 w-12 text-3xl"><span className="emoji" role="img" aria-label="paper" aria-hidden="false">📝</span></div>
                          <p className="ml-16 text-xl leading-6 font-medium text-gray-900">Write an anonymous review</p>
                          <div className="mt-2 ml-16 text-base text-gray-600">
                            <div>
                              How was your experience at your dorm? You can help incoming freshmen and other classmates by writing a completely anonymous review and adding photos. We just require that you <button type="button" className="text-primary underline">sign in</button> with your email.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-5/12 mt-8 md:mt-0 mx-auto"><img className="mx-auto shadow-xl rounded-xl" src="/review-form.png" alt="review-form" /></div>
                  </div>
                  
                </div>
              </div>
            */}
              <div className="my-8 md:my-16 w-11/12 lg:w-10/12 xl:w-1024 m-auto">
                {/* <div className="font-bold text-2xl text-center my-8" style={{fontFamily: "Josefin Sans"}}>Latest Movie Reviews</div> */}
                <div className="flex flex-wrap">
                    {movies.map((movie) => {
                    var cardColor;
                    var cardFontColor; 
                    if (movie.genre == "Drama") {
                      cardColor = "#ebf5ef";
                      cardFontColor = "#3e5949"; 
                    }
                    else if (movie.genre == "Drama/Crime") {
                      cardColor = "#f2f1e4";
                      cardFontColor = "#635a04"; 
                    }
                    else if (movie.genre == "Action/Sci-fi") {
                      cardColor = "#e4ebf5"; 
                      cardFontColor = "#053375"; 
                    }
                    else if (movie.genre == "Romance") {
                      cardColor = "#f5e4f2"; 
                      cardFontColor = "#6e0a5c"; 
                    }
                    else if (movie.genre == "Horror") {
                      cardColor = "#f0f0f0"; 
                      cardFontColor = "#403e3e"; 
                    }

                    cardColor = "#e4ebf5"; 
                    cardFontColor = "#053375"; 

                    return (
                      <>
                        <NavLink to={"/films/" + movie.url} className="p-2 w-full sm:w-1/2 lg:w-1/3">
                          
                            <div className="overflow-hidden rounded-lg shadow-lg" style={{backgroundColor: cardColor}}>
                              {/* <img src=""alt="dorm" /> */}
                              <div className="p-4">
                                <div>
                                  <h3 className="text-left text-xl font-bold truncate" style={{fontFamily: "Josefin Sans", color: cardFontColor}}>{movie.title}</h3>
                                  <div className="flex text-sm items-center justify-end mt-2">
                                    <div className="truncate w-2/4" style={{fontFamily: "Josefin Sans"}}>
                                      {movie.genre} • {movie.releaseYear}
                                    </div>
                                    <div className="truncate w-2/4 text-right" style={{fontFamily: "Josefin Sans"}}>
                                      {(movie.bianscore + movie.brentscore) / 2}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                  
                        </NavLink>
                      </>
                    )
                  })}
                </div>
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
            <br/><br/><br/><br/>
            {/*
            <footer>
              <div className="py-16 bg-gray-50 text-center">
                <div className="w-11/12 lg:w-10/12 xl:w-1024 m-auto">
                  <div className="w-16 m-auto">
                    <span style={{boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%'}}>
                      <span style={{boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%'}}><img style={{display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0}} alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27316%27%20height=%27316%27/%3e" /></span><img alt="rate my dorm logo" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="cursor-pointer mb-8 md:mb-0" style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}} />
                      <noscript>&lt;img alt="rate my dorm logo" srcSet="/_next/image?url=%2Flogo-square.png&amp;amp;w=384&amp;amp;q=75 1x, /_next/image?url=%2Flogo-square.png&amp;amp;w=640&amp;amp;q=75 2x" src="/_next/image?url=%2Flogo-square.png&amp;amp;w=640&amp;amp;q=75" decoding="async" data-nimg="intrinsic" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" class="cursor-pointer mb-8 md:mb-0" loading="lazy"/&gt;</noscript>
                    </span>
                  </div>
                  <div className="text-3xl font-bold mt-2">RateMyDorm</div>
                  <ul className="mt-4 md:mt-8 md:flex justify-center space-x-4 text-sm">
                    <li className="rounded w-20 h-2 bg-gray-200" />
                    <li className="rounded w-20 h-2 bg-gray-200" />
                    <li className="rounded w-20 h-2 bg-gray-200" />
                    <li className="rounded w-20 h-2 bg-gray-200" />
                  </ul>
                  <div className="mt-4 md:mt-8 text-gray-600 text-xs">2022 RateMyDorm. All Rights Reserved.</div>
                </div>
              </div>
            </footer>
            */}
            <div style={{position: 'fixed', zIndex: 9999, top: '16px', left: '16px', right: '16px', bottom: '16px', pointerEvents: 'none'}} />
          </div>
        </div>
      </div>
      </>
    )
  }

}

