import { c as create_ssr_component, e as each } from './ssr-JzQE4fSt.js';
import './client-BR749xJD.js';
import { e as escape } from './escape-CEcUr6mr.js';
import './exports-kR70XCWV.js';

const css = {
  code: ".appointments.svelte-1x2fdta.svelte-1x2fdta{display:grid;grid-template-columns:auto auto auto;gap:15px;flex-direction:column;align-items:center;color:#9a1d1d;border-radius:25px}.appointment.svelte-1x2fdta.svelte-1x2fdta{text-decoration:none;border:4px solid;border-radius:10px;color:white;padding:13px 23px;font-size:medium;font-weight:bold;transition:background-color 0.5s ease;cursor:pointer}.freiePlaetze0.svelte-1x2fdta.svelte-1x2fdta{text-decoration:line-through;background-color:#595959;border-color:#595959;color:white;cursor:auto}.freiePlaetze1.svelte-1x2fdta.svelte-1x2fdta{background-color:#9a1d1d;border-color:#9a1d1d}.freiePlaetze1.svelte-1x2fdta.svelte-1x2fdta:hover{border-color:#590202}.freiePlaetze2.svelte-1x2fdta.svelte-1x2fdta,.freiePlaetze3.svelte-1x2fdta.svelte-1x2fdta{background-color:#F28705;border-color:#F28705}.freiePlaetze2.svelte-1x2fdta.svelte-1x2fdta:hover,.freiePlaetze3.svelte-1x2fdta.svelte-1x2fdta:hover{border-color:#BF5B04}.freiePlaetze4.svelte-1x2fdta.svelte-1x2fdta{background-color:#375915;border-color:#375915}.freiePlaetze4.svelte-1x2fdta.svelte-1x2fdta:hover{border-color:#142601}.legend.svelte-1x2fdta.svelte-1x2fdta{margin-top:25px;display:grid;grid-template-columns:auto auto;gap:15px}.legend.svelte-1x2fdta p.svelte-1x2fdta{margin:0;padding:0}.legend.svelte-1x2fdta .dot.svelte-1x2fdta{padding:10px 25px;display:inline-block;color:white;border-radius:10px}.legend.svelte-1x2fdta .dot-grey.svelte-1x2fdta{background-color:#595959}.legend.svelte-1x2fdta .dot-red.svelte-1x2fdta{background-color:#9a1d1d}.legend.svelte-1x2fdta .dot-orange.svelte-1x2fdta{background-color:#F28705}.legend.svelte-1x2fdta .dot-green.svelte-1x2fdta{background-color:#375915}.date.svelte-1x2fdta.svelte-1x2fdta{margin-top:-5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots$1) => {
  let slots = [];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1yxayeg_START -->${$$result.title = `<title>Blutspende | Termine</title>`, ""}<!-- HEAD_svelte-1yxayeg_END -->`, ""}  <h2 data-svelte-h="svelte-g1gjq9">Bitte wählen Sie einen Termin</h2> <h3 class="date svelte-1x2fdta">Datum: ${escape(slots[0])}</h3> <div class="appointments svelte-1x2fdta">${each(slots.slice(1, -1), (slot) => {
    return `${slot[1] === 0 ? `<button disabled class="${"freiePlaetze" + escape(slot[1], true) + " appointment svelte-1x2fdta"}">${escape(slot[0])}</button>` : `<button class="${"freiePlaetze" + escape(slot[1], true) + " appointment svelte-1x2fdta"}">${escape(slot[0])}</button>`}`;
  })}</div> <div class="legend svelte-1x2fdta" data-svelte-h="svelte-1jrhhu7"><p class="dot dot-grey svelte-1x2fdta">Kein freier Platz</p> <p class="dot dot-red svelte-1x2fdta">1 freier Platz</p> <p class="dot dot-orange svelte-1x2fdta">2-3 freie Plätze</p> <p class="dot dot-green svelte-1x2fdta">4 freie Plätze</p></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-MAXTHsb-.js.map
