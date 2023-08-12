import logo from './logo.svg';
import './App.css';
import Header from './headerlight'
import Footer from './footer'


function App() {
    return (
        <div>
            <Header />
            {/* <div className='row tech-bg-grey justify-content-center text-center'>
                <div className='col-11 bg-tech'>
                    <h1 className='offgrid-text'>SEDI Energy Solar Containers</h1>
                    <p className='banner-text-tech'>Reliable Technology, Rapid & Easy Installation</p>
                </div>

            </div> */}
            <div className='row justify-content-center text-center banner-border'>
                <div className='col-lg-7 col-11'>
                    <h2 className='tech-text'>PV Modules</h2>
                    <img className='sedi-banner w-100' src={"/assets/pvmodule.png"} alt="logo" />
                    <p className='tech-par'>Over 95% of PV Modules made today worldwide are based on the above architecture with minor
                        improvements in crystals, perc, diodes, silicon impregnation techniques, busbars.</p>
                </div>
            </div>
            <div className='row justify-content-center text-center'>
                <div className='col-lg-6 col-11'>
                    <h2 className='pv-text'>Unique Technology Advantages Of SEDI PV Modules</h2>
                    {/* <img className='sedi-banner w-100 my-5' src={"/assets/challenges-2.png"} alt="logo" /> */}
                    <div className='row justify-content-center my-5'>
                        <div className='col-lg-3 col-3'>
                            <span ><svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 176c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128zm7.8-112C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H391.8zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z" /></svg></span>
                            <p>Weight</p>
                        </div>
                        <div className='col-lg-3 col-3'>
                            <svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z" /></svg>
                            <p>Durability</p>
                        </div>
                        <div className='col-lg-3 col-3'>
                            <svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM104 432c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z" /></svg>
                            <p>Maintenance</p>
                        </div>
                        <div className='col-lg-3 col-3'>
                            <svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z" /></svg>
                            <p>Area</p>
                        </div>
                    </div>
                    <div className='row justify-content-center mb-4'>
                        <div className='col-lg-3 col-4'>
                            <svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z" /></svg>
                            <p>Cost of Install</p>
                        </div>
                        <div className='col-lg-3 col-4'>
                            <svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm96 288H448c17.7 0 32-14.3 32-32V251.8c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1v84c0 17.7 14.3 32 32 32z" /></svg>
                            <p>Degradation</p>
                        </div>
                        <div className='col-lg-3 col-4'>
                            <svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" /></svg>
                            <p>efficiency</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className='row justify-content-center text-center pb-lg-5  bg-light-grey'>
                <div className='col-11'>
                    <h2 className='pv-text'>Salient Features of SEDI PV Modules</h2>
                </div>
            </div>
            <div className='row justify-content-center text-center bg-light-grey'>

                <div className='col-lg-4 col-11'>
                    <img className='sedi-banner w-75  my-5' src={"/assets/bentmodule.jpg"} alt="logo" />
                </div>
                <div className='col-lg-8 col-12'>
                    <div className='row my-3'>
                        <div className='col-4'>
                            <div className='features-shadow'>
                                <h4>Ultralight weight</h4>
                                <p>Weight as low as 2.5 Kg/m<sup>2</sup></p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='features-shadow'>
                                <h4>Flexibility</h4>
                                <p>The Sedi Modules are extremely flexible allowing them to conform to the substructure of the building or project.</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='features-shadow'>
                                <h4> Ultra-Slim Design</h4>
                                <p>Our special manufacturing process ensures that our solar panels are only 2-3mm thick.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row my-3'>
                        <div className='col-4'>
                            <div className='features-shadow'>
                                <h4>Light behaviour</h4>
                                <p>Much better yield in low light and shadow.</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='features-shadow'>
                                <h4>Ruggedized</h4>
                                <p>Shock absorbing, fully laminated surface provides high durability against weather, accidents or malicious attempts. </p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='features-shadow'>
                                <h4>High energy yield</h4>
                                <p>Light refraction effect generated by the lenticular surface.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row my-3'>
                        <div className='col-4'>
                            <div className='features-shadow'>
                                <h4>Easy Mounting</h4>
                                <p>The modules can be glued, screwed or mounted onto the substructure.</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='features-shadow'>
                                <h4>Project-specific solutions</h4>
                                <p>Module size, shape are entirely customizable to fit the contours of the project. </p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='features-shadow'>
                                <h4>Warranty</h4>
                                <p>Unsurpassed 25-year warranty and 40-year performance warranty</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='row justify-content-center text-center banner-border'>
                <div className='col-lg-7 col-11'>
                    <h2 className='tech-text'>Testing</h2>
                    <p className='tech-par'>SEDI Solar PV Modules are tested rigorously to meet international standards and especially German standards of safety and performance. SEDI Modules are certified for IEC 61215/61730/61701/62804-1/62716, EN-13501-5 <br /> In addition, SEDI Modules undergo rigorous physical testing to ensure its flexibility and ruggedness is sustainable even in the most adverse conditions throughout its guarantee period.</p>
                    <img className='sedi-banner w-100' src={"/assets/flex-test.jpg"} alt="logo" />

                    <p className='tech-par'>Image of SEDI Panels undergoing Flexibility Test</p>

                    <div className='row mt-3'>
                        <img className='sedi-banner mt-5 col-lg-5 col-5 w-50' src={"/assets/curve-test2.png"} alt="logo" />
                        <img className='sedi-banner mt-5 col-lg-5 col-5 w-50' src={"/assets/curve-test3.png"} alt="logo" />
                    </div>
                    <p className='tech-par'>Images of SEDI Panels undergoing curve Radius test and measurements thereafter to check for micro-fissures or cracks.</p>

                    <div className='mt-3'>
                        <img className='sedi-banner mt-5 w-50' src={"/assets/wind-test4.png"} alt="logo" />

                    </div>
                    <p className='tech-par'>Image of SEDI Panels undergoing Wind tunnel tests</p>


                </div>
            </div>

            <Footer />


        </div>
    );
}

export default App;
