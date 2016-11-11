//lesson
app.controller("lessonModuleController",['$rootScope','$scope','$timeout','getActionService','saveCompleteActionService','moduleService','lessonService','moduleDelService','$uibModal','$log','moduleSearchService', function($rootScope, $scope, $timeout, getActionService, saveCompleteActionService, moduleService, lessonService, moduleDelService, $uibModal,$log, moduleSearchService) {
	$scope.modules = [];
	$scope.loader = [];
	$scope.lesson  = [];
	$scope.isshowLesson = [];
	$scope.lesson = [];
	$scope.isnoLesson = [];
	$scope.showCreateForm = false;
	$scope.showEditForm = false;
	$scope.showAllModuleList = [];

	// Get module list
	$scope.listResponse = 1;
	$scope.allTotal = 0;

	$scope.getModuleList = function(){
		var limit_start = $scope.showAllModuleList.length;
		var limit = 12;

		if ((( $scope.allTotal > limit_start) || $scope.allTotal === 0 ) && $scope.listResponse === 1) {
			$scope.listResponse = 0;
			$scope.moduleLoader = true;
			moduleService.query({skip:limit_start,limit:limit}, function(data){
				$scope.listResponse = 1;
				if(data.statusCode === 200 && data.message === "ok"){
					$scope.moduleLoader = false;
					$scope.getModuleShow = true;
					$scope.allTotal = data.result.totalCount;
					$scope.showAllModuleList = $scope.showAllModuleList.concat(data.result.module);
				}  else {
					$scope.moduleLoader = false;
					$scope.getModuleShow = false;
					$scope.showAllModuleList = [];
					$scope.allTotal = 0;
				}
			},function(error){
				console.log("error", error);
			});
		}
	};
	$scope.getModuleList();
	$scope.$on("CallModulesMethod", function(){
		$scope.getModuleList();
	});
	//search user by name
	$scope.searchUser = function(){
			moduleService.get({name : $scope.search}, function(data){
				$scope.modules = data.result;
			});
	};
	// Show lesson form module ID
	$scope.showLesson = function(index,id){
		$scope.loader[index] = true;
		$scope.isshowLesson[index] = true;
		lessonService.get({ id: id }, function(data) {
			$scope.loader[index] = false;
			if(data.statusCode === 200 && data.message  === "ok")
			{
				if(data.result.length > 0){
					$scope.lesson[index] = data.result;
				} else {
					$scope.isnoLesson[index] = true;
				}
			}
		});
	};
	// Hide lesson form module ID
	$scope.hideLesson = function(index){
		$scope.isshowLesson[index] = false;
		$scope.lesson[index] = '';
		$scope.isnoLesson[index] = false;
		$scope.loader[index] = false;
	};
	// delete module by module ID
	$scope.deleteModule = function(index, id){
		moduleDelService.delete({id :id}, function(data){
			if(data.statusCode === 200 && data.message === "ok"){
				$scope.modules.splice(index, 1);
			}
		});
	};
	//Create module
	$scope.createModule = function(){
		$scope.showCreateForm = true;
		$scope.showEditForm = false;
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'app/components/manageModule/moduleView.html',
			controller: 'manageModuleController',
			scope: $scope,
			backdrop: 'static',
			keyboard : false,
			size : 'lg',
			resolve: {
				moduleId: function () {
					return  '';
				}
			}
		});
	};
	// Edit module

	$scope.editModule = function(id) {

		$scope.showEditForm = true;
		$scope.showCreateForm = false;
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'app/components/manageModule/moduleView.html',
			controller: 'manageModuleController',
			scope: $scope,
			backdrop: 'static',
			keyboard : false,
			size : 'lg',
			resolve: {
				moduleId: function () {
					return  id;
				}
			}
		});

	};
	// Function call on loadmore
	$scope.loadMore =function(){
		$scope.getModuleList();
	};
}]);
//To show edit lesson form
$scope.editLesson = function (lesson) {
// var modalInstance = $uibModal.open({
// animation: $scope.animationsEnabled,
// templateUrl: 'app/components/manageModule/moduleView.html',
// controller: 'manageModuleController',
// scope: $scope,
// backdrop: 'static',
// keyboard : false,
// size : 'lg',
// resolve: {
// lesson : function () {
// return  lesson;
// }
// }
// });

};
