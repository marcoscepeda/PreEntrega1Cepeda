import CartWidget from "./CartWidget";

function NavBar (){

    return (
        <header id="header" className="header flex  navbar navbar-expand-lg bg-light">
            <h1>Elegancia</h1>
            <nav className ="navBar">
                <a href="" className =" mx-4 ">Interior</a>
                <a href="" className =" mx-4 ">Comercial</a>
                <a href="" className ="mx-4 ">Oficina</a>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar;