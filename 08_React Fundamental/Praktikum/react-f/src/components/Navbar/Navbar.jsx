const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container-fluid shadow-sm pb-2">
          <a className="navbar-brand logoSimple" href="#">
            Simple Header
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbarMenu" id="navbarContent">
          <a className="nav-link btn btn-primary mx-2 text-black" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link btn btn-primary mx-2 text-black" aria-current="page" href="#">
              Features
            </a>
            <a className="nav-link btn btn-primary mx-2 text-black" aria-current="page" href="#">
              Pricing
            </a>
            <a className="nav-link btn btn-primary mx-2 text-black" aria-current="page" href="#">
              FAQs
            </a>
            <a className="nav-link btn btn-primary mx-2 text-black" aria-current="page" href="#">
              About
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
  
export default Navbar;