/**
 * Created by hanyajie on 16-1-7.
 */
var React = require('react');
var Router = require('react-router');
var ReactDom = require('react-dom');
var Route = Router.Route;
var Main = require('./JS/main')
var HelpToOrder = require('./JS/help-to-order');
var route = (
    <Router>
        <IndexRoute component={Main}>
        <Route path="../HTML/help_to_order.html" component={HelpToOrder}/>
    </Router>
)
//ReactRouter.run(routes, function (Handler, state) {
//    React.render(<Handler/>, document.body);
//});

