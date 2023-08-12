import logo from './logo.svg';
import './App.css';
import header from './header'


function App() {
    return (
        <div>
            <div className='row justify-content-center align-items-center mt-5 pt-4 pb-2 footer-bg  '>
                <div className='col-lg-4 text-center'>
                    <h5>Corporate Office</h5>
                    <p>17 Im Wiesental, 75031 Eppingen, Germany   </p>
                </div>
                <div className='col-lg-4 justify-content-center cpr-order'>
                    <b>Website: </b> &nbsp; www.sedi-solar.com
                </div>
                <div className='col-lg-4 m-lg-0 mt-2 mb-4 footer-info-align'>

                    <div ><b>Email:</b> info@sedi-solar.com </div>

                </div>
                <div className='col-lg-12 mt-3 mb-4 text-center'>

                    Copyright © 2023 | SEDI Solar Energy

                </div>


            </div>



        </div>
    );
}

export default App;
