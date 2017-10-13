import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      description: '',
      author: '',
      created_at: '',
      updated_at: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value })
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      id: '',
      title: '',
      description: '',
      author: '',
      created_at: '',
      updated_at: ''
    })
  };

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      Id: parseInt(this.state.id, 10),
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
      created_at: this.state.created_at,
      updated_at: this.state.updated_at
    };
    this.props.addNewBlog(formPayload);
    this.handleClearForm(event);
  };

  render() {
    return(
      <div id="fields">
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <TextInputField
              content={this.state.id}
              label="Id:"
              name="id"
              handleChange={this.handleChange}
            />
          </div>

          <div>
            <TextInputField
              content={this.state.title}
              label="Title:"
              name="title"
              handleChange={this.handleChange}
            />
          </div>

          <div>
            <TextInputField
              content={this.state.description}
              label="Description:"
              name="description"
              handleChange={this.handleChange}
            />
          </div>

          <div>
            <TextInputField
              content={this.state.author}
              label="Author:"
              name="author"
              handleChange={this.handleChange}
            />
          </div>

          <div>
            <TextInputField
              content={this.state.created_at}
              label="Created_at:"
              name="created_at"
              handleChange={this.handleChange}
            />
          </div>

          <div>
            <TextInputField
              content={this.state.updated_at}
              label="Updated_at:"
              name="updated_at"
              handleChange={this.handleChange}
            />
          </div>
          <div className="button-group">
            <button className="button" onClick={this.handleClearForm}>Clear</button>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}
export default FormContainer;
