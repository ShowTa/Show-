var ArticleNew = React.createClass({
  getInitialState: function(){
    return{
      content: '',
    }
  },
  handleSubmit: function(e){
    var title = this.refs.title.value.trim();
    var content = this.state.content;
    var tag = this.refs.tag.value.trim();
    if(!title || !content){
      return
    }
    var token = $('meta[name="csrf-token"]').attr('content');
    $.ajax({
      url: '/articles/'+tag,
      dataType: 'json',
      type: 'POST',
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
      <div className="article-editor">
        <input className="row form-control article-editor__title" type="text" ref="title" placeholder="タイトルを入力してください" autoFocus={focus} />
        <input className="row form-control" type="text" ref="tag" placeholder="タグ" />
        <Markdown onChange={this.onChangeMarkdown} content={this.state.content} />
        <a href="/" className="btn btn-success btn-new" onClick={this.handleSubmit}>投稿</a>
      </div>
    )
  }
});
