var SearchList = React.createClass({
  getInitialState: function(){
    return{
      articles:[]
    }
  },
  componentDidMount: function(){
    this.setState({
      articles: this.props.articles,
    })
  },
  handleSubmit: function(e){
    e.preventDefault();
    var word = this.refs.word.value.trim()
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
        <div className="articlelist">
          {article}
        </div>
    )
  }
});
