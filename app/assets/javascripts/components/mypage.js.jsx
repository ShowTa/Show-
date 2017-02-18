var MyPage = React.createClass({
  getInitialState: function(){
    return{
      articles: [],
      user: []
    }
  },
  componentDidMount: function(){
    this.setState({
      articles: this.props.articles,
      user: this.props.user
    })
  },
  handleClick: function(){
    console.log(this.props.articles,this.state.user)
  },
  getFavoriteArticle: function(){
    
  },
  render: function(){
    return(
      <div className="content row">
        MyPage
        <button onClick={this.handleClick}>確認</button>
        <button onClick={this.getFavoriteArticle}>切り替え</button>
      </div>
    )
  }
})
