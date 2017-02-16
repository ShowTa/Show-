var SearchForm = React.createClass({
  getInitialState: function(){
    return{
      searchText: ''
    }
  },
  onSearchText: function(e){
    this.setState({
      searchText: e.target.value
    })
  },
  render: function(){
    return(
      <form className="searchbox" method="get" action={"/search/" + this.state.searchText}>
        <input type="text" onChange={this.onSearchText} ref="word" placeholder="記事のタイトルで検索できます" />
        <button type="submit" className="btn btn-success">検索</button>
      </form>
    )
  }
})
