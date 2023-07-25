export default function Reservas() {
    return (
        <div className="container">
            <h1>Faça sua reserva aqui!</h1>
            <div className="home_imgform">
                <img id="food-img" src="/imagens/relogio.png" alt="food" />
            </div>
            <form>
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required />

                <label for="name">E-mail:</label>
                <input type="text" id="name" name="e-mail" required />

                <label for="name">Telefone:</label>
                <input type="text" id="name" name="Telefone" required />

                <label for="date">Data:</label>
                <input type="date" id="date" name="date" required />

                <label for="time">Hora:</label>
                <input type="time" id="time" name="time" required />

                <label for="observation">Observação:</label>
                <textarea id="observation" name="observation"></textarea>

                <input type="submit" className="home-btn" value="Enviar" />
            </form>
        </div>
    )
}