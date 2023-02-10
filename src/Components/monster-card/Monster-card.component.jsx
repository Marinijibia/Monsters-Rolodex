import { Component } from "react";

import './Monster-card.styles.css'

class MonsterCard extends Component {
    render() {

        const { name, email, id } = this.props.monster;

        return (
          <div className="card-container" key={id}>
            <img
              alt={`monster ${name}`}
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
    }
}

export default MonsterCard