configureRoutes.$inject = ["$stateProvider"];

function configureRoutes($stateProvider) {
  getStates().forEach(function(state) {
    $stateProvider.state(state.state, state.config);
  });
}

function getStates() {
  return [
    {
      state: "default",
      config: {
        url: "",
        template: require("../templates/home.html")
      }
    },
    {
      state: "home",
      config: {
        url: "/",
        template: require("../templates/home.html")
      }
    },
    {
      state: "resume",
      config: {
        url: "/resume",
        template: require("../templates/resume.html")
      }
    },
    {
      state: "experience",
      config: {
        url: "/experience",
        template: require("../templates/experience.html")
      }
    },
    {
      state: "contact",
      config: {
        url: "/contact",
        template: require("../templates/contact.html")
      }
    }
  ];
}

module.exports = configureRoutes;
