import React, { PropTypes } from 'react';
import axios from 'axios';

export default class HelloWorld extends React.Component {
  static propTypes = {

  };


  constructor(props, _railsContext) {
    super(props);

    this.postQuote = this.postQuote.bind(this);
  }

  componentDidMount() {
    axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then((res) => {
      let quote = res.data[0]
      this.setState({
        quote: quote
      })
    }).catch((err) => {
      console.error(err);
    });

  }

  updateName = (name) => {
    this.setState({ name });
  };

  nexQuote = () => {
    window.reload();
  }


  render() {
    return (
      <div>

        <hr />
        <div>
          <h2>{this.state.quote}</h2>
          <form>
            <button type="submit" value="Next Quote" onClick={this.postQuote}>
            </button>

          </form>
        </div>

      </div>
    );
  }
}
