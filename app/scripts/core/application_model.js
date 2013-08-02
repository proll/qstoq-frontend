qst.App = Backbone.Model.extend({
	_didScroll: false,

	initialize: function () {
		this.$og_image = $('#og_image');
		this.$og_url = $('#og_url');

		var that = this,
			qst = window.qst;

		this.config 	 = new qst.Config;
		// this.dataStorage = new qst.DataStorage;
		this.statistic 	 = new qst.Statistic;

		this.router = new qst.Router;
		this.pages 	= new qst.PagesCollection;


		this.user = new qst.User;
		qst.user = this.user;
		
		this.auth = new qst.Auth;

		
		// GLOBAL objects
		qst.config = this.config;


		this.navbar = new qst.Navbar;
		this.header = new qst.Header;

		this.upscroller = new qst.UpScrollerView;





		// Pages create
		// 404 page
		this.pages.add(new qst.Page({
			name:'404',
			template:'pages/404-page'
		}));

		this.pages.add(new qst.Page({
			name:'403',
			template:'pages/403-page'
		}));

		this.itemlist = new qst.ItemListPage({
			name: 'itemlist',
			template: 'pages/itemlist-page'
		});
		this.pages.add(this.itemlist);

		this.explore = new qst.ExplorePage({
			name: 'explore',
			template: 'pages/explore-page'
		});
		this.pages.add(this.explore);

		this.photo = new qst.PhotoPage({
			name: 'photo',
			template: 'pages/photo-page'
		});
		this.pages.add(this.photo);

		this.landing = new qst.LandingPage({
			name: 'landing',
			template: 'pages/landing-page'
		});
		this.pages.add(this.landing);

		this.profile = new qst.ProfilePage({
			name: 'profile',
			template: 'pages/profile-page'
		});
		this.pages.add(this.profile);

		this.dialogs = new qst.Page({
			name: 'dialogs',
			template: 'pages/dialogs-page'
		});
		this.pages.add(this.dialogs);

		this.popular = new qst.PopularPage({
			name: 'popular',
			template: 'pages/popular-page'
		});
		this.pages.add(this.popular);

		this.invite = new qst.Page({
			name: 'invite',
			template: 'pages/invite-page'
		});
		this.pages.add(this.invite);
		
		this.settings = new qst.Page({
			name: 'settings',
			template: 'pages/settings-page'
		});
		this.pages.add(this.settings);

		this.upload = new qst.AddPage({
			name: 'add',
			template: 'pages/add-page'
		});
		this.pages.add(this.upload);

		this.reset = new qst.ResetPage({
			name: 'reset',
			template: 'pages/reset-page'
		});
		this.pages.add(this.reset);

		this.setpassword = new qst.SetPasswordPage({
			name: 'setpassword',
			template: 'pages/setpassword-page'
		});
		this.pages.add(this.setpassword);

		this.confirmation = new qst.ConfirmationPage({
			name: 'confirmation',
			template: 'pages/confirmation-page'
		});
		this.pages.add(this.confirmation);


		// Pages render on route
		this.router.on('404', function () {
			that.pages.getPage('404').render();
		});

		this.router.on('route', function (router, route, params) {
			console.log('route:' + router);
			this.statistic.trackCurrentPageChange();
			
			qst.trigger('route', router, route, params);

			switch (router) {
				case 'confirmationemail': 
					this.confirmation.render({
						login: route[0]
					});
					qst.navigate('/confirmation', {trigger: false});
					break;				
				case 'confirmation': 
					qst.navigate('/', {trigger: true});
					break;

				case 'signup_confirmed': 
					qst.navigate('/', {trigger: true});
					break;

				case 'changepass': 
					this.setpassword.render({
						code: 	route[0],
						email: 	route[1],
					});
					qst.navigate('/setpassword', {trigger: false});
					break;
				case 'setpassword': 
					qst.navigate('/items', {trigger: true});
					break;

				case 'reset': 
					this.reset.render();
					break;

				case 'er404': 
					this.pages.getPage('404').render();
					break;

				case 'er403':
					this.pages.getPage('403').render();
					break;

				case 'landing':
					if(qst.is_authed()) {
						qst.navigate('/items', {trigger: true});
					} else {
						this.landing.render();
					}
					break;

				case 'profile':
					if(!route[0] && !qst.is_authed()) {
						qst.navigate('/', {trigger: true});
					} else {
						this.profile.render({
							mine:    	!route[0] || route[0] === qst.user.get('uid'),
							user:    	!!route[0] ? route[0] : qst.user.get('uid'),
							section:    route[1],
							category:   route[2],
							story:  	route[3],
							sort: 		route[4]
						});
					}
					break;

				case 'explore':
					this.explore.render({
						category:   route[0],
						story:  	route[1],
						sort: 		route[2],
						filter: 	route[3], 
					});
					break;

				case 'itemlist':
					if(!qst.is_authed()) {
						qst.navigate('/403', {trigger: true});
					} else {
						this.itemlist.render();
					}
					break;

				case 'popular':
					this.popular.render();
					break;

				case 'photo':
					// first open photo
					if(this.router.route_passed <= 1) {
						this.photo.render({
							photo_id: route[0],
							in_popup: false,
							context: this.router.context,
						});
					} else {
						this.photo.render({
							photo_id: route[0],
							in_popup: true,
							context: this.router.context,
						});
					}
					break;

				case 'add':
					// first open add
					if(!qst.is_authed()) {
						qst.navigate('/403', {trigger: true});
					} else {
						if(this.router.route_passed <= 1) {
							this.upload.render({
								category:   route[0],
								story:  	route[1],
								in_popup: false
							});
						} else {
							this.upload.render({
								category:   route[0],
								story:  	route[1],
								in_popup: true,
							});
						}
					}
					break;

				case 'dialogs':
					if(!qst.is_authed()) {
						qst.navigate('/403', {trigger: true});
					} else {
						this.dialogs.render();
					}
					break;

				case 'invite':
					if(!qst.is_authed()) {
						qst.navigate('/403', {trigger: true});
					} else {
						this.invite.render();
					}
					break;

				case 'settings':
					if(!qst.is_authed()) {
						qst.navigate('/403', {trigger: true});
					} else {
						this.settings.render();
					}
					break;

				default:
					if(!!route[0] && !this.router.previousWasPopup()) {
					}
					break;
			}

			this.trigger('need:meta:update');
		}, this);

		

		

		// Clear pages - sleep
		this.router.on('reset', function (prev_route, dest_route) {
			console.log(prev_route, dest_route)

			if(!this.router.isPopup(dest_route)) {
				if(!this.router.isPopup(prev_route)) {
					// Magic scroll to top onchange page
					qst.speedScrollTop(0, 1);
				}

				switch (prev_route) {
					case 'landing':
						console.log('reset:landing');
						this.landing.sleep();
						break;

					case 'explore':
						console.log('reset:explore');
						this.explore.sleep();
						break;

					case 'itemlist':
						console.log('reset:itemlist');
						this.itemlist.sleep();
						break;

					case 'popular':
						console.log('reset:popular');
						this.popular.sleep();
						break;

					case 'profile':
						console.log('reset:profile');
						this.profile.sleep();
						break;

					case 'photo':
						console.log('reset:photo');
						this.photo.sleep();
						break;
						
					case 'add':
						console.log('reset:add');
						this.upload.sleep();
						break;

					case 'reset':
						console.log('reset:reset');
						this.reset.sleep();
						break;
						
					case 'setpassword':
						console.log('reset:setpassword');
						this.setpassword.sleep();
						break;
					case 'changepass':
						console.log('reset:changepass');
						this.setpassword.sleep();
						break;
					case 'confirmationemail':
						console.log('reset:confirmation');
						this.confirmation.sleep();
						break;
					case 'confirmation':
						console.log('reset:confirmation');
						this.confirmation.sleep();
						break;

					default:
						break;
				}
			}

			// every page sleeps when we quit popup
			if(this.router.isPopup(prev_route)) {

				_.forEach(this.pages.models, function(page, i) {
					if(!!page.sleep && page.get('name') != dest_route) {
						page.sleep();
					}
				})
			}

		}, this);

		this.on('need:meta:update', function(){
			this.$og_url.attr('content', window.location.href);
		}, this);


		qst.on('historyback', function(){
			qst.navigate(this.router.back_path, {trigger: true});
		}, this);


		qst.on('historyback:reload', function(){
			qst.trigger('historyback');
			window.location.reload();
		}, this);


		qst.on('auth:clear', function(){
			qst.navigate('/logout', {trigger: true});
		});



		// this.router.on('reset', function(prev, destination){
		// 	var prevPage = this.pages.getPage(prev)
		// 	if(this.pages.havePage(prev)){
		// 		this.pages.getPage(prev).remove();	
		// 	}
		// }, this);

		






		/**
		 * Global event list
		 */
		// 'twitter:hi', 	{token, uid, secret} - twitter auth success ;
		// 'vkontakte:hi', 	{token, uid} - vkontakte auth success
		// 'vkontakte:linker:hi', {token, uid} - strange sheet from vkontakte;
		this.on('twitter:hi', function (user_obj) {
			this.auth.trigger('twitter:hi', user_obj);
		}, this);

		this.on('vkontakte:hi', function (user_obj) {
			this.auth.trigger('vkontakte:hi', user_obj);
		}, this);
		
		this.on('error', function (err) {
			console.error('error');
			if(!!err && !!err.description) {
				qst.error(err.description);
			}
		});


		/**
		 * Global event casting
		 */

		/**
		 * USER AUTH EVENTS
		 */

		this.auth.on('auth:success', function (user_obj) {
			qst.trigger('auth:success', user_obj);
			if(this.router.current_route  === 'landing' || this.router.current_route  === '') {
				qst.navigate('/items', {trigger: true});
			}
		}, this);
		this.auth.on('auth:clear', function () {
			qst.trigger('auth:clear');
		}, this);

		this.user.on('user:error', function(err){
			this.trigger('error', err);
			qst.trigger('auth:clear');
		}, this)

		this.user.on('session:checked', function(err){
			qst.trigger('session:checked');
			console.log('session:checked')
		}, this);

		this.user.settings.on('change:geo_position', function (model, value) {
			qst.trigger('geo_position:ready', value);
		}, this);

		this.user.settings.on('usersettings:ready', function (user_obj) {
			qst.trigger('usersettings:ready', user_obj);
		}, this);


		this.navbar.on('auth:show', function () {
			qst.trigger('auth:show');
		}, this)

		this.navbar.on('navbar:logout', function () {
			qst.trigger('navbar:logout');
		}, this)


		


		/**
		 * Scroll handler
		 */
		var $win = $(window),
			$doc = $(document);

		$(window).scroll(function(){
			var s_top = $win.scrollTop(),
				d_h = $doc.height(),
				w_h = $win.height();
			qst.trigger('scroll', {
				s_top: s_top,
				d_h: d_h,
				w_h: w_h
			});
			if( s_top+150 >= (d_h - w_h) ) {
				qst.trigger('pagebottom:reached');
			}
		});

		if(!qst.is_authed()) {
			this.navbar.show();
		}


		/**
		 * APPLICATION READY
		 */
		qst.trigger('app:init');
	},
});
