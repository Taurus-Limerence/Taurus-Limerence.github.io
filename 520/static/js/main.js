(function(legend) {
	function require(e) {
		return modules[e]
	}

	function define() {
		var e = arguments[0],
			r = arguments[arguments.length - 1];
		if ("function" != typeof r) return void(modules[e] = r);
		var o = {
			exports: {}
		};
		o.exports = r(require, o.exports, o) || o.exports, modules[e] = o.exports
	}
	var modules = {};
	define.amd = define.cmd = !0;
	define("85c8574dafa1cd69fb4e706f6deb30c0", function(e, n, t) {
		$.legendEvent = {}, t.exports = {
			setCookie: function(e, n, t) {
				t = t || {};
				var i = e + "=" + n;
				if (t.domain && (i += "; domain=" + t.domain), t.path && (i += "; path=" + t.path), t.expired) {
					var r = new Date;
					r.setTime(r.getTime() + t.expired), i += "; expires=" + r.toGMTString()
				}
				t.secure && (i += "; secure"), document.cookie = i
			},
			getCookie: function(e) {
				return (e = new RegExp("(^| )" + e + "=([^;]*)(;|$)").exec(document.cookie)) ? e[2] : null
			},
			guid: function() {
				for (var e = "", n = 0; n < 4; n++) e += function() {
					return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
				}();
				return e
			},
			parseQueryString: function(e) {
				for (var n = {}, t = new RegExp("([\\?|&])(.+?)=([^&?]*)", "ig"), i = t.exec(e); i;) n[i[2]] = i[3], i = t.exec(
					e);
				return n
			},
			parseHash: function(e) {
				e = e.replace(/^.*?#/, "");
				var n = {};
				return e.split("&").forEach(function(e) {
					if (e.length > 0 && e.indexOf("=") > -1) {
						var t = e.split("=");
						/\d+/.test(t[1]) && (t[1] = parseInt(t[1], 10)), n[t[0]] = t[1]
					}
				}), n
			},
			extend: function(e, n) {
				for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t])
			},
			makeUrl: function(e, n) {
				return e + "?" + Object.keys(n).map(function(e) {
					return e + "=" + n[e]
				}).join("&")
			},
			getUid: function() {
				var e = this.getCookie("st_uid") || this.getCookie("BAIDUID");
				return null === e && (e = this.guid(), this.setCookie("st_uid", e, {
					domain: window.location.hostname,
					path: "/",
					expired: 63072e6
				})), e
			},
			trigger: $($.legendEvent).trigger.bind($($.legendEvent)),
			on: $($.legendEvent).on.bind($($.legendEvent))
		}
	});
	define("00b2b96ce3c5bd2694604cb13b8427d0", function(e, n, o) {
		function i(e, n) {
			if ("object" == typeof e)
				for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
			else t[e] = n
		}
		var t = {};
		i({
			version: "1.0.0",
			enterTime: +new Date,
			id: legend.id
		}), ["business", "layoutMode", "checkDomain", "publishDomain"].forEach(function(e) {
			legend.hasOwnProperty(e) && (i(e, legend[e]), delete legend[e])
		}), o.exports = t
	});
	define("90f43f31ac25be5c460f4fb98d70070b", function(t, e, r) {
		"use strict";
		return r.exports = function() {
			return function(t, e, r, i) {
				if (!t) return {};
				i = i || 1, r = (r || 325) / i;
				var n = {
					left: t.x * i + "px",
					width: t.width * i + "px",
					height: t.height * i + "px"
				};
				switch (t.coordinate) {
					case "bottom":
						n.bottom = -t.height * i - t.y * i + "px";
						break;
					case "central":
						n.top = (t.y + r) * i + "px";
						break;
					default:
						n.top = t.y * i + "px"
				}
				return n
			}
		}()
	});
	define("730b2f043e6ed2eb93f22e892def2fa0", function(e, a, i) {
		var t = e("00b2b96ce3c5bd2694604cb13b8427d0"),
			o = navigator.userAgent,
			n = document.body.clientWidth || 400,
			d = {
				app: "browser",
				terminal: "phone",
				present: "mobile",
				ratio: n / 400
			},
			r = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			p = r.parseQueryString(window.location.search);
		d.mode = "expand" === p.mode ? "expand" : t.layoutMode, d.list = "single" === p.list ? "single" : "all", d.phone =
			1 === Number(p.phone) ? 1 : 0, d.anim = 0 === Number(p.anim) ? 0 : 1, d.load = 0 === Number(p.load) ? 0 : 1,
			/micromessenger/i.test(o) ? d.app = "weixin" : /lite baiduboxapp/i.test(o) ? d.app = "baiduLite" : /baiduboxapp/i
			.test(o) ? d.app = "baidu" : /tieba/i.test(o) && (d.app = "tieba"), /windows|macintosh/gi.test(o) && (d.terminal =
				"pc", d.present = "pc", d.phone || (d.ratio = 1)), "expand" === d.mode && (d.ratio = 1), ("object" == typeof _global_ ||
				document.querySelector(".sfa-view") && document.querySelector(".sfa-body")) && (d.present = "superframe");
		var s = $(".lg-container");
		s.addClass(d.mode).addClass(d.terminal), 0 === d.anim && s.addClass("no-anim"), i.exports = d
	});
	define("f7943761bde05ecaad007f47587e8df3", function(r, e, o) {
		"use strict";
		return o.exports = function() {
			return function(r, e, o) {
				if (!r) return {};
				o = o || 1;
				var d = {
						width: (r.width || 1) * o + "px",
						height: (r.height || 1) * o + "px"
					},
					t = "",
					a = 0,
					i = 0;
				return r.border && "none" !== r.border && (a = i = -r.borderSize * o, d.borderWidth = r.borderSize * o + "px"),
					"dx" in r && (a += r.dx * o, i += r.dy * o), (a || i) && (t += " translate3d(" + a + "px, " + i + "px, 0)"),
					r.rotate && (t += "rotate(" + r.rotate + "deg)"), d.webkitTransform = d.transform = t, "simple" === e ? d : (
						r.opacity < 1 && (d.opacity = r.opacity), r.background && (d.background = r.background), "ellipse" === r.shape ?
						d.borderRadius = "50%" : "rect" === r.shape && r.borderRadius && (d.borderRadius = r.borderRadius + "px"),
						"none" !== r.border && (d.borderStyle = r.border, d.borderWidth = r.borderSize * o + "px", d.borderColor = r
							.borderColor), "true" === r.shadow && (d.boxShadow = [r.shadowOffsetX + "px", r.shadowOffsetY + "px", r.shadowBlur +
							"px", r.shadowSpread + "px", r.shadowColor
						].join(" ")), d)
			}
		}()
	});
	define("5b0a972c8df02b921306bfeb5ab3e543", function(e, a) {
		function t(e) {
			for (var a in o) void 0 === e[a] && (e[a] = o[a])
		}

		function r(e, a, o, s) {
			var d = this,
				l = this.classes[a.type];
			if (l) {
				var c = a.surface || {};
				t(c);
				var f = document.createElement("div");
				f.className = "lg-trailer";
				var u = document.createElement("div");
				u.className = "lg-surface lg-surface-" + a.type, f.appendChild(u), e.appendChild(f);
				var b = i(c, "none", o.ratio);
				for (var p in b) u.style[p] = b[p];
				var v = n(c, "none", 0, o.ratio);
				for (var p in v) f.style[p] = v[p];
				"gravity" in c && 0 !== c.gravity && (u.classList.add("layer"), u.setAttribute("data-depth", c.gravity)), a.hidden &&
					(f.style.display = "none", f.setAttribute("hidden", 1));
				var h = {
					data: a,
					base: o,
					trailerElement: f,
					surfaceElement: u,
					show: function() {
						h.trailerElement.style.display = "block"
					},
					hide: function() {
						h.trailerElement.style.display = "none"
					}
				};
				h.instance = l.create(u, a.attributes, c.width * o.ratio, c.height * o.ratio, o);
				var y = h.instance.interfaces;
				if (y && y.forEach(function(e) {
						h[e.id] = e.act
					}), s && s(h), "panel" === a.type && a.attributes) {
					var m = u.querySelector(".lg-component-panel"),
						g = [];
					(a.attributes.components || []).forEach(function(e) {
						r.call(d, m, e, o, s)
					}), h.components = g
				}
				return h
			}
		}
		var i = e("f7943761bde05ecaad007f47587e8df3"),
			n = e("90f43f31ac25be5c460f4fb98d70070b"),
			o = (e("730b2f043e6ed2eb93f22e892def2fa0"), {
				coordinate: "top",
				rotate: 0,
				opacity: 1,
				gravity: 0,
				locked: !1,
				visibility: "visible",
				shape: "rect",
				background: "",
				borderRadius: 0,
				border: "none",
				borderSize: 1,
				borderColor: "black",
				fill: "transparent",
				shadow: "false",
				shadowOffsetX: 5,
				shadowOffsetY: 5,
				shadowBlur: 0,
				shadowSpread: 0,
				shadowColor: "black"
			});
		a.createComponent = r
	});
	define("28819c84a07bb88fc83272eb07e7725f", function(e, n, t) {
		var a = e("90f43f31ac25be5c460f4fb98d70070b"),
			i = e("730b2f043e6ed2eb93f22e892def2fa0");
		t.exports = {
			classes: {},
			instances: [],
			init: function() {
				var e = document.querySelector(".lg-container");
				this.centralize(e.clientHeight);
				var n = this;
				this.resizer = function() {
					n.centralize(e.clientHeight)
				}, window.addEventListener("resize", this.resizer, !1)
			},
			createSingleInstance: e("5b0a972c8df02b921306bfeb5ab3e543").createComponent,
			getComponentsByName: function(e) {
				var n = [];
				return this.instances.forEach(function(t) {
					(t.data.name === e || e instanceof RegExp && e.test(t.data.name) || e instanceof Array && e.indexOf(t.data.name) >=
						0) && n.push(t)
				}), n
			},
			add: function(e) {
				this.instances.push(e)
			},
			centralize: function(e) {
				this.instances.forEach(function(n) {
					if ("central" === n.data.surface.coordinate) {
						var t = a(n.data.surface, "none", e / 2, i.ratio);
						for (var r in t) t.hasOwnProperty(r) && (n.trailerElement.style[r] = t[r])
					}
				})
			}
		}
	});
	define("5988e4bd85b0f1f6da6ca28126885c94", function(n, t, i) {
		var e;
		i.exports = {
			init: function(n) {
				e = n
			},
			get: function() {
				return e || {}
			}
		}
	});
	define("35149c7e67b80058e263a93c32bd6945", function(e, t, o) {
		function i(e, t) {
			if (e && (t = t || "info", /^(success|info|error|warning)$/.test(t))) {
				n || (n = $('<div class="lg-toast-container lg-toast-top-center"></div>').appendTo("pc" === s.terminal ?
					".lg-container" : "body"));
				var o = $('<div class="lg-toast lg-toast-' + t + '" style="display: block;"><div class="lg-toast-' + t + '">' +
					e + "</div></div>").appendTo(n);
				setTimeout(function() {
					o.remove()
				}, 3e3)
			}
		}
		var n, s = e("730b2f043e6ed2eb93f22e892def2fa0");
		o.exports = i
	});
	define("1cd7e669399af667140066e9cd051ef1", function(n, a, i) {
		function t(n) {
			if (e(n)) {
				n.animationIndex = n.animationIndex || 0;
				var a = n.data.animations[n.animationIndex],
					i = n.trailerElement;
				if (a && i && "none" !== a.name) {
					i.style["-webkit-animation-duration"] = i.style["animation-duration"] = (a.duration || 1) + "s", i.style[
							"-webkit-animation-delay"] = i.style["animation-delay"] = (a.delay || 0) + .1 + "s", i.style[
							"-webkit-animation-iteration-count"] = i.style["animation-iteration-count"] = a.repeat || 1, i.style[
							"-webkit-animation-direction"] = i.style["animation-direction"] = a.direction || "normal", i.className =
						"lg-trailer";
					var o = n.data.animations.map(function(n) {
							return n.name
						}),
						m = i.classList;
					m.remove.apply(m, o), m.add(a.name, "animated"), $(i).one("webkitAnimationEnd animationend", function() {
						n.animationIndex + 1 < n.data.animations.length && (n.animationIndex++, t(n))
					})
				}
			}
		}

		function e(n) {
			return n.data.animations instanceof Array
		}
		i.exports = {
			render: t,
			hasAnimation: e
		}
	});
	define("8c1294fef69efc4d21b17a2b4c41ec55", function(o, n, i) {
		function e() {
			l(1, 1)
		}

		function r() {
			l(0, 1)
		}

		function l(o, n) {
			if (window.Box && window.Box.os) {
				var i = {
					fullscreen: o,
					disablerefresh: n
				};
				window.Box.os.android ? window.Box.android.invokeApp("Bdbox_android_searchFrame", "config", [JSON.stringify(i)]) :
					window.Box.os.ios && window.Box.ios.invokeApp("searchFrame", {
						action: "config",
						params: JSON.stringify(i),
						minver: "7.5.0.0"
					}, "")
			}
		}

		function d(o) {
			if (window.Box) {
				var n = {
					title: o.title,
					content: o.desc,
					iconUrl: o.imgUrl,
					linkUrl: o.link,
					mediaType: "all"
				};
				window.Box.os.android ? window.Box.android.invokeApp("Bdbox_android_utils", "callShare", [JSON.stringify(n),
					"console.log", "console.log"
				]) : window.Box.os.ios && window.Box.ios.invokeApp("callShare", {
					options: encodeURIComponent(JSON.stringify(n)),
					errorcallback: "console.log",
					successcallback: "console.log"
				})
			}
		}
		i.exports = {
			invokeShare: d,
			enterFullScreen: e,
			exitFullScreen: r
		}
	});
	define("51aa36df4587602735b55872cbd92b40", function(o, i, n) {
		function e() {
			if (window.Box && window.Box.os) {
				var o = {
					fullscreen: 0,
					disablerefresh: 1
				};
				window.Box.os.android ? window.Box.android.invokeLiteApp("Bdbox_android_searchFrame", "config", [JSON.stringify(
					o)]) : window.Box.os.ios && window.Box.ios.invokeLiteApp("searchFrame", {
					action: "config",
					params: JSON.stringify(o),
					minver: "7.5.0.0"
				}, "")
			}
		}

		function r(o) {
			if (window.Box) {
				var i = {
					title: o.title,
					content: o.desc,
					iconUrl: o.imgUrl,
					linkUrl: o.link,
					mediaType: "all"
				};
				window.Box.os.android ? window.Box.android.invokeLiteApp("Bdbox_android_utils", "callShare", [JSON.stringify(i),
					"console.log", "console.log"
				]) : window.Box.os.ios && window.Box.ios.invokeLiteApp("callShare", {
					options: encodeURIComponent(JSON.stringify(i)),
					errorcallback: "console.log",
					successcallback: "console.log"
				})
			}
		}
		n.exports = {
			invokeShare: r,
			exitFullScreen: e
		}
	});
	define("def08931e80984bd9405df8b3fde7408", function(e, n, t) {
		function a(e) {
			var n = "ontouchstart" in document ? "tap" : "click",
				t = $("#default-share");
			t && 0 !== t.length || (t = $('<div id="default-share"><div>').css({
				position: "absolute",
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.5) url(//fex.bdstatic.com/h5static/h5jscss/e988ceb436c96d014e3caee558938493_aaa.png) no-repeat 90% 3%",
				"background-size": "80px",
				left: 0,
				top: 0,
				display: "none",
				"z-index": 10
			}).appendTo($(".lg-container")).on(n, function() {
				t.hide()
			})), t.show()
		}
		t.exports = {
			invokeShare: a
		}
	});
	define("46867b233fb59c5faf9d164c8e873618", function(e, i, r) {
		function t(i) {
			var r = !1,
				t = navigator.userAgent,
				d = t.indexOf("tieba") + 6;
			if (t.substr(d) >= "7.2.0" && (r = !0), r) {
				if (window.TiebaJsBridge && "complete" === window.TiebaJsBridge.readyState) {
					var n = {
						title: i.title,
						desc: i.desc,
						img: i.imgUrl,
						url: i.link
					};
					window.tb.TBHY_COMMON_Share.share(n)
				}
			} else e("def08931e80984bd9405df8b3fde7408").invokeShare(i)
		}
		r.exports = {
			invokeShare: t
		}
	});
	define("8fd64621aa7b9743e0b0fb07b2311078", function(e, f, c) {
		function b(f) {
			switch (f) {
				case "baidu":
					return e("8c1294fef69efc4d21b17a2b4c41ec55");
				case "baiduLite":
					return e("51aa36df4587602735b55872cbd92b40");
				case "tieba":
					return e("46867b233fb59c5faf9d164c8e873618");
				default:
					return e("def08931e80984bd9405df8b3fde7408")
			}
		}
		c.exports = b
	});
	define("8ac31cf8ca7728e20495ca047cafc715", function(e, i, t) {
		var a = e("730b2f043e6ed2eb93f22e892def2fa0"),
			n = e("8fd64621aa7b9743e0b0fb07b2311078")(a.app),
			d = {
				title: "\u6211\u7684H5",
				desc: "\u767e\u5ea6H5\u5e73\u53f0\u652f\u6301",
				imgUrl: "https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/doc/pic/item/ac345982b2b7d0a25e4d29d8cdef76094a369aea.jpg",
				link: window.location.href.split("#")[0]
			};
		t.exports = {
			invoke: function() {
				n.invokeShare(d)
			},
			setShareData: function(e) {
				d.title = e.title || d.title, d.desc = e.desc || d.desc, d.imgUrl = e.imgUrl || d.imgUrl, d.link = e.link || d
					.link
			},
			getShareData: function() {
				return d
			}
		}
	});
	define("106083f047adb7b61b2f80fb8b484022", function(e, a, t) {
		var n = !1,
			c = e("28819c84a07bb88fc83272eb07e7725f"),
			i = e("1cd7e669399af667140066e9cd051ef1"),
			s = (e("00b2b96ce3c5bd2694604cb13b8427d0"), e("35149c7e67b80058e263a93c32bd6945")),
			r = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			d = e("8ac31cf8ca7728e20495ca047cafc715");
		t.exports = {
			create: function(a) {
				var t = a.data,
					n = a.container,
					s = a.stageIndex,
					r = [t.loadingPage, t.backStage, t.frontStage][s + 3] || t.pages[s],
					d = r.attributes || {},
					o = document.createElement("div");
				o.classList.add("lg-backface"), d.background && (o.style.background = d.background), o.style.opacity = Math.min(
					d.backgroundOpacity || 0, 1), n.appendChild(o);
				var f = e("730b2f043e6ed2eb93f22e892def2fa0").ratio,
					b = t.pages.length;
				(r.components || []).forEach(function(e, a) {
					c.createSingleInstance(n, e, {
						pageIndex: s,
						pageCount: b,
						stageType: ["back", "front"][s + 2] || "page",
						stageIndex: s,
						ratio: f
					}, function(e) {
						s < 0 && i.render(e), c.add(e)
					})
				})
			},
			prepare: function(e, a) {
				a = void 0 === a ? 1 : a, c.instances.forEach(function(t) {
					t.base.stageIndex > -1 && Math.abs(t.base.stageIndex - e) === a && (t.animationIndex = 0)
				})
			},
			enter: function(e, a, t) {
				if (!(e < 0)) {
					t = void 0 === t || t;
					var d = r.parseQueryString(window.location.search);
					c.instances.forEach(function(c) {
						if (c.instance.pageChange && c.instance.pageChange(e, a), (c.base.stageIndex < 0 || c.base.stageIndex ===
								e) && c.instance.start && !c.instance.$started && (c.instance.start(), c.instance.$started = !0), c.base
							.stageIndex === e && (!0 === t && void 0 !== c.animationIndex && (c.animationIndex = 0, i.render(c)), !n &&
								["input", "text"].indexOf(c.data.type) >= 0)) {
							if (-1 !== location.hostname.indexOf("baidu.com") || "quick" === d.mode) return;
							s("\u8bf7\u4e0d\u8981\u8f93\u5165\u94f6\u884c\u5361\u53f7\u548c\u4efb\u4f55\u5bc6\u7801!", "warning"), n = !
								0
						}
					})
				}
			},
			clear: function() {},
			setShareInfo: function(e) {
				e.attributes && e.attributes.usePageShare && d.setShareData({
					title: e.attributes.shareTitle,
					desc: e.attributes.shareDescription,
					imgUrl: e.attributes.shareIcon,
					link: e.attributes.shareLink
				})
			}
		}
	});
	define("8c4d03ebd59f9d83f5f66a4919b55cfd", function(e, a, t) {
		function n(e, a, t) {
			var n = document.createElement("div");
			return n.className = "lg-page", g.create({
				data: e,
				container: n,
				stageIndex: t
			}), n
		}

		function r(a, t) {
			var r = [],
				c = e("5988e4bd85b0f1f6da6ca28126885c94"),
				g = c.get();
			g.backStage && (r[-2] = n(g, g.backStage, -2)), g.frontStage && (r[-1] = n(g, g.frontStage, -1));
			var o = g.pages;
			return "single" === a && (o = [], o[t] = g.pages[t]), o.forEach(function(e, a) {
				r[a] = n(g, e, a)
			}), r
		}

		function c(e) {
			var a = e[-2],
				t = e[-1];
			a && document.querySelector(".lg-back-stage").appendChild(a), t && document.querySelector(".lg-front-stage").appendChild(
				t)
		}
		var g = e("106083f047adb7b61b2f80fb8b484022");
		t.exports = {
			createAllPageElements: r,
			buildFrontAndBackStage: c
		}
	});
	define("df8aeaf2d6788adab98e713cb0a10819", function(e, t, n) {
		var r, o = e("5988e4bd85b0f1f6da6ca28126885c94"),
			i = e("106083f047adb7b61b2f80fb8b484022"),
			a = e("8c4d03ebd59f9d83f5f66a4919b55cfd"),
			c = e("730b2f043e6ed2eb93f22e892def2fa0"),
			l = e("28819c84a07bb88fc83272eb07e7725f"),
			s = e("1cd7e669399af667140066e9cd051ef1"),
			d = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			h = (document.querySelector(".lg-container"), document.querySelector(".lg-page-container"));
		n.exports = {
			build: function(e) {
				var t = o.get();
				a.buildFrontAndBackStage(e), r = (t.pages[0].attributes.pageHeight ? t.pages[0].attributes.pageHeight : 650) *
					c.ratio;
				var n = document.createElement("div");
				n.className = "lg-page", n.style.height = r + "px", n.appendChild(e[0]), h.appendChild(n), i.prepare(0, 0), i.enter(
					0, t.pages.length, !1), i.setShareInfo(t.pages[0]), this.resetHeight(t)
			},
			getScreenHeight: function() {
				return this.scrollContainer === window ? document.body.clientHeight : this.scrollContainer.clientHeight
			},
			getScrollTop: function() {
				return this.scrollContainer === window ? document.body.scrollTop : this.scrollContainer.scrollTop
			},
			runAnimation: function(e) {
				var t = this;
				l.instances.forEach(function(n) {
					if (!n.playedOnceInStrip) {
						var o = t.getScreenHeight(),
							i = Math.max(e + .5 * o, o);
						(n.data.surface.y * c.ratio < i || r <= o + e) && (s.render(n), n.playedOnceInStrip = !0)
					}
				})
			},
			resetHeight: function(e) {
				function t(e) {
					var t = Math.round((o + e) / r * 100);
					t <= i || (t = Math.min(100, t), i = t, d.trigger("scrollReach", t))
				}
				e.pages[0];
				h.firstChild.style.height = r + "px";
				var n, o = this.getScreenHeight(),
					i = -1;
				t(0);
				var a = this;
				a.runAnimation(0), this.scroller = function(e) {
					var r = a.getScrollTop();
					a.runAnimation(r), clearTimeout(n), n = setTimeout(function() {
						t(r)
					}, 600)
				}, a.scrollContainer.addEventListener("scroll", this.scroller, !1)
			},
			scrollTo: function(e) {
				var t = /^(\d+)px$/,
					n = /^(\d+)%$/;
				e = e.replace(/\s/g, "");
				var o, i;
				if (t.test(e)) i = e.match(t), 2 === i.length ? o = parseInt(i[1], 10) : console.warn(
					"\u4f60\u586b\u5199\u7684\u6eda\u52a8\u4f4d\u7f6e\u683c\u5f0f\u4e0d\u5bf9\uff0c\u683c\u5f0f\u5982\uff1a1200px."
				);
				else {
					if (!n.test(e)) return console.warn(
						"\u4f60\u586b\u5199\u7684\u6eda\u52a8\u4f4d\u7f6e\u683c\u5f0f\u4e0d\u5bf9\uff0c\u683c\u5f0f\u5982\uff1a1200px \u6216\u8005 50%."
					);
					i = e.match(n), 2 === i.length ? o = Math.round(parseInt(i[1], 10) * r / 100) : console.warn(
						"\u4f60\u586b\u5199\u7684\u6eda\u52a8\u4f4d\u7f6e\u683c\u5f0f\u4e0d\u5bf9\uff0c\u683c\u5f0f\u5982\uff1a50%."
					)
				}
				var a = this.scrollContainer === window ? document.body : this.scrollContainer;
				try {
					a.scrollTop = o
				} catch (e) {
					console.warn(e)
				}
			},
			destroy: function() {
				this.scrollContainer.removeEventListener("scroll", this.scroller, !1)
			}
		}
	});
	define("c6268a38b4d0819e37b9ae97ec9c9fd9", function(e, t, i) {
		function a(e) {
			e.target && /^(input|textarea|a|select)$/i.test(e.target.tagName) || e.target && /keep-default/g.test(e.target.className) ||
				e.preventDefault()
		}
		var n = e("5988e4bd85b0f1f6da6ca28126885c94"),
			r = e("106083f047adb7b61b2f80fb8b484022"),
			s = e("730b2f043e6ed2eb93f22e892def2fa0"),
			o = e("8c4d03ebd59f9d83f5f66a4919b55cfd"),
			p = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			g = {
				prev: 1,
				next: -1,
				all: 0
			};
		i.exports = {
			build: function(e, t) {
				var i = n.get();
				o.buildFrontAndBackStage(e);
				var d = [];
				i.pages.forEach(function(t, i) {
					var a = t.attributes || {},
						n = e[i];
					n && d.push({
						content: n,
						transition: {
							name: a.swipeEffect || "slide",
							duration: void 0 === a.swipeDuration ? 800 : 1e3 * a.swipeDuration,
							direction: g[a.swipeForbidden]
						}
					})
				});
				var c = i.attributes,
					f = new window.Swiper({
						container: document.querySelector(".lg-page-container"),
						isVertical: "horizontal" !== c.swipeDirection,
						data: d,
						initIndex: "single" === s.list ? 0 : t,
						isLoop: c.loop,
						keepDefaultClasses: ["keep-default"]
					});
				f.on("activePageChanged", function(e) {
					var t = f.currentPage.index,
						a = f.activePage.index;
					r.prepare(a, 0), r.enter(a, i.pages.length), p.trigger("pageChangeStart", t + "_" + i.pages.length)
				}), f.on("swipeChanged", function() {
					setTimeout(function() {
						var e = f.currentPage.index;
						r.setShareInfo(i.pages[e]), p.trigger("pageChangeEnd", e + "_" + i.pages.length), p.trigger("pageReach",
							e + 1 + "_" + i.pages.length)
					}, 0)
				}), r.prepare(t, 0), r.enter(t, i.pages.length), r.setShareInfo(i.pages[t]), p.trigger("pageReach", t + 1 +
					"_" + i.pages.length);
				var u = document.querySelector(".lg-container");
				u.addEventListener("touchstart", a, !1), u.addEventListener("touchmove", a, !1), this.swiper = f
			},
			gotoPage: function(e, t) {
				if (this.swiper) switch (e) {
					case "next":
						this.swiper.swipeNext(t);
						break;
					case "prev":
						this.swiper.swipePrev(t);
						break;
					default:
						r.prepare(e, 0), this.swiper.swipeTo(e, t)
				}
			},
			getSwipeForbidDirection: function() {
				if (!this.swiper) return "none";
				var e = this.swiper.getCurrentIndex(),
					t = n.get(),
					i = t.pages[e].attributes;
				return i && i.swipeForbidden ? i.swipeForbidden : "none"
			},
			onresize: function() {
				this.swiper.reinit()
			},
			destroy: function() {
				this.swiper.destroy()
			}
		}
	});
	define("c00ecf28b793a7b3ab75e1e273e54fb9", function(o, a, e) {
		o("5988e4bd85b0f1f6da6ca28126885c94"), o("106083f047adb7b61b2f80fb8b484022"), o("730b2f043e6ed2eb93f22e892def2fa0"),
			o("85c8574dafa1cd69fb4e706f6deb30c0");
		e.exports = {
			build: function(o, a) {
				var e = $("<div></div>").css({
					"padding-top": "5px",
					"padding-bottom": "30px"
				});
				o.forEach(function(o) {
					var a = $(o.outerHTML).css({
						margin: "10px",
						width: "400px",
						height: "650px",
						"background-color": "#FFF",
						display: "inline-block",
						float: "left",
						zoom: "0.6"
					})[0];
					e.append(a)
				}), $(".lg-container").append(e).css({
					"background-color": "rgba(0,0,0,.5)",
					overflow: "auto"
				}).find(".lg-back-stage, .lg-page-container, .lg-front-stage, .lg-loading-page").hide(), $("html, body").css({
					height: "100%",
					overflow: "auto"
				})
			},
			destroy: function() {}
		}
	});
	define("0f8310c1b66ce9e70848c86aecf55a81", function(e, b, a) {
		e("730b2f043e6ed2eb93f22e892def2fa0"), e("00b2b96ce3c5bd2694604cb13b8427d0");
		a.exports = function(b, a) {
			var c = {
					strip: e("df8aeaf2d6788adab98e713cb0a10819"),
					multi: e("c6268a38b4d0819e37b9ae97ec9c9fd9"),
					expand: e("c00ecf28b793a7b3ab75e1e273e54fb9")
				},
				f = c[b];
			return a && "strip" === b && (f.scrollContainer = a.scrollContainer), f
		}
	});
	define("8ec6759846efd95d2988d3e4715ec13f", function(e, a, t) {
		function i(e) {
			var a, t = {},
				i = [];
			u.instances.forEach(function(a) {
				a.instance.getValue && (e ? a.data.name === e && i.push(a) : i.push(a))
			});
			var f = 0;
			if (i.forEach(function(e) {
					if (!a && e.instance.getValue) {
						var i = e.instance.getValue();
						if ("true" === e.data.attributes.required && !i) return void(a = e);
						var n = e.data.attributes.id || f++;
						t[n] ? t[n] = {
							t: e.data.attributes.name,
							v: t[n].v + "," + i
						} : t[n] = {
							t: e.data.attributes.name,
							v: i
						}
					}
				}), a) {
				n && clearTimeout(n);
				var b = a.surfaceElement.style;
				return b["-webkit-animation-duration"] = b["animation-duration"] = "0.5s", b["-webkit-animation-name"] = b[
					"animation-name"] = "shake", n = setTimeout(function() {
					n = null, b["-webkit-animation-duration"] = b["animation-duration"] = "", b["-webkit-animation-name"] = b[
						"animation-name"] = ""
				}, 510), void o("\u5b58\u5728\u5fc5\u586b\u9879.", "error")
			}
			if (Object.keys(t).length <= 0) return void o("\u6ca1\u6709\u5185\u5bb9.", "error");
			var m = c.getUid();
			return t = JSON.stringify(t), r === t ? void o("\u5df2\u7ecf\u63d0\u4ea4.", "info") : t.length > 1e3 ? void o(
				"\u63d0\u4ea4\u7684\u5185\u5bb9\u8d85\u8fc7\u4e86\u4e00\u5343\u5b57\u7b26\uff0c\u65e0\u6cd5\u63d0\u4ea4.",
				"warning") : void $.ajax({
				type: "POST",
				url: "//h5.baidu.com/runtime/api/form",
				data: {
					legendId: d.id,
					fields: t,
					page: s.swiper ? s.swiper.getCurrentIndex() : 0,
					user: m
				},
				success: function() {
					r = t, o("\u63d0\u4ea4\u6210\u529f.", "success"), c.trigger("form", t)
				},
				error: function() {
					o("\u63d0\u4ea4\u5931\u8d25.", "error")
				}
			})
		}
		var n, r, o = e("35149c7e67b80058e263a93c32bd6945"),
			u = e("28819c84a07bb88fc83272eb07e7725f"),
			c = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			d = e("00b2b96ce3c5bd2694604cb13b8427d0"),
			s = e("0f8310c1b66ce9e70848c86aecf55a81")(d.layoutMode);
		t.exports = {
			submit: i
		}
	});
	define("42c3b09b87b3081ca84c49e976349270", function(e, n, t) {
		function a() {
			b = e("0f8310c1b66ce9e70848c86aecf55a81")(w.layoutMode);
			var n = "tap",
				t = "touchstart",
				a = "touchend";
			"pc" === v.terminal && (n = "click", t = "mousedown", a = "mouseup");
			var o;
			$("body").on(n, function(e) {
				r(e.target, "tap")
			}).on(t, function(e) {
				o = e.target, r(o, "touchdown")
			}).on(a, function(e) {
				r(o, "touchup")
			}), l()
		}

		function o(e) {
			var n = $(e).parents(".lg-surface-panel"),
				t = n.length;
			return t > 0 && (e = $(n[t - 1]).parent()[0]), e
		}

		function r(e, n) {
			for (var t, a = x.instances; e && e.getAttribute;) {
				if (e.classList.contains("lg-trailer")) {
					e = o(e);
					break
				}
				e = e.parentNode
			}
			a.every(function(n) {
				return n.trailerElement !== e || (t = n, !1)
			}), t && i(t.data.events, n)
		}

		function i(e, n) {
			e.forEach(function(e) {
				e.type === n && ("control" === e.actionType ? c(e) : "link" === e.actionType ? f(e) : "download" === e.actionType &&
					s(e))
			})
		}

		function c(e) {
			x.getComponentsByName(e.control.target).forEach(function(n) {
				var t = n[e.control.action.id];
				if (t) {
					var a = e.control.action.args,
						o = [];
					a.forEach(function(e) {
						o.push(e.val)
					}), t.apply(this, o)
				}
			})
		}

		function s(e) {
			if ("weixin" === v.app) {
				var n = $("<div></div>");
				n.css({
					width: "400px",
					height: "700px",
					position: "fixed",
					backgroundColor: "rgba(0, 0 , 0 ,.5)",
					left: 0,
					top: 0,
					zIndex: 1e3,
					backgroundImage: "url(https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/fex/pic/item/2934349b033b5bb5335b46643fd3d539b700bc98.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "right top",
					backgroundSize: "300px"
				}), $(".lg-container").append(n), n.on("tap", function() {
					n.remove(), n = null
				})
			} else {
				var t, a, o = navigator.userAgent; - 1 !== o.indexOf("iPhone") || -1 !== o.indexOf("iPad") || -1 !== o.indexOf(
						"iPod") ? (a = e.download.ios.trim(), t = a.toLowerCase()) : (a = e.download.android.trim(), t = e.download.android
						.toLowerCase()), 0 !== t.indexOf("javascript:") && a ? "pc" === v.terminal ? window.open(a) : window.location.href =
					a : alert("\u8bf7\u586b\u5199\u5408\u6cd5\u7684\u4e0b\u8f7d\u94fe\u63a5\uff01")
			}
		}

		function f(e) {
			var n, t, a = g.get().pages;
			switch (e.link.prefix) {
				case "http://":
				case "https://":
					n || (n = "url");
				case "mailto:":
					n || (n = "mail");
				case "tel:":
					var o = e.link.url,
						r = o.indexOf("://");
					r >= 0 && (o = o.substr(r + 3)), "pc" === v.terminal ? window.open(e.link.prefix + o, "_blank") : ("baidu" !==
						v.app && "baiduLite" !== v.app || "superframe" !== v.present || y.exitFullScreen(), window.location = e.link.prefix +
						o), n || (n = "phone"), t = e.link.prefix + o;
					break;
				case "#page":
					var i = d(e.link.url) - 1;
					b.gotoPage(i), n = "page", t = i + 1 + "_" + a.length;
					break;
				case "#scroll":
					var c = e.link.url;
					b.scrollTo(c);
					break;
				case "@submit":
					h.submit(e.link.url);
					break;
				case "@share":
					n = "share", k.invoke()
			}
			n && m.trigger("event", {
				action: "link",
				type: n,
				content: t
			})
		}

		function d(e) {
			if (!e) return -1;
			if (/^\d+$/.test(e)) return parseInt(e, 10);
			for (var n = e.replace(/\s|[^,\-\d]/g, "").split(","), t = [], a = 0; a < n.length; a++) {
				var o = n[a];
				if (o)
					if (/^\d+$/.test(o)) t.push(parseInt(o, 10));
					else {
						var r = o.split("-");
						if (r.length < 2) continue;
						var i = parseInt(r[0], 10),
							c = parseInt(r[1], 10);
						if (!i || !c || i > c) continue;
						for (var s = i; s <= c;) t.push(s), s++
					}
			}
			return t[Math.floor(Math.random() * t.length)]
		}

		function p() {
			var e = g.get(),
				n = b.swiper ? b.swiper.getCurrentIndex() : 0;
			i(e.pages[n].events, "shake"), m.trigger("shake")
		}

		function l() {
			if (window.Shake) {
				new window.Shake({
					threshold: 15
				}).start(), window.addEventListener("shake", p, !1)
			}
		}

		function u() {
			window.removeEventListener("shake", p, !1)
		}
		var b, g = e("5988e4bd85b0f1f6da6ca28126885c94"),
			h = e("8ec6759846efd95d2988d3e4715ec13f"),
			v = e("730b2f043e6ed2eb93f22e892def2fa0"),
			w = e("00b2b96ce3c5bd2694604cb13b8427d0"),
			k = e("8ac31cf8ca7728e20495ca047cafc715"),
			m = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			x = e("28819c84a07bb88fc83272eb07e7725f"),
			y = e("8fd64621aa7b9743e0b0fb07b2311078")(v.app);
		m.on("form", function() {
			var e = g.get(),
				n = b.swiper ? b.swiper.getCurrentIndex() : 0;
			i(e.pages[n].events, "formSubmit")
		}), t.exports = {
			init: a,
			eventDeal: i,
			destroy: u
		}
	});
	define("40ca95ae6758e8a27f2ea109d3c7c901", function(e, n, i) {
		function t(e) {
			return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
		}

		function o(e, n) {
			var i = $("head")[0],
				t = document.createElement("script");
			t.type = "text/javascript", t.src = e, t.onload = t.onreadystatechange = function() {
				this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || n && n()
			}, i.appendChild(t)
		}

		function a(e, n) {
			n && (e ? $(".use-template-btn").show() : $(".login-btn").show())
		}

		function c(e, n) {
			e && o("//fex.bdstatic.com/h5static/h5jscss/ZeroClipboard.min.js", function() {
				var e = $(".copy-url-btn").show();
				window.ZeroClipboard.config({
					swfPath: "//fex.bdstatic.com/h5static/h5jscss/ZeroClipboard.swf"
				}), new window.ZeroClipboard(e[0]).on("copy", function(i) {
					var t = i.clipboardData,
						o = location.pathname.split("/").pop().split(".").shift(),
						a = "store";
					0 === window.location.pathname.indexOf("/h5") && (a = "user"), t.setData("text/plain", n + "/" + a + "/" +
						o), e.text("\u94fe\u63a5\u5df2\u590d\u5236"), setTimeout(function() {
						e.text("\u590d\u5236 H5 \u94fe\u63a5")
					}, 3e3)
				})
			})
		}

		function d(e) {
			for (var n = "", i = 0, t = e.length; i < t; i++) {
				var o = e[i],
					a = o.active || "";
				n += '<div class="item ' + o.phone + " " + o.app + " " + a + '" data-height="' + o.height +
					'"><div class="phone-type"><span class="apple"></span>' + o.name +
					'</div><div class="phone-app"><span class="app"></span></div></div>'
			}
			return n
		}

		function s() {
			function n() {
				var e = $(document).height() / 850;
				0 !== e && (e > 1 && (e = 1), x.css("transform", "scale(" + e + ")"))
			}

			function i() {
				var e = C.getSwipeForbidDirection();
				"none" !== e && "next" !== e || C.gotoPage("prev")
			}

			function s() {
				var e = C.getSwipeForbidDirection();
				"none" !== e && "prev" !== e || C.gotoPage("next")
			}
			var p = v.parseQueryString(location.search),
				r = document.title || "",
				w = $("#description").attr("content") || "",
				f = $('<div class="phone-container"></div>'),
				b = $('<div class="phone"></div>').append($(".lg-container")),
				m = $('<div class="arrow"><div class="up"></div><div class="down"></div></div>');
			f.append(b), "multi" === l.layoutMode && f.append(m);
			var g = u ? "\u6709\u6548\u671f50\u5206\u949f\uff0c\u53d1\u5e03\u4e4b\u540e\u6c38\u4e45\u6709\u6548" : "",
				y = $(
					'<div class="right"><div class="qrcode-container"><div class="qrcode"></div><p style="font-size:20px;">请手机扫描查看</p></div><div class="text">' +
					g + '</div><div class="text title">' + t(r) + '</div><div class="text creater"></div><div class="text desc">' +
					t(w) +
					'</div><div id="btn-block" class="btn-block"><div class="login-btn">\u767b\u5f55\u4f7f\u7528\u6a21\u677f</div><div class="use-template-btn">\u4f7f\u7528\u6a21\u677f</div><div class="copy-url-btn">\u590d\u5236 H5 \u94fe\u63a5</div><div class="open-new-window">\u65b0\u7a97\u53e3\u6253\u5f00<div></div></div>'
				),
				x = $('<div class="mid-content"></div>').append(f).append(y);
			$("body").append($('<div class="outer-container"></div>').append(x)), n(), window.onresize = n, u && (f.append($(
				'<div class="phone-size">' + d([{
					phone: "p5",
					app: "weixin",
					height: 630,
					name: "5"
				}, {
					phone: "p6",
					app: "weixin",
					height: 644,
					name: "6"
				}, {
					phone: "p6p",
					app: "weixin",
					height: 650,
					name: "6+",
					active: "active"
				}]) + "</div>")), $(".mid-content").on("click", ".phone-size .item", function(e) {
				$(".mid-content .phone")[0].style.height = $(this).data("height") + "px", $(".phone-size .item").removeClass(
					"active"), $(this).addClass("active");
				var n = document.querySelector(".lg-container");
				h.centralize(n.clientHeight), C && C.onresize && C.onresize()
			})), 1 === Number(p.channel) && (a(Number(p.isLogin), Number(p.useTemplate)), c(Number(p.copyUrl),
				decodeURIComponent(p.origin))), "preview" === p.scene && $(".open-new-window").show();
			var k = window.location.href.replace("scene=preview", "");
			if (p && p.ip && (k = k.replace(window.location.host, p.ip).replace("&ip=" + p.ip, "")), o(
					"//tb1.bdstatic.com/legend/517b55d3688ce9ef1085a3d9632bcb97_qrcode.js",
					function() {
						new window.QRCode($(".qrcode")[0], {
							width: 320,
							height: 320
						}).makeCode(k)
					}), $("body").on("click", ".open-new-window", function() {
					window.open(k, "_blank")
				}).on("click", ".use-template-btn", function() {
					var e = {
						templateId: location.pathname.split("/").pop().split(".").shift(),
						channel: 2
					};
					console.log(e)
				}).on("click", ".login-btn", function() {
					var e = {
						redirect: "login",
						channel: 3
					};
					window.parent.postMessage(JSON.stringify(e), "*")
				}), "multi" === l.layoutMode) {
				var C = e("0f8310c1b66ce9e70848c86aecf55a81")("multi");
				$("body").on("click", ".arrow .up", i).on("click", ".arrow .down", s), window.addEventListener("keydown",
					function(e) {
						38 === e.keyCode || 37 === e.keyCode ? (i(), e.preventDefault()) : 40 !== e.keyCode && 39 !== e.keyCode || (s(),
							e.preventDefault())
					}, !1)
			}
		}

		function p() {
			r.phone || s()
		}
		var r = e("730b2f043e6ed2eb93f22e892def2fa0"),
			l = e("00b2b96ce3c5bd2694604cb13b8427d0"),
			v = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			h = e("28819c84a07bb88fc83272eb07e7725f"),
			u = 0 === window.location.pathname.indexOf("/preview"),
			w = document.querySelector(".lg-page-container");
		i.exports = {
			install: p,
			scrollContainer: w
		}
	});
	define("3856c3b0058eb920dc8f4a90536221d1", function(n, e, t) {
		function i() {
			var n = [80, 443, "", 0].indexOf(Number(location.port || 0)) >= 0;
			if ("baidu" !== a.app || n || c.enterFullScreen(), "multi" === l.layoutMode && $(".lg-container").parents().each(
					function(n, e) {
						e.styleHeight = e.style.height
					}).css({
					height: "100%"
				}), window._SF_ && window._SF_.vw) {
				var e = window._SF_.vw,
					t = this;
				e.on("detach", function() {
					o(), t.onUninstall && t.onUninstall()
				}), $($.legendEvent).on("loadingEnd", function() {
					e.emit("resourceLoaded")
				})
			}
		}

		function o() {
			$(".lg-container").parents().each(function(n, e) {
				"styleHeight" in e && (e.style.height = e.styleHeight || "")
			})
		}
		var a = n("730b2f043e6ed2eb93f22e892def2fa0"),
			l = n("00b2b96ce3c5bd2694604cb13b8427d0"),
			c = n("8fd64621aa7b9743e0b0fb07b2311078")(a.app);
		t.exports = {
			install: i,
			scrollContainer: window
		}
	});
	define("db54a8aef2d9d87677687fbbf5259fd7", function(n, i, o) {
		o.exports = {
			install: function() {},
			scrollContainer: window
		}
	});
	define("53b48c819909f5e72b1aa5f5fa725fcc", function(e, f, a) {
		var d = e("730b2f043e6ed2eb93f22e892def2fa0"),
			b = {
				pc: e("40ca95ae6758e8a27f2ea109d3c7c901"),
				superframe: e("3856c3b0058eb920dc8f4a90536221d1"),
				mobile: e("db54a8aef2d9d87677687fbbf5259fd7")
			};
		a.exports = b[d.present]
	});
	define("a0960dc86bc19e9c76d2e24033054b67", function(e, t, o) {
		function n(e, t) {
			var o = JSON.parse(JSON.stringify(s));
			return e && e.components ? (e.components.forEach(function(e) {
				"audio" === e.type && e.attributes && "true" === e.attributes.auto && t < 1 && (o.audios.push(e.attributes.url),
					e.attributes.aid = l++), "panel" === e.type && e.attributes && e.attributes.components && (o = a(o, i(e.attributes,
					t)))
			}), o) : o
		}

		function a(e, t) {
			var o = {};
			e = e || {};
			for (var n in e) e.hasOwnProperty(n) && (e[n] = e[n] || [], o[n] = e[n].slice());
			t = t || {};
			for (n in t) t.hasOwnProperty(n) && (t[n] = t[n] || [], o[n] = o[n] || [], o[n] = o[n].concat(t[n].slice()));
			return o
		}

		function i(e, t) {
			return n(e.attributes, t)
		}

		function r(e) {
			e.forEach(function(e) {
				var t = document.createElement("audio"),
					o = document.createElement("source");
				t.className = "lg-component-audio-core", o.src = e, t.appendChild(o), document.querySelector(".lg-container").parentNode
					.appendChild(t), t.play(), document.addEventListener("WeixinJSBridgeReady", function() {
						t.play()
					}), legend.loading.audios.push(t)
			})
		}

		function u() {
			u.booted || (u.booted = !0, setTimeout(function() {
				p && p(), c()
			}), clearTimeout(u.timer))
		}

		function c() {
			document.querySelector("body .lg-container").classList.add("ready");
			var e = document.querySelector(".lg-loading-page");
			e.parentNode.removeChild(e)
		}

		function d(e) {
			if (p = this.onLoad, this.audio) {
				var t = n(e.frontStage, -1);
				t = a(t, n(e.backStage, -2)), e.pages.forEach(function(e, o) {
					t = a(t, n(e, o))
				}), r(t.audios)
			}
			u()
		}
		var s = {
			audios: []
		};
		legend.loading = {
			audios: []
		};
		var l = 0,
			p = null;
		u.booted = !1, o.exports = {
			audio: !0,
			onLoad: null,
			load: d
		}
	});
	define("a32dbd83b0c3909a0d2b483d1493852f", function(o, e, n) {
		function d() {
			document.querySelector("body .lg-container").classList.add("ready");
			var o = document.querySelector(".lg-loading-page");
			o.parentNode.removeChild(o)
		}

		function a(o) {
			this.onLoad && this.onLoad(), d()
		}
		n.exports = {
			audio: !1,
			onLoad: null,
			load: a
		}
	});
	define("5932ae9bdc8247f92ca4d3881e82fb2a", function(t, e, a) {
		function n(t, e) {
			var a = JSON.parse(JSON.stringify(P));
			return t && t.components ? (t.components.forEach(function(t) {
				if ("image" === t.type && t.attributes && t.attributes.src) {
					var n = t.attributes.src;
					a.images.push(n)
				}
				if ("album" === t.type && t.attributes && t.attributes.images) {
					var o = t.attributes.images;
					a.images = a.images.concat(o)
				}
				if ("panorama" === t.type && t.attributes && t.attributes.src) {
					var n = t.attributes.src;
					a.images.push(n)
				}
				if ("frame" === t.type && t.attributes && t.attributes.frames) {
					t.attributes.frames.forEach(function(t) {
						a.images.push(t)
					})
				}
				"label" === t.type && t.attributes && t.attributes.fonts && (a.fonts = a.fonts.concat(t.attributes.fonts.map(
						function(t) {
							return t.fontName
						}))), "counter" === t.type && t.attributes && t.attributes.fontFamily && a.fonts.push(t.attributes.fontFamily),
					"loadingprogress" === t.type && t.attributes && t.attributes.fontFamily && a.fonts.push(t.attributes.fontFamily),
					"audio" === t.type && t.attributes && "true" === t.attributes.auto && e < 1 && x && (a.audios.push({
						src: t.attributes.url,
						loop: "true" === t.attributes.loop
					}), t.attributes.aid = E++), "panel" === t.type && t.attributes && t.attributes.components && (a = i(a, s(t.attributes,
						e)))
			}), a) : a
		}

		function i(t, e) {
			var a = {};
			t = t || {};
			for (var n in t) t.hasOwnProperty(n) && (t[n] = t[n] || [], a[n] = t[n].slice());
			e = e || {};
			for (n in e) e.hasOwnProperty(n) && (e[n] = e[n] || [], a[n] = a[n] || [], a[n] = a[n].concat(e[n].slice()));
			return a
		}

		function o(t) {
			for (var e = t.concat(), a = 0; a < e.length; ++a)
				for (var n = a + 1; n < e.length; ++n) e[a] === e[n] && e.splice(n--, 1);
			return e
		}

		function r(t, e) {
			var a = JSON.parse(JSON.stringify(t)),
				n = {};
			for (var i in a) a.hasOwnProperty(i) && (n[i] = -1 === e.indexOf(i) ? o(a[i]) : a[i]);
			return n
		}

		function s(t, e) {
			return n(t.attributes, e)
		}

		function u(t, e) {
			if (t) {
				var a = new Image;
				a.onload = a.onerror = e, a.src = t
			}
		}

		function c(t, e, a) {
			if (t) {
				if (0 === t.length) return void e();
				var n = t.shift();
				a = a || function() {}, u(n, function() {
					a(n, this), c(t, e, a)
				})
			}
		}

		function f(t) {
			var e = "";
			if (t.forEach(function(t) {
					e += '<span style="font-family: ' + t + ';"></span>'
				}), 0 !== e.length) {
				var a = document.createElement("div");
				a.innerHTML = e, a.style.cssText = "position: absolute; top: -99999px", document.querySelector(".lg-container").parentNode
					.appendChild(a)
			}
		}

		function l(t, e) {
			c(t, d, function(t, a) {
				w++, p(w, e)
			})
		}

		function d() {
			d.booted || (d.booted = !0, setTimeout(function() {
				N && N(), b()
			}), clearTimeout(d.timer))
		}

		function g() {
			for (var e = t("28819c84a07bb88fc83272eb07e7725f").instances, a = [], n = 0, i = e.length; n < i; n++) {
				var o = e[n];
				"loadingprogress" === o.data.type && a.push(o)
			}
			return a
		}

		function p(t, e) {
			var a = S;
			if (a && a.length) {
				t > e && (t = e);
				for (var n = parseInt(t / e * 100, 10), i = 0, o = a.length; i < o; i++) {
					var r = a[i];
					r.instance && r.instance.progress && r.instance.progress(n, t, e)
				}
			}
			t >= e && d()
		}

		function m(t) {
			var e = document.querySelector(".lg-loading-page");
			t.loadingPage || (t.loadingPage = {}), t.loadingPage && h.create({
				data: t,
				container: e,
				stageIndex: -3
			});
			var a = document.querySelector("body .lg-container");
			if (window.Parallax) {
				var n = t.loadingPage.attributes.gravityLock,
					i = {};
				"horizon" === n ? i = {
					limitY: 0
				} : "vertical" === n && (i = {
					limitX: 0
				}), new window.Parallax(a, i)
			}
			a.classList.add("ready")
		}

		function b() {
			document.querySelector("body .lg-container").classList.add("ready");
			var t = document.querySelector(".lg-loading-page");
			t.parentNode.removeChild(t)
		}

		function v(t) {
			t.forEach(function(t) {
				var e = document.createElement("audio"),
					a = document.createElement("source");
				e.className = "lg-component-audio-core", a.src = t.src, t.loop && (e.loop = !0), e.appendChild(a), document.querySelector(
					".lg-container").parentNode.appendChild(e), e.play(), document.addEventListener("WeixinJSBridgeReady",
					function() {
						e.play()
					}), legend.loading.audios.push(e)
			})
		}

		function y(t) {
			var e = this;
			N = this.onLoad, x = this.audio;
			var a = n(t.loadingPage, -3);
			a = r(a, ["audios"]), f(a.fonts), e.audio && v(a.audios), c(a.images, function() {
				m(t), S = g();
				var a = n(t.frontStage, -1);
				a = i(a, n(t.backStage, -2)), t.pages.forEach(function(t, e) {
					a = i(a, n(t, e))
				}), a = r(a, ["audios"]), f(a.fonts), e.audio && v(a.audios);
				var o = a.images.length;
				o ? (setTimeout(function() {
					l(a.images, o)
				}, 100), setTimeout(function() {
					l(a.images, o)
				}, 200), setTimeout(function() {
					l(a.images, o)
				}, 300), d.timer = setTimeout(d, 5e4)) : d()
			})
		}
		var h = t("106083f047adb7b61b2f80fb8b484022"),
			S = [],
			P = {
				images: [],
				fonts: [],
				audios: []
			};
		legend.loading = {
			audios: []
		};
		var w = 0,
			E = 0,
			N = null,
			x = !0;
		d.booted = !1, a.exports = {
			audio: !0,
			onLoad: null,
			load: y
		}
	});
	define("dd97d5a9106bd04aa93f7361bba984e3", function(e, a, c) {
		function d(a) {
			switch (a) {
				case "lazyload":
					return e("a0960dc86bc19e9c76d2e24033054b67");
				case "blank":
					return e("a32dbd83b0c3909a0d2b483d1493852f");
				default:
					return e("5932ae9bdc8247f92ca4d3881e82fb2a")
			}
		}
		c.exports = d
	});
	define("17351264bd0101fcfca268289abbc71d", function(e, n, t) {
		function i() {
			return +new Date - E.enterTime
		}

		function a() {
			g.trigger("beforeUnload", i())
		}

		function o() {
			g.trigger("unload", i())
		}

		function r() {
			g.trigger("blur", i())
		}

		function d() {
			document.hidden && g.trigger("visibilityHidden", i())
		}

		function c() {
			window.addEventListener("beforeunload", a, !1), window.addEventListener("unload", o, !1), window.addEventListener(
				"blur", r, !1), document.addEventListener("visibilitychange", d, !1)
		}

		function l() {
			window.removeEventListener("beforeunload", a, !1), window.removeEventListener("unload", o, !1), window.removeEventListener(
				"blur", r, !1), document.removeEventListener("visibilitychange", d, !1)
		}

		function f(n, t, a) {
			function o() {
				var t = +new Date - E.enterTime,
					a = e("8c4d03ebd59f9d83f5f66a4919b55cfd").createAllPageElements(m.list, r);
				s.build(a, r), v.init(), document.querySelector(".lg-container").setAttribute("data-limit-x", 0);
				var o = document.querySelectorAll(".lg-page"),
					d = [n.backStage].concat(n.pages).concat([n.frontStage]);
				window.Parallax && d.forEach(function(e, n) {
					var t = {};
					"horizon" === e.attributes.gravityLock ? t = {
						limitY: 0
					} : "vertical" === e.attributes.gravityLock && (t = {
						limitX: 0
					}), new window.Parallax(o[n], t)
				}), y = !0, g.trigger("loadTime", t), g.trigger("loadingEnd", i())
			}
			w.init(n), p.install(b), p.onUninstall = function() {
				b()
			};
			var r = 0;
			if (0 === window.location.pathname.indexOf("/preview")) {
				var d = g.parseHash(window.location.hash);
				d.page && (r = d.page)
			}
			s = e("0f8310c1b66ce9e70848c86aecf55a81")(m.mode, p), g.trigger("loadingStart", i());
			var l = n.attributes.loadingMode || "preload";
			0 === m.load && (l = "blank");
			var f = e("dd97d5a9106bd04aa93f7361bba984e3")(l);
			0 === m.load ? (f.audio = !1, f.onLoad = function() {
				o()
			}) : f.onLoad = function() {
				o(), h.init(), legend.onApiReady && legend.onApiReady(), L.forEach(function(e) {
					e()
				})
			}, f.load(n), c()
		}

		function u(e) {
			y ? e() : L.push(e)
		}

		function b() {
			v.instances.forEach(function(e) {
				e.instance && e.instance.free && e.instance.free();
				var n = e.trailerElement;
				n && n.parentNode.removeChild(n)
			}), window.removeEventListener("resize", v.resizer, !1), s.destroy();
			var e = document.querySelector(".lg-container");
			e.parentNode.removeChild(e), l(), h.destroy(), g.trigger("leave", i())
		}
		var s, g = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			v = e("28819c84a07bb88fc83272eb07e7725f"),
			w = e("5988e4bd85b0f1f6da6ca28126885c94"),
			m = e("730b2f043e6ed2eb93f22e892def2fa0"),
			E = e("00b2b96ce3c5bd2694604cb13b8427d0"),
			h = e("42c3b09b87b3081ca84c49e976349270"),
			p = e("53b48c819909f5e72b1aa5f5fa725fcc"),
			y = !1,
			L = [];
		t.exports = {
			init: f,
			ready: u,
			destroy: b
		}
	});
	define("c5a785e1ac2087a685f31f04636fdcd8", function(e, c, b) {
		var a = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			d = e("00b2b96ce3c5bd2694604cb13b8427d0"),
			f = e("28819c84a07bb88fc83272eb07e7725f");
		a.extend(legend, {
			ready: e("17351264bd0101fcfca268289abbc71d").ready,
			init: e("17351264bd0101fcfca268289abbc71d").init,
			toast: e("35149c7e67b80058e263a93c32bd6945"),
			info: e("00b2b96ce3c5bd2694604cb13b8427d0"),
			share: e("8ac31cf8ca7728e20495ca047cafc715"),
			render: e("0f8310c1b66ce9e70848c86aecf55a81")(d.layoutMode),
			getData: e("5988e4bd85b0f1f6da6ca28126885c94").get,
			getComponentsByName: f.getComponentsByName.bind(f)
		})
	});
	define("dc12d6d28d43f52faf351f0eca9ee563", function(e, n, t) {
		function c(e, n) {
			e = a[e], "component" === e && (e = "component:" + n.name, n = n.content), "object" == typeof n && (n = JSON.stringify(
				n)), n = encodeURIComponent(n);
			var t = o.parseQueryString(window.location.search),
				c = t.channelid || "",
				d = (new Date).getTime(),
				r = o.getUid(),
				f = {
					q: d,
					i: i.id,
					u: r
				};
			return null !== c && "" !== c && (f.c = c), f.v = e, f.t = n || "", o.makeUrl("//h5.baidu.com/runtime/api/st", f)
		}
		var o = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			i = (e("730b2f043e6ed2eb93f22e892def2fa0"), e("00b2b96ce3c5bd2694604cb13b8427d0")),
			a = {
				pv: "pv",
				beforeUnload: "leave"
			};
		t.exports = {
			condition: function() {
				return !0
			},
			act: function(e, n) {
				return Object.keys(a).indexOf(e) >= 0 ? c(e, n) : ""
			}
		}
	});
	define("cd694f20bc5cf60094ada1af49cc7445", function(e, n, a) {
		function t(e, n) {
			var a = "";
			e = d[e], "component" === e ? f.indexOf(n.name) >= 0 && (e = n.name, a = n.content) : "event" === e ? (e = n.type,
				a = n.content) : a = "object" == typeof n ? JSON.stringify(n) : n, a = encodeURIComponent(a);
			var t = r.getCookie("BAIDUID"),
				p = {
					tag: "fc_h5",
					param: c.param || "",
					type: e,
					timestamp: +new Date,
					h5id: i.id,
					source: "superframe" === o.present ? 0 : 1
				};
			return t && (p.baiduid = t), a && (p.content = a), [r.makeUrl(
				"https://sp0.baidu.com/-rU_dTmfKgQFm2e88IuM_a/w.gif", p), r.makeUrl(" https://ada.baidu.com/nclick/index", p)]
		}
		var i = e("00b2b96ce3c5bd2694604cb13b8427d0"),
			o = e("730b2f043e6ed2eb93f22e892def2fa0"),
			r = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			c = r.parseQueryString(window.location.search),
			d = {
				pv: "pv",
				loadTime: "loadtime",
				form: "submit",
				event: "event",
				shake: "shake",
				pageReach: "page",
				component: "component",
				beforeUnload: "beforeunload",
				unload: "unload",
				blur: "blur",
				visibilityHidden: "visibility_hidden",
				scrollReach: "reach"
			},
			f = ["video"];
		a.exports = {
			condition: function() {
				var e = location.search;
				return "superframe" === o.present || e.indexOf("fc") > -1 && e.indexOf("param") > -1
			},
			act: function(e, n) {
				return Object.keys(d).indexOf(e) >= 0 ? t(e, n) : ""
			}
		}
	});
	define("917e26043c9fc2259960d9a37e69040c", function(e, n, t) {
		function o(e, n) {
			"event" === e && (e = n.type, n = n.content), "object" == typeof n && (n = JSON.stringify(n)), n =
				encodeURIComponent(n || "");
			var t = {
				q: +new Date,
				i: c.id,
				u: i.getCookie("BAIDUID"),
				h: encodeURIComponent(window.location.href),
				v: e,
				t: n
			};
			return i.makeUrl(d, t)
		}
		var i = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			c = (e("730b2f043e6ed2eb93f22e892def2fa0"), e("00b2b96ce3c5bd2694604cb13b8427d0")),
			d = "http://marketing.baidu.com/web/h5/feedback.json",
			f = ["pv", "pageReach", "scrollReach", "event", "beforeUnload", "unload", "blur", "visibilityHidden", "form"];
		t.exports = {
			condition: function() {
				return c.business && "mkt" === c.business.type
			},
			act: function(e, n) {
				return f.indexOf(e) >= 0 ? o(e, n) : ""
			}
		}
	});
	define("cd1ee1b1b3a589855ea931cfc0c531f3", function(e, n, o) {
		function a(e, n) {
			var o = "log_" + (new Date).getTime(),
				a = new window.Image;
			window[o] = a, a.src = e, a.onload = a.onerror = function(e) {
				n && n(a, e), this.onload = this.onerror = null, delete window[o], a = null
			}
		}
		var c = e("85c8574dafa1cd69fb4e706f6deb30c0"),
			d = [e("dc12d6d28d43f52faf351f0eca9ee563"), e("cd694f20bc5cf60094ada1af49cc7445"), e(
				"917e26043c9fc2259960d9a37e69040c")],
			i = ["pv", "loadingStart", "loadingEnd", "loadTime", "pageChangeStart", "pageChangeEnd", "pageReach",
				"scrollReach", "component", "event", "beforeUnload", "unload", "blur", "visibilityHidden", "leave", "shake",
				"form"
			];
		c.on(i.join(" "), function(e, n) {
			setTimeout(function() {
				d.forEach(function(o) {
					if (o.condition())
						for (var c = o.act(e.type, n), d = [].concat(c), i = 0; i < d.length; i++) d[i] && a(d[i])
				})
			}, 30)
		}), o.exports = {}
	});
	define("a958cdf42cf25b05e1e180c201163da8", function(c, e, a) {
		c("85c8574dafa1cd69fb4e706f6deb30c0").trigger("pv", {
			ua: navigator.userAgent,
			url: window.location.href
		}), c("c5a785e1ac2087a685f31f04636fdcd8"), c("cd1ee1b1b3a589855ea931cfc0c531f3")
	});

	define("1eb0221faaa050cfbd6f367df6d56779", function(n, o) {
		function e(n, o, e, a, i) {
			function t() {
				r.play()
			}

			function u() {
				r.pause()
			}

			function d() {
				r.paused ? (f.style.display = "block", g.style.display = "none") : (f.style.display = "none", g.style.display =
					"block")
			}

			function s() {
				r.paused && $(document).one("touchstart", function() {
					t()
				})
			}
			i = i || {};
			var c = void 0 !== o.aid,
				p = $(
					'<div class="lg-component-audio"><div class="lg-component-audio-play"></div><div class="lg-component-audio-pause"></div>' +
					(c ? "" : '<audio class="lg-component-audio-core" preload="auto"><source></audio>') + "</div>"),
				l = p[0],
				r = c ? legend.loading.audios[o.aid] : p.find("audio")[0],
				f = p.find(".lg-component-audio-play")[0],
				g = p.find(".lg-component-audio-pause")[0],
				y = $(r).find("source")[0];
			if (r.play || (r.play = r.pause = function() {}), r.onplay = d, r.onended = r.onpause = d, d(), !i.inEditor) {
				var h;
				$(window).on("blur", function() {
					h = r.paused, u()
				}).on("focus", function() {
					!1 === h && t()
				});
				var v = "ontouchstart" in document ? "tap" : "click";
				p.on(v, function() {
					r.paused ? t() : u()
				})
			}
			var m = {},
				b = {
					name: "\u97f3\u9891",
					attributeChange: function(n) {
						for (var o in n) n.hasOwnProperty(o) && (m[o] = n[o]);
						this.render(n)
					},
					sizeChange: function(n, o) {
						l.style.width = n + "px", l.style.height = o + "px"
					},
					pageChange: function(n, o) {
						"page" === i.stageType && (i.pageIndex === n ? "true" !== m.auto || i.inEditor || (t(), s()) : u())
					},
					render: function(n) {
						/^https?/.test(n.url) && (c || (y.src = n.url), this.seticon(f, n.pauseicon), this.seticon(g, n.playicon),
							"true" === n.loop && (r.loop = !0), "true" !== n.auto || "page" === i.stageType || i.inEditor || (t(), s())
						)
					},
					seticon: function(n, o) {
						if (!o) return void(n.style.backgroundImage = "");
						n.style.backgroundImage = "url(" + o + ")"
					},
					interfaces: [{
						id: "play",
						act: t
					}, {
						id: "pause",
						act: u
					}]
				};
			return b.attributeChange(o), b.sizeChange(e, a), n.appendChild(l), b
		}
		o.create = e
	});
	require("28819c84a07bb88fc83272eb07e7725f").classes.audio = require("1eb0221faaa050cfbd6f367df6d56779");
	define("33f8627efeaa0b20ec58d61c17910cee", function(e, t) {
		function r(e, t, r, a) {
			function n() {
				s.style.webkitTransform = "translate(" + t.translateX + "px, " + t.translateY + "px) scale(" + t.scale + ")",
					"true" == t.playAudio && t.audio && t.audioEl && t.audioEl.play()
			}

			function o() {
				s.style.webkitTransform = d
			}
			var s = document.createElement("img");
			s.classList.add("lg-component-img");
			var i = {},
				l = "ontouchend" in document;
			if ("true" == t.touchevent) {
				var d = s.style.webkitTransform;
				l ? ($(s).on("touchstart", n), $(s).on("touchend", o)) : ($(s).on("mousedown", n), $(s).on("mouseup", o))
			}
			var u = {
				name: "\u56fe\u7247",
				attributeChange: function(e) {
					e = e || {};
					for (var t in e) i[t] = e[t];
					var r = "src";
					i.lazy && (r = "data-src", s.classList.add("swiper-lazy")), s.setAttribute(r, e.src), "none" === i.stroke ? s
						.style.borderStyle = "none" : s.style.borderStyle = i.strokeType, "true" == e.keepDefault && s.classList.add(
							"keep-default"), s.style.borderRadius = i.cornerRadius + "px", s.style.borderColor = i.stroke, s.style.borderWidth =
						(i.strokeWidth || 0) + "px"
				},
				sizeChange: function(e, t) {
					s.style.width = e + "px", s.style.height = t + "px"
				}
			};
			return u.sizeChange(r, a), u.attributeChange(t), e.appendChild(s), u
		}
		t.create = r
	});
	require("28819c84a07bb88fc83272eb07e7725f").classes.image = require("33f8627efeaa0b20ec58d61c17910cee");
	define("e353baa81ff5be512a32971f865011d5", function(e, t) {
		function n(e, t, n, a, i) {
			var o = document.createElement("div");
			o.classList.add("lg-component-panel");
			var r = {},
				l = {
					name: "\u5206\u7ec4",
					attributeChange: function(t) {
						t = t || {};
						for (var n in t) r[n] = t[n];
						e.style.overflow = o.style.overflow = r.overflow
					},
					sizeChange: function(e, t) {
						o.style.width = e + "px", o.style.height = t + "px"
					}
				};
			return l.attributeChange(t), l.sizeChange(n, a), e.appendChild(o), l
		}
		t.create = n
	});
	require("28819c84a07bb88fc83272eb07e7725f").classes.panel = require("e353baa81ff5be512a32971f865011d5");
	define("db27f90d95fe98519ad67189c9158e73", function(t, e) {
		function a(t, e, a, n, i) {
			function o(t, e) {
				return t.replace(/font\-size\s?:\s?(\d*)px/g, function(t, e) {
					return "font-size:" + Math.floor(e / l * 1e6) / 1e6 + "em"
				})
			}

			function s(t) {
				t.stopPropagation()
			}
			var l = 24;
			i = i || {}, i.ratio = i.ratio || 1;
			var r = document.createElement("div");
			r.classList.add("lg-component-label"), r.style.display = "table-cell", r.style.fontSize = l * i.ratio + "px";
			var d = a,
				h = {},
				c = {
					name: "\u6587\u672c",
					attributeChange: function(e) {
						e = e || {};
						for (var a in e) h[a] = e[a];
						var n = i.inEditor ? h.html : o(h.html, i.ratio);
						r.innerHTML = '<div style="width: ' + Math.ceil(d) + 'px">' + n + "</div>", r.style.verticalAlign = h.verticalAlign,
							this.name = r.textContent.substr(0, 10), "true" === h.shadow ? r.style.textShadow = [h.shadowOffsetX + "px",
								h.shadowOffsetY + "px", h.shadowBlur + "px", h.shadowColor
							].join(" ") : r.style.textShadow = "none", "true" === h.allowScroll && (t.style.overflowY = "scroll", r.classList
								.add("keep-default"), r.addEventListener("touchstart", s, {
									passive: !0
								}), r.addEventListener("touchmove", s, {
									passive: !0
								}))
					},
					sizeChange: function(t, e) {
						d = t, r.style.width = t + "px", r.style.height = e + "px"
					}
				};
			return c.attributeChange(e), c.sizeChange(a, n), t.appendChild(r), c
		}
		e.create = a
	});
	require("28819c84a07bb88fc83272eb07e7725f").classes.label = require("db27f90d95fe98519ad67189c9158e73");
}(typeof _global_ === "object" ? _global_.legend : window.legend))
