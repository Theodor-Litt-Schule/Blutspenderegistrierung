import { c as create_ssr_component } from './ssr-JzQE4fSt.js';
import './client-BR749xJD.js';
import { e as escape } from './escape-CEcUr6mr.js';
import './exports-kR70XCWV.js';

const css = {
  code: ".content.svelte-1bpq4o5.svelte-1bpq4o5{height:100%;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.content.svelte-1bpq4o5 p.svelte-1bpq4o5{text-align:center}.content.svelte-1bpq4o5 .buchungBestaetigen.svelte-1bpq4o5{user-select:none;border:4px solid #375915;width:250px;height:75px;font-size:large;border-radius:10px;font-weight:bold;background-color:#94BF36;color:#375915}.content.svelte-1bpq4o5 img.svelte-1bpq4o5{width:200px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let time;
  let freeSlots;
  $$result.css.add(css);
  return `<div class="content svelte-1bpq4o5"><h2 data-svelte-h="svelte-13fbmxd">Buchung Bestätigen</h2> <p class="svelte-1bpq4o5">Sind sie sicher das sie den Termin um <b>${escape(time)}Uhr</b> buchen möchten? <br> <br> Aktuell sind noch <b>${escape(freeSlots)} Plätze</b> frei.</p> <button class="buchungBestaetigen svelte-1bpq4o5" data-svelte-h="svelte-104ng4t">Termin Buchen</button> <img src="../../favicon.png" alt="Bluttropfen mit Checkliste" class="svelte-1bpq4o5"> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BwXc0WZW.js.map
