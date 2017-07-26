app.controller('authCtrl',['$scope','$http',function($scope,$http){
	$scope.username = "ABC";
	$scope.password = "123";

}]);

app.directive('submitButton',function(){
	return{
		restrict: 'A',
		controller: SubmitButtonControler,
		controllerAs: 'ctrl',
		bindToController: true,
	  link: (scope, ele, attr) => {
	  	
      ele.on('click', function(e){
        scope.ctrl.submit();
      });
	  }
	}
})

function SubmitButtonControler($scope,$http){
	this.submit = function(){
		const request = {'u':username.value,'p':password.value};

	  const promise = $http({
	  	url: '../auth/authenticate.php',
	  	type: "POST",
      data: JSON.stringify({data:request}),
	  });

	  promise.then(function(response){
	  	const data = JSON.parse(JSON.stringify(eval(response))).data;
	  	window.location = '../contracts/home.php';
	  });
	}
}