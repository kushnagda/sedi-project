import logo from './logo.svg';
import './App.css';
import header from './header'


function App() {
    return (
        <div>
            {/* Navbar */}
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src={"/assets/logo.png"} alt="logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse headerlight" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/technology">TECHNOLOGY</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/products">PRODUCTS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/references">REFERENCES</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            {/* Banner */}



        </div>
    );
}

export default App;
