var Article = React.createClass({
  render: function() {
    return (
      <div className="article col-xs-9">
        <h3><a href={"/articles/" + this.props.article.id}>{this.props.article.title}</a></h3>
        
      </div>
    );
  }
});
