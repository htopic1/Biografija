angular.module("biografija",[])
.run(function($rootScope){
    //$rootScope.promjenaEducation=false
    //$rootScope.promjenaSkills=false
    //$rootScope.promjenaAboutMe=false
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
        if(/*$rootScope.promjenaSkills==true || $rootScope.promjenaEducation==true*/ $rootScope.daLiJeNekiMenuOtvoren==true)
        {
            $scope.vratiEducation()
            $scope.vratiSkills()
            $timeout(function(){
                //$rootScope.promjenaAboutMe=true
                $rootScope.daLiJeNekiMenuOtvoren=true
                $scope.izgledEkrana={"width":"50vw"}
                $scope.stilPomocnogAboutMe={"width":"50vw",
                                            "visibility":"visible"}
            },1000)
            otkrij()
        }

        else
        {
            sakrij()
            $timeout(function(){
                //$rootScope.promjenaAboutMe=true
                $rootScope.daLiJeNekiMenuOtvoren=true
                $scope.izgledEkrana={"width":"50vw"}
                $scope.stilPomocnogAboutMe={"width":"50vw",
                                            "visibility":"visible"}
                otkrij()
            },400)
            
        }
        
        
        /*$scope.stilAboutMe={"background":"white",
                              "color":"black"}*/
    }
    $scope.education=function(){
        if(/*$rootScope.promjenaSkills==true || $rootScope.promjenaAboutMe==true*/ $rootScope.daLiJeNekiMenuOtvoren==true)
        {
            $scope.vratiAboutMe()
            $scope.vratiSkills()
            $timeout(function(){
                //$rootScope.promjenaEducation=true
                $rootScope.daLiJeNekiMenuOtvoren=true
                $scope.izgledEkrana={"width":"50vw"}
                $scope.stilPomocnogEducation={"width":"50vw",
                                            "visibility":"visible"}
            },1000)
            otkrij()
        }
        

        else
        {
            sakrij()
            $timeout(function(){
                //$rootScope.promjenaEducation=true
                $rootScope.daLiJeNekiMenuOtvoren=true
                $scope.izgledEkrana={"width":"50vw"}
                $scope.stilPomocnogEducation={"width":"50vw",
                                            "visibility":"visible"}
                otkrij()
            },400)
            
        }
        
        /*$scope.stilEducation={"background":"white",
                              "color":"black"}*/
    }
    $scope.skills=function(){
        if(/*$rootScope.promjenaEducation==true || $rootScope.promjenaAboutMe==true*/ $rootScope.daLiJeNekiMenuOtvoren==true)
        {
            $scope.vratiAboutMe()
            $scope.vratiEducation()
            $timeout(function(){
                //$rootScope.promjenaSkills=true
                $rootScope.daLiJeNekiMenuOtvoren=true
                $scope.izgledEkrana={"width":"50vw"}
                $scope.stilPomocnogSkills={"width":"50vw",
                                        "visibility":"visible"}
            },1000)
            otkrij()
        }

        else
        {
            sakrij()
            $timeout(function(){
                //rootScope.promjenaSkills=true
                $rootScope.daLiJeNekiMenuOtvoren=true
                $scope.izgledEkrana={"width":"50vw"}
                $scope.stilPomocnogSkills={"width":"50vw",
                                            "visibility":"visible"}
                otkrij()
            },400)
            
        }

        /*$scope.stilSkills={"background":"white",
                              "color":"black"}*/
    }

    $scope.vratiAboutMe=function(iks){
        //$rootScope.promjenaAboutMe=false
        $rootScope.daLiJeNekiMenuOtvoren==false
        sakrij()
        $timeout(function(){
            //if(iks=='X')
            $scope.izgledEkrana={"width":"100vw"}
            $scope.stilPomocnogAboutMe={"width":"0vw",
                                        "visibility":"hidden"}
        },500)
        
        /*$scope.stilAboutMe={"background":"none",
                              "color":"white"}*/
    }
    $scope.vratiEducation=function(iks){
        //$rootScope.promjenaEducation=false
        $rootScope.daLiJeNekiMenuOtvoren==false
        sakrij()
        $timeout(function(){
            //if(iks=='X')
            $scope.izgledEkrana={"width":"100vw"}
            $scope.stilPomocnogEducation={"width":"0vw",
                                        "visibility":"hidden"}
        },500)
        
        /*$scope.stilEducation={"background":"none",
                              "color":"white"}*/
    }
    $scope.vratiSkills=function(iks){
        //$rootScope.promjenaSkills=false
        $rootScope.daLiJeNekiMenuOtvoren==false
        sakrij()
        $timeout(function(){
            //if(iks=='X')
            $scope.izgledEkrana={"width":"100vw"}
            $scope.stilPomocnogSkills={"width":"0vw",
                                        "visibility":"hidden",}
        },500)
        
        /*$scope.stilSkills={"background":"none",
                              "color":"white"}*/
    }
})
.controller("kontrolerLinkova2",function($scope,$rootScope,$interval){
    $interval(function(){
        if(/*$rootScope.promjenaEducation==true || $rootScope.promjenaSkills==true || $rootScope.promjenaAboutMe==true*/ $rootScope.daLiJeNekiMenuOtvoren==true)
        $scope.stilLinkova={"display":"none"}
        else
        $scope.stilLinkova={"display":"block"}
    },0)
})
