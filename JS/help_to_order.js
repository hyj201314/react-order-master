/**
 * Created by hanyajie on 16-1-6.
 */
window.HelpToOrder = React.createClass({
    getInitialState: function() {
        return {
            input_names:"",
            input_restaurants:"",
            input_meals:"",
            disabled_value : true,
            meal_disabled_value:true
        }
    },
    componentDidMount: function() {
        var name_value = localStorage.getItem("person");
        var restaurant_value = localStorage.getItem("restaurant");
        var meal_value = localStorage.getItem("meal");
        this.setState({
            input_names: name_value||"",
            input_restaurants: restaurant_value||"",
            input_meals: meal_value||""

        });
        this.setState({disabled_value:true});
        this.setState({meal_disabled_value:true});
        if(name_value != null
            && restaurant_value != null
            && meal_value != null) {
            this.setState({disabled_value:false});
        }
        if(restaurant_value != null){
            this.setState({meal_disabled_value:false});
        }
    },
    storage_form: function() {
        var order_foods = {
            person: localStorage.getItem("person"),
            restaurant: localStorage.getItem("restaurant"),
            meal: localStorage.getItem("meal"),
            money: localStorage.getItem("money")
        };
        var order_foods_list = JSON.parse(localStorage.getItem("order_foods_list")) || [];
        order_foods_list.push(order_foods);
        localStorage.setItem('order_foods_list', JSON.stringify(order_foods_list));
        },
    clean_all_form: function() {
        this.state.input_names = "";
        this.state.input_restaurants = "";
        this.state.input_meals = "";
        localStorage.removeItem("person");
        localStorage.removeItem("restaurant");
        localStorage.removeItem("meal");
        localStorage.removeItem("money");
    },
    check_button_status: function() {
        this.storage_form();
        this.clean_all_form();
        this.setState({disabled_value:true});
        this.setState({meal_disabled_value:true});
    },
    go_to_main: function() {
        this.props.history.pushState(null, '/');
    },
    go_to_choose_person: function() {
        this.props.history.pushState(null, '/choose_person');
    },
    go_to_choose_restaurant: function() {
        this.props.history.pushState(null, '/choose_restaurant');
        this.state.input_meals= "";
        localStorage.removeItem("meal");
    },
    go_to_choose_meal: function() {
        this.props.history.pushState(null, '/choose_meal');
    },
    render: function() {
        return (
            <div>
                <div className= "order" >
                    <button className= "back" onClick={this.go_to_main}>
                        back
                    </button>
                    订餐
                </div>
                <div>
                    <h4 className="person">人:</h4>
                    <input className="input-name" id="name_id"  value={this.state.input_names} type="text" disabled="true"/>
                    <div className= "choose-person-button" onClick={this.go_to_choose_person}>选人</div>
                </div>
                <div>
                    <h4 className="restaurant">餐厅：</h4>
                    <input className="input-name" id="restaurant_id" value={this.state.input_restaurants} type="text" disabled="true"/>
                    <div className="choose-restaurant-button" onClick={this.go_to_choose_restaurant}>选餐厅</div>
                </div>
                <div>
                    <h4 className="meal">套餐：</h4>
                    <input className="input-name" id="meal_id" value={this.state.input_meals} type="text" disabled="true"/>
                    <button className="choose-meal-button" id = "button" disabled={this.state.meal_disabled_value} onClick={this.go_to_choose_meal}>选套餐</button>
                </div>
                    <button className="acknowledgement"  id="acknowledgement_id" disabled={this.state.disabled_value} onClick={this.check_button_status}>确认</button>
            </div>
        )
    }
})
