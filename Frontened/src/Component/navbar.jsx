const Navbar = () => {
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">EKYAM</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#about">About <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Events">Past Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Join E-Cell</a>
        </li>
      </ul>
      <span class="navbar-text">
        All for one..One for all
      </span>
    </div>
  </nav>
}

export default Navbar;