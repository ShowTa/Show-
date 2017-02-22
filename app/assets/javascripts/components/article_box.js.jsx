var ArticleBox = React.createClass({
  getInitialState: function(){
    return{ articles: [] }
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      type: 'GET',
      dataType: 'json',
      success: function(result) {
        this.setState({articles: result.data});
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    });
   },
  render: function() {
    var article = this.props.articles_and_users.map(function(article){
      return(
        <Article key={article.article.id} article={article.article} user={article.user} tags={article.article.tags}/>
      )
    });
    return (
      <div className="articlelist">
        {article}
      </div>
    );
  }
});
