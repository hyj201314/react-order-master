/**
 * Created by hanyajie on 16-1-5.
 */
window.Main = React.createClass({
  go_to_help_to_order: function() {
      this.props.history.pushState(null, '/help_to_order')
  },
  go_to_look_to_order: function() {
      this.props.history.pushState(null, '/look_to_order')
  },
  render: function() {
    return (
        <div>
            <div className="order">订餐</div>
            <div type="button" className="help-order-button" onClick={this.go_to_help_to_order}>帮订餐</div>
            <div type="button" className="look-order-button" onClick={this.go_to_look_to_order} >看订餐</div>
        </div>
    )
  }
});

