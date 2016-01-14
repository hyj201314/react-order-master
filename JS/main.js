/**
 * Created by hanyajie on 16-1-5.
 */
var Main = React.createClass({
    render:function(){
        return (
            <div>
            <div className="order">订餐</div>
            <div type="button" className="help_order_button" >帮订餐</div>
            <div type="button" className="look_order_button" >看订餐</div>
            </div>
        )
    }
});
ReactDOM.render(
<Main/>,
    document.getElementById('example')
);

