import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { liked: false };
  }

  handleClick(e) {
    this.setState({ liked: true });
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={this.handleClick}>
        Like
      </button>
    );
  }
}

export default LikeButton;
