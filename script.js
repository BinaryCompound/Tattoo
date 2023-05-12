window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").classList.add("show");
  } else {
    document.getElementById("scrollToTopBtn").classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Для Safaris
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}


const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}


const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

