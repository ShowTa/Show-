var Article = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div className="article col-xs-9">
        <h2><a href={"/articles/" + this.props.article.id}>{this.props.article.title}</a></h2>
        <a href={"/users/" + this.props.user.id}>
          <h5 className='article__author'>作成者 : </h5>
          <p className='article__author__name'>{this.props.user.name}</p>
        </a>
        <a href={'/articles/' + this.props.article.id + '/edit'}>編集</a>
        <a href={'/articles/' + this.props.article.id}>削除</a>
      </div>
    );
  }
});
