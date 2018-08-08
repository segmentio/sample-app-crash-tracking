import React from 'react'

export default class Form extends React.Component {
  state = {
    submitted: false
  }

  onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    this.setState({ submitted: true });
  }

  render() {
    if (this.state.submitted) {
      throw new Error('Boom 💥');
    }

    return (
      <form onSubmit={this.onSubmit} className="segment-form">
        <div>
          <label>What's your name?</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label>What's your favorite destination?</label>
          <input type="text" name="favorite-destination" />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    );
  }
}