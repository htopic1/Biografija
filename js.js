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
.controller("kontrolerMenua",function($scope,$rootScope,$timeout,$compile){
    function otkrij(){
        $timeout(function(){
            $scope.t1={"right":"0%"}
        },1000)
        $timeout(function(){
            $scope.t2={"right":"0%"}
        },1200)
        $timeout(function(){
            $scope.t3={"right":"0%"}
        },1400)
        $timeout(function(){
            $scope.t4={"right":"0%"}
        },1600)
        $timeout(function(){
            $scope.t5={"right":"0%"}
        },1800)
    }
    function sakrij(){
        $scope.t1={"right":"-100%"}
        $scope.t2={"right":"-100%"}
        $scope.t3={"right":"-100%"}
        $scope.t4={"right":"-100%"}
        $scope.t5={"right":"-100%"}
    }
    

    $scope.pokaziLupu=function(){
        var element=angular.element($("#pokaziLupu"))
        element.html("<img id='profilna' src='profilna.jpg' alt='' ng-mouseover='pokaziLupu()'  ng-style='zatamniSlikuPodLupom'><div id='profilnaLupa' ng-mouseleave='sakrijLupu()' ng-click='otkrijSliku()'><img ng-click='otkrijSliku()' src='expand-solid.svg' width='50px' alt=''></div>")
        $compile(element)($scope)
        $scope.zatamniSlikuPodLupom={"filter":"brightness(.5)"}
    }

    $scope.sakrijLupu=function(){
        var element2=angular.element($("#pokaziLupu"))
        element2.html("<img id='profilna' src='profilna.jpg' alt='' ng-mouseover='pokaziLupu()'>")
        $compile(element2)($scope)
    }

    $scope.otkrijSliku=function(){
        $scope.otkrijSlikuu={"display":"flex"}
    }

    $scope.pokaziKompress=function(){
        var element3=angular.element($("#uvecatiSlikuNaLupi"))
        element3.html("<img src='profilna.jpg' width='500px' alt='' ng-mouseover='pokaziKompress()' ng-style='zatamniSlikuNaLupi'><div ng-click='sakrijSliku()' id='uvecatiSlikuNaLupi2' ng-mouseleave='sakrijKompress()'><img src='compress-solid.svg' ng-click='sakrijSliku()' width='50px' alt=''></div>")
        $compile(element3)($scope)
        $scope.zatamniSlikuNaLupi={"filter":"brightness(.5)"}
    }

    $scope.sakrijKompress=function(){
        var element4=angular.element($("#uvecatiSlikuNaLupi"))
        element4.html("<img src='profilna.jpg' width='500px' alt='' ng-mouseover='pokaziKompress()'>")
        $compile(element4)($scope)
    }

    $scope.sakrijSliku=function(){
        $scope.otkrijSlikuu={"display":"none"}
    }



    $scope.aboutMe=function(){
        if($rootScope.promjenaAboutMe==false)
        {
            if(/*$rootScope.promjenaSkills==true || $rootScope.promjenaEducation==true*/ $rootScope.daLiJeNekiMenuOtvoren==true)
            {
                $scope.vratiEducation()
                $scope.vratiSkills()
                $timeout(function(){
                    $rootScope.promjenaAboutMe=true
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
                    $rootScope.promjenaAboutMe=true
                    $rootScope.daLiJeNekiMenuOtvoren=true
                    $scope.izgledEkrana={"width":"50vw"}
                    $scope.stilPomocnogAboutMe={"width":"50vw",
                                                "visibility":"visible"}
                    otkrij()
                },400)
                
            }
        }
        
        $scope.stilAboutMe={"border":"1px solid white"}
    }
    $scope.education=function(){
        if($rootScope.promjenaEducation==false)
        {
            if(/*$rootScope.promjenaSkills==true || $rootScope.promjenaAboutMe==true*/ $rootScope.daLiJeNekiMenuOtvoren==true)
            {
                $scope.vratiAboutMe()
                $scope.vratiSkills()
                $timeout(function(){
                    $rootScope.promjenaEducation=true
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
                    $rootScope.promjenaEducation=true
                    $rootScope.daLiJeNekiMenuOtvoren=true
                    $scope.izgledEkrana={"width":"50vw"}
                    $scope.stilPomocnogEducation={"width":"50vw",
                                                "visibility":"visible"}
                    otkrij()
                },400)
                
            }
        }

        $scope.stilEducation={"border":"1px solid white"}
    }
    $scope.skills=function(){
        if($rootScope.promjenaSkills==false)
        {
            if(/*$rootScope.promjenaEducation==true || $rootScope.promjenaAboutMe==true*/ $rootScope.daLiJeNekiMenuOtvoren==true)
            {
                $scope.vratiAboutMe()
                $scope.vratiEducation()
                $timeout(function(){
                    $rootScope.promjenaSkills=true
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
                    $rootScope.promjenaSkills=true
                    $rootScope.daLiJeNekiMenuOtvoren=true
                    $scope.izgledEkrana={"width":"50vw"}
                    $scope.stilPomocnogSkills={"width":"50vw",
                                                "visibility":"visible"}
                    otkrij()
                },400)
                
            }
        }
        $scope.stilSkills={"border":"1px solid white"}
    }
    $scope.vratiAboutMe=function(iks){
        $rootScope.promjenaAboutMe=false
        $timeout(function(){
            $rootScope.daLiJeNekiMenuOtvoren=false
        },1000)
        sakrij()
        $timeout(function(){
            //if(iks=='X')
            $scope.izgledEkrana={"width":"100vw"}
            $scope.stilPomocnogAboutMe={"width":"0vw",
                                        "visibility":"hidden"}
        },500)
        
        $scope.stilAboutMe={}
    }
    $scope.vratiEducation=function(iks){
        $rootScope.promjenaEducation=false
        $timeout(function(){
            $rootScope.daLiJeNekiMenuOtvoren=false
        },1000)
        sakrij()
        $timeout(function(){
            //if(iks=='X')
            $scope.izgledEkrana={"width":"100vw"}
            $scope.stilPomocnogEducation={"width":"0vw",
                                        "visibility":"hidden"}
        },500)
        
        $scope.stilEducation={}
    }
    $scope.vratiSkills=function(iks){
        $rootScope.promjenaSkills=false
        $timeout(function(){
            $rootScope.daLiJeNekiMenuOtvoren=false
        },1000)
        sakrij()
        $timeout(function(){
            //if(iks=='X')
            $scope.izgledEkrana={"width":"100vw"}
            $scope.stilPomocnogSkills={"width":"0vw",
                                        "visibility":"hidden",}
        },500)
        
        $scope.stilSkills={}
    }
})
.controller("kontrolerLinkova2",function($scope,$rootScope,$interval){
    $interval(function(){
        if(/*$rootScope.promjenaEducation==true || $rootScope.promjenaSkills==true || $rootScope.promjenaAboutMe==true ||*/ $rootScope.daLiJeNekiMenuOtvoren==true)
        {
            $scope.stilLinkova={"display":"none"}
            //console.log($rootScope.daLiJeNekiMenuOtvoren);
        }
        else
        {
            $scope.stilLinkova={"display":"block"}
            //console.log($rootScope.daLiJeNekiMenuOtvoren);
        }
    },0)
})
