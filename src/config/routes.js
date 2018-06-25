function secureState($q, $state, $auth, $rootScope) {
  return new $q(resolve => {
    if($auth.isAuthenticated()) return resolve();

    $rootScope.$broadcast('flashMessage', {
      type: 'warning',
      content: 'Please log in'
    });

    $state.go('login');
  });
}

function Router($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/auth/register.html',
      controller: 'AuthRegisterCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/auth/login.html',
      controller: 'AuthLoginCtrl'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: './views/users/index.html',
      controller: 'UsersIndexCtrl'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: './views/users/show.html',
      controller: 'UsersShowCtrl'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: './views/users/edit.html',
      controller: 'UsersEditCtrl',
      resolve: { secureState }
    })
    .state('bundlesShow', {
      url: '/bundles/:id',
      templateUrl: './views/bundles/show.html',
      controller: 'BundlesShowCtrl'
    })
    .state('bundlesNew', {
      url: '/bundles/new',
      templateUrl: './views/bundles/new.html',
      controller: 'BundlesNewCtrl',
      resolve: { secureState }
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
