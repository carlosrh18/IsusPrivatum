import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
        <div className='homePage'>
            <div className='top-half'>
                <div className='top-content'>
                <div className='content-1'><h4><span>Ofreciendo nuestro servicio en el puerto de Manzanillo,Colima,México</span></h4></div>  

                <div className='content-2'><h3><span>Nuevos clientes tendran un descuento del 10%</span></h3></div>  
                </div>
                <div className='content-3'>
                    <h1>Isus Privatum</h1>
                    <h2>Abogados</h2>
                    <h4>Excelencia y calidad</h4>
                </div>
              </div>
                <div className='middle-content'>
                    <h1>Nuestra filosofía</h1>
                    <p>Nuestro equipo tiene una visión integral y multidisciplinaria de nuestra actividad, ya que los problemas de nuestros clientes abarcan diversas ramas del derecho, sin olvidar que en la práctica profesional, la especialidad la impone el problema a resolver, que significa la ampliación del conocimiento jurídico.</p>
                </div>
                <div className='bottom-content'>
                    <div className='title-bottom-content'><h1>Areas Jurídicas</h1></div>
                    <NavLink className='law-book' to='personalInjury'>
                        <img id='law-book' src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1558735806/Screen_Shot_2019-05-23_at_4.18.37_PM.png' alt='law-book'></img>
                        <div><p id='img-p-law-book'>Derecho Familiar</p></div>
                    </NavLink>
                    <NavLink className='jail-cell' to='criminalDefence'>
                        <img id='jail-cell' src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1558735804/Screen_Shot_2019-05-23_at_4.19.23_PM.png' alt='jail-cell'></img>
                        <div><p id='img-p-jail-cell'>Derecho Civil</p></div>    
                    </NavLink>
                    <NavLink className='breathlyser' to='/DUIS'>
                        <img id='breathalyser' src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1558735801/Screen_Shot_2019-05-23_at_4.20.19_PM.png' alt='breathalyser'></img>
                        <div><p id='img-p-breathlyser'>Derecho Mercantil</p></div>
                    </NavLink>
                    <NavLink className='breathlyser' to='/DUIS'>
                        <img id='breathalyser' src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1558735801/Screen_Shot_2019-05-23_at_4.20.19_PM.png' alt='breathalyser'></img>
                        <div><p id='img-p-breathlyser'>Derecho de Seguros</p></div>
                    </NavLink>
                    <NavLink className='breathlyser' to='/DUIS'>
                        <img id='breathalyser' src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1558735801/Screen_Shot_2019-05-23_at_4.20.19_PM.png' alt='breathalyser'></img>
                        <div><p id='img-p-breathlyser'>Derecho de Amparo</p></div>
                    </NavLink>
                    <NavLink className='breathlyser' to='/DUIS'>
                        <img id='breathalyser' src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1558735801/Screen_Shot_2019-05-23_at_4.20.19_PM.png' alt='breathalyser'></img>
                        <div><p id='img-p-breathlyser'>Derecho de Seguridad Social</p></div>
                    </NavLink>
                    <NavLink className='breathlyser' to='/DUIS'>
                        <img id='breathalyser' src='https://res.cloudinary.com/dmjs1tfzn/image/upload/v1558735801/Screen_Shot_2019-05-23_at_4.20.19_PM.png' alt='breathalyser'></img>
                        <div><p id='img-p-breathlyser'>Derecho Administrativo</p></div>
                    </NavLink>
                </div>
        </div>
        );
    }
}

export default HomePage;