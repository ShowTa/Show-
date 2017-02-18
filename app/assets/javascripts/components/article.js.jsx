var Article = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div className="article col-xs-9">
        <h2><a href={"/articles/" + this.props.article.id}>{this.props.article.title}</a></h2>
        <h5 className='article__author'>作成者 : </h5>
        <a className='article__author__name' href={"/users/" + this.props.user.id}>{this.props.user.name}
        </a>
      </div>
    );
  }
});
