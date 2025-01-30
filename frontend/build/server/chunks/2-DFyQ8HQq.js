import { g as goto } from './client-BR749xJD.js';
import './exports-kR70XCWV.js';

const actions = {
  default: async ({ request }) => {
    console.log("in");
    const formData = await request.formData();
    const name = formData.get("input-name");
    const mail = formData.get("input-mail");
    let data = {
      name,
      email: mail
    };
    try {
      await fetch("https://localhost:5000/login", {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: JSON.stringify(data)
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
    goto();
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BBZFpqrC.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.B5seeMNr.js","_app/immutable/chunks/BmHilmG4.js","_app/immutable/chunks/D79k6fx8.js"];
const stylesheets = ["_app/immutable/assets/2.BuqScue5.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-DFyQ8HQq.js.map
