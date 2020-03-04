import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //--------------------------------//
    //---------- Main Menu -----------//
    //--------------------------------//
    //Home 
    {
      path: "/",
      name: "home",
      component: Home
    },
    //Product-Pages 
    {
      path: "/products",
      name: "products",
      component: () =>
        import("./views/Products.vue")
    },
    //Brochures
    {
      path: "/brochures",
      name: "brochures",
      component: () =>
        import("./views/Brochures.vue")
    },
    //Alfresco Living
    {
      path: "/alfrescoliving",
      name: "alfrescoliving",
      component: () =>
        import("./views/AlfrescoLiving.vue")
    },
    //ThermaLine
    {
      path: "/dowell-thermaline",
      name: "dowell-thermaline",
      component: () =>
        import("./views/Thermaline.vue")
    },
    //About
    {
      path: "/about",
      name: "about",
      component: () =>
        import("./views/About.vue")
    },
    //Location
    {
      path: "/locations",
      name: "locations",
      component: () =>
        import("./views/Locations.vue")
    },
    //News
    {
      path: "/dowell-latest-news",
      name: "news",
      component: () =>
        import("./views/News.vue")
    },


    //--------------------------------//
    //---------- Product-Pages -------//
    //--------------------------------//
    //Windows
    {
      path: "/windows",
      name: "windows",
      component: () =>
        import("./views/Product-Pages/Windows.vue")
    },
    //Doors
    {
      path: "/doors",
      name: "doors",
      component: () =>
        import("./views/Product-Pages/Doors.vue")
    },
    //Sliding Door
    {
      path: "/slidingdoor",
      name: "slidingdoor",
      component: () =>
        import("./views/Product-Pages/Doors/SlidingDoor.vue")
    },
    //Alfresco Sliding Door
    {
      path: "/alfrescoslidingdoor",
      name: "alfrescoslidingdoor",
      component: () =>
        import("./views/Product-Pages/Doors/AlfrescoSlidingDoor.vue")
    },
    //Bi-Fold Door
    {
      path: "/bifolddoor",
      name: "bifolddoor",
      component: () =>
        import("./views/Product-Pages/Doors/BiFoldDoor.vue")
    },
    //French Door
    {
      path: "/frenchdoor",
      name: "frenchdoor",
      component: () =>
        import("./views/Product-Pages/Doors/FrenchDoor.vue")
    },
    //Sliding Window
    {
      path: "/slidingwindow",
      name: "slidingwindow",
      component: () =>
        import("./views/Product-Pages/Windows/SlidingWindow.vue")
    },
    //Awning Window
    {
      path: "/awningwindow",
      name: "awningwindow",
      component: () =>
        import("./views/Product-Pages/Windows/AwningWindow.vue")
    },
    //Casement Window
    {
      path: "/casementwindow",
      name: "casementwindow",
      component: () =>
        import("./views/Product-Pages/Windows/CasementWindow.vue")
    },
    //Double Hung Window
    {
      path: "/doublehungwindow",
      name: "doublehungwindow",
      component: () =>
        import("./views/Product-Pages/Windows/DoubleHungWindow.vue")
    },
    //Warranty
    {
      path: "/warranty",
      name: "warranty",
      component: () =>
        import("./views/Product-Pages/Warranty.vue")
    },
    //WERS
    {
      path: "/wers",
      name: "wers",
      component: () =>
        import("./views/Product-Pages/WERS.vue")
    },

    // //--------------------------------//
    // //---------- Brochures -----------//
    // //--------------------------------//
    //VIC
    {
      path: "/vic-act-brochures",
      name: "vic-act-brochures",
      component: () =>
        import("./views/Brochure-Pages/VICACT-b.vue")
    },
    //NSW
    {
      path: "/nsw-brochures",
      name: "nsw-brochures",
      component: () =>
        import("./views/Brochure-Pages/NSW-b.vue")
    },
    //QLD
    {
      path: "/qld-brochures",
      name: "qld-brochures",
      component: () =>
        import("./views/Brochure-Pages/QLD-b.vue")
    },
    //SA
    {
      path: "/sa-brochures",
      name: "sa-brochures",
      component: () =>
        import("./views/Brochure-Pages/SA-b.vue")
    },
    //WA
    {
      path: "/wa-brochures",
      name: "wa-brochures",
      component: () =>
        import("./views/Brochure-Pages/WA-b.vue")
    },
    //TAS
    {
      path: "/tas-brochures",
      name: "tas-brochures",
      component: () =>
        import("./views/Brochure-Pages/TAS-b.vue")
    },

    //--------------------------------//
    //---------- Thermaline ----------//
    //--------------------------------//
    {
      path: "/thermaline-door",
      name: "thermaline-door",
      component: () =>
        import("./views/Thermaline-Pages/Doors.vue")
    },
    {
      path: "/thermaline-window",
      name: "thermaline-window",
      component: () =>
        import("./views/Thermaline-Pages/Windows.vue")
    },
    {
      path: "/thermaline-specs",
      name: "thermaline-specs",
      component: () =>
        import("./views/Thermaline-Pages/Specs.vue")
    },
    {
      path: "/thermaline-awards",
      name: "thermaline-awards",
      component: () =>
        import("./views/Thermaline-Pages/Awards.vue")
    },
    {
      path: "/thermaline-tech",
      name: "thermaline-tech",
      component: () =>
        import("./views/Thermaline-Pages/Technology.vue")
    },
    {
      path: "/thermaline-energy",
      name: "thermaline-energy",
      component: () =>
        import("./views/Thermaline-Pages/Energy.vue")
    },
    {
      path: "/thermaline-design",
      name: "thermaline-design",
      component: () =>
        import("./views/Thermaline-Pages/Design.vue")
    },
    {
      path: "/thermaline-climate",
      name: "thermaline-climate",
      component: () =>
        import("./views/Thermaline-Pages/Climate.vue")
    },

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})
