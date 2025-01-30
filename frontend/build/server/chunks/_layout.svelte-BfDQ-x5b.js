import { c as create_ssr_component } from './ssr-JzQE4fSt.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");:root{margin:0;padding:0;font-family:"Ubuntu", sans-serif}body.svelte-1rshew.svelte-1rshew{margin:auto;position:fixed;left:0;right:0;top:0;bottom:0;overflow-y:scroll;background-color:#D97E7E;display:flex;justify-content:center;align-items:center}body.svelte-1rshew .Blood-LeftBottom.svelte-1rshew{position:absolute;left:0;bottom:0;user-select:none;-webkit-user-drag:none;-ms-user-select:none;-moz-user-select:none}body.svelte-1rshew main.svelte-1rshew{z-index:10;background-color:white;display:flex;flex-direction:column;align-items:center;color:#9a1d1d;width:375px;height:700px;border-radius:25px}body.svelte-1rshew .Blood-RightTop.svelte-1rshew{position:absolute;right:0;top:0;user-select:none;-webkit-user-drag:none;-ms-user-select:none;-moz-user-select:none}@media(max-width: 768px){body.svelte-1rshew.svelte-1rshew{background-color:white}body.svelte-1rshew main.svelte-1rshew{margin:auto;border-radius:0}.Blood-LeftBottom.svelte-1rshew.svelte-1rshew,.Blood-RightTop.svelte-1rshew.svelte-1rshew{display:none}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1vesbu4_START -->${$$result.title = `<title>Blutspende</title>`, ""}<!-- HEAD_svelte-1vesbu4_END -->`, ""} <body class="svelte-1rshew"><img src="../../img/Blood-LeftBottom.svg" alt="Bloot Left Bottom" class="Blood-LeftBottom svelte-1rshew"> <main class="svelte-1rshew">${slots.default ? slots.default({}) : ``}</main> <img src="../../img/Blood-RightTop.svg" alt="Blood Right Top" class="Blood-RightTop svelte-1rshew"></body>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-BfDQ-x5b.js.map
