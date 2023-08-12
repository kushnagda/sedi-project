import logo from './logo.svg';
import './App.css';
import { ComposableMap, Geographies, Annotation, Geography, Marker } from "react-simple-maps"
import header from './header'
import $ from 'jquery'


const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 170) {
            // alert("hi");
            $("#meet").show(1000);
        }
        if ($(window).scrollTop() > 600) {

            $("#sediaward").css({ "opacity": "0", "display": "flex" }).show(3000).animate({ opacity: 1 });
            $("#sediaward2").css({ "opacity": "0", "display": "flex" }).show(3000).animate({ opacity: 1 });
        }
        if ($(window).scrollTop() > 1250) {

            $("#apps").css({ "opacity": "0", "display": "block" }).show(3000).animate({ opacity: 1 });
            $("#apps2").css({ "opacity": "0", "display": "flex" }).show(3000).animate({ opacity: 1 });
        }
        if ($(window).scrollTop() > 1750) {

            $("#global").css({ "opacity": "0", "display": "block" }).show(3000).animate({ opacity: 1 });
            $("#global2").css({ "opacity": "0", "display": "flex" }).show(3000).animate({ opacity: 1 });
            $("#global3").css({ "opacity": "0", "display": "flex" }).show(3000).animate({ opacity: 1 });
        }
        if ($(window).scrollTop() > 2350) {

            $("#contact").css({ "opacity": "0", "display": "block" }).show(3000).animate({ opacity: 1 });
            // $("#global2").css({ "opacity": "0", "display": "flex" }).show(3000).animate({ opacity: 1 });
        }
    })
})




function App() {
    return (
        <div>

            <div className='banner-parent'>
                <img className='sedi-banner' src={"/assets/SEDI-latest.png"} alt="logo" />
                <div className='banner-text'>
                    <p>DURABLE</p>
                    <p>RELIABLE</p>
                    <p>POWERFUL</p>
                    {/* <button type="button" class="btn btn-blue btn-read" >READ MORE</button> */}
                    <a className='btn btn-blue btn-read' href="/technology">READ MORE</a>
                </div>

                <div className='d-flex banner-height'>
                    <div className='left-bgbanner'></div>
                    <div className='right-bgbanner bg-blue'></div>
                </div>
                {/* Meet Sedi */}
                <div id='meet' className='w-100 meetsedibanner'>
                    <h1 className='text-center mt-4 text-dark meet-sedi'>MEET SEDI</h1>
                    <div className='tagline'><i class="fa-solid fa-quote-left"></i><p>We all need to do our part to make the world a better place for our children!</p><i class="fa-solid fa-quote-right"></i></div>
                    <div className='row d-lg-flex d-block cards-align  justify-content-center mt-5'>
                        <div className='col-lg-3 col-12 cards'>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img className='story-img' src={"/assets/story.png"} alt="Our Story" />
                                        <p className='card-text'>Our Story</p>
                                    </div>
                                    <div class="flip-card-back">
                                        <p className='back-card-title'>Our Story</p>
                                        <p className='back-card-text'>SEDI had its beginnings in Germany in early 2009 as a Company specializing in unique security and fire safety solutions, with emphasis on renewable energy solutions to power them. Since those early days, the interest in our bespoke and unique Solar and Wind solutions such as Jacket and Tower grew and SEDI Solar was born as an independent company to focus on providing high quality and unique solar solutions, especially in projects and scenarios where the heavy glass top conventional Solar systems fail.</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-3 col-12 cards'>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img className='concept-img' src={"/assets/concept.png"} alt="Our Concept" />
                                        <p className='card-text'>Our Concept</p>
                                    </div>
                                    <div class="flip-card-back">
                                        <p className='back-card-title'>Our Concept</p>
                                        <p className='back-card-text'>Providing SOLAR on the MOVE. Rapidly deployable solar solutions in the rural regions, and areas where conventional solar would be either impossible, or too expensive or take too much time to install and deploy. Solar deployments for military, disaster relief, field medical centers, event management sectos and telecom sector where rapid mobility is essential. SEDI Solar designed to provide very reliable energy with very low on-site maintenance</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-3 col-12 cards'>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img className='technology-img' src={"/assets/technology.png"} alt="Our Technology" />
                                        <p className='card-text'>Our Technology</p>
                                    </div>
                                    <div class="flip-card-back">
                                        <p className='back-card-title'>Our Technology</p>
                                        <p className='back-card-text'>Using unique fiber composites that allow the manufacture of Mono-crystalline PV Modules at a fraction of the weight of conventional ones, providing comparable power, longer life warranty, much higher durability and ruggedness and made to be ultra-thin and quite flexible. Our PV Modules use the same Tier 1 Mono-crystalline Silicon wafers as other top notch conventional PV Module manufacturers, hence performance is similar but no one can compare with us in situations and locations where conventional ones could not be installed.</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

            <div id="sediaward2" className='row justify-content-center text-center mt-5 bg-light-grey'>
                <div className='col-7'>
                    <h2 className='tech-text mb-3'>2022 GreenTech Challenge Award</h2>
                </div>
            </div>
            <div id="sediaward" className='row justify-content-around align-items-center bg-light-grey'>
                <div className='col-lg-5 text-center'>
                    <img className='sedi-banner w-60  my-5' src={"/assets/sediaward1.png"} alt="logo" />

                </div>
                <div className='col-lg-7'>
                    <p className=''>
                    The GreenTech Challenge 2022 trophy was awarded to SEDI Solar Distributor in
                    Greece AA Systems for developing an innovative completely Off-Grid Early Warning
                    System for Forest Fires using the reliability of the SEDI Jacket and Thermal sensing
                    cameras combined with their rugged in-house build alarm panel, sensor systems and
                    transmitters. <br/>
                    
                    Forest fires cause immeasurable losses each year around the world economically,
                    environmentally and last, but by no means the least, the deaths of humans, livestock and 
                    wildlife. <br/>
                    
                    The GreenTech Challenge 2022 trophy was awarded to SEDI Solar Distributor in Greece AA
                    Systems for developing an innovative completely Off-Grid Early Warning System for Forest 
                    Fires dubbed “Ananias” using the reliability of the SEDI Solar Jacket, precision Thermal 
                    sensing cameras combined with a rugged alarm panel, paired with sensors and
                    transmitters.<br/>
                    
                    The early warning system for Forest Fires works completely off grid, continuously sensing
                    the ambient temperature levels viewed through the thermal cameras and raises alarm points
                    as temperatures rise from Green (safe) to Amber (warning) to Red (danger) levels, sending
                    data, alarm and video back to control room through 4G or radios enabling early response 
                    before a fire starts or gets out of hand.<br/>
                    
                    The SEDI Solar Jacket provides 24/7/365 reliable energy to all the active components of the
                    Early Warning System, with very little maintenance demands if any. <br/>

                    The system won the European award for the most innovate, green and environmentally
                    useful technology in 2022. <br/>

                    </p>
                </div>

            </div>

            {/* Info sections */}
            {/* <div className='row d-flex info-top mt-5 align-items-center'>
                <div className='col-lg-6 pt-5 info-text mobile-order' >
                    <p className='solar-title mt-4 text-center position-relative'>SOLAR POWERED GREENHOUSES</p>
                    <p className='solar-text'>Our Bi-Facial transparent base Solar Greenhouse PV Modules, offer the
                        possibility to create light weight structural support for Greenhouses where the
                        roofing laid by our PV Modules can become an energy source as well. These
                        modules find a perfect application for greenhouses, office and home skylights and
                        on other transparent, translucent structural surfaces.
                    </p>
                </div>
                <div className='col-lg-6 poly-transition'>
                    <img className='w-100' src={"/assets/greenhouse.jpg"} alt="Solar powered Green house" />
                </div>

            </div>
            <div className='row d-flex info-top mt-5 align-items-center'>
                <div className='col-lg-6 poly-transition2'>
                    <img className='w-100' src={"/assets/solarbusstop.png"} alt="Solar bus stop" />
                </div>
                <div className='col-lg-6 pt-5 info-text' >
                    <p className='solar-title mt-4 text-center position-relative'>SOLAR CAR PARKS & SHELTER</p>
                    <p className='solar-text'>Due to its light weight, semi flexible nature, and weather/moisture retardant surface, SEDI PV modules can be utilized as
                        very efficient roofing for structures such as car parks, portacabins and other shelters. As these are light weight, they
                        permit the underlying structure to be light weight as well, increasing cost effectiveness of fabrication and installation

                    </p>
                </div>


            </div> */}
            <p id="apps" className='text-center  text-dark offgrid-text title-font'>APPLICATIONS WITH SEDI SOLAR</p>
            <div id="apps2" className='row justify-content-around align-items-center'>
                <div className='col-lg-11 text-center'>
                    {/* <img className='sedi-banner w-100  my-5' src={"/assets/bahrgreenhouse.jpg"} alt="logo" /> */}
                    <div id="carouselExample15" class="carousel slide">
                        <div class="carousel-inner">
                            {/* <div class="row carousel-item active justify-content-center align-items-center">
                                <img src={"/assets/bentmodule.jpg"} class=" col-lg-3  my-5 slider-img-mobile" alt="..." />
                                <p className=' col-lg-5'>
                                    <p className='overlay-title'><b>Flexible PV Modules</b></p>
                                    <p>Sedi PV modules are monocrystalline Half cut ultra light modules made with patented FRP material that does not discolor in UV light, offers flexibility and durability for the most demanding projects</p>
                                </p>
                            </div> */}
                            <div class="row carousel-item active justify-content-center align-items-center">
                                <img src={"/assets/SrilankaPoleJacket.png"} class=" col-lg-3  my-5 slider-img-mobile" alt="..." />
                                <p className=' col-lg-5'>
                                    <p className='overlay-title'><b>Border security or surveillance</b></p>
                                    <p> City planners, Homeland security, law enforcement and other stakeholders can secure critical spots in their city, country and borders with no worry for power, maintenance using our patented and unique SEDI Single Solar Jacket, SEDI Double Solar Jacket or SEDI Towers</p>
                                </p>
                            </div>
                            <div class="row carousel-item  justify-content-center align-items-center">
                                <img src={"/assets/trainstation.jpg"} class=" col-lg-3  my-5 slider-img-mobile" alt="..." />
                                <p className=' col-lg-5'>
                                    <p className='overlay-title'><b>Light weight rooftops</b></p>
                                    <p>sedi light weight flexible solar PV modules provides ideal energy generation on even the most curved architectural surfaces without need for any reinfcement thanks to its ultralight weight of less than 2.5 Kg per sq meter  </p>
                                </p>
                            </div>
                            <div class="row carousel-item  justify-content-center align-items-center">
                                <img src={"/assets/greenhouse2.jpg"} class=" col-lg-4  my-5 " alt="..." />
                                <p className=' col-lg-5'>
                                    <p className='overlay-title'><b>Sedi solar for Greenhouses</b></p>
                                    <p>Sedi PV modules are ideal for Greenhouse power since they can be installed on the lightweight framework of the Greenhouse without needing any additional reinfcemnet. Thanks to high efficiency of nearly 20% Sedi modules can provide adequate power for Greenhouse with only one third roof coverage allowing essential sunlight through for good plant growth</p>
                                </p>
                            </div>
                            <div class="row carousel-item  justify-content-center align-items-center">
                                <img src={"/assets/solarcanopy.jpeg"} class=" col-lg-3  my-5" alt="..." />
                                <p className=' col-lg-5'>
                                    <p className='overlay-title'><b>Eco Sustainable Homes</b></p>
                                    <p>For providing grid tied or completely off grid power, using SEDI Solar ultra- lightweight, thin and flexible PV Modules, installation is easy and maintenance is minimal with long term guarantees and peace of mind</p>
                                </p>
                            </div>
                            <div class="row carousel-item  justify-content-center align-items-center">
                                <img src={"/assets/golfcart.png"} class=" col-lg-3  my-5 slider-img-mobile" alt="..." />
                                <p className=' col-lg-5'>
                                    <p className='overlay-title'><b>E-vehicles</b></p>
                                    <p> Installing thin flexible ultralight SEDI Solar modules flush on roofs of vehicles - be they Golf carts, Large Semis, Boats or even Trains helps reduce carbon footprint greatly without compromising performance or reliability of the vehicle. It also saves a huge amount of fuel per year.</p>
                                </p>
                            </div>


                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample15" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <svg className='w-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample15" data-bs-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <svg className='w-50' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>


            </div>


            <p className='text-center bg-light-grey mb-0 pt-4 text-dark offgrid-text globalpresence-text2'>TRADE SHOWS & FAIRS</p>
            <div className='row justify-content-center bg-light-grey'>
                <div className='col-lg-3 text-center'>
                    <img src={"/assets/trade1.jpeg"} class="  my-5 slider-img-mobile trade1" alt="..." />
                </div>
                <div className='col-lg-3 text-center'>
                    <img src={"/assets/trade2.jpg"} class="  my-5 slider-img-mobile trade2" alt="..." />
                </div>
                <div className='col-lg-3 text-center'>
                    <img src={"/assets/trade3.jpg"} class="  my-5 slider-img-mobile trade3" alt="..." />
                </div>
                {/* <div className='col-lg-3'>
                    <img src={"/assets/trade4.jpg"} class="  my-5 slider-img-mobile trade4" alt="..." />
                </div> */}
            </div>

            {/* Off grid applications */}
            {/* <div className='mt-5'>
                <p className='text-center  text-dark offgrid-text title-font'>OFF GRID APPLICATIONS WITH SEDI SOLAR JACKET</p>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-11 app-rows'>
                        <img className='' src={"/assets/bentmodule.jpg"} alt="Solar module bent" />
                        <div className='overlay-text'>
                            <p className='uparrow'><i class="fa-solid fa-angle-up"></i></p>
                            <p className='overlay-title'>Solar Module Bent</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a ullam rerum, officiis aliquam nesciunt? Unde nihil ducimus aperiam assumenda?</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-11 app-rows'>
                        <img className='' src={"/assets/SrilankaPoleJacket.png"} alt="Srilanka Pole Jacket" />
                        <div className='overlay-text'>
                            <p className='uparrow'><i class="fa-solid fa-angle-up"></i></p>
                            <p className='overlay-title'>Pole Jacket</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a ullam rerum, officiis aliquam nesciunt? Unde nihil ducimus aperiam assumenda?</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-11 app-rows'>
                        <img className='' src={"/assets/trainstation.jpg"} alt="Solar modules at train station" />
                        <div className='overlay-text'>
                            <p className='uparrow'><i class="fa-solid fa-angle-up"></i></p>
                            <p className='overlay-title'>Solar Module at train station</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a ullam rerum, officiis aliquam nesciunt? Unde nihil ducimus aperiam assumenda?</p>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-11 app-rows'>
                        <img className='' src={"/assets/greenhouse2.jpg"} alt="Greenhouse" />
                        <div className='overlay-text'>
                            <p className='uparrow'><i class="fa-solid fa-angle-up"></i></p>
                            <p className='overlay-title'>Greenhouse</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a ullam rerum, officiis aliquam nesciunt? Unde nihil ducimus aperiam assumenda?</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-11 app-rows'>
                        <img className='' src={"/assets/solarcanopy.jpeg"} alt="Solar Canopy" />
                        <div className='overlay-text'>
                            <p className='uparrow'><i class="fa-solid fa-angle-up"></i></p>
                            <p className='overlay-title'>Solar Canopy</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a ullam rerum, officiis aliquam nesciunt? Unde nihil ducimus aperiam assumenda?</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-11 app-rows'>
                        <img className='' src={"/assets/golfcart.png"} alt="Golf cart" />
                        <div className='overlay-text'>
                            <p className='uparrow'><i class="fa-solid fa-angle-up"></i></p>
                            <p className='overlay-title'>Golf Cart</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a ullam rerum, officiis aliquam nesciunt? Unde nihil ducimus aperiam assumenda?</p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Map */}
            <p id="global" className='text-center  text-dark globalpresence-text '>OUR GLOBAL PRESENCE</p>
            <div id="global2" className='row justify-content-center'>
                <div className='col-lg-7 col-11'>
                    <ComposableMap>
                        <Geographies geography={geoUrl} fill="#959594">
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography key={geo.rsmKey} geography={geo} />
                                ))
                            }
                        </Geographies>

                        <Marker coordinates={[-118.006, 37.7128]} >
                            <circle r={8} fill="#F53" />
                        </Marker>
                        <Marker coordinates={[-4.006, 39.7128]} >
                            <circle r={6} fill="#F53" />
                        </Marker>
                        <Marker coordinates={[4.006, 45.7128]} >
                            <circle r={4} fill="#F53" />
                        </Marker>
                        <Marker coordinates={[3.006, 49.7128]} >
                            <circle r={4} fill="#F53" />
                        </Marker>
                        <Marker coordinates={[44.006, 19.7128]} >
                            <circle r={6} fill="#F53" />
                        </Marker>
                        <Marker coordinates={[56.006, 17.7128]} >
                            <circle r={6} fill="#F53" />

                        </Marker>
                        <Marker coordinates={[55.006, 26.7128]} >
                            <circle r={7} fill="#F53" />

                        </Marker>
                        <Marker coordinates={[73.006, 19.7128]} >
                            <circle r={6} fill="#F53" />
                        </Marker>
                        <Marker coordinates={[79.006, 14.7128]} >
                            <circle r={6} fill="#F53" />
                        </Marker>
                        <Marker coordinates={[102.006, 3.7128]} >
                            <circle r={6} fill="#F53" />
                        </Marker>
                        <Marker coordinates={[120.006, 13.7128]} >
                            <circle r={6} fill="#F53" />
                        </Marker>
                        <Marker coordinates={[123.006, 13.7128]} >
                            <circle r={6} fill="#F53" />
                        </Marker>
                        <Marker coordinates={[120.006, -26.7128]} >
                            <circle r={6} fill="#F53" />
                        </Marker>
                    </ComposableMap>
                </div>
            </div>
            <div id="global3" className='row justify-content-center'>
                <div className='col-lg-9 col-11'>
                    <p><span className='solutions-text '>Find our solutions installed in:</span>Australia, Austria, GCC, Germany, Greece, Hongkong, India, Indonesia,
                        Malaysia, Spain, USA </p>
                </div>
            </div>

            {/* Contact Form */}
            <div id="contact" className='row  bg-light-grey mt-4 pb-3'>

                <p className='text-center  text-dark globalpresence-text  pt-5 col-lg-12'>CONTACT US FOR MORE INFORMATION</p>
                <div className='row justify-content-center mt-5 mb-5'>
                    <div className='col-lg-7'>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name" />
                            <label for="floatingInput">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Subject" />
                            <label for="floatingInput">Subject</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Phone" />
                            <label for="floatingInput">Phone</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Comments" />
                            <label for="floatingInput">Comments</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
