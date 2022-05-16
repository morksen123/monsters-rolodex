// import { Component } from 'react'; 
import CardContainer from '../card-container/card-container.component';

import './card-list.component.css'; 

const CardList = ({ monsters }) => (
        <div className='card-list'>
            {monsters.map((monster) => {
                return <CardContainer monster={monster} key={monster.id}/>
            })}
        </div>
    );


export default CardList; 