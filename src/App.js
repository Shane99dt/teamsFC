import React from 'react'
import teams from './teams.json'
import TeamInfo from './components/TeamInfo'
import Counter from './components/Counter'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 10,

    }
  }

  // buttons
  handleClickDown = () => {
    if(this.state.count > 1){
      this.setState({
        count : this.state.count - 1
      })
    }
  }

  handleClickUp = () => {
    if(this.state.count < teams.length){
      this.setState({
        count : this.state.count + 1
      })
    }
  }

  resetValue = () => {
    this.setState({
      count : 10
    })
  }
  // buttons end

  render() {
    return (
      <div className="container-fluid">
        <header className='d-flex flex-row justify-content-between'>
          <h1>Teams Info</h1>
          <Counter increment={this.handleClickUp} substract={this.handleClickDown} count={this.state.count} reset={this.resetValue} />
        </header>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {teams.filter((team, i) => i<this.state.count).map(team => {
            return (
              <TeamInfo
                picture={team.crestUrl}
                shortName = {team.shortName}
                venue={team.venue}
                address = {team.address}
                email={team.email}
                tel={team.phone}
                founded={team.founded}
              />
              )
            })}
        </div>
      </div>
    )
  }
}

export default App