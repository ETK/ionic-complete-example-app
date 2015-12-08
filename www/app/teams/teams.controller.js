(function (){
	angular.module('myTeams')
		.controller('TeamsController',['eliteApi',TeamsController]);

		function TeamsController(eliteApi){
			var vm = this;

            vm.teams = null;

            activate();

            function activate() {
                eliteApi.getLeagueData()
                .then(function(data) {
                    vm.teams = data.teams;
                });
            }
			
		}
})();