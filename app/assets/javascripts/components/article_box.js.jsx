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
      <div className="articlelist">
        {article}
      </div>
    );
  }
});
