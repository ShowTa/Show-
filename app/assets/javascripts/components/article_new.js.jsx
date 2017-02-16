var ArticleNew = React.createClass({
  getInitialState: function(){
    return{
      content: '',
    }
  },
  handleSubmit: function(e){
    var title = this.refs.title.value.trim();
    var content = this.state.content;
    if(!title || !content){
      return
    }
    var token = $('meta[name="csrf-token"]').attr('content');
    $.ajax({
      url: '/articles',
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
      <div class="article-editor">
        <input className="row form-control article-editor__title" type="text" ref="title" autoFocus={focus} />
        <Markdown onChange={this.onChangeMarkdown} content={this.state.content} />
        <a href="/" className="btn btn-success btn-new" onClick={this.handleSubmit}>投稿</a>
      </div>
    )
  }
});
