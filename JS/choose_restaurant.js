/**
 * Created by hanyajie on 16-1-11.
 */
window.ChooseRestaurantName = React.createClass({
    getInitialState: function() {
        return {
            restaurants:[]
        }
    },
    componentDidMount: function() {
        var self = this;
        $.ajax({
            url: "../DATA/restaurant_storage.json",
            dataType: "json",
            async: true,
            success: function(data) {
                self.setState({
                    restaurants:data.restaurant
                })
            }
        })
    },
    handleClick: function(list) {
        localStorage.setItem("restaurant",list);
        this.props.history.pushState(null, '/help_to_order');
    },
    render: function() {
        var restaurant_name_list = _.map(this.state.restaurants,function(name) {
            return (
                <div>
                    <li className = "name" onClick={this.handleClick.bind(this,name)}>{name}</li>
                </div>
            )
        }, this)
        return (
            <div>
                <div className = "choose-restaurant">选餐厅</div>
                {restaurant_name_list}
            </div>
        )
    }
});

