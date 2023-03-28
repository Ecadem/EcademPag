/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, F as Fragment } from '../astro.b7979d7c.mjs';
import 'html-escaper';

const $$Astro$d = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex justify-center text-center 
            space-x-1 flex-col md:flex-row 
            border-t-[0.5px] py-3 mt-5">
    <p>
        © Copyright 2023 by Ecadem.
    </p>
    <p>
        Built with ♥ by
        <a href="https://www.linkedin.com/in/eduardovparga/?locale=en_US" class="text-[#D7754C]" target="_blank">
            Eduardo V. Parga
        </a>

    </p>
</div>`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/components/shared/Footer.astro");

const $$Astro$c = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="bg-[#440013] px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://ecadem.co/" class="flex items-center">
        <img src="https://i.imgur.com/O35dDFR.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo">
    </a>
    <div class="flex md:inline-flex">
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#A82248] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:dark:bg-white">
        <li>
          <a href="/" class="block py-2 pl-3 pr-4 text-white bg-[#F57EAA] rounded md:bg-transparent md:text-[#F57EAA] md:p-0 dark:text-[#F57EAA]" aria-current="page">
            Inicio
          </a>
        </li>
        <li>
          <a href="/sobre-mi" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#F57EAA] md:hover:bg-transparent md:hover:text-[#F57EAA] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            Sobre mí
          </a>
        </li>
        <!-- <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#F57EAA] md:hover:bg-transparent md:hover:text-[#F57EAA] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            Services
          </a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#F57EAA] md:hover:bg-transparent md:hover:text-[#F57EAA] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            Contact
          </a>
        </li> -->
      </ul>
    </div>
    </div>
</nav>`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/components/shared/Nav.astro");

const $$Astro$b = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>Ecadem | ${title}</title>
	${renderHead($$result)}</head>
	<body>
		<div class="flex flex-col h-screen">

			${renderComponent($$result, "Nav", $$Nav, {})}
			
			<main class="flex-grow mx-auto container lg:px-20 pt-20">
				
				${renderSlot($$result, $$slots["default"])}
				
			</main>
			<div class="mx-auto container">
				${renderComponent($$result, "Footer", $$Footer, {})}
			</div>			
		</div>
	</body></html>`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/layouts/Layout.astro");

const $$Astro$a = createAstro();
const $$Descripcion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Descripcion;
  const { Saludo, Desc, Imag = "https://i.imgur.com/gLoSdl2.png" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="bg-[#0e010d80] 
                flex justify-center flex-col md:flex-row 
                p-20 gap-3 
                text-center md:text-left 
                space-x-10">
    <div class="flex justify-center flex-col">
        <h1 class="text-5xl font-bold pb-2">
            ${Saludo}
        </h1>
        <p class="text-[#BB5226] opacity-1 italic">
            ${Desc}
        </p>
        <div class="flex flex-row 
                    space-x-2 
                    py-3 md:py-1 
                    justify-center md:justify-start">
            <a href="https://github.com/Ecadem" target="_blank">
                <img src="/github.png" alt="" class="w-6 transition ease-in-out hover:scale-125">
            </a>
            <a href="https://www.linkedin.com/in/eduardovparga/?locale=en_US" target="_blank">
                <img src="/linkedin.png" alt="" class="w-6 transition ease-in-out hover:scale-125">
            </a>
        </div>
    </div>

    <div class="flex justify-center">
        <img${addAttribute(Imag, "src")} alt="Avatar Eduardo" class="w-80">
    </div>

</header>`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/components/main/Descripcion.astro");

const $$Astro$9 = createAstro();
const $$Tools = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Tools;
  const { Titulo, Content } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex flex-col md:flex-row pt-16 md:py-16">
    <div class="flex-1 grid grid-cols-2">
        <div class="text-center">
            <img src="/python.png" alt="" class="w-20 m-auto md:hover:animate-bounce">
            <p class="mb-16 md:mb-4 text-xs text-zinc-500 opacity-50 italic">Programacion</p>
        </div>
        <div class="text-center">
            <img src="/microsoft-sql-server.png" alt="" class="w-20 m-auto md:hover:animate-bounce">
            <p class="mb-16 md:mb-4 text-xs text-zinc-500 opacity-50 italic">SQL y NO-SQL</p>
        </div>
        <div class="text-center">
            <img src="/azure.png" alt="" class="w-20 m-auto md:hover:animate-bounce">
            <p class="md:mb-4 text-xs text-zinc-500 opacity-50 italic">Soluciones cloud</p>
        </div>
        <div class="text-center">
            <img src="kubernetes.png" alt="" class="w-20 m-auto md:hover:animate-bounce">
            <p class="md:mb-4 text-xs text-zinc-500 opacity-50 italic">Infraestructura</p>
        </div>
    </div>

    <div class="flex flex-1 flex-col gap-y-7 
                py-16 md:py-0 px-7 md:px-0 
                justify-center md:justify-start items-center md:items-start
                ">
        <h2 class="text-4xl font-bold">
            ${Titulo}
        </h2>
        <p class="text-1xl">
            ${Content}
        </p>
    </div>

</section>`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/components/main/Tools.astro");

const $$Astro$8 = createAstro();
const $$PostCont = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PostCont;
  const { Title, Last_update, Resumen, Image, Url } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(Url, "href")} class="px-0 md:px-0 py-0 md:py-0 md:mx-3 
                        rounded-lg bg-[#320030] md:hover:ease-in 
                        md:hover:duration-200 md:hover:-translate-y-2 hover:bg-[#8F338B]
                        gap-4">
    <div class="">
        
            <img${addAttribute(Image, "src")} alt="" class="rounded-t-lg w-auto">
        
        <div class="flex p-5
                    flex-col items-center text-center
                    rounded-b-lg">
            <p class="text-3xl font-bold pb-2">
                ${Title}
            </p>
            <p class="pb-1 text-xs text-zinc-500 font-semibold">
                ${Last_update}
            </p>
            <p>${Resumen}</p>
        </div>
    </div>
</a>`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/components/shared/Post-cont.astro");

const $$Astro$7 = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Post;
  const resp = await fetch("http://localhost:8000/recent_posts");
  const posts = await resp.json();
  const { Titulo, More, LinkMore } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section>
    <div class="flex text-center md:text-left my-3 md:my-5">
        <h2 class="text-4xl font-bold">${Titulo}</h2>
    </div>
    <div class="flex justify-between flex-col space-y-5 md:space-y-0 md:grid md:grid-cols-3 md:auto-rows-max ">
        ${posts.map((post) => renderTemplate`${renderComponent($$result, "Post", $$PostCont, { "Title": post.title, "Last_update": post.last_update, "Resumen": post.resumen, "Image": post.image, "Url": post.url })}`)}
    </div>
    <div class="flex justify-center py-5">
        <a${addAttribute(LinkMore, "href")} class="text-[#BB5226] hover:text-[#D7754C] opacity-1 italic ">
            ${More}
        </a>
    </div>
</section>`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/components/main/Post.astro");

const $$Astro$6 = createAstro();
const $$ProjectCont = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ProjectCont;
  const { Titulo, Resumen, Image, Url, Urlgit, Tags } = Astro2.props;
  let tags = Tags;
  return renderTemplate`${maybeRenderHead($$result)}<div class="bg-[#4C1700] vpx-1 md:mx-2
            hover:bg-[#762300] hover:duration-200
            rounded-lg">
    <div class="flex">
        
        <img${addAttribute(Image, "src")} alt="" class="hidden md:flex w-60"> 
    
        <div class="md:inline-block md:align-middle p-5">
            <p class="text-3xl font-bold pb-2">
                ${Titulo}
            </p>
            <div class="flex space-x-1 mb-2">
                ${tags.map((tag) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<span${addAttribute(tag.class, "class")}${addAttribute(tag.style, "style")}>
                            ${tag.name}
                        </span>` })}`)}
            </div>
            <p>${Resumen}</p>
            <div class="flex justify-center md:justify-start space-x-4 md:space-x-2 my-2">
                <a${addAttribute(Url, "href")} target="_blank">
                    <img src="/sitio-web.png" alt="" class="w-7 transition ease-in-out hover:scale-125">
                </a>
                <a${addAttribute(Urlgit, "href")} target="_blank">
                    <img src="/git.png" alt="" class="w-7 transition ease-in-out hover:scale-125">
                </a>                
            </div>
        </div>
    </div>
</div>`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/components/shared/Project-cont.astro");

const $$Astro$5 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Projects;
  const resp = await fetch("http://localhost:8000/recent_proj?recent=true");
  const projects = await resp.json();
  const { Titulo, More, LinkMore } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section>
    <div class="flex text-center md:text-left mb-5 px-5 md:px-0">
        <h2 class="text-4xl font-bold pt-10">
            ${Titulo}
        </h2>
    </div>


    <div class="flex flex-col space-y-3">
        ${projects.map((project) => renderTemplate`${renderComponent($$result, "Project", $$ProjectCont, { "Titulo": project.title, "Resumen": project.resumen, "Image": project.image, "Url": project.url, "Urlgit": project.urlgit, "Tags": project.tags })}`)}
    </div>
    <div class="flex justify-center pt-5">
        <a${addAttribute(LinkMore, "href")} class="text-[#BB5226] hover:text-[#D7754C] opacity-1 italic ">
            ${More}
        </a>
    </div>
</section>`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/components/main/Projects.astro");

const $$Astro$4 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Descripcion", $$Descripcion, { "Saludo": "Hola! Soy Eduardo", "Desc": "Desarrollador full stack, automatizacion, analisis y machine learning" })}${renderComponent($$result2, "Tools", $$Tools, { "Titulo": "Herramientas", "Content": "Experiencia en proyectos de soluciones end to end en anal\xEDtica avanzada, automatizaci\xF3n y reportaje, destacando habilidades blandas como trabajo en equipo, proactividad y eficiencia. He trabajado en colaboraci\xF3n con equipos multidisciplinarios, asegurando la comunicaci\xF3n efectiva y la resoluci\xF3n de problemas de manera oportuna y eficiente. Adem\xE1s, he demostrado una actitud proactiva en la identificaci\xF3n y soluci\xF3n de problemas, siempre en busca de mejorar el proceso y los resultados." })}${renderComponent($$result2, "Post", $$Post, { "Titulo": "Publicaciones mas recientes", "More": "Ver mas", "LinkMore": "#" })}${renderComponent($$result2, "Projects", $$Projects, { "Titulo": "Proyectos mas recientes", "More": "Ver mas", "LinkMore": "#" })}` })}`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/index.astro");

const $$file$4 = "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/index.astro";
const $$url$4 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mi perfil" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1> Sobre mi </h1>` })}`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/about.astro");

const $$file$3 = "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/about.astro";
const $$url$3 = "/about";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Metabase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Metabase;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Metabase" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<section class="bg-[#0e010d80]
                    p-0 md:p-20 gap-0 md:gap-3 
                    text-left 
                    space-x-0 md:space-x-10
                    rounded-md">
        <div>




            <div class="md:my-5 py-10 md:py-0">
                <h1 class="text-4xl font-bold text-center">Metabase, el Power BI killer ?</h1>
            </div>

            <!-- 1 -->
            <div class="flex flex-col md:flex-row px-5 md:px-0">
                <div class="flex flex-1 items-center justify-center">                            
                    <p>
                        Hay muchas herramientas de BI bastante conocidas en el mercado, en lo personal, creo que las más destacadas serían Tableau y Power BI que suplen muy bien las necesidades a nivel corporativo, sin embargo, cuando eres un desarrollador independiente o simplemente un emprendedor ambicioso que busca maximizar los beneficios y minimizar la inversión monetaria Metabase es una excelente solución. 
                        <br>
                        <br>
                        Todas las herramientas que mencioné anteriormente cuentan tanto con capas gratuitas como con planes de pago, cual es la ventaja de Metabase?, es de código abierto, lo que se traduce en que puedes usar, adaptar y modificar el software de forma libre y sin costo.
                    </p>
                </div>
                <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                    <img class="" src="https://i.imgur.com/oDqTtQV.png?1">
                </div>
            </div>

            <!-- 2 -->
            <div class="flex flex-col md:flex-row px-5 md:px-0">
                <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                    <img class="" src="https://i.imgur.com/X7q1nb1.png?1">
                </div>
                <div class="flex flex-1 items-center justify-center">                            
                    <p>
                        Metabase cuenta con su propia interfaz de usuario y tiene funcionalidades como la creación de perfiles de usuarios, admite la integración con más de 12 motores de bases de datos, permite la elaboración de gráficas interactivas a partir de un par de clicks y el manejo de la información de la mano de consultas SQL, permite la creación de dashboard y la fácil distribución de estos con un link que puedes compartir vía correo electrónico, como en tu página web o en la herramienta de administración que desarrollaste. 
                        <br>
                        <br>
                        Cuando creas una instancia de Metabase este software no tiene límites y ofrecerá las mismas capacidades tanto a alguien que lo use solo en su casa como a una empresa multinacional con presencia en todo el continente porque esta herramienta es extremadamente escalable. Lo único que Metabase tiene para envidiarle a herramientas como Tableau o Power BI es su fama del resto, pienso que el integrar Metabase a cualquier flujo de trabajo traería más beneficios especialmente en el mediano y el largo plazo.
                    </p>
                </div>
            </div>

            <!-- 3 -->
            <div class="flex flex-col md:flex-row px-5 md:px-0 py-5">
                <div class="flex flex-1 items-center justify-center">                            
                    <p>
                        Ahora hablemos de unas desventajas que tiene este software frente algunas otras herramientas, la principal para muchos de nosotros sería que no permite el uso directo de datos en archivos como excel o csv, otra desventaja sería la administración ya que como tienes acceso al software de forma abierta, no tendrías un equipo de soporte responsable de su mantenimiento y/o restauración, quedando un par de ejemplos más me es importante compartir para finalizar que, a diferencia de Power BI, Metabase no cuenta con algo parecido a DAX por lo que la limpieza de los datos no se podrá hacer directamente desde la herramienta. Sin embargo, hay muchas estrategias que se pueden optar para mitigar o directamente suplir las necesidades con las que cuenta Metabase. 
                        
                    </p>
                </div>
            </div>

            <!-- 4 -->
            <div class="flex flex-col md:flex-row px-5 md:px-0">
                <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                    <img class="" src="https://i.imgur.com/Y6CcNXZ.png?1">
                </div>
            </div>

            <!-- 5 -->
            <br>
            <div class="px-3 md:px-0 my-5 md:mx-0">
                <h1 class="text-2xl font-bold text-left">En conclusión...</h1>
            </div>

            <div class="flex flex-col md:flex-row px-5 md:px-0">
                <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                    <img class="" src="https://i.imgur.com/jpLvHnT.png">
                </div>
                <div class="flex flex-1 items-center justify-center">                            
                    <p>
                        Metabase es una herramienta de BI basada en la nube que se puede ajustar a las necesidades de muchas personas y proyectos contando con muchas funcionalidades potentes, de fácil integración y siendo accesibles por cualquier persona u organización gracias a su gran escalabilidad. 
                    </p>
                </div>
            </div>





        </div>
    </section>` })}`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/blog/metabase.astro");

const $$file$2 = "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/blog/metabase.astro";
const $$url$2 = "/blog/metabase";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Metabase,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Ds4A = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Ds4A;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DS4A" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<section class="bg-[#0e010d80]
                    p-0 md:p-20 gap-0 md:gap-3 
                    text-left 
                    space-x-0 md:space-x-10
                    rounded-md">
                    
                <div>           
                    
                    <div class="md:my-5 py-10 md:py-0">
                        <h1 class="text-4xl font-bold text-center">DS4A</h1>
                    </div>
                    
                    <!-- 1 -->
                    <div class="flex flex-col md:flex-row px-5 md:px-0">
                        
                        <div class="flex flex-1 items-center justify-center">                            
                            <p>
                                DS4A es un programa ofertado por el MinTIC de la mano con Correlation One para los colombianos. Tiene como objetivo principal, en mi opinión, el capacitar a personas en el área de la ciencia de datos, analítica o desarrollo de software dado al impacto que estas habilidades están teniendo alrededor del mundo en los distintos mercados y centros de investigación. 
                                <br>
                                <br>
                                En este post, me gustaría compartir mi experiencia al cursar y aprobar este programa.
                            </p>
                        </div>
                        <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                            <img class="" src="https://i.imgur.com/3KiLITH.jpg">
                        </div>

                    </div>


                    <!-- 2 -->
                    <br>
                    <div class="px-3 md:px-0 my-5 md:mx-0">
                        <h1 class="text-2xl font-bold text-left">Un poco de contexto…</h1>
                    </div>
                    
                    <div class="flex flex-col md:flex-row px-5 md:px-0">
                        
                        <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                            <img class="" src="https://i.imgur.com/3KiLITH.jpg">
                        </div>
                        <div class="flex flex-1 items-center justify-center">                            
                            <p>
                                La tecnología y los datos ha sido algo que me ha apasionado desde muy joven, el aprender a programar me abrió muchas puertas y la ciencia de datos ha sido ese horizonte al que me he encaminado desde aquel entonces. La necesidad de seguir aprendiendo me ha llevado a hacer múltiples cursos, ver videos, leer artículos, etc. Hasta que un día un familiar me compartió la convocatoria para hacer parte de DS4A, tengo que ser honesto, me inscribí sin saber exactamente con que me enfrentaría. 
                                <br>
                                <br>
                                Poco después de mi inscripción comencé a leer sobre el programa ya que esta oferta era la sexta versión (sexto cohorte) y tengo que ser sincero, la moral se me bajó un poco, pues en anteriores entregas solo contaban con entre 200 y 600 cupos entre más de 6.000 aplicantes. 
                            </p>
                        </div>

                    </div>

                    <!-- 3 -->
                    <br>
                    <div class="px-3 md:px-0 my-5 md:mx-0">
                        <h1 class="text-2xl font-bold text-left">El proceso inicial…</h1>
                    </div>
                    
                    <div class="flex flex-col md:flex-row px-5 md:px-0">
                        
                        <div class="flex flex-1 items-center justify-center">                            
                            <p>
                                <strong>
                                    
                                    El proceso es el siguiente, uno se inscribe llenando un formulario donde expones el perfil que tienes; estudiante, profesional, si sabes hablar ingles (importante ya que el programa principalmente se desarrolla en este idioma), si has programado antes, que experiencia tienes entre otras variables, con esto, es cómo te evalúan y deciden si quedas entre una lista de candidatos habilitados para presentar una prueba técnica. 
                                </strong> 
                                <br>
                                <br>
                                La prueba técnica consta de tres tipos de preguntas, la primera y más importante, ya que cuenta con la mayor cantidad de preguntas relacionadas, es sobre estadística, probabilidades, conceptos como la varianza, operaciones entre probabilidades, combinaciones, etc. Notas que el fuerte de la prueba es ese por el énfasis que hacen a la hora de preguntar, los otros dos tipos de preguntas, son las relacionadas a la programación, es decir, que resultado podrías tener después de ejecutar <strong> X </strong> codigo o como con python (que por cierto, es el lenguaje principal sobre el que se desarrolla el curso) resolvemos <strong>Y</strong> problema y SQL, aca preguntan resultados de algún query o que selecciones entre varias opciones el query que serviría en <strong>Z</strong> caso. No recuerdo muy bien cuantas preguntas eran, diría que alrededor de unas 10 o 15 y te dan cerca de una hora agendada previamente para resolver el test. 
                                <br>
                                <br>
                                En este punto me gustaría compartir una noción personal respecto a como la prueba evalúa tus conocimientos en programación, ya que de entrada, lo considero bastante laxo y no le dan el peso que en verdad tiene a la hora de desarrollar el programa. <b><i>Debes saber programar en python</i></b> o al menos algún otro lenguaje porque teniendo ese conocimiento, el aprender python no será tan complicado y digo “debes” porque el programa es sobre ciencia de datos, técnicas, conceptos, pasos que se deben tener en cuenta pero no es sobre programar. Por supuesto, si fuiste seleccionado y estás a pocos minutos de iniciar tu primera clase y estás leyendo esto por primera vez, <b><i>no te preocupes</i></b>, no estás solo, creeme que estas en una comunidad que te apoyará en tu proceso de aprendizaje en todas las áreas que necesites. Sin embargo, el no tener conocimientos sobre algún lenguaje de programación es una barrera que tenemos todos nosotros la primera vez y quienes la enfrentan durante el programa considero resultó dos veces más duro y los encargados del programa se dieron cuenta de esto y habilitaron un módulo donde te enseñan a programar en python con lo básico que debes saber, esto no significó que el programa se ampliará, tu debías seguir tus clases normales y aprender a programar al mismo tiempo.
                                <br>
                                <br>
                                Esto último no es un punto negativo, pero en lo personal, el programa se hace más disfrutable cuando tienes el mínimo de herramientas necesarias, te centras en aprender conceptos nuevos o en afianzar aquellos conocimientos que ya tenías sobre estadística, técnicas de manejo de datos, etc.
                            </p>
                        </div>
                        <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                            <img class="" src="https://i.imgur.com/3KiLITH.jpg">
                        </div>
                        
                    </div>


                    <!-- 4 -->
                    <br>
                    <div class="px-3 md:px-0 my-5 md:mx-0">
                        <h1 class="text-2xl font-bold text-left">El contenido…</h1>
                    </div>
                    
                    <div class="flex flex-col md:flex-row px-5 md:px-0">
                        
                        <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                            <img class="" src="https://i.imgur.com/3KiLITH.jpg">
                        </div>
                        <div class="flex flex-1 items-center justify-center">                            
                            <p>
                                El contenido del programa es brutal. Nada que decir, en lo personal me encantó. Entre los temas que ofrecen están: análisis exploratorio de datos, plataformas cloud, web scraping, data wrangling, feature engineering, SQL, dash (librería para python de plotly), procesamiento de texto, computación en la nube, regresión lineal, modelos clásicos de machine learning, deep learning, aprendizaje reforzado, redes neuronales convolucionales, sistemas de recomendación, entre muchos otros. 
                                <br>
                                <br>
                                El objetivo de estos temas es acercarte a conceptos que has tratado de manera muy superflua o que directamente no conocías, esto último lo quería compartir dado a que para algunas personas que ya manejan ciertas técnicas o conceptos relacionados a la estadística, les puede llegar a parecer un poco básico. En lo personal, considero que el material desarrollado es suficiente para que tu comiences a participar en proyectos de ciencia de datos y de ahí aprender de una forma mucho más avanzada, esto <b><i>no quiere decir que sea un programa introductorio</i></b>, si bien el programa contempla un desarrollo casi completo de los temas planteados, si es necesario un conocimiento de base, al menos saber que existen dichos temas. 
                            </p>
                        </div>

                    </div>
                    

                    <!-- 5 -->
                    <br>
                    <div class="px-3 md:px-0 my-5 md:mx-0">
                        <h1 class="text-2xl font-bold text-left">El desarrollo…</h1>
                    </div>
                    
                    <div class="flex flex-col md:flex-row px-5 md:px-0">
                        
                        <div class="flex flex-1 items-center justify-center">                            
                            <p>
                                Respecto a las clases, en este cohorte 6, el horario era el siguiente: entre semana martes, miércoles y jueves de 7 pm a 10 pm y los sábados de 8 am a 6 pm (con un poco más de una hora para almorzar al mediodía), el horario es excelente para aquellas personas que trabajan y digo esto porque tengo entendido que antes no era así, por lo que es un punto a resaltar por mi parte, ahora, las clases entre semana eran, la primera hora se daba un caso de forma analitica, es decir, se explicaban los conceptos que se estaban usando, se exploraba la teoría y después de un pequeño, receso se retoma el tema pero ahora desde el código, entonces, en la primera parte de las sesiones te daban un qué, un por qué, y en la segunda parte se exploraba un cómo. Los sábados, en la mañana se daban casos como los que se reciben durante la semana en espacios de 2 horas y en las tardes, usualmente, te dan un espacio para reunirte con tu equipo de trabajo para trabajar en el proyecto final y después de eso, una clase sobre temas extras, que podían ser para afianzar temas vistos en la semana o para exponer herramientas que nos serían útiles en el mundo de la ciencia de datos. 
                                <br>
                                <br>
                                Como lo mencione anteriormente nos asignan a equipos de trabajo, esta asignación se hace con base en los conocimientos de cada individuo esto con el fin de que cada equipo cuente con las habilidades necesarias para realizar un trabajo final, este trabajo final también te es asignado pues DS4A no solo convoca a personas para ser formadas sino que también llama a empresas para que expongan sus necesidades y los requerimientos basados en analitica que ellos creen necesarios para poder suplir esas necesidades en sus empresas, esto me parece bastante acertado por parte del programa porque expone a sus participantes a problemas de la vida real, con datos de la vida real y todos los aprendizajes que puede esto traer consigo.
                                <br>
                                <br>
                                Con este equipo no solo trabajaras en un proyecto final sino que también te podrás apoyar para los demás entregables que te exige el programa, los review modules que son talleres cortos que te hacen practicar los temas vistos durante la semana y los extended case (inserte música de terror en esta parte). Los extended case son talleres más largos que directamente ponen a prueba los temas que se han visto tienen un nivel de dificultad alto pero una vez realizados, habrá un poco más de científico de datos en ti.
                            </p>
                        </div>
                        <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                            <img class="" src="https://i.imgur.com/3KiLITH.jpg">
                        </div>

                    </div>

                    <!-- 6 -->
                    <br>
                    <div class="px-3 md:px-0 my-5 md:mx-0">
                        <h1 class="text-2xl font-bold text-left">Muy bonito y todo pero…</h1>
                    </div>
                    
                    <div class="flex flex-col md:flex-row px-5 md:px-0">
                        
                        <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                            <img class="" src="https://i.imgur.com/3KiLITH.jpg">
                        </div>
                        <div class="flex flex-1 items-center justify-center">                            
                            <p>
                                viendo como se desarrolla más o menos el programa y el gran contenido que maneja te podrás imaginar como es la gestión del tiempo, y no se si ponerlo como un punto a mejorar por parte del programa o directamente son conscientes y así lo quieran manejar y es que si tu no entiendes del todo un tema o faltas un día por <b>X</b> o <b>Y</b> razón, el programa no te da espera, lo cual tiene todo el sentido, sin embargo, tampoco te da el espacio para ponerte al corriente o de repasar si quedaste con unos vacíos. 
                                <br>
                                <br>
                                En cada sesión se expone un tema nuevo y los sábados podrían llegar a ser hasta tres, si te atrasas en un tema, te puede llegar a ser un poco complicado ponerte al corriente porque al dia siguiente hay otra sesión, es decir un tema nuevo, no solo eso, tienes review modules por hacer, tienes que trabajar en el extended, tienes que trabajar en el proyecto final, tienes que dormir, otros tienen que trabajar, otros tienen compromisos, a lo que voy, es que puedes llegar a un punto en que pierdes el hilo narrativo del tema y te sientes completamente perdido, eso me paso casi en las últimas dos semanas de clases del programa, con el proyecto final, con los extended a parte de mi vida laboral y personal no podía seguir el ritmo a todo ¿qué decidí hacer?, enfocarme en el proyecto final y los entregables, guardar todas las grabaciones de las clases (porque todas las clases son grabadas para que se puedan ver posteriormente como repaso) y todo el material que nos daban como notebooks, bases de datos para posteriormente, una vez finalizado el programa, estudiarlo de forma autónoma.
                                <br>
                                <br>
                                No quiero decir que los TAs (los asistentes de los profesores) o los demás compañeros no te ayuden, todo lo contrario, los TAs nos motivaban y ayudaban en lo posible cada vez que podían y era casi seguro que si preguntabas en el foro o directamente en el slack alguien muy amablemente te iba a ayudar, sino que este tema es más de cómo gestiones tu el tiempo y de a qué ritmo estés acostumbrado a trabajar.
                            </p>
                        </div>

                    </div>

                    <!-- 7 -->
                    <br>
                    <div class="px-3 md:px-0 my-5 md:mx-0">
                        <h1 class="text-2xl font-bold text-left">Muchas herramientas…</h1>
                    </div>
                    
                    <div class="flex flex-col md:flex-row px-5 md:px-0">
                        
                        <div class="flex flex-1 items-center justify-center">                            
                            <p>
                                Algo sorprendente y que debo aplaudir a correlation one, son las herramientas y los materiales que nos brindaron. La infraestructura detrás de este cohorte fue colosal, pues brindaron a cada uno de los participantes de una instancia virtual en la cual podías contar con todos los recursos necesarios para seguir las clases y realizar los entregables, esto indirectamente fortalecía otras habilidades que no era el core del programa, como el tema de redes, el manejo de instancias en la nube, manejo de la terminal, etc. Esto no existía en cohortes anteriores al menos no a esta escala, pues estamos hablando de más de 1800 participantes y el mensaje que dieron para mi fue claro, <b>cualquier persona sin importar los recursos puede hacer parte del programa DS4A.</b> 
                            </p>
                        </div>
                        <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                            <img class="" src="https://i.imgur.com/3KiLITH.jpg">
                        </div>
                        
                    </div>


                    <!-- 8 -->
                    <br>
                    <div class="px-3 md:px-0 my-5 md:mx-0">
                        <h1 class="text-2xl font-bold text-left">La comunidad…</h1>
                    </div>
                    
                    <div class="flex flex-col md:flex-row px-5 md:px-0">
                        
                        <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                            <img class="" src="https://i.imgur.com/3KiLITH.jpg">
                        </div>                       
                        <div class="flex flex-1 items-center justify-center">                            
                            <p>
                                El desarrollo del programa, el asignarnos a grupos de trabajo, el abrir canales en Slack, todo esto te hace interactuar con distintas personas de distintas partes de colombia que comparten el amor por los datos, los modelos predictivos y este tipo de temas. Si alguien exponía alguna duda o algún problema alguien ayudaba explicandote o entregándote el como solucionarlo, si no era otro participante del programa, directamente era un TA, es que cuentas con el apoyo de cientos de personas y que lo harán de la mejor manera posible. 
                            </p>
                        </div>
                    
                    </div>


                    <!-- 9 -->
                    <br>
                    <div class="px-3 md:px-0 my-5 md:mx-0">
                        <h1 class="text-2xl font-bold text-left">Al final…</h1>
                    </div>
                    
                    <div class="flex flex-col md:flex-row px-5 md:px-0">
                        
                        <div class="flex flex-1 items-center justify-center">                            
                            <p>
                                Debo resumir mi experiencia en DS4A como una de las más positivas en mi camino para ser científico de datos, desde el haber sido seleccionado hasta la entrega del proyecto final, no es una oportunidad que se encuentre fácilmente y que brinde tanto el conocimiento como la experiencia. Definitivamente es un reto donde tendrás la oportunidad de ponerte aprueba con problemas de la vida real y ser instruido con personas que se enfrentan a dichos problemas a diario, rodearte de personas que cumples tu misma pasión por los datos y hasta grupos de trabajo con los que podrás para tus futuros proyectos como científico de datos. 
                            </p>
                        </div>
                        <div class="flex flex-1 items-center justify-center my-6 md:my-0 m-0 md:m-5">
                            <img class="" src="https://i.imgur.com/3KiLITH.jpg">
                        </div>                       
                    
                    </div>

                </div>
                
    </section>` })}`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/blog/ds4a.astro");

const $$file$1 = "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/blog/ds4a.astro";
const $$url$1 = "/blog/ds4a";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Ds4A,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="grid place-content-center h-screen">
        <div class="flex flex-col text-center items-center">
            <div class="py-10">
                <h1 class="text-2xl md:text-6xl mb-2 md:mb-5">Esta pagina aun no esta disponible!</h1>
                <h4 class="text-lg md:text-3xl px-10 md:px-0 text-zinc-500 italic">Estamos trabando para solucionarlo lo antes posible</h4>
            </div>
            <img src="/ajuste.png" class="w-72 animate-spin delay-700">
        </div>
    </div>` })}`;
}, "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/404.astro");

const $$file = "/home/user/Escritorio/Ecadem/Repos/EcedemPag/ecademPag/src/pages/404.astro";
const $$url = "/404";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d };
