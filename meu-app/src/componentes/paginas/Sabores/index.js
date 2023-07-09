import React from "react";
import './style.css';

import Topo from '../../Topo';
import Rodape from '../../Rodape';

export default function Sabores() {
    return (
        <div>
            <Topo />

            <main>
                <section className="bannerSabores">
                    <h1>NOSSOS SABORES</h1>
                </section>

                <section className="secaoSabores">
                    <div className="limita-secao conteudoSabores">
                        <h2>SABORES DE SORVETE</h2>

                        <div className="box-card">
                            <div className="card">
                                <img src="assets/sabor-oreo.png" alt="" />
                                <h3>Sorvete de Oreo</h3>
                                <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                            </div>

                            <div className="card">
                                <img src="assets/sabor-pistache.png" alt="" />
                                <h3>Sorvete Pistache</h3>
                                <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>
                            </div>

                            <div className="card">
                                <img src="assets/sabor-cookies-avela.png" alt="" />
                                <h3>Sorvete Cookies & Avelã</h3>
                                <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                            </div>

                            <div className="card">
                                <img src="assets/sorbet-kiwi.png" alt="" />
                                <h3>Sorvete de Kiwi</h3>
                                <p>Delicioso e refrescante sorvete sabir kiwi. Rico em vitaminas C.</p>
                            </div>

                            <div className="card">
                                <img src="assets/sorbet-morango.png" alt="" />
                                <h3>Sorvete de Morango</h3>
                                <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                            </div>

                            
                            <div className="card">
                                <img src="assets/sorbet-limao.png" alt="" />
                                <h3>Sorvete de Limão Siciliano</h3>
                                <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </main>

            <Rodape />
        </div>
    )
}
