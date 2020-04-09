angular.module("biografija",[])
.run(function($rootScope){
    $rootScope.promjenaEducation=false
})
.controller("kontrolerSlika",function($scope,$interval,$timeout){
    var slike=["background.jpg","background2.jpg"]
    $scope.slika=slike[0]
    var i=1;
    $interval(function(){
        //$timeout(function(){
            $scope.efekat={"filter":"brightness(0)",
                           "transition":"1s"}
            
            $scope.slika=slike[i]
            
            i++;
            if(i==slike.length)
            i=0;
            
            var t1=$timeout(function(){
                $scope.efekat={"filter":"brightness(1)",
                            "transition":"1s"}
            },1000)
            $timeout.cancel(t1)
            var t2=$timeout(function(){},1000)
            $timeout.cancel(t2)
        //},10000)
    },4000)
})
.controller("kontrolerLinkova",function($scope){
    $scope.hover=function(){
        $scope.hoverStil={"animation-play-state":"paused"}
    }
    $scope.odhover=function(){
        $scope.hoverStil={"animation-play-state":"running"}
    }
})  
.controller("kontrolerEducation",function($scope,$rootScope){
    $scope.education=function(){
        $rootScope.promjenaEducation=true
        $scope.izgledEkrana={"width":"51vw"}
        $scope.stilPomocnog={"background":"blue",
                             "width":"45vw"}
    }
})
.controller("kontrolerLinkova2",function($scope,$rootScope,$interval){
    $interval(function(){
        if($rootScope.promjenaEducation==true)
        $scope.stilLinkova={"display":"none"}
    },0)
})
