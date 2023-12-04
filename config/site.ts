export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Usuario de Grupo Acosta",
	description: "Automatización de informes medio ambientales",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},
    {
      label: "Historia",
      href: "/historia",
    },
    {
      label: "Servicios",
      href: "/servicios",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },

	],
	navMenuItems: [
		{
			label: "Inicio",
			href: "/",
		},
    {
      label: "Historia",
      href: "/historia",
    },
    {
      label: "Servicios",
      href: "/servicios",
    },
    {
      label: "Contacto",
      href: "/contacto",
    },
	{
		label: "Cerrar Sesión",
    href: "/Cerrar Sesión",
	  },
	],
	links: {
		github: "https://github.com/MarTroya3",
		twitter: "https://twitter.com/martrub3",
		instagram: "https://www.instagram.com/marlyn_troya/",
		facebook: "https://www.facebook.com/marlyn.troya2345",
    
	},
};
