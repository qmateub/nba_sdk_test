import React from 'react'
import nba from "nba.js"

class MethodForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      params: {}
    }
  }

  handleClickComponent(attr, value, event) {
    event.preventDefault()
    let paramsA = this.state.params;
    paramsA[attr] = value
    this.setState({
      params: paramsA
    })
  }

  handleChangeComponent(attr, event) {
    event.preventDefault()
    let paramsA = this.state.params;
    paramsA[attr] = event.target.value
    this.setState({
      params: paramsA
    })
  }

  handleSearchClick(event) {
    nba.stats[this.props.method](this.state.params)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  render(){
    const { fields } = this.props

    console.log(fields)
    if(!fields || fields.length === 0)
      return <div></div>

    const comps = fields.map((field) => {
      if(field.type === 'combo')
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
          {this.state.params[field.name] || field.display}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {field.values.map( value => {
            return (
              <a
                className="dropdown-item"
                href="#"
                key={value.value}
                onClick={this.handleClickComponent.bind(this, field.name, value.display)}>
              {value.display}
              </a>
            )
          })}
          </div>
        </div>
      )
      else {
        return (
          <div className="input-group input-group">
          <span className="input-group-addon">{field.display}</span>
          <input
            type="text"
            className="form-control"
            placeholder="XXXX-XX"
            aria-describedby="sizing-addon1"
            onChange={this.handleChangeComponent.bind(this, field.name)}
          />
          </div>
        )
      }
    })
    return (
      <div>
        {comps}
        <div className="btn-group" role="group">
          <button type="button" className="btn-group">Clean</button>
          <button
            type="button"
            className="btn-group"
            onClick={this.handleSearchClick.bind(this)}
          >
          Search
        </button>
        </div>
      </div>
    )

  }
}

export default MethodForm
