const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/Blood-LeftBottom.svg","img/Blood-RightTop.svg","img/ISERV.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CvvCRys_.js","app":"_app/immutable/entry/app.6v3gJpfS.js","imports":["_app/immutable/entry/start.CvvCRys_.js","_app/immutable/chunks/BYP3CGfV.js","_app/immutable/chunks/BmHilmG4.js","_app/immutable/entry/app.6v3gJpfS.js","_app/immutable/chunks/BmHilmG4.js","_app/immutable/chunks/D79k6fx8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-1MhWAVL7.js')),
			__memo(() => import('./chunks/1-CvJEyScX.js')),
			__memo(() => import('./chunks/2-DFyQ8HQq.js')),
			__memo(() => import('./chunks/3-CAnRBhaa.js')),
			__memo(() => import('./chunks/4-CNotO4ir.js')),
			__memo(() => import('./chunks/5-CQVCpMQh.js')),
			__memo(() => import('./chunks/6-BB40pAwq.js')),
			__memo(() => import('./chunks/7-DntYoZO2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/appointments",
				pattern: /^\/appointments\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/appointments/[time]",
				pattern: /^\/appointments\/([^/]+?)\/?$/,
				params: [{"name":"time","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/processing",
				pattern: /^\/processing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/questions",
				pattern: /^\/questions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/success",
				pattern: /^\/success\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
