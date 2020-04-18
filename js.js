angular.module("biografija",[])
.run(function($rootScope){
    $rootScope.promjenaEducation=false
    $rootScope.promjenaSkills=false
    $rootScope.promjenaAboutMe=false
    $rootScope.daLiJeNekiMenuOtvoren=false
})
.controller("kontrolerSlika",function($scope,$interval,$timeout){
    var slike=["Pictures/background.jpg","Pictures/background2.jpg","Pictures/background3.jpg","Pictures/background4.jpg","Pictures/background5.jpg","Pictures/background6.jpg","Pictures/background7.jpg","Pictures/background8.jpg","Pictures/background9.jpg","Pictures/background10.jpg"]
    $scope.slika=slike[0]
    var i=1;
    $interval(function(){
        $scope.efekat={"filter":"brightness(0)"}
        $timeout(function(){
            $scope.slika=slike[i]
            i++;
            if(i==slike.length)
            i=0;
        },1000)
        $timeout(function(){
            $scope.efekat={"filter":"brightness(1)"}
        },2000)
    },6000)
})
.controller("kontrolerLinkova",function($scope){
    $scope.hover=function(){
        $scope.hoverStil={"animation-play-state":"paused"}
    }
    $scope.odhover=function(){
        $scope.hoverStil={"animation-play-state":"running"}
    }
})  
.controller("kontrolerMenua",function($scope,$rootScope,$timeout){
    function otkrij(){
        $timeout(function(){
            $scope.t1={"right":"0%"}
        },1000)
        $timeout(function(){
            $scope.t2={"right":"0%"}
        },1500)
        $timeout(function(){
            $scope.t3={"right":"0%"}
        },2000)
        $timeout(function(){
            $scope.t4={"right":"0%"}
        },2500)
        $timeout(function(){
            $scope.t5={"right":"0%"}
        },3000)
    }
    function sakrij(){
        $scope.t1={"right":"-100%"}
        $scope.t2={"right":"-100%"}
        $scope.t3={"right":"-100%"}
        $scope.t4={"right":"-100%"}
        $scope.t5={"right":"-100%"}
    }

    $scope.aboutMe=function(){
        if($rootScope.promjenaSkills==true || $rootScope.promjenaEducation==true)
        {
            $scope.vratiEducation()
            $scope.vratiSkills()
            sakrij()
            $timeout(function(){
                $rootScope.promjenaAboutMe=true
                $scope.izgledEkrana={"width":"51vw"}
                $scope.stilPomocnogAboutMe={"width":"45vw",
                                            "visibility":"visible",
                                            "overflow":"auto"}
            },1000)
            otkrij()
        }

        else
        {
            $rootScope.promjenaAboutMe=true
            $scope.izgledEkrana={"width":"51vw"}
            $scope.stilPomocnogAboutMe={"width":"45vw",
                                        "visibility":"visible",
                                        "overflow":"auto"}
            sakrij()
            otkrij()
        }
        
        
        /*$scope.stilAboutMe={"background":"white",
                              "color":"black"}*/
    }
    $scope.education=function(){
        if($rootScope.promjenaSkills==true || $rootScope.promjenaAboutMe==true)
        {
            $scope.vratiAboutMe()
            $scope.vratiSkills()
            sakrij()
            $timeout(function(){
                $rootScope.promjenaEducation=true
                $scope.izgledEkrana={"width":"51vw"}
                $scope.stilPomocnogEducation={"width":"45vw",
                                            "visibility":"visible",
                                            "overflow":"auto"}
            },1000)
            otkrij()
        }
        

        else
        {
            $rootScope.promjenaEducation=true
            $scope.izgledEkrana={"width":"51vw"}
            $scope.stilPomocnogEducation={"width":"45vw",
                                        "visibility":"visible",
                                        "overflow":"auto"}
            sakrij()
            otkrij()
        }
        
        /*$scope.stilEducation={"background":"white",
                              "color":"black"}*/
    }
    $scope.skills=function(){
        if($rootScope.promjenaEducation==true || $rootScope.promjenaAboutMe==true)
        {
            $scope.vratiAboutMe()
            $scope.vratiEducation()
            sakrij()
            $timeout(function(){
                $rootScope.promjenaSkills=true
                $scope.izgledEkrana={"width":"51vw"}
                $scope.stilPomocnogSkills={"width":"45vw",
                                        "visibility":"visible",
                                        "overflow":"auto"}
            },1000)
            otkrij()
        }

        else
        {
            $rootScope.promjenaSkills=true
            $scope.izgledEkrana={"width":"51vw"}
            $scope.stilPomocnogSkills={"width":"45vw",
                                        "visibility":"visible",
                                        "overflow":"auto"}
            sakrij()
            otkrij()
        }

        /*$scope.stilSkills={"background":"white",
                              "color":"black"}*/
    }

    $scope.vratiAboutMe=function(){
        $rootScope.promjenaAboutMe=false
        $scope.izgledEkrana={"width":"100vw"}
        $scope.stilPomocnogAboutMe={"width":"0vw",
                                      "visibility":"hidden",
                                      "overflow":"hidden"}
        /*$scope.stilAboutMe={"background":"none",
                              "color":"white"}*/
    }
    $scope.vratiEducation=function(){
        $rootScope.promjenaEducation=false
        $scope.izgledEkrana={"width":"100vw"}
        $scope.stilPomocnogEducation={"width":"0vw",
                                      "visibility":"hidden",
                                      "overflow":"hidden"}
        /*$scope.stilEducation={"background":"none",
                              "color":"white"}*/
    }
    $scope.vratiSkills=function(){
        $rootScope.promjenaSkills=false
        $scope.izgledEkrana={"width":"100vw"}
        $scope.stilPomocnogSkills={"width":"0vw",
                                      "visibility":"hidden",
                                      "overflow":"hidden"}
        /*$scope.stilSkills={"background":"none",
                              "color":"white"}*/
    }
})
.controller("kontrolerStavki",function($scope,$timeout){
    
})
.controller("kontrolerLinkova2",function($scope,$rootScope,$interval){
    $interval(function(){
        if($rootScope.promjenaEducation==true || $rootScope.promjenaSkills==true || $rootScope.promjenaAboutMe==true)
        $scope.stilLinkova={"display":"none"}
        else
        $scope.stilLinkova={"display":"block"}
    },0)
})
