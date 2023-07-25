export default function Cadastro() {
    return (<main >
        <div className="container">
            <h1>Cadastre-se!</h1>
            <div className="home_imgform">
                <img id="food-img" src="/imagens/comida.png" alt="food" />
            </div >
            <form>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required />

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" placeholder="000.000.000-00"/>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" required pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}" placeholder="(00) 0000-0000"/>

                        <button type="submit" >Enviar</button>
                        </form>

                    </div>

                </main>


                )
}