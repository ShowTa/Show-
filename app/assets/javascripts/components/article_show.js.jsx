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
      <div className="article__show">
        <div className="article__show__header">
          <h2 className="article__show__header__title">{this.state.article.title}</h2>
          <a href={"/articles/" + this.state.article.id + "/favorites"}>いいね</a>
        </div>

        <div className="article__show__content">
          <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>
      </div>
    )
  }
});
