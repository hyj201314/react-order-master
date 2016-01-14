
/**
 * Created by hanyajie on 16-1-7.
 */
var ChoosePersonName = React.createClass({
    getInitialState :function(){
        return {
            persons:[]
        };
    },
    componentDidMount: function ()
    {
        var self = this;
        $.ajax({
            url:"../DATA/person_storage.json",
            dataType:"json",
            async:true,
            success:function(data) {
                console.log(data.person);
                self.setState({
                    persons: data.person
                });
            }
        })
    },
handleClick: function(list) {
    localStorage.setItem("person",list)
},
    render:function (){
        {var name = _.map(this.state.persons,function(list){
            return (
              < div >
                <li className = "name" onClick={this.handleClick.bind(this,list)}>{list}</li>
                < / div >
        )
    }, this)}
        return (
            <div>
            <div className="choose_person">选人</div>
            {name}
            </div>
        );
    }
});
ReactDOM.render(
<ChoosePersonName/>,
    document.getElementById('example')
);