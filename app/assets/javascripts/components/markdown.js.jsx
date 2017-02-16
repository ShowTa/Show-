var Markdown = React.createClass({
  onChangeText: function(ev){
    this.props.onChange(ev)
  },
  render: function(){
    return(
      <div className="markdown">
        <Editor content={this.props.content} onChange={this.onChangeText}/>
        <Preview content={this.props.content} />
      </div>
    )
  }
});

var Editor = React.createClass({
  _onChange(ev) {
    this.props.onChange(ev);
  },
  render: function(){
    return(
      <input type="textarea"
        value={this.props.content} 
        onChange={this._onChange}
      />
    )
  }
})

var Preview = React.createClass({
  render: function(){
    if(!this.props.content == ''){
      var rawMarkup = marked(this.props.content.toString(), {sanitize: true});
    }
    return(
      <div>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    )
  }
})