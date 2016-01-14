/**
 * Created by hanyajie on 16-1-11.
 */
var ChooseRestaurantName = React.createClass({
    getInitialState: function(){
        return {
            restaurants:[]
        }
    },
    componentDidMount:function(){
        var self = this;
        $.ajax({
            url:"../DATA/restaurant_storage.json",
            dataType:"json",
            async:true,
            success:function(data){
                console.log(data.restaurant)
                self.setState({
                    restaurants:data.restaurant
                })
            }
        })
    },
    handleClick:function(list){
        localStorage.setItem("restaurant",list)
    },
    render:function(){
        {var name = _.map(this.state.restaurants,function(list){
            return (
                <div>
                <li className = "name" onClick={this.handleClick.bind(this,list)}>{list}</li>
                </div>
            )
        }, this)}
        return (
            <div>
            <div className = "choose_restaurant">选餐厅</div>
            {name}
            </div>
        )
    }
});
ReactDOM.render(
<ChooseRestaurantName/>,
    document.getElementById('example')
);
