import { Component } from "react";

import './Card-list.style.css';
import MonsterCard from "../monster-card/Monster-card.component";

class CardList
 extends Component {

    render(){
       
        const { Monsters } = this.props;

        return (
          <div className="card-list">
            {Monsters.map(monster =>{
              
                return (
                  <MonsterCard monster={monster} />
                );
            })}
          </div>
        );
    }
}

export default CardList


