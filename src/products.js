import logo from './logo.svg';
import './App.css';
import Header from './headerlight'
import Footer from './footer'


function App() {
    return (
        <div>
            <Header />
            <div className='row justify-content-center text-center banner-border'>
                <div className='col-7'>
                    <h2 className='tech-text'>Our Products</h2>
                </div>
            </div>
            <div className='row justify-content-center text-center'>
                <div className='col-lg-7 col-11'>
                    <p className=''>Our Solar products are revolutionary in design and offer a wide range of possibilities that hitherto was not available to the consumer. SEDI combines intrinsic design and fabrication knowledge along with our unique Solar panel to provide custom-designed energy solutions in the most demanding situations.</p>
                </div>
            </div>
            <div className='row justify-content-center text-center pt-4 mt-2 bg-light-grey'>
                <div className='col-lg-8 col-11 mt-4'>
                    <h4 className=''>The SEDI solar jacket</h4>
                    <p className='sub-heading'>The most innovative Off Grid Solar Solution on the market today.</p>
                    <p className="sub-text">Completely integrated Monocrystalline Si-cell based, long life solar energy solution for critical equipment on the field, requiring a very reliable and very low maintenance energy source 24/7.</p>
                </div>
            </div>
            <div className='row justify-content-center align-items-center text-center py-4  bg-light-grey'>

                <div className='col-lg-3 col-11'>

                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item justify-content-center active">
                                <img className='sedi-banner w-75  my-5' src={"/assets/powerjacket.png"} alt="logo" />

                            </div>
                            <div class="carousel-item justify-content-center">
                                <img className='sedi-banner w-50  my-5' src={"/assets/powerjacket3.png"} alt="logo" />

                            </div>

                        </div>
                        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button> */}
                    </div>
                </div>
                <div className='col-lg-9 col-12'>
                    <div className='row my-3'>
                        <div className='col-4'>
                            <div className='features-shadow'>

                                <p>Worldwide Patented Micro-lens surface nanotechnology Solar PV Modules to support vertical installation on most street poles.
                                </p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='features-shadow'>

                                <p>Toughened, treated Solar modules resistant to scratch or damage. Flexible nature prevents damage during transport and installation.</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='features-shadow'>

                                <p>Battery, Solar controller, and Data switch are all installed within the Solar Jacket frame, providing shelter from the weather as well as protection from vandalism </p>
                            </div>
                        </div>
                    </div>

                    <div className='row my-3'>
                        <div className='col-4'>
                            <div className='features-shadow'>

                                <p>Vertical Panel design not only greatly reduces dust collection, but also reduces wind resistance, and shear force on the structure and support pole</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='features-shadow'>

                                <p>Design allows access to Sunlight from East and West, as well as diffused sunlight providing more power generation than conventional panels of the same size. </p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='features-shadow'>

                                <p>45 Year Linear Performance Warranty on Solar Panels, Easy Installation, low cost of ownership. </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className='row justify-content-center text-center'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3'>Solar Powered Trailers</h2>
                </div>
            </div>
            <div className='row justify-content-around align-items-center'>
                <div className='col-lg-8'>
                    <p className=''>Our ultra-light and ultra-slim PV modules are ideal to be installed on purpose-built trailers which will house the battery, inverter, and even standby generator in a solid theft-resistant box. The PV modules can be either mounted on the surface flush and folded out further if needed or can slide out from lockable entry flaps on the sides. <br /><br />

                        A trailer has adequate space and rigidity to support a 4-meter telescopic mast for CCTV surveillance or radio transmission applications. Moreover, you can mount 4 x LED lights for site works and emergency lights at remote locations.


                        <br /><br />
                        Power generation: 3kW up to 15kW

                        <br />                  Outputs: 12/24/48VDC/220/240VAC

                        <br />            Optional Hybrid Design: Diesel GenSet within Standby Switchover

                    </p>
                </div>
                <div className='col-lg-3'>
                    {/* <img className='sedi-banner w-75  my-5' src={"/assets/seditrailer.jpg"} alt="logo" /> */}
                    <div id="carouselExample8" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item justify-content-center active" data-bs-interval="4000">
                                <img className='sedi-banner w-60  my-5' src={"/assets/seditrailer.jpg"} alt="logo" />
                            </div>
                            <div class="carousel-item justify-content-center align-items-center" data-bs-interval="4000">
                                <img className='sedi-banner w-75  my-5' src={"/assets/sedisolar2.png"} alt="logo" />
                            </div>
                            <div class="carousel-item justify-content-center align-items-center" data-bs-interval="4000">
                                <img className='sedi-banner w-75  my-5' src={"/assets/sediaolar3.png"} alt="logo" />
                            </div>

                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample8" data-bs-slide="prev">

                            <svg className='w-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample8" data-bs-slide="next">

                            <svg className='w-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>


            <div className='row justify-content-center text-center'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3 mt-5'>Solar Containers</h2>
                </div>
            </div>

            <div className='row justify-content-around align-items-center'>
                <div className='col-lg-5 text-center'>
                    {/* <img className='sedi-banner w-75  my-5' src={"/assets/solaroff.png"} alt="logo" /> */}
                    <div id="carouselExample3" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item justify-content-center active" data-bs-interval="4000">
                                <img className='sedi-banner cont-img  my-5' src={"/assets/Container1.png"} alt="logo" />
                            </div>
                            <div class="carousel-item justify-content-center " data-bs-interval="4000">
                                <img className='sedi-banner cont-img  my-5' src={"/assets/Container2.png"} alt="logo" />
                            </div>
                            <div class="carousel-item justify-content-center " data-bs-interval="4000">
                                <img className='sedi-banner cont-img my-5' src={"/assets/Container4.png"} alt="logo" />
                            </div>
                            {/* <div class="carousel-item" data-bs-interval="4000">
                                <img src={"/assets/off4.jpg"} class="d-block w-60 mx-auto sedi-banner  my-5" alt="..." />
                            </div> */}

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <p className=''>
                        Fully self-contained Solar generated power with its own inverters and battery packs to provide off-grid power. The solar containers can fit in a regular 20ft or 40ft shipping container. Easy to transport and mobilize. Ideal for disaster relief, military, remote sites, critical infrastructure, farming, telecommunications, and water irrigation projects.


                        <br /><br />
                        A typical Container Solution can provide between 30KWh to 130KWh of power off-grid 24/7, sufficient to power a small village in Africa or Asia. It can be deployed and packed up within a couple of hours.
                    </p>
                </div>

            </div>

            <Footer />


        </div>
    );
}

export default App;
