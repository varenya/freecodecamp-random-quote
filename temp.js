/*
   Free Code Camp - Random Quote Generator
   Author - Varenya
*/

var Wrapper = React.createClass({
  render: function() {
    var quotes = [
      {author:"Jean Rostand",quote:"My pessimism extends to the point of even suspecting the sincerity of the pessimists."},
      {author:"Lily Tomlin",quote:"Sometimes I worry about being a success in a mediocre world."},
      {author:"David Allen",quote:"You can do anything, but not everything."},
      {author:"Antoine de Saint-Exupéry",quote:"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."},
      {author:"Gandhi",quote:"You must be the change you wish to see in the world."},
      {author:"Aristotle",quote:"We are what we repeatedly do; excellence, then, is not an act but a habit."},
      {author:"André Gide",quote:"Believe those who are seeking the truth. Doubt those who find it."},
      {author:"Aristotle",quote:"It is the mark of an educated mind to be able to entertain a thought without accepting it."},
    ];
    return (
      <Quote quotes={quotes} />
    );
  }
});

var Quote = React.createClass({
  getRandomNumber : function (min,max) {
    return Math.floor(Math.random() * (max - min+1)) + min;
  },
  getInitialState : function () {
    return {index: this.getRandomNumber(0,this.props.quotes.length-1) };
  },
  handleClick: function (e) {
    e.preventDefault();
    this.setState({index: this.getRandomNumber(0,this.props.quotes.length-1)});
  },
  render: function() {
    var author = this.props.quotes[this.state.index].author;
    var quote = this.props.quotes[this.state.index].quote;
    var tweet_link = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=\""+quote+"\" "+author;
    return (
      <div className="jumbotron">
        <h2>{quote} &nbsp;</h2>
        <p className="clearfix"><strong>-<small>{author}</small></strong></p>
        <p className="clearfix">
          <a className="btn btn-primary btn-lg pull-left" href={encodeURI(tweet_link)} role="button" target="_blank"><i className="fa fa-twitter"></i>&nbsp; Share</a>
          <a className="btn btn-primary btn-lg pull-right" href="#" role="button" onClick={this.handleClick}>New Quote</a>
        </p>
      </div>
    );
  }
})


ReactDOM.render(<Wrapper initialStream={[]} />,document.getElementById('dummy'));
