export default function Contato() {
    return (<main>

        <div className="container">
            <h1>Formulario de Contato</h1>
            <div className="home_imgform">
                <img id="food-img" src="/imagens/comida.png" alt="food" />
            </div>
            <form>
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required />
                <label for="name">E-mail:</label>
                <input type="text" id="name" name="e-mail" required />
                <label for="message">Mensagem:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit" className="home-btn" >Enviar</button>
            </form>
        </div>

    </main>
    )
}