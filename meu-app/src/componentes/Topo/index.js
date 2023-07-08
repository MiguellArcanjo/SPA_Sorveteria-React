import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export default function Topo() {
    return (
        <header>
            <div className="limita-secao conteudo-topo">
                <img src="assets/logo.png" alt="" />

                <nav>
                    <Link to="/" className="Links">Home</Link>
                    <Link to="/sabores" className="Links">Sabores</Link>
                    <Link to="/sobre" className="Links">Sobre</Link>
                </nav>
            </div>
        </header>
    );
}