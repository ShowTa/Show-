var SearchBox = React.createClass({
  getInitialState: function(){
    return{
      articles:[]
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    var word = this.refs.word.value.trim();
    $.ajax({
      url: '/search/' + word,
      dataType: 'json',
      type: 'get',
      success: function(result) {
        console.log("ok",result);
        this.setState({ articles: result.data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function(){
    var article = this.state.articles.map(function(article){
      return(
        <Article key={article.id} article={article} />
      )
    });
    return (
      <form className="searchbox" onSubmit={this.handleSubmit}>
        <input type="text" ref="word" placeholder="記事のタイトルで検索できます" />
        <button type="submit">検索</button>
        <div>
          {article}
        </div>
      </form>
    )
  }
});
