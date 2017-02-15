var ArticleBox = React.createClass({
  getInitialState: function(){
    return{ articles: []}
  },
  componentDidMount: function() {
    // this.setState({articles: this.props.articles});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'GET',
      success: function(result) {
        this.setState({articles: result.data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
   },
  render: function() {
    var article = this.state.articles.map(function(article){
      return(
        <Article key={article.id} article={article} />
      )
    });
    return (
      <div className="articleList">
        {article}
        <p><a href="articles/new">新規投稿</a></p>
      </div>
    );
  }
});

var Article = React.createClass({
  render: function() {
    return (
      <div className="article">
        <h2><a href={"articles/" + this.props.article.id}>{this.props.article.title}</a></h2>
        {this.props.article.content}
        <a href={"articles/" + this.props.article.id + "/edit"}>編集</a>
      </div>
    );
  }
});
