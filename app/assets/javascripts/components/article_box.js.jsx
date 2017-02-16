var ArticleBox = React.createClass({
  getInitialState: function(){
    return{ articles: []}
  },
  componentDidMount: function() {
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
      <div className="articleList row">
        {article}
        <p className="btn btn-default"><a href="articles/new">新規投稿</a></p>
      </div>
    );
  }
});

var Article = React.createClass({
  render: function() {
    return (
      <div className="article col-xs-12">
        <h3><a href={"articles/" + this.props.article.id}>{this.props.article.title}</a></h3>
        <a className="btn btn-default edit" href={"articles/" + this.props.article.id + "/edit"}>編集</a>
      </div>
    );
  }
});
