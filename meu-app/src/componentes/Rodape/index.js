import React from "react";
import './style.css'

export default function Rodape() {
    return (
        <footer>
            <div className="limita-secao footer-conteudo">
                <img src="assets/logo.png" alt="" />

                <div>
                    <h2>ENDEREÇO</h2>
                    <p>Av. Bernadino de<br/> Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>

                <div>
                    <h2>CONTATO</h2>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>

                <div>
                    <h2>HORÁRIOS</h2>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>

            <div className="footer-final">
                <p>Gelateria. Orgulhosamente desenvoldido por "Miguel Arcanjo"</p>
            </div>
        </footer>
    );
}