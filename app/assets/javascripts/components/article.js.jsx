var Article = React.createClass({
  render: function() {
    var tag = this.props.tags.map(function(tag){
      return(
        <span key={tag.id}>{tag.name}</span>
      )
    })
    return (
      <div className="article col-xs-9">
        <h2><a href={"/articles/" + this.props.article.id}>{this.props.article.title}</a></h2>
        <h5 className='article__author'>作成者 : </h5>
        <a className='article__author__name' href={"/users/" + this.props.user.id}>{this.props.user.name}</a>
        <h5 className="article__tag">タグ：</h5>
        <span className="article__tag__name">{tag}</span>
          <a href={'/articles/' + this.props.article.id + '/edit'}>編集</a>
          <a href={'/articles/' + this.props.article.id}>削除</a>
      </div>
    );
  }
});
