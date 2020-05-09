import React, { Component } from 'react';

class AboutPage extends Component {
    render() {
        return (
            <div className='about-page'>
                <h1>Acerca de Nosotros</h1> 
                <div className='about-page-content'>
                    <div className='about-page__info-content'>
                    <img alt='isus-privatum' src='https://afmedios-afmedios.netdna-ssl.com/inc/uploads/2015/01/puerto_manzanillo1.jpg'/>
                        <p>Somos dos Abogados con experiencia reciente en el ámbito jurídico. (Lic. Juan Carlos Barajas González y Lic. José Miguel Rueda Valdovinos). Con conocimiento y experiencia en diversas áreas en el ámbito jurídico, ofrecemos nuestros servicios con el mejor trato humano posible.</p>
                    </div>
               </div>
            </div>
        );
    }
}

export default AboutPage;