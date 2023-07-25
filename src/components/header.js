import Link from "next/link";

export function Header(){
    return (<header>
        <nav className="navegar">
            <ul className="nav_menu menu-animado">
                <li className="nav_item"><Link href="/" >Pagina inicial</Link></li>
                <li className="nav_item"><Link href="/quem-somos" >Sobre nós</Link></li>
                <li className="nav_item"><Link href="/eventos" >Eventos</Link></li>
                <li className="nav_item"><Link href="/chefe" >Chefe</Link></li>
                <li className="nav_item"><Link href="/reservas" >Reserva</Link></li>
                <li className="nav_item"><Link href="/cardapio" >Cardapio</Link></li>
                <li className="nav_item"><Link href="/cadastro" >Cadastre-se</Link></li>
                <li className="nav_item"><Link href="/login" >Login</Link></li>
                <li className="nav_item"><Link href="/status-reserva" >Status de reserva</Link></li>
            </ul>
            <div className="menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </header>)
}