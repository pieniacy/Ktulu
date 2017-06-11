import { connect } from 'react-redux'
import { DisplayFactionView } from '../components/DisplayFactionView'

let mapStateToProps = ({text, statueHolder, who}) => {
  return {
    text: text,
    statueHolder: null,
    who: who
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => { dispatch({ type: 'NEXT' }) },
    onMenu: () => { dispatch({ type: 'MENU' }) }
  }
}

export const DisplayFaction = connect(mapStateToProps,
  mapDispatchToProps)(DisplayFactionView)
