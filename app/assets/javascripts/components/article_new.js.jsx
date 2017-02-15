var ArticleNew = React.createClass({
  handleSubmit: function(e){
    var title = this.refs.title.value.trim();
    var content = this.refs.content.value.trim();
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
          content: content,
        },
        "authenticity_token": token
      },
      success:function(data){
        console.log("ok")
      }.bind(this),
      error:function(xhr,status,err){
        console.log("dame",status,err.toString())
      }.bind(this)
    })
  },
  render: function(){
    return(
      <div>
        <h2>新規投稿</h2>
        <input type="text" ref="title" />
        <input type="textarea" ref="content" />
        <a href="/" onClick={this.handleSubmit}>投稿</a>
      </div>
    )
  }
});