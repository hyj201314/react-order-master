/**
 * Created by hanyajie on 16-1-11.
 */
var ChooseMeal = React .createClass({
    getInitialState:function(){
        return {
            meals:[]
        }
    },
    componentDidMount:function(){
        var self = this;
        var ref = this;
        $.ajax({
            url:"../DATA/meal_storage.json",
            dataType:"json",
            async:true,
            success:function(data){
                self.setState({
                    meals:data["set_meal"][localStorage.getItem("restaurant")]
                })
            }
        })
    },
    handleClick:function(meal,money){
        localStorage.setItem("meal",meal)
        localStorage.setItem("money",money)
    },
    render:function(){
        console.log(this.state.meals)
        {var name = _.map(this.state.meals,function(list){
            return (
                    <div>
                    <li className = "name" onClick={this.handleClick.bind(this,list.meal,list.money)}>{list.meal}
                      <p className = "money">{list.money}</p> </li>
                    </div>
                )
        },this)}
            return (
                <div>
                <div className = "choose_meal">选套餐</div>
                {name}
                </div>
            )
    }
});
ReactDOM.render(
<ChooseMeal/>,
    document.getElementById('example')
);