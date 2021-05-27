import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectPokemonMovesNames } from '../../reducers/selectors'


const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.id],
  items: Object.values(state.entities.items),
  moves: selectPokemonMovesNames(state),
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)