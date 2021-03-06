/**
 * Created by hanyajie on 16-1-11.
 */
window.ChooseMeal = React .createClass({
    getInitialState: function() {
        return {
            meals:[]
        }
    },
    componentDidMount: function() {
        var self = this;
        $.ajax({
            url: "../DATA/meal_storage.json",
            dataType: "json",
            async: true,
            success: function(data) {
                self.setState({
                    meals: data["set_meal"][localStorage.getItem("restaurant")]
                })
            }
        })
    },
    handleClick: function(meal,money) {
        localStorage.setItem("meal",meal);
        localStorage.setItem("money",money);
        this.props.history.pushState(null, '/help_to_order');
    },
    render: function() {
        var meal_name_list = _.map(this.state.meals,function(item){
            return (
                    <div>
                        <li className = "name" onClick={this.handleClick.bind(this,item.meal,item.money)}>{item.meal}<p className = "money">{item.money}</p></li>
                    </div>
            )
        },this)
        return (
            <div>
                <div className = "choose-meal">选套餐</div>
                {meal_name_list}
            </div>
        )
    }
});
