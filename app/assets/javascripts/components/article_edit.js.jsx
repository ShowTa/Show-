var ArticleEdit = React.createClass({
  getInitialState: function(){
    return{
      article: [],
      content: ''
    }
  },
  componentDidMount: function(){
    this.setState({article: this.props.article})
  },
  onChangeMarkdown: function(ev){
    this.setState({
      content: ev.target.value
    })
  },
  render: function(){
    return(
      <div>
        <h2>編集</h2>
        <input type="text" ref="title" value={this.state.article.title} />
        <Markdown onChange={this.onChangeMarkdown} content={this.state.article.content}/>
        <a href="/" onClick={this.handleSubmit}>編集</a>
      </div>
    )
  }
});
