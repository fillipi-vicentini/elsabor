import Link from "next/link";

export default function QuemSomos(){
    return(<main>
    <div className="teste">
        <section className="home">
            <div className="home_text">
                <h1 className="text_h1">Sobre nós</h1>
                <p>Fundado com amor e dedicação, nosso restaurante italiano nasceu da paixão pela autêntica culinária italiana e do desejo de proporcionar uma experiência gastronômica única. Desde a nossa abertura, nos tornamos um destino popular para os amantes da comida italiana em busca de pratos excepcionais em um ambiente encantador.

                    Nossa equipe é formada por chefs talentosos, que trazem consigo anos de experiência na arte da culinária italiana. Eles são verdadeiros especialistas em transformar os ingredientes mais simples em pratos requintados e saborosos. Cada prato é cuidadosamente preparado com uma atenção meticulosa aos detalhes, garantindo que você experimente o verdadeiro sabor da Itália em cada garfada.</p>
                <Link className="home-btn" href="/quem-somos" >Faça sua reserva!</Link>
            </div>
            <div className="home_img">
                <img src="/imagens/pessoa.png"  alt="Working"/>
            </div>
        </section>
    </div>
</main>

)}
