var Article = React.createClass({
  render: function() {
    return (
      <div className="article col-xs-12">
        <h3><a href={"articles/" + this.props.article.id}>{this.props.article.title}</a></h3>
        <a className="btn btn-default edit" href={"articles/" + this.props.article.id + "/edit"}>編集</a>
      </div>
    );
  }
});
