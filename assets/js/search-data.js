// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Research manuscripts and conference submissions in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of personal and academic projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "A curated selection of my open-source and academic repositories in scientific computing, CFD, and numerical methods.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "An overview of my academic background, research experience, and technical expertise. Use the document icon to download the PDF version.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/CV/";
          },
        },{id: "projects-gnn-based-flow-prediction",
          title: 'GNN-Based Flow Prediction',
          description: "Integration of GNNs with classical CFD simulations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-2d-advection-diffusion-solver",
          title: '2D Advection-Diffusion Solver',
          description: "Serial and parallel solvers for the 2D advection-diffusion equation using Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-basic-cfd-flows-in-python",
          title: 'Basic CFD Flows in Python',
          description: "Two classic CFD problems implemented with finite differences for learning flow physics and numerical methods.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-diffuser-augmented-micro-scale-wind-turbine-for-low-wind-speed-operation",
          title: 'Diffuser-Augmented Micro-Scale Wind Turbine for Low-Wind-Speed Operation',
          description: "Design, blade-resolved CFD, and experimental assessment of a micro-scale wind turbine for low-wind-speed operation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/diffuser-augmented-wind-turbine/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%61%69%71%73%68%61%68%62%61%7A%37%32%36@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/FaiqShahbaz", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/faiq07", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
