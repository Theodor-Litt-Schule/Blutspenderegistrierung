import { c as create_ssr_component } from './ssr-JzQE4fSt.js';

const css = {
  code: ".btn-style1.svelte-olhnel.svelte-olhnel{border:none;text-align:center;color:white;background-color:#9a1d1d;border:4px solid #9a1d1d;padding:20px;border-radius:5px;text-decoration:none;font-weight:bold;font-size:large;transition:background-color 0.5s ease;cursor:pointer}.btn-style1.svelte-olhnel.svelte-olhnel:hover{background-color:white;color:#9a1d1d}.box.svelte-olhnel.svelte-olhnel{width:80%;height:100%;padding:50px;padding-bottom:10px;display:flex;flex-direction:column;justify-content:center}.box.svelte-olhnel .login-form.svelte-olhnel{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;justify-content:space-between;text-align:center}hr.svelte-olhnel.svelte-olhnel{margin-top:-10%;width:110%;margin-left:-5%;background-color:#D97E7E;height:2.5px;border:none}a.svelte-olhnel.svelte-olhnel{color:#9a1d1d;font-weight:bold}.iserv-logo.svelte-olhnel.svelte-olhnel{margin:0 10% 0 10%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ns18xh_START -->${$$result.title = `<title>Blutspende | Login</title>`, ""}<!-- HEAD_svelte-1ns18xh_END -->`, ""}  <div class="box svelte-olhnel" data-svelte-h="svelte-1g4mt7h"><form class="login-form svelte-olhnel"><h1>Anmeldung</h1> <img alt="IServ-Logo" class="iserv-logo svelte-olhnel" src="img/ISERV.svg"> <a class="btn-style1 svelte-olhnel" href="https://blutspenden.novacodes.eu/api/iservlogin">Daten über IServ importieren</a> <br> <hr class="svelte-olhnel"> <p>Mit dem Fortfahren des Registrierungsprozesses stimmen Sie zu, dass wir Ihre Daten bis zu dem Spendetermin
			speichern.</p> <a href="http://wp.tls-gi.de/impressum/" class="svelte-olhnel">Impressum</a></form></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BBZFpqrC.js.map
