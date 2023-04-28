let navbar = `
<section id="nav-bar">
    <div class="container-fluid">
        <nav class="navbar fixed-top border-bottom border-primary navbar-expand-lg"
            style="background-color: lightblue">
            <a class="navbar-brand" href="/">
                <div class="logo2-image">
                    <img src="images/Logo2.png" class="img-fluid" alt="Logo error">
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="nav-bar-top collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Admissions
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="admissions.html">Overview</a></li>
                        <li><a class="dropdown-item" href="#">School Fees</a></li>
                        <li><a class="dropdown-item" href="#">Further information</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            More
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">TBD</a></li>
                            <li><a class="dropdown-item" href="#">TBD</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">TBD</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>



    </div>
</section>"
`;

document.getElementById("main-nav").innerHTML = navbar
