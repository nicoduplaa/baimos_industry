import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
  return (
    
        <nav className = "nav-cont">
          <a href="">
            <h1 className="logo">Baimos</h1>
          </a>
        

            <div className="botonera">
                <a href="">Productos</a>
                <a href="">About Us</a>
                <a href="">News!</a>
            </div>

            <CartWidget />
        </nav>
    
  )
}

export default NavBar