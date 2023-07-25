export default function Login() {
    return (
        <main>

            <div className="container">
                <h1>Login</h1>
                <div className="home_imgform">
                    <img id="food-img" src="/imagens/kisspizza.png" alt="food" />
                </div>
                <form>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />

                    <label for="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required />

                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" required pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" placeholder="000.000.000-00" />

                    <input type="submit" class="home-btn" value="Entrar" />
                </form>
            </div>

        </main>

    )
}