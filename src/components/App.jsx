class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false
    }
  }

  onVideoItemClick() {
    this.setState({
      play: !this.state.play
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {}/>
        </div>
        <div className="col-md-5">
          <VideoList videos = {this.props.videos}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
