/**
 * Created by hanyajie on 16-1-13.
 */
window.LookToOrder  = React.createClass({
    getInitialState: function() {
       return {
           all_set_meals:[],
           persons:[],
       }
    },
    componentDidMount: function() {
        this.setState({
            all_set_meals: JSON.parse(localStorage.getItem("order_foods_list")|| "[]")
        });
        var self = this;
        $.ajax({
            url: "../DATA/person_storage.json",
            dataType: "json",
            async: true,
            success: function(data) {
                 self.setState({
                     persons: data["person"]
                 })
            }
        })
    },
    go_to_main: function() {
        this.props.history.pushState(null, '/')
    },
    render: function() {
        var order_person = [];
        var order_person_list = _.map(this.state.all_set_meals,function(item) {
            if (order_person.indexOf(item.person) == -1) {
                order_person.push(item.person);
            }
            var color = (item.money.substring(1, item.money.length) > 12.00) ? 'red':"black";
            return (
                <div>
                    <li className="order-meal-list"><p className="show-name">{item.person}</p><p className="set-meal">{item.restaurant+" "+item.meal}
                    </p><span className="price" id="price_id" style={{color: color}}>{item.money}</span></li>
                </div>
            )
        });
        var no_order_person = [];
        var no_order_person_count = _.map(this.state.persons,function(item){
            if (order_person.indexOf(item) == -1) {
                no_order_person.push(item);
            }
        });
        var no_order_person_list = _.map(no_order_person,function(name) {
            return (
                <div>
                    <li className="no-order-name">{name}</li>
                </div>
            )
        });
        var all_subtotal = 0;
        var total = _.map(this.state.all_set_meals,function(price) {
            var all_price = JSON.parse(price.money.substring(1, price.money.length));
            all_subtotal += all_price;
        })
        return (
            <div>
                <div className="show-order"><button className = "show-back" onClick={this.go_to_main}>back</button>订单显示</div>
                <div className="show-order-meal" >{order_person.length}人已定</div>
                {order_person_list}
                <div className="no-order-meal">{no_order_person.length}人未定</div>
                {no_order_person_list}
                <div className="all-subtotal">{order_person.length}人已定,{no_order_person.length}人未定,总计{all_subtotal.toFixed(2)}元</div>
            </div>
        )
    }
});
