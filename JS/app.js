/**
 * Created by hanyajie on 16-1-7.
 */
var ReactRouter = window.ReactRouter;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var routes = (
    <Router>
        <Route path="/" component={window.Main}/>
        <Route path="help_to_order" component={window.HelpToOrder}/>
        <Route path="look_to_order" component={window.LookToOrder}/>
        <Route path="choose_person" component={window.ChoosePersonName}/>
        <Route path="choose_restaurant" component={window.ChooseRestaurantName}/>
        <Route path="choose_meal" component={window.ChooseMeal}/>
    </Router>
);
ReactDOM.render(routes, document.getElementById('root'));

