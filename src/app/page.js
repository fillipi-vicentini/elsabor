import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <main>
    <div className="teste">
        <section className="home">
            <div className="home_text">
                <h4 className="text_h4">Bem-vindo  ao El Sabor</h4>
                <h1 className="text_h1">Esse é o seu restaurante</h1>
                <p>Bem-vindo ao nosso Restaurante Italiano! Descubra os sabores autênticos da Itália em nosso encantador restaurante, onde ingredientes frescos e paixão pela gastronomia se encontram. Experimente pratos clássicos italianos e desfrute de uma experiência inesquecível.</p>
                <Link className="home-btn" href="/reserva">Entre em contato!</Link>
            </div>
            <div className="home_img">
                <img id="food-img" src="imagens/pizza.png" alt="food"/>
              </div>
        </section>
    </div>
</main>
    
  )
}
