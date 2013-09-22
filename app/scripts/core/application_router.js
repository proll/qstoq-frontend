qst.Router = Backbone.Router.extend({
	_previous_route: '',
	previous_route: '',
	previous_page_route: '',

	current_route: '',
	
	_back_path: '',
	back_path: '',

	route_passed: 0,

	context: {},

	routes: {
		"": "landing",
		"/": "landing",
		".": "landing",

		"how": "how",
		"where": "where",
		
		"logout": "logout",

		"items": "itemlist",
		"profile": "profile",

		"item/:id": 		"itemedit",
		"item/:id/:slide": 	"itemedit",

		"404": "er404",
		"403": "er403",

		"*default": "er404",

	},

	popoup_routes: [
		'auth',
	],

	logout:function(){
		localStorage.clear();
		this.navigate("/");
		window.location.reload();
	},

	er404: function(){
		console.log('no such route ', arguments);
		this.trigger("404", arguments);
		return false;
	},

	er403: function(){
		console.log('access dinied route ', arguments);
		this.trigger("403", arguments);
		return false;
	},

	// Auto reset routes
	initialize: function(){
		var rts = _.uniq(_.values(this.routes));
		_(rts).each(function(destination) {
			this.on("route:" + destination, function(){
				this.route_passed++;

				if(this._previous_route && this._previous_route != destination){
					this.trigger("reset", this._previous_route, destination, this._back_path);
					this.trigger("reset:" + this._previous_route);
				}
				this._previous_route = destination;
				this._back_path = Backbone.history.fragment;



			}, this)


		}, this);

		this.on('reset', function(_previous_route, destination, _back_path) {
			this.back_path = _back_path;
			this.current_route = destination;
			this.previous_route = _previous_route;
			if(!this.isPopup(this.previous_route)) {
				this.previous_page_route = this.previous_route;
			}
		})
	},

	previousWasPopup: function() {
		return this.isPopup(this.previous_route);
	},

	currentIsPopup: function() {
		return this.isPopup(this.current_route);
	},
	isPopup: function(route) {
		return (_.indexOf(this.popoup_routes, route) !== -1)
	},
});