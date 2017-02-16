var ArticleShow = React.createClass({
  getInitialState: function(){
    return{
      article:[]
    }
  },
  componentDidMount: function(){
    this.setState({article: this.props.article});
  },
  render: function(){
    var rawMarkup = marked(this.props.article.content.toString(), {sanitize: true});
    return(
      <div className="article-show">
        <h2>{this.state.article.title}</h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    )
  }
});