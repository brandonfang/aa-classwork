import React from 'react';


class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
         
        return ( 
            <div class='pokedex'>
                <ul>
                    {this.props.pokemon.map((poke) => {
                        <li>
                            {poke.name}
                            <img src={poke.imageUrl}/>
                        </li>
                    })
                }
                </ul>
            </div>
        );
    }
}
 
export default PokemonIndex;