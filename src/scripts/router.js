configureRoutes.$inject = ["$stateProvider"];



function configureRoutes($stateProvider) {
     getStates()
        .forEach( function (state)  {
            $stateProvider.state(state.state, state.config);
        });

}


function getStates() {
    return [
        {

            state : "default",
            config: {
                url: "",
                templateUrl: "home.html"
            }
        },
        {
            state: "home",
            config: {
                url: "/",
                templateUrl: "home.html"
            }

        },
        {
            state: "resume",
            config:{
                url:"/resume",
                templateUrl:"resume.html"
            }
        },
        {
            state: "experience",
            config:{
                url:"/experience",
                templateUrl:"experience.html"
            }
        },
        {
            state: "contact",
            config:{
                url:"/contact",
                templateUrl:"contact.html"
            }
        }
    ];


}

module.exports = configureRoutes;

