import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css";

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego3g"/>
                <div>
                    <strong>Diego Fernandes</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhore stestesdas 
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim autem ad reiciendis facilis! Illo!
            </p>

            <footer>
                <p>
                    Preço/Hora 
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;