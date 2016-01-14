/**
 * Created by hanyajie on 16-1-6.
 */
var HelpToOrder = React.createClass({
    componentDidMount:function(){
        $("#name_id")[0].value = localStorage.getItem("person");
        $("#restaurant_id")[0].value = localStorage.getItem("restaurant");
        $("#meal_id")[0].value = localStorage.getItem("meal");
    },
    handleClick:function(){
        var order_foods = {person: localStorage.getItem("person"), restaurant: localStorage.getItem("restaurant"),
            meal: localStorage.getItem("meal"), money: localStorage.getItem("money")};
        var order_foods_list = JSON.parse(localStorage.getItem("order_foods_list")) || [];
        order_foods_list.push(order_foods);
        localStorage.setItem('order_foods_list', JSON.stringify(order_foods_list));
        document.getElementById("name_id").value = "";
        document.getElementById("restaurant_id").value = "";
        document.getElementById("meal_id").value = "";
    },
    render:function() {
        return (
            < div >
            < div className= "order" > < button className= "back" > back
            < /button>订餐</div >
            < h4 className= "person" > 人：</h4 >
            < input className= "name" id = "name_id" name = "input_person" type = "text" disabled="false" />
            < div className= "choose_person" > 选人 < / div >
            < h4 className= "restaurant" > 餐厅：</h4 >
            < input className= "name" id = "restaurant_id" name = "input_restaurant" type = "text" disabled="false"/>
            < div className= "choose_restaurant"  > 选餐厅 < / div >
            < h4 className= "meal" > 套餐：</h4 >
            < input className= "name" id = "meal_id" name = "input_meal" type  = "text" disabled="false"/>
            < div className= "choose_meal" id = "button"disabled > 选套餐 < / div >
            < div className= "acknowledgement" type = "button" id = "acknowledgement_id" onClick={this.handleClick}> 确认 < / div >
            < / div >
        )
    }
})
ReactDOM.render(
<HelpToOrder/>,
    document.getElementById('example')
);
