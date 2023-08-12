import logo from './logo.svg';
import './App.css';
import Header from './headerlight'
import Footer from './footer'


function App() {
    return (
        <div>
            <Header />
            <div className='row justify-content-center text-center banner-border'>
                <div className='col-lg-7 col-11'>
                    <h2 className='tech-text'>References</h2>
                </div>
            </div>
            <div className='row justify-content-center text-center'>
                <div className='col-lg-7 col-11'>
                    <p className=''>Sedi PV modules by virtue of their ultralight weight, super slim design and flexibility have been used on some very innovative products and projects such as the SEDI Solar jacket, roofs of vehicles, greenhouses, curved canopies, and carports.</p>
                </div>
            </div>


            {/* Rooftop Solar*/}
            <div className='row justify-content-center text-center'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3'>Rooftop Solar</h2>
                </div>
            </div>
            <div className='row justify-content-around align-items-center'>
                <div className='col-lg-7'>
                    <p className=''>
                        SEDI Solar PV Modules are installed on a wide range of rooftops where conventional solar panels are either too heavy, cannot conform to the curves and shapes, do not get the correct angle of installation, are subject to stress of high wind speeds or damage  easily due to hailstorms or sand storms. In some places SEDI PV modules are installed simply because they provide a much more aesthetic cladding over a roof and in most cases invisible from the ground.
                    </p>
                </div>
                <div className='col-lg-5 text-center'>
                    {/* <img className='sedi-banner w-100  my-5' src={"/assets/solarbusstop.png"} alt="logo" /> */}
                    <div id="carouselExample2" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item justify-content-center active">
                                <img src={"/assets/rooftop1.png"} class="d-block w-60 sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/rooftop2.png"} class="d-block w-60 mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/rooftop3.png"} class="d-block w-60 mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/rooftop4.jpg"} class="d-block w-60 mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/rooftop5.jpg"} class="d-block w-60 mx-auto sedi-banner  my-5" alt="..." />
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


            </div>


            {/* Greenhouses */}
            <div className='row justify-content-center text-center'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3'>Greenhouses & Eco-Sustainable Houses</h2>
                </div>
            </div>
            <div className='row justify-content-around align-items-center'>
                <div className='col-lg-5 text-center'>
                    {/* <img className='sedi-banner w-100  my-5' src={"/assets/bahrgreenhouse.jpg"} alt="logo" /> */}
                    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item justify-content-center active" data-bs-interval="4000">
                                <img src={"/assets/bahrgreenhouse.jpg"} class="d-block w-75 sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item justify-content-center" data-bs-interval="4000">
                                <img src={"/assets/greenhouse2.jpeg"} class="d-block w-60 sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item justify-content-center" data-bs-interval="4000">
                                <img src={"/assets/greenhouse3.jpg"} class="d-block w-60 sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item justify-content-center" data-bs-interval="4000">
                                <img src={"/assets/bahr-greenhouse.jpg"} class="d-block w-75 sedi-banner  my-5" alt="..." />
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <p className=''>
                        SEDI Solar PV technology helps reduce carbon footprint and even provide off grid living and sustenance by virtue of their ultra-light weight, flexibility, long life and low maintenance technology. SEDI collaborates with leading Eco-Homes developers to provide a easy to install, ready to ship homes especially for luxury eco-resorts in national parks and protected areas around the world
                    </p>
                </div>

            </div>


            {/* Telecommunications */}
            <div className='row justify-content-center text-center'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3'>Telecommunications</h2>
                </div>
            </div>
            <div className='row justify-content-around align-items-center mb-5'>
                <div className='col-lg-7'>
                    <p className=''>
                        SEDI Jackets and Towers are used extensively in remote locations or locations where main grid power is expensive or impossible to install. Only SEDI can provide the high reliability, low maintenance guarantees that Telecom operators demand, since their equipment needs to be operational 24/7/365.
                    </p>
                </div>
                <div className='col-lg-5 text-center'>
                    {/* <img className='sedi-banner w-100  my-5' src={"/assets/solarbusstop.png"} alt="logo" /> */}
                    <div id="carouselExample9" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={"/assets/tele1.png"} class="d-block tele-img1  mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/tele2.png"} class="d-block w-25 mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/tele3.png"} class="d-block w-25 mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/tele4.png"} class="d-block w-25 mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/tele5.png"} class="d-block w-50 mx-auto sedi-banner  my-5" alt="..." />
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample9" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample9" data-bs-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


            </div>

            {/* Surveillance */}
            <div className='row justify-content-center text-center'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3'> Surveillance </h2>
                </div>
            </div>
            <div className='row justify-content-around align-items-center mb-5'>
                <div className='col-lg-5 text-center'>
                    {/* <img className='sedi-banner w-100  my-5' src={"/assets/bahrgreenhouse.jpg"} alt="logo" /> */}
                    <div id="carouselExample10" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item justify-content-center active" data-bs-interval="4000">
                                <img src={"/assets/surv1.png"} class="d-block w-40 sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item justify-content-center" data-bs-interval="4000">
                                <img src={"/assets/surv2.jpg"} class="d-block w-25 sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item justify-content-center" data-bs-interval="4000">
                                <img src={"/assets/surv3.jpg"} class="d-block w-40 sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item justify-content-center" data-bs-interval="4000">
                                <img src={"/assets/surv4.jpg"} class="d-block w-40 sedi-banner  my-5" alt="..." />
                            </div>


                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample10" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample10" data-bs-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <p className=''>
                        SEDI Solar Jackets are unsurpassed in their reliability, ruggedness, vandal resistance and very low maintenance when it comes to installing critical surveillance equipment such as CCTV and sensors especially for surveillance and homeland security. Operators worldwide are switching to SEDI Solar Jackets after facing huge maintenance and vandalism problems with conventional solar systems.
                    </p>
                </div>

            </div>

            {/* Oil & Gas Industry */}
            <div className='row justify-content-center text-center'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3'>Oil & Gas Industry</h2>
                </div>
            </div>
            <div className='row justify-content-around align-items-center'>
                <div className='col-lg-7'>
                    <p className=''>
                        Remote oil field sensors and transmission units are crucial to smooth operation in the O&G industry. SEDI Solar Jackets provides uninterrupted energy with a high level of reliability and comfort to the operators who can count on thousands of hours of maintenance free operation and of course just as valuable savings in money.
                    </p>
                </div>
                <div className='col-lg-5 text-center'>
                    {/* <img className='sedi-banner w-100  my-5' src={"/assets/solarbusstop.png"} alt="logo" /> */}
                    <div id="carouselExample11" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={"/assets/oil1.JPG"} class="d-block tele-img1  mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/oil2.png"} class="d-block w-50 mx-auto sedi-banner  my-5" alt="..." />
                            </div>


                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample11" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample11" data-bs-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


            </div>

            {/* Vehicle Power */}
            <div className='row justify-content-center text-center'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3'> Vehicle Power </h2>
                </div>
            </div>
            <div className='row justify-content-around align-items-center'>
                <div className='col-lg-5 text-center'>
                    {/* <img className='sedi-banner w-100  my-5' src={"/assets/bahrgreenhouse.jpg"} alt="logo" /> */}
                    <div id="carouselExample12" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item justify-content-center active" data-bs-interval="4000">
                                <img src={"/assets/power1.png"} class="d-block w-25 sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item justify-content-center" data-bs-interval="4000">
                                <img src={"/assets/power2.png"} class="d-block w-40 sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item justify-content-center" data-bs-interval="4000">
                                <img src={"/assets/power3.png"} class="d-block w-60 sedi-banner  my-5" alt="..." />
                            </div>



                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample12" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample12" data-bs-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <p className=''>
                        SEDI PV Modules are ideal for vehicles such as cars and buses since they are thin flexible and flush mounted on the roof, so there is no danger of them creating a drag or blowing off while the vehicle is in motion. Further as SEDI PV Modules are completely waterproof, they are perfectly suited for installation on even boats and rigs for reliable long life operation.
                    </p>
                </div>

            </div>

            {/* shelters */}
            <div className='row justify-content-center text-center'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3'>Carports, Shelters & Displays </h2>
                </div>
            </div>
            <div className='row justify-content-around align-items-center'>
                <div className='col-lg-7'>
                    <p className=''>
                        The flexible rugged, ultralight weight SEDI PV modules allows architects, engineers and designers build lighter, more aesthetic and much more economical metal frames and structures to mount these solar panels on, to provide not only shelter but also valuable clean energy. SEDI Modules are installed on bus shelters, carports and even display boards providing backlit display for night time information.
                    </p>
                </div>
                <div className='col-lg-5 text-center'>
                    {/* <img className='sedi-banner w-100  my-5' src={"/assets/solarbusstop.png"} alt="logo" /> */}
                    <div id="carouselExample13" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={"/assets/shelter1.jpeg"} class="d-block w-50 mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/shelter2.jpg"} class="d-block w-50 mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/shelter3.png"} class="d-block w-50 mx-auto sedi-banner  my-5" alt="..." />
                            </div>


                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample13" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample13" data-bs-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <svg className='w-25' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


            </div>





            {/* Vehicles */}
            {/* <div className='row justify-content-center text-center'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3'>Vehicles and Car parking shelters</h2>
                </div>
            </div>
            <div className='row justify-content-around align-items-center'>
                <div className='col-lg-7'>
                    <p className=''>
                        Due to their lightweight, semi-flexible nature and weather/moisture retardant surface, SEDI PV modules can be utilized as very efficient roofing for structures such as car parks, portacabins, and other shelters.
                        <br /><br />
                        As these are lightweight, they allow the underneath structure to be lightweight too, enhancing the cost-effectiveness of fabrication and installation.
                    </p>
                </div>
                <div className='col-lg-5 text-center'>

                    <div id="carouselExample2" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={"/assets/solarbusstop.png"} class="d-block w-100 sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={"/assets/solarvehicles.png"} class="d-block w-60 mx-auto sedi-banner  my-5" alt="..." />
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">

                            <svg className='w-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">

                            <svg className='w-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


            </div> */}

            {/* Rapidly deployable solar energy */}
            <div className='row justify-content-center text-center'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3'>Rapidly deployable solar energy</h2>
                </div>
            </div>
            <div className='row justify-content-around align-items-center'>
                <div className='col-lg-5 text-center'>
                    {/* <img className='sedi-banner w-75  my-5' src={"/assets/solaroff.png"} alt="logo" /> */}
                    <div id="carouselExample3" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="4000">
                                <img src={"/assets/solar1.jpg"} class="d-block w-50 mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="4000">
                                <img src={"/assets/solar2.png"} class="d-block w-40 mx-auto sedi-banner  my-5" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="4000">
                                <img src={"/assets/solar3.png"} class="d-block w-50 mx-auto sedi-banner  my-5" alt="..." />
                            </div>


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
                        Due to SEDI Solar PV unique properties of ultra-light weight, ultra-thin, flexible, ruggedness and ability to collect energy even from reflected and diffused sunlight, SEDI has developed some unique, rapidly deployable clean, reliable and safe energy solutions to be adopted in both rural and urban situations, including military applications, construction sites, telecommunication sites, disaster relief and temporary power for any purpose. SEDI has developed a range of unique solutions such as the SEDI Solar Trailer, the SEDI Rural Solar Wagon and the SEDI Solar Energy Container
                    </p>
                </div>

            </div>


            <Footer />


        </div>
    );
}

export default App;
