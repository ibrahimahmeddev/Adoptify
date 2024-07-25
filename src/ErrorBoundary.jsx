import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There wan an error with this listeing.
          <Link to="/">
            <strong>Click Here</strong>
          </Link>
          to go back to the home page
        </h2>
      );
    }

    return this.props.children;
  }
}
