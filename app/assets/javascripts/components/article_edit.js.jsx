var ArticleEdit = React.createClass({
  getInitialState: function(){
    return{
      article: [],
      content: ''
    }
  },
  componentDidMount: function(){
    this.setState({
      article: this.props.article,
      content:this.props.article.content
    })
  },
  handleSubmit: function(e){
    var title = this.refs.title.value.trim();
    var content = this.state.content;
    if(!title || !content){
      return
    }
    var token = $('meta[name="csrf-token"]').attr('content');
    $.ajax({
      url: '/articles/'+this.state.article.id,
      dataType: 'json',
      type: 'PUT',
      data: {
        article:{
          title: title,
          content: this.state.content,
        },
        "authenticity_token": token
      },
      success:function(data){
        console.log("ok",data)
      }.bind(this),
      error:function(xhr,status,err){
        console.log("dame",status,err.toString())
      }.bind(this)
    })
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
        <Markdown onChange={this.onChangeMarkdown} content={this.state.content}/>
        <a href="/" onClick={this.handleSubmit}>編集</a>
      </div>
    )
  }
});
