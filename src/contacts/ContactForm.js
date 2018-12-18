import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class ContactForm extends Component {
  state = { firstName: '', phone: ''}

  componentDidMount() {
    if(this.props.id){
      const { firstName, phone } = this.props
      this.setState ({ firstName, phone })
    }
  }
  handleChange = (e) => {
    // changes the state to the form value
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    // what we do when the form is submbittede
    e.preventDefault()
    if(this.props.id){
      this.props.edit(this.state, this.props.id)
    } else {
      this.props.add(this.state)
    }
    this.setState({firstName: '', phone:''})
  }
  
  render () {
    const { firstName, phone } = this.state
    return (
    //form
    <Form  onSubmit={this.handleSubmit}>
      <Form.Group width="equal">
        <Form.Input 
          label="First Name"
          placeholder="First Name here"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
          fluid
          required
        />

      <Form.Input 
          label="Phone"
          placeholder="Phone here"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          fluid
          required
        />
        
      <Form.Button> Submit </Form.Button>
      </Form.Group>
    </Form>
    )
  }
}

export default ContactForm; 