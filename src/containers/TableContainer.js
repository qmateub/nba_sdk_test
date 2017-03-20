import React from "react"
import Table from "../components/Table"
import { parameters } from '../utils/parameters'
import MethodForm from "../components/MethodForm"

class TableContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fields: [],
      method: null
    }
  }
  handleApiCall(e, method) {
    e.preventDefault()
    this.setState({
      fields: parameters(method),
      method
    })
  }

  render () {
    return (
      <div>
        <Table
          onApiCall={this.handleApiCall.bind(this)}
        />
        <MethodForm
          fields={this.state.fields}
          method={this.state.method}
        />
      </div>
    )
  }
}

export default TableContainer
