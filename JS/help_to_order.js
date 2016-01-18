/**
 * Created by hanyajie on 16-1-6.
 */
window.HelpToOrder = React.createClass({
    componentDidMount: function() {
        $("#name_id")[0].value = localStorage.getItem("person");
        $("#restaurant_id")[0].value = localStorage.getItem("restaurant");
        $("#meal_id")[0].value = localStorage.getItem("meal");
    },
    storage_form: function() {
        var order_foods = {
            person: localStorage.getItem("person"), restaurant: localStorage.getItem("restaurant"),
            meal: localStorage.getItem("meal"), money: localStorage.getItem("money")
        };
        var order_foods_list = JSON.parse(localStorage.getItem("order_foods_list")) || [];
        order_foods_list.push(order_foods);
        localStorage.setItem('order_foods_list', JSON.stringify(order_foods_list));
        },
    clean_all_form: function() {
        document.getElementById("name_id").value = "";
        document.getElementById("restaurant_id").value = "";
        document.getElementById("meal_id").value = "";
        localStorage.removeItem("person");
        localStorage.removeItem("restaurant");
        localStorage.removeItem("meal");
        localStorage.removeItem("money");
    },
    check_button_status: function() {
        if (document.getElementById("name_id").value != ""
            && document.getElementById("restaurant_id").value != ""
            && document.getElementById("meal_id").value != "" ) {
            this.storage_form();
            this.clean_all_form();
        }
        else {
            $("acknowledgement_id").attr('disabled',"false");
        }

    },
    go_to_main: function() {
        this.props.history.pushState(null, '/')
    },
    go_to_choose_person: function() {
        this.props.history.pushState(null, '/choose_person')
    },
    go_to_choose_restaurant: function() {
        this.props.history.pushState(null, '/choose_restaurant');
        document.getElementById("meal_id").value = "";
        localStorage.removeItem("meal");
    },
    go_to_choose_meal: function() {
        if (document.getElementById("restaurant_id").value == "") {
            $("#button").attr('disabled',"false");
        }
        else {
            this.props.history.pushState(null, '/choose_meal')
        }
    },
    render: function() {
        return (
            <div>
                <div className= "order" >
                    <button className= "back" onClick={this.go_to_main}> back
                    </button>订餐
                </div>
                <div>
                    <h4 className="person">人:</h4>
                    <input className="input-name" id="name_id" name="input_person" type="text" disabled="false"/>
                    <div className= "choose-person-button" onClick={this.go_to_choose_person}>选人</div>
                </div>
                <div>
                    <h4 className="restaurant">餐厅：</h4>
                    <input className="input-name" id="restaurant_id" name="input_restaurant" type="text" disabled="false"/>
                    <div className="choose-restaurant-button" onClick={this.go_to_choose_restaurant}>选餐厅</div>
                </div>
                <div>
                    <h4 className="meal">套餐：</h4>
                    <input className="input-name" id="meal_id" name="input_meal" type="text" disabled="false"/>
                    <div className="choose-meal-button" id = "button"onClick={this.go_to_choose_meal}>选套餐</div>
                </div>
                <div className="acknowledgement" type="button" id="acknowledgement_id" onClick={this.check_button_status}>确认</div>
            </div>
        )
    }
})
