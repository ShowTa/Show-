var ArticleShow = React.createClass({
  getInitialState: function(){
    return{
      article:[],
      favorite: ''
    }
  },
  componentDidMount: function(){
    var num
    if(this.props.favorite == null){
      num = 1
    }else{
      num = 0
    }
    this.setState({
      article: this.props.article,
      favorite: num
    });
  },
  handleSubmit: function(e){
    if (this.state.favorite == 1){
      this.setState({
        favorite: 0
      })
      $.ajax({
        url:  "/articles/" + this.state.article.id + "/favorites",
        dataType: 'json',
        type: 'post',
        data:{
          incompetence: '1',
          article_id: this.state.article.id,
          user_id:this.props.current_user.id
        },
        success:function(data){
          console.log("ok",data)
        }.bind(this),
        error:function(xhr,status,err){
          console.log("dame",status,err.toString())
        }.bind(this)
      })
    } else {
      this.setState({
        favorite: 1
      })
      $.ajax({
        url:  "/articles/" + this.state.article.id + "/favorites",
        dataType: 'json',
        type: 'delete',
        data:{
          incompetence: '0',
          article_id: this.state.article.id,
          user_id:this.props.current_user.id
        },
        success:function(data){
          console.log("ok",data)
        }.bind(this),
        error:function(xhr,status,err){
          console.log("dame",status,err.toString())
        }.bind(this)
      })
    }
  },
  render: function(){
    var rawMarkup = marked(this.props.article.content.toString(), {sanitize: true});
    var favorite
    if(this.state.article.user_id != this.props.current_user.id){
      if(this.state.favorite == 1){
        favorite = "いいねする"
      } else {
        favorite = "いいね中"
      }
    }
    return(
      <div className="article__show">
        <div className="article__show__header">
          <h2 className="article__show__header__title">{this.state.article.title}</h2>
          <div className="article__show__user">
            <p>作成者：{this.props.user.name}</p>
            <a onClick={this.handleSubmit}>{favorite}</a>
          </div>
        </div>

        <div className="article__show__content">
          <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>
      </div>
    )
  }
});
