import React, { PropTypes, Component } from 'react';
import GetCity from '../components/GetCity';

class GetCityContainer extends Component {
  constructor() {
    super();

    this.state = {
      city: ''
    };
  }

  handleSubmitCity (event) {
    event.preventDefault()
    this.context.router.push('/forecast/' + this.state.city)
  }
  
  handleUpdateCity (event) {
    this.setState({
      city: event.target.value
    })
  }
  
  render () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={(event) => this.handleSubmitCity(event)}
        onUpdateCity={(event) =>this.handleUpdateCity(event)}
        city={this.state.city} />
    )
  }
};

GetCityContainer.propTypes = {
  direction: PropTypes.string
};

GetCityContainer.getDefaultProps = {
  direction: 'column'
};

GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default GetCityContainer;