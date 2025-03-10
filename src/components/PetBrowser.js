import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () => {
    return this.props.pets.map(pet => {
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    return <div className="ui cards">
      {this.renderPets()}
    </div>
  }
}

export default PetBrowser