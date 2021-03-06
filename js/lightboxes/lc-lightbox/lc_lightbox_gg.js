 Lightbox - Global Gallery edition
 * Version: 1.03
 * Author: Luca Montanari aka LCweb
 * Website: http://www.lcweb.it
 * Commercial license
 */
(function(a) {
    lcl_objs = [];
    lcl_is_active = lcl_shown = !1;
    lcl_slideshow = void 0;
    lcl_on_mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent);
    lcl_hashless_url = lcl_deeplink_tracked = lcl_curr_vars = lcl_curr_opts = lcl_curr_obj = !1;
    lcl_url_hash = "";
    lcl_vid_instance_num = 0;
    lc_lightbox = function(g, A) {
        if ("object" != typeof g || !g.length) return !1;
        var q = !1;
        a.each(lcl_objs, function(a, d) {
            if (JSON.stringify(d) == JSON.stringify(g)) return q = d, !1
        });
        if (!q) {
            var w = new B(g, A);
            lcl_objs.push(w);
            return w
        }
        return q
    };
    var B = function(g, A) {
        var q = a.extend({
                gallery: !0,
                gallery_hook: "rel",
                live_elements: !0,
                preload_all: !1,
                deeplink: !0,
                img_zoom: !0,
                src_attr: "href",
                title_attr: "title",
                txt_attr: "data-lcl-txt",
                author_attr: "data-lcl-author",
                global_type: !1,
                slideshow: !0,
                open_close_time: 500,
                ol_time_diff: 100,
                fading_time: 150,
                animation_time: 300,
                slideshow_time: 6E3,
                autoplay: !1,
                counter: !1,
                progressbar: !0,
                carousel: !0,
                max_width: "93%",
                max_height: "93%",
                ol_opacity: .7,
                ol_color: "#111",
                ol_pattern: "oblique_dots",
                border_w: 3,
                border_col: "#ddd",
                padding: 10,
                radius: 4,
                shadow: !0,
                remove_scrollbar: !0,
                wrap_class: "",
                skin: "light",
                data_position: "over",
                cmd_position: "inner",
                ins_close_pos: "normal",
                nav_btn_pos: "normal",
                txt_hidden: 500,
                show_title: !0,
                show_descr: !0,
                show_author: !0,
                thumbs_nav: !0,
                tn_pos: "bottom",
                tn_icons: !0,
                tn_hidden: 500,
                thumbs_w: 110,
                thumbs_h: 110,
                thumbs_maker_url: !1,
                fullscreen: !0,
                fs_img_behavior: "fit",
                fs_only: 500,
                browser_fs_mode: !0,
                socials: !0,
                txt_toggle_cmd: !0,
                download: !0,
                touchswipe: !0,
                mousewheel: !0,
                modal: !1,
                rclick_prevent: !1,
                html_is_ready: function(a) {},
                elems_parsed: function(a) {},
                on_open: function(a) {},
                on_elem_switch: function(a, c) {},
                slideshow_start: function(a) {},
                slideshow_end: function() {},
                on_fs_enter: function() {},
                on_fs_exit: function() {},
                on_close: function() {}
            }, A),
            w = {
                elems: [],
                is_arr_instance: "undefined" == typeof g[0].childNodes ? !0 : !1,
                elems_count: "undefined" == typeof g[0].childNodes ? g.length : a(g).length,
                elems_selector: !1,
                elem_index: !1,
                gallery_hook_val: !1,
                preload_all_used: !1,
                img_sizes_cache: [],
                vimeo_thumb_cache: [],
                inner_cmd_w: !1,
                txt_exists: !1,
                txt_und_sizes: !1,
                force_fullscreen: !1,
                html_style: "",
                body_style: ""
            },
            h = a.data(g, "lcl_settings", q),
            d = a.data(g, "lcl_vars", w),
            x = function(a) {
                for (var b = 0, e = 0, f = a.toString().length; e <
                    f;) b = (b << 5) - b + a.charCodeAt(e++) << 0;
                return 0 > b ? -1 * b : b
            },
            B = function(b) {
                var c = !1;
                a.each(d.elems, function(a, f) {
                    if (f.hash == b) return c = f, !1
                });
                return c
            },
            t = function(b) {
                if (!b) return b;
                b = b.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
                return a.trim(b)
            },
            U = function(b) {
                var c = h;
                c.gallery || (b = b.eq(d.elem_index));
                var e = [];
                b.each(function() {
                    var b = a(this);
                    var k = b.attr(c.src_attr);
                    var l = x(k);
                    if (d.gallery_hook_val && b.attr(c.gallery_hook) != d.gallery_hook_val) return !0;
                    if (l = B(l)) k = l;
                    else {
                        l = k;
                        var m = b.data("lcl-type");
                        "undefined" == typeof m && (m = h.global_type);
                        if (-1 !== a.inArray(m, "image video youtube vimeo dailymotion html iframe".split(" "))) l = m;
                        else {
                            l = l.toLowerCase();
                            m = /^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:mp4|ogg|webm)$/;
                            var g = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
                                p = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
                            l = /^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/.test(l) ?
                                "image" : m.test(l) ? "video" : g.test(l) ? "youtube" : -1 !== l.indexOf("vimeo.com/") ? "vimeo" : -1 !== l.indexOf("dailymotion.com/video") ? "dailymotion" : p.test(l) ? "iframe" : "#" == l.substr(0, 1) && a(l).length ? "html" : "unknown"
                        }
                        "unknown" != l ? (k = {
                                src: k,
                                type: l,
                                hash: c.deeplink ? x(k) : !1,
                                title: c.show_title && "undefined" != typeof b.attr(c.title_attr) ? t(b.attr(c.title_attr)) : "",
                                txt: c.show_descr && "undefined" != typeof b.attr(c.txt_attr) ? t(b.attr(c.txt_attr)) : "",
                                author: c.show_author && "undefined" != typeof b.attr(c.author_attr) ? t(b.attr(c.author_attr)) : "",
                                width: "image" != l && "undefined" != typeof b.data("lcl-w") ? b.data("lcl-w") : !1,
                                height: "image" != l && "undefined" != typeof b.data("lcl-h") ? b.data("lcl-h") : !1,
                                force_outer_cmd: "undefined" != typeof b.data("lcl-outer-cmd") ? b.data("lcl-outer-cmd") : "",
                                download: "image" != l && "video" != l && "html" != l || "undefined" == typeof b.data("lcl-path") ? !1 : b.data("lcl-path")
                            }, -1 !== a.inArray(l, ["youtube", "vimeo", "dailymotion"]) && (k.video_id = ""), -1 !== a.inArray(l, ["video", "html", "iframe"]) && "undefined" != typeof b.data("lcl-poster") ? k.poster =
                            b.data("lcl-poster") : k.poster = "") : k = {
                            src: k,
                            type: l,
                            hash: c.deeplink ? x(k) : !1
                        }
                    }
                    e.push(k)
                });
                2 > e.length && a(".lcl_prev, .lcl_next, #lcl_thumb_nav").remove();
                if (!e.length) return !1;
                d.elems = e;
                return !0
            },
            I = function() {
                if (2 > d.elems.length || !h.gallery) return !1;
                0 < d.elem_index && u(!1, d.elem_index - 1);
                d.elem_index != d.elems.length - 1 && u(!1, d.elem_index + 1)
            },
            u = function(b, c) {
                var e, f = d;
                "undefined" == typeof c && (c = f.elem_index);
                if ("undefined" == typeof c) return !1;
                (e = "image" == f.elems[c].type || "video" == f.elems[c].type && f.elems[c].poster ?
                    "image" == f.elems[c].type ? f.elems[c].src : f.elems[c].poster : "") && "undefined" == typeof f.img_sizes_cache[e] ? a("<img/>").bind("load", function() {
                    f.img_sizes_cache[e] = {
                        w: this.width,
                        h: this.height
                    };
                    b && c == f.elem_index && J()
                }).attr("src", e) : b && J()
            },
            V = function() {
                var b = a("#lcl_wrap[lc-lelem=" + d.elem_index + "] #lcl_elem_wrap > iframe");
                if (!b.length) return !1;
                a("#lcl_wrap").addClass("lcl_loading_iframe");
                "undefined" != typeof lcl_slideshow && clearInterval(lcl_slideshow);
                b.on("load", function() {
                    a("#lcl_wrap").removeClass("lcl_loading_iframe");
                    setTimeout(function() {
                        a("iframe.lcl_elem")[0].contentWindow.focus()
                    }, 20);
                    a(".lcl_is_playing").length && lcl_start_slideshow(!0)
                })
            },
            K = function(b, c) {
                var e = a.data(b, "lcl_settings"),
                    f = a.data(b, "lcl_vars");
                if (f.is_arr_instance) {
                    var k = [];
                    a.each(b, function(b, c) {
                        var f = {};
                        var d = "undefined" == typeof c.type && e.global_type ? e.global_type : !1;
                        "undefined" != typeof c.type && (d = c.type);
                        d && -1 !== a.inArray(d, "image video youtube vimeo dailymotion html iframe".split(" ")) ? "undefined" != typeof c.src && c.src && (f.src = c.src, f.type =
                            d, f.hash = x(c.src), f.title = "undefined" == typeof c.title ? "" : t(c.title), f.txt = "undefined" == typeof c.txt ? "" : t(c.txt), f.author = "undefined" == typeof c.author ? "" : t(c.author), f.width = "undefined" == typeof c.width ? !1 : c.width, f.height = "undefined" == typeof c.height ? !1 : c.height, f.force_outer_cmd = "undefined" == typeof c.force_outer_cmd ? !1 : c.force_outer_cmd, f.download = "image" != d && "video" != d && "html" != d || "undefined" == typeof c.download ? !1 : f.download, -1 !== a.inArray(d, ["youtube", "vimeo", "dailymotion"]) && (f.video_id = ""), f.poster = -1 === a.inArray(d, ["video", "html", "iframe"]) || "undefined" == typeof c.poster ? "" : c.poster, k.push(f)) : (f = {
                            src: f.src,
                            type: "unknown",
                            hash: e.deeplink ? x(f.src) : !1
                        }, k.push(f))
                    });
                    f.elems = k
                } else {
                    var l = b;
                    if (e.live_elements && "undefined" != typeof b.selector) {
                        var m = c && e.gallery && e.gallery_hook && "undefined" != typeof a(g[0]).attr(e.gallery_hook) ? b.selector + "[" + e.gallery_hook + "=" + c.attr(e.gallery_hook) + "]" : b.selector;
                        l = a(m);
                        f.elems_selector = m
                    }
                    if (!U(l)) return console.error("LC Lightbox - no valid elements found"), !1
                }
                e.preload_all &&
                    !f.preload_all_used && (f.preload_all_used = !0, a(document).ready(function(b) {
                        a.each(f.elems, function(a, b) {
                            u(!1, a)
                        })
                    }));
                "function" == typeof e.elems_parsed && e.elems_parsed.call({
                    opts: h,
                    vars: d
                });
                f.is_arr_instance || b.first().trigger("lcl_elems_parsed", [f.elems]);
                return !0
            };
        K(g);
        var D = function(b, c) {
                if (lcl_shown || lcl_is_active) return !1;
                lcl_is_active = lcl_shown = !0;
                lcl_curr_obj = b;
                h = a.data(b, "lcl_settings");
                d = a.data(b, "lcl_vars");
                lcl_curr_opts = h;
                lcl_curr_vars = d;
                var e = h,
                    f = d,
                    k = "undefined" != typeof c ? c : !1;
                if (!d) return console.error("LC Lightbox - cannot open. Object not initialized"), !1;
                f.gallery_hook_val = k && e.gallery && e.gallery_hook && "undefined" != typeof k.attr(e.gallery_hook) ? k.attr(e.gallery_hook) : !1;
                if (!K(b, c)) return !1;
                if (k) a.each(f.elems, function(a, b) {
                    if (b.src == k.attr(e.src_attr)) return f.elem_index = a, !1
                });
                else if (parseInt(f.elem_index) >= f.elems_count) return console.error("LC Lightbox - selected index does not exist"), !1;
                u(!1);
                W();
                X();
                f.force_fullscreen && C(!0, !0);
                a("#lcl_thumbs_nav").length && Y();
                u(!0);
                I()
            },
            L = function() {
                a("#lcl_wrap").removeClass("lcl_pre_show").addClass("lcl_shown");
                a("#lcl_loader").removeClass("lcl_loader_pre_first_el")
            },
            W = function() {
                var b = h,
                    c = d;
                "number" == typeof document.documentMode && (a("body").addClass("lcl_old_ie"), "outer" != b.cmd_position && (b.nav_btn_pos = "normal"));
                a("#lcl_wrap").length && a("#lcl_wrap").remove();
                a("body").append('<div id="lcl_wrap" class="lcl_pre_show lcl_pre_first_el lcl_first_sizing lcl_is_resizing"><div id="lcl_window"><div id="lcl_corner_close" title="close"></div><div id="lcl_loader" class="lcl_loader_pre_first_el"><span id="lcll_1"></span><span id="lcll_2"></span></div><div id="lcl_nav_cmd"><div class="lcl_icon lcl_prev" title="previous"></div><div class="lcl_icon lcl_play"></div><div class="lcl_icon lcl_next" title="next"></div><div class="lcl_icon lcl_counter"></div><div class="lcl_icon lcl_right_icon lcl_close" title="close"></div><div class="lcl_icon lcl_right_icon lcl_fullscreen" title="toggle fullscreen"></div><div class="lcl_icon lcl_right_icon lcl_txt_toggle" title="toggle text"></div><div class="lcl_icon lcl_right_icon lcl_download" title="download"></div><div class="lcl_icon lcl_right_icon lcl_thumbs_toggle" title="toggle thumbnails"></div><div class="lcl_icon lcl_right_icon lcl_socials" title="toggle socials"></div><div class="lcl_icon lcl_right_icon lcl_zoom_icon lcl_zoom_in" title="zoom in"></div><div class="lcl_icon lcl_right_icon lcl_zoom_icon lcl_zoom_out" title="zoom out"></div></div><div id="lcl_contents_wrap"><div id="lcl_subj"><div id="lcl_elem_wrap"></div></div><div id="lcl_txt"></div></div></div><div id="lcl_thumbs_nav"></div><div id="lcl_overlay"></div></div>');
                a("#lcl_wrap").addClass("lcl_" + b.ins_close_pos + "_close").addClass("lcl_nav_btn_" + b.nav_btn_pos);
                (!0 === b.tn_hidden || "number" == typeof b.tn_hidden && (a(window).width() < b.tn_hidden || a(window).height() < b.tn_hidden)) && a("#lcl_wrap").addClass("lcl_tn_hidden");
                (!0 === b.txt_hidden || "number" == typeof b.txt_hidden && (a(window).width() < b.txt_hidden || a(window).height() < b.txt_hidden)) && a("#lcl_wrap").addClass("lcl_hidden_txt");
                lcl_on_mobile && a("#lcl_wrap").addClass("lcl_on_mobile");
                b.wrap_class && a("#lcl_wrap").addClass(b.wrap_class);
                a("#lcl_wrap").addClass("lcl_" + b.cmd_position + "_cmd");
                if ("inner" != b.cmd_position) {
                    var e = a("#lcl_nav_cmd").detach();
                    a("#lcl_wrap").prepend(e)
                }
                b.slideshow || a(".lcl_play").remove();
                b.txt_toggle_cmd || a(".lcl_txt_toggle").remove();
                b.socials || a(".lcl_socials").remove();
                b.download || a(".lcl_download").remove();
                (!b.counter || 2 > c.elems.length) && a(".lcl_counter").remove();
                b.img_zoom || a(".lcl_zoom_icon").remove();
                c.force_fullscreen = !1;
                if (!b.fullscreen) a(".lcl_fullscreen").remove();
                else if (!0 === b.fs_only || "number" ==
                    typeof b.fs_only && (a(window).width() < b.fs_only || a(window).height() < b.fs_only)) a(".lcl_fullscreen").remove(), d.force_fullscreen = !0;
                2 > c.elems.length ? a(".lcl_prev, .lcl_play, .lcl_next").remove() : "middle" == b.nav_btn_pos && a(".lcl_prev, .lcl_next").css("margin", b.padding);
                !b.thumbs_nav || 2 > d.elems.length ? a("#lcl_thumbs_nav, .lcl_thumbs_toggle").remove() : (a("#lcl_thumbs_nav").css("height", b.thumbs_h), a("#lcl_window").css("margin-top", -1 * Math.floor(a("#lcl_thumbs_nav").outerHeight(!0) / 2)));
                a("#lcl_wrap").addClass("lcl_txt_" +
                    b.data_position + " lcl_" + b.skin);
                E();
                a("#lcl_overlay").css({
                    "background-color": b.ol_color,
                    opacity: b.ol_opacity
                });
                b.ol_pattern && a("#lcl_overlay").addClass("lcl_pattern_" + b.ol_pattern);
                b.modal && a("#lcl_overlay").addClass("lcl_modal");
                b.border_w && a("#lcl_window").css("border", b.border_w + "px solid " + b.border_col);
                b.padding && a("#lcl_subj, #lcl_txt, #lcl_nav_cmd").css("margin", b.padding);
                b.radius && a("#lcl_window, #lcl_contents_wrap").css("border-radius", b.radius);
                b.shadow && a("#lcl_window").css("box-shadow",
                    "0 4px 12px rgba(0, 0, 0, 0.4)");
                "inner" == b.cmd_position && "corner" == b.ins_close_pos && a("#lcl_corner_close").css({
                    top: -1 * (b.border_w + Math.ceil(a("#lcl_corner_close").outerWidth() / 2)),
                    right: -1 * (b.border_w + Math.ceil(a("#lcl_corner_close").outerHeight() / 2))
                });
                a("#lcl_inline_style").length && a("#lcl_inline_style").remove();
                a("head").append('<style type="text/css" id="lcl_inline_style">#lcl_window, #lcl_txt, #lcl_subj {-webkit-transition-duration: ' + b.animation_time + "ms; transition-duration: " + b.animation_time +
                    "ms;}#lcl_overlay {-webkit-transition-duration: " + b.open_close_time + "ms; transition-duration: " + b.open_close_time + "ms;}.lcl_first_sizing #lcl_window, .lcl_is_closing #lcl_window {-webkit-transition-duration: " + (b.open_close_time - b.ol_time_diff) + "ms; transition-duration: " + (b.open_close_time - b.ol_time_diff) + "ms;}.lcl_first_sizing #lcl_window {-webkit-transition-delay: " + b.ol_time_diff + "ms; transition-delay: " + b.ol_time_diff + "ms;}#lcl_loader, #lcl_contents_wrap, #lcl_corner_close {-webkit-transition-duration: " +
                    b.fading_time + "ms; transition-duration: " + b.fading_time + "ms;}.lcl_toggling_txt #lcl_subj {-webkit-transition-delay: " + (b.fading_time + 200) + "ms !important;  transition-delay: " + (b.fading_time + 200) + "ms !important;}</style>");
                b.remove_scrollbar && (d.html_style = "undefined" != typeof jQuery("html").attr("style") ? jQuery("html").attr("style") : "", d.body_style = "undefined" != typeof jQuery("body").attr("style") ? jQuery("body").attr("style") : "", e = a(window).width(), a("html").css({
                    overflow: "hidden",
                    "margin-right": a(window).width() -
                        e,
                    "touch-action": "none"
                }), a("body").css({
                    overflow: "visible",
                    "touch-action": "none"
                }));
                e = d.elems[c.elem_index];
                "image" != e.type || "image" == e.type && "undefined" != typeof c.img_sizes_cache[e.src] ? a("#lcl_wrap").addClass("lcl_show_already_shaped") : L();
                "function" == typeof b.html_is_ready && b.html_is_ready.call({
                    opts: h,
                    vars: d
                });
                d.is_arr_instance || lcl_curr_obj.first().trigger("lcl_html_is_ready", [h, d])
            },
            E = function(b) {
                if ("undefined" == typeof b) {
                    b = (100 - parseInt(h.max_width)) / 2;
                    var c = (100 - parseInt(h.max_height)) / 2;
                    a("#lcl_wrap").css("padding", c + "vh " + b + "vw")
                } else a("#lcl_wrap").css("padding", 0)
            },
            J = function() {
                if (!lcl_shown) return !1;
                var b = d,
                    c = b.elems[b.elem_index];
                a("#lcl_wrap").attr("lc-lelem", b.elem_index);
                h.carousel || (a("#lcl_wrap").removeClass("lcl_first_elem lcl_last_elem"), b.elem_index ? b.elem_index == b.elems.length - 1 && a("#lcl_wrap").addClass("lcl_last_elem") : a("#lcl_wrap").addClass("lcl_first_elem"));
                a(document).trigger("lcl_before_populate_global", [c, b.elem_index]);
                var e = d.elem_index;
                a("#lcl_elem_wrap").removeAttr("style").removeAttr("class").empty();
                a("#lcl_wrap").attr("lcl-type", c.type);
                a("#lcl_elem_wrap").addClass("lcl_" + c.type + "_elem");
                switch (c.type) {
                    case "image":
                        a("#lcl_elem_wrap").html('<img class="lcl_elem" style="visibility: hidden;" src="' + c.src + '" />');
                        a("#lcl_elem_wrap").css("background-image", "url('" + c.src + "')");
                        break;
                    default:
                        a("#lcl_elem_wrap").html('<div id="lcl_inline" class="lcl_elem"><br/><br/>Error loading the resource .. </div>')
                } - 1 === a.inArray(c.type, ["image", "video", "unknown", "html"]) && V();
                if (c.download) {
                    a(".lcl_download").show();
                    var f = c.download.split("/");
                    f = f[f.length - 1];
                    a(".lcl_download").html('<a href="' + c.download + '" target="_blank" download="' + f + '"></a>')
                } else a(".lcl_download").hide();
                a(".lcl_counter").html(e + 1 + " / " + d.elems.length);
                F(c) && "unknown" != c.type ? (a("#lcl_wrap").removeClass("lcl_no_txt"), a(".lcl_txt_toggle").show(), c.title && a("#lcl_txt").append('<h3 id="lcl_title">' + c.title + "</h3>"), c.author && a("#lcl_txt").append('<h5 id="lcl_author">by ' + c.author + "</h5>"), c.txt && a("#lcl_txt").append('<section id="lcl_descr">' +
                    c.txt + "</section>"), c.txt && (c.title && c.author ? a("#lcl_txt h5").addClass("lcl_txt_border") : a("#lcl_txt h3").length ? a("#lcl_txt h3").addClass("lcl_txt_border") : a("#lcl_txt h5").addClass("lcl_txt_border"))) : (a(".lcl_txt_toggle").hide(), a("#lcl_wrap").addClass("lcl_no_txt"));
                b.is_arr_instance || lcl_curr_obj.first().trigger("lcl_before_show", [c, b.elem_index]);
                a(document).trigger("lcl_before_show_global", [c, b.elem_index]);
                a("#lcl_wrap").hasClass("lcl_pre_first_el") && ("function" == typeof h.on_open && h.on_open.call({
                    opts: h,
                    vars: d
                }), b.is_arr_instance || lcl_curr_obj.first().trigger("lcl_on_open", [b]));
                r(c);
                a("#lcl_subj").removeClass("lcl_switching_el")
            },
            F = function(a) {
                return a.title || a.txt || a.author ? !0 : !1
            },
            r = function(b, c, e) {
                var f = h;
                "undefined" == typeof c && (c = {});
                var k = (e = a(".lcl_fullscreen_mode").length ? !0 : !1) ? 0 : 2 * parseInt(f.border_w) + 2 * parseInt(f.padding),
                    l = a(".lcl_force_txt_over").length || a(".lcl_hidden_txt").length || -1 === a.inArray(f.data_position, ["rside", "lside"]) || !F(b) ? 0 : a("#lcl_txt").outerWidth();
                var m = e || !a("#lcl_thumbs_nav").length ||
                    a(".lcl_tn_hidden").length ? 0 : a("#lcl_thumbs_nav").outerHeight(!0);
                var g = !e && a(".lcl_outer_cmd").length ? a("#lcl_nav_cmd").outerHeight() : 0;
                var p = e ? a(window).width() : Math.floor(a("#lcl_wrap").width()) - k - l;
                g = e ? a(window).height() : Math.floor(a("#lcl_wrap").height()) - k - m - g;
                if ("object" == typeof d.txt_und_sizes) {
                    p = d.txt_und_sizes.w;
                    var n = d.txt_und_sizes.h
                } else switch (b.type) {
                    case "image":
                        a("#lcl_elem_wrap").css("bottom", 0);
                        m = d.img_sizes_cache[b.src];
                        a("#lcl_elem_wrap img").css({
                            maxWidth: m.w < p ? m.w : p,
                            maxHeight: m.h <
                                g ? m.h : g
                        });
                        p = a("#lcl_elem_wrap img").width();
                        n = a("#lcl_elem_wrap img").height();
                        if (F(b) && !a(".lcl_hidden_txt").length && "under" == f.data_position && "undefined" == typeof c.no_txt_under) return M(p, n, g), a(document).off("lcl_txt_und_calc").on("lcl_txt_und_calc", function() {
                            if (d.txt_und_sizes) return "no_under" == d.txt_und_sizes && (c.no_txt_under = !0), r(b, c)
                        }), !1;
                        a("#lcl_subj").css("maxHeight", "none");
                        break;
                    default:
                        p = 280, n = 125
                }
                if (("rside" == f.data_position || "lside" == f.data_position) && !a(".lcl_no_txt").length && "undefined" ==
                    typeof c.side_txt_checked && ((m = "image" == b.type ? d.img_sizes_cache[b.src] : "") && 280 < m.w && 280 < m.h || "undefined" != typeof cust_w && (!cust_w || 280 < cust_w) || "undefined" != typeof cust_h && (!cust_h || 280 < cust_h)) && !Z(p + k, n + k, l)) return c.side_txt_checked = !0, r(b, c);
                d.txt_und_sizes = !1;
                if ("undefined" == typeof c.inner_cmd_checked && ("inner" == f.cmd_position || b.force_outer_cmd) && aa(b, p)) return c.inner_cmd_checked = !0, r(b, c);
                a("#lcl_wrap").removeClass("lcl_pre_first_el");
                a("#lcl_window").css({
                    width: e ? "100%" : p + k + l,
                    height: e ?
                        "100%" : n + k
                });
                a(".lcl_show_already_shaped").length && setTimeout(function() {
                    a("#lcl_wrap").removeClass("lcl_show_already_shaped");
                    L()
                }, 10);
                N();
                "undefined" != typeof lcl_size_n_show_timeout && clearTimeout(lcl_size_n_show_timeout);
                e = a(".lcl_first_sizing").length ? f.open_close_time : f.animation_time;
                a(".lcl_browser_resize").length && (e = 0);
                lcl_size_n_show_timeout = setTimeout(function() {
                    lcl_is_active && (lcl_is_active = !1);
                    a(".lcl_first_sizing").length && f.autoplay && 1 < d.elems.length && (f.carousel || d.elem_index < d.elems.length -
                        1) && lcl_start_slideshow();
                    if ("image" == b.type && (a(".lcl_fullscreen_mode").length ? ba() : a(".lcl_image_elem").css("background-size", "cover"), a(".lcl_zoomable").length)) {
                        parseFloat(a(".lcl_elem").attr("lcl-zoom"));
                        var c = d;
                        c = c.elems[c.elem_index];
                        "undefined" != typeof c && (c = d.img_sizes_cache[c.src], c.w <= a("#lcl_subj").width() && c.h <= a("#lcl_subj").height() ? (a(".lcl_zoom_icon").hide(), a("#lcl_elem_wrap").css({
                                width: "100%",
                                height: "100%"
                            }), a(".lcl_elem").attr("lcl-zoom", 1), a(".lcl_zoom_out").addClass("lcl_zoom_disabled"),
                            a(".lcl_zoom_in").removeClass("lcl_zoom_disabled"), a("#lcl_subj").removeClass("lcl_zoom_wrap")) : a(".lcl_zoom_icon").show())
                    }
                    a(".lcl_loading_iframe").length && ca();
                    a("#lcl_wrap").removeClass("lcl_first_sizing lcl_switching_elem lcl_is_resizing lcl_browser_resize");
                    a(document).trigger("lcl_resized_window")
                }, e)
            };
        a(window).resize(function() {
            if (!lcl_shown || g != lcl_curr_obj || a(".lcl_toggling_fs").length) return !1;
            a("#lcl_wrap").addClass("lcl_browser_resize");
            "undefined" != typeof lcl_rs_defer && clearTimeout(lcl_rs_defer);
            lcl_rs_defer = setTimeout(function() {
                lcl_resize()
            }, 50)
        });
        var M = function(b, c, e, f) {
                var k = "undefined" == typeof f ? 1 : f,
                    g = a(".lcl_fullscreen_mode").length;
                a("#lcl_txt").outerHeight();
                var m = b / c;
                if (g && a("#lcl_thumbs_nav").length) return a("#lcl_wrap").addClass("lcl_force_txt_over"), a("#lcl_subj").css("maxHeight", "none"), a("#lcl_txt").css({
                    right: 0,
                    width: "auto"
                }), d.txt_und_sizes = "no_under", a(document).trigger("lcl_txt_und_calc"), !1;
                a("#lcl_wrap").removeClass("lcl_force_txt_over").addClass("lcl_txt_under_calc");
                g ? a("#lcl_txt").css({
                    right: 0,
                    width: "auto"
                }) : a("#lcl_txt").css({
                    right: "auto",
                    width: b
                });
                "undefined" != typeof lcl_txt_under_calc && clearInterval(lcl_txt_under_calc);
                lcl_txt_under_calc = setTimeout(function() {
                    var l = Math.ceil(a("#lcl_txt").outerHeight()),
                        p = c + l - e;
                    if (g) return a("#lcl_wrap").removeClass("lcl_txt_under_calc"), a("#lcl_subj").css("maxHeight", c - l), d.txt_und_sizes = {
                        w: b,
                        h: c
                    }, a(document).trigger("lcl_txt_und_calc"), !1;
                    if (0 < p && ("undefined" == typeof f || 10 > f)) return l = c - p, p = Math.floor(l * m), 160 > p || 160 > l ?
                        (a("#lcl_wrap").removeClass("lcl_txt_under_calc").addClass("lcl_force_txt_over"), a("#lcl_subj").css("maxHeight", "none"), a("#lcl_txt").css({
                            right: 0,
                            width: "auto"
                        }), d.txt_und_sizes = "no_under", a(document).trigger("lcl_txt_und_calc"), !0) : M(p, l, e, k + 1);
                    a("#lcl_wrap").removeClass("lcl_txt_under_calc");
                    a("#lcl_subj").css("maxHeight", c + h.padding);
                    d.txt_und_sizes = {
                        w: b,
                        h: c + l
                    };
                    a(document).trigger("lcl_txt_und_calc");
                    return !0
                }, 80)
            },
            Z = function(b, c, e) {
                e = a(".lcl_force_txt_over").length;
                if (500 > a(window).width() || 500 >
                    a(window).height() || 280 > b || 280 > c) {
                    if (e) return !0;
                    a("#lcl_wrap").addClass("lcl_force_txt_over")
                } else {
                    if (!e) return !0;
                    a("#lcl_wrap").removeClass("lcl_force_txt_over")
                }
                return !1
            },
            aa = function(b, c) {
                var e = h,
                    f = a(".lcl_fullscreen_mode").length ? !0 : !1;
                if (a(".lcl_forced_outer_cmd").length) {
                    a("#lcl_wrap").removeClass("lcl_forced_outer_cmd");
                    a("#lcl_wrap").removeClass("lcl_outer_cmd").addClass("lcl_inner_cmd");
                    var k = a("#lcl_nav_cmd").detach();
                    a("#lcl_window").prepend(k)
                }
                f || !1 !== d.inner_cmd_w || (d.inner_cmd_w = 0, jQuery("#lcl_nav_cmd .lcl_icon").each(function() {
                    if ((a(this).hasClass("lcl_prev") ||
                            a(this).hasClass("lcl_next")) && "middle" == e.nav_btn_pos) return !0;
                    d.inner_cmd_w += a(this).outerWidth(!0)
                }));
                return f || b.force_outer_cmd || c <= d.inner_cmd_w ? (a("#lcl_wrap").addClass("lcl_forced_outer_cmd"), a("#lcl_wrap").removeClass("lcl_inner_cmd").addClass("lcl_outer_cmd"), k = a("#lcl_nav_cmd").detach(), a("#lcl_wrap").prepend(k), !0) : !1
            },
            n = function(b, c) {
                var e = d,
                    f = h.carousel;
                if (lcl_is_active || 2 > e.elems.length || a(".lcl_switching_elem").length) return !1;
                if ("next" == b)
                    if (e.elem_index == e.elems.length - 1) {
                        if (!f) return !1;
                        b = 0
                    } else b = e.elem_index + 1;
                else if ("prev" == b)
                    if (e.elem_index) b = e.elem_index - 1;
                    else {
                        if (!f) return !1;
                        b = e.elems.length - 1
                    }
                else if (b = parseInt(b), 0 > b || b >= e.elems.length || b == e.elem_index) return !1;
                "undefined" != typeof lcl_slideshow && ("undefined" == typeof c || !f && b == e.elems.length - 1) && lcl_stop_slideshow();
                lcl_is_active = !0;
                O(b);
                a("#lcl_wrap").addClass("lcl_switching_elem");
                setTimeout(function() {
                    a("#lcl_wrap").removeClass("lcl_playing_video");
                    "function" == typeof h.on_elem_switch && h.on_elem_switch.call({
                        opts: h,
                        vars: d,
                        new_el: b
                    });
                    !e.is_arr_instance && lcl_curr_obj && lcl_curr_obj.first().trigger("lcl_on_elem_switch", [e.elem_index, b]);
                    a("#lcl_wrap").removeClass("lcl_no_txt lcl_loading_iframe");
                    a("#lcl_txt").empty();
                    e.elem_index = b;
                    u(!0);
                    I()
                }, h.fading_time)
            },
            P = function(b) {
                var c = h;
                if (!c.progressbar) return !1;
                b = b ? 0 : c.animation_time + c.fading_time;
                var e = c.slideshow_time + c.animation_time - b;
                a("#lcl_progressbar").length || a("#lcl_wrap").append('<div id="lcl_progressbar"></div>');
                "undefined" != typeof lcl_pb_timeout && clearTimeout(lcl_pb_timeout);
                lcl_pb_timeout = setTimeout(function() {
                    a("#lcl_progressbar").stop(!0).removeAttr("style").css("width", 0).animate({
                        width: "100%"
                    }, e, "linear", function() {
                        a("#lcl_progressbar").fadeTo(0, 0)
                    })
                }, b)
            },
            G = function() {
                if (!lcl_shown) return !1;
                "function" == typeof h.on_close && h.on_close.call({
                    opts: h,
                    vars: d
                });
                d.is_arr_instance || lcl_curr_obj.first().trigger("lcl_on_close", [d]);
                a(document).trigger("lcl_on_close_global");
                a("#lcl_wrap").removeClass("lcl_shown").addClass("lcl_is_closing lcl_tn_hidden");
                lcl_stop_slideshow();
                a(".lcl_fullscreen_mode").length && Q();
                setTimeout(function() {
                    a("#lcl_wrap, #lcl_inline_style").remove();
                    h.remove_scrollbar && (jQuery("html").attr("style", d.html_style), jQuery("body").attr("style", d.body_style));
                    lcl_is_active = lcl_shown = lcl_forced_external_cmd = lcl_forced_over_layout = lcl_curr_vars = lcl_curr_opts = lcl_curr_obj = !1
                }, h.open_close_time + 80);
                "undefined" != typeof lcl_size_check && clearTimeout(lcl_size_check)
            },
            z = function() {
                lcl_hashless_url = window.location.href;
                if (-1 !== lcl_hashless_url.indexOf("#")) {
                    var a =
                        lcl_hashless_url.split("#");
                    lcl_hashless_url = a[0];
                    lcl_url_hash = "#" + a[1]
                }
                var c = {};
                a = lcl_hashless_url.slice(lcl_hashless_url.indexOf("?") + 1).split("&");
                jQuery.each(a, function(a, b) {
                    var e = b.split("=");
                    c[e[0]] = e[1]
                });
                return c
            };
        if (0 == lcl_objs.length) a(document).on("lcl_before_show_global", function(a, c) {
            if (lcl_curr_opts.deeplink && c.hash && -1 === navigator.appVersion.indexOf("MSIE 9.")) {
                var b = z(),
                    f = c.title ? c.hash + "/" + encodeURIComponent(c.title.replace(/\s+/g, "-")) : c.hash,
                    d = "lcl=" + f + lcl_url_hash;
                if (-1 === lcl_hashless_url.indexOf("?")) history.pushState(null,
                    null, lcl_hashless_url + "?" + d);
                else {
                    if ("undefined" != typeof b.lcl && b.lcl == f) return !0;
                    var g = lcl_hashless_url.slice(0, lcl_hashless_url.indexOf("?") + 1),
                        m = 0,
                        h = !1;
                    jQuery.each(b, function(a, b) {
                        "undefined" != typeof a && (0 < m && (g += "&"), "lcl" != a && (g += b ? a + "=" + b : a, h = !0, m++))
                    });
                    h && (g += "&");
                    g += d;
                    history.pushState(null, null, g)
                }
            }
        });
        if (0 == lcl_objs.length) a(document).on("lcl_on_close_global", function() {
            var a = z();
            if ("undefined" == typeof a.lcl || -1 !== navigator.appVersion.indexOf("MSIE 9.")) return !0;
            var c = [];
            jQuery.each(a, function(a,
                b) {
                "undefined" != typeof a && a && "lcl" != a && c.push(b ? a + "=" + b : a)
            });
            a = c.length ? "?" : "";
            a = lcl_hashless_url.slice(0, lcl_hashless_url.indexOf("?")) + a + c.join("&") + lcl_url_hash;
            history.pushState(null, null, a)
        });
        q.deeplink && !lcl_deeplink_tracked && (lcl_deeplink_tracked = !0, window.onpopstate = function(b) {
            b = z();
            if ("undefined" == typeof b.lcl) lcl_shown && lcl_close();
            else {
                var c = b.lcl.split("/");
                lcl_shown ? a.each(lcl_curr_vars.elems, function(a, b) {
                    if (b.hash == c[0]) return lcl_switch(a), !1
                }) : a.each(lcl_objs, function(b, f) {
                    a(document).trigger("lcl_open_from_hash", [f, c[0]])
                })
            }
        });
        var da = function() {
            var b = z();
            if (!lcl_shown && "undefined" != typeof b.lcl) {
                var c = b.lcl.split("/");
                a.each(lcl_objs, function(b, f) {
                    a(document).trigger("lcl_open_from_hash", [f, c[0]])
                })
            }
        };
        a(document).ready(function() {
            setTimeout(function() {
                a(document).trigger("lcl_look_for_deeplink")
            }, 100)
        });
        a(document).off("lcl_look_for_deeplink").on("lcl_look_for_deeplink", function() {
            da()
        });
        a(document).off("lcl_open_from_hash").on("lcl_open_from_hash", function(b, c, e) {
            b = a.data(c, "lcl_vars");
            if ("undefined" == typeof b ||
                !b) return !1;
            a.each(b.elems, function(a, b) {
                if (b.hash == e) return lcl_curr_obj = c, lcl_open(c, a), !1
            })
        });
        var C = function(b, c) {
                "undefined" == typeof c && (c = !1);
                if (!lcl_shown || !h.fullscreen || !c && lcl_is_active) return !1;
                var e = h,
                    f = d;
                a("#lcl_wrap").addClass("lcl_toggling_fs");
                e.browser_fs_mode && "undefined" != typeof b && (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.msRequestFullscreen ? document.documentElement.msRequestFullscreen() : document.documentElement.mozRequestFullScreen ?
                    document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT));
                setTimeout(function() {
                    a("#lcl_wrap").addClass("lcl_fullscreen_mode");
                    E(!0);
                    c || r(f.elems[f.elem_index]);
                    a(document).on("lcl_resized_window", function() {
                        a(document).off("lcl_resized_window");
                        (c || "under" == lcl_curr_opts.data_position && !a(".lcl_force_txt_over").length) && r(lcl_curr_vars.elems[lcl_curr_vars.elem_index]);
                        setTimeout(function() {
                                a("#lcl_wrap").removeClass("lcl_toggling_fs")
                            },
                            200)
                    })
                }, c ? e.open_close_time : e.fading_time);
                "function" == typeof e.on_fs_enter && e.on_fs_enter.call({
                    opts: e,
                    vars: f
                });
                d.is_arr_instance || lcl_curr_obj.first().trigger("lcl_on_fs_enter")
            },
            ba = function() {
                var b = h.fs_img_behavior;
                if ("image" != d.elems[d.elem_index].type) return !1;
                var c = d.img_sizes_cache[d.elems[d.elem_index].src];
                if (a(".lcl_fullscreen_mode").length && c.w <= a("#lcl_subj").width() && c.h <= a("#lcl_subj").height()) return a(".lcl_image_elem").css("background-size", "auto"), !1;
                if ("fit" == b) a(".lcl_image_elem").css("background-size",
                    "contain");
                else if ("fill" == b) a(".lcl_image_elem").css("background-size", "cover");
                else {
                    if ("undefined" == typeof c) return a(".lcl_image_elem").css("background-size", "cover"), !1;
                    b = a(window).width() / a(window).height() - c.w / c.h;
                    var e = a(window).width() - c.w;
                    c = a(window).height() - c.h;
                    1.15 >= b && -1.15 <= b && 350 >= e && 350 >= c ? a(".lcl_image_elem").css("background-size", "cover") : a(".lcl_image_elem").css("background-size", "contain")
                }
            },
            R = function(b) {
                if (!lcl_shown || !h.fullscreen || lcl_is_active) return !1;
                var c = h;
                a("#lcl_wrap").addClass("lcl_toggling_fs");
                setTimeout(function() {
                    c.browser_fs_mode && "undefined" != typeof b && Q();
                    E();
                    a("#lcl_wrap").removeClass("lcl_fullscreen_mode");
                    setTimeout(function() {
                        r(d.elems[d.elem_index]);
                        setTimeout(function() {
                            a("#lcl_wrap").removeClass("lcl_toggling_fs")
                        }, c.animation_time)
                    }, 550)
                }, c.fading_time);
                "function" == typeof c.on_fs_exit && c.on_fs_exit.call({
                    opts: h,
                    vars: d
                });
                d.is_arr_instance || lcl_curr_obj.first().trigger("lcl_on_fs_exit")
            },
            Q = function() {
                document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ?
                    document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
            };
        if (0 == lcl_objs.length) a(document).on("lcl_before_show_global", function(b, c, e) {
            a(".lcl_zoom_icon").hide();
            a("#lcl_subj").removeClass("lcl_zoomable lcl_zoom_wrap");
            if ("image" != c.type || !lcl_curr_opts.img_zoom) return !0;
            b = lcl_curr_vars.img_sizes_cache[c.src];
            if (a("#lcl_subj").width() >= b.w && a("#lcl_subj").height() >= b.h) return !0;
            a("#lcl_elem_wrap").css({
                width: "100%",
                height: "100%"
            });
            a(".lcl_elem").attr("lcl-zoom", 1);
            a("#lcl_subj").addClass("lcl_zoomable");
            a(".lcl_zoom_out").addClass("lcl_zoom_disabled");
            a(".lcl_zoom_in").removeClass("lcl_zoom_disabled");
            a(".lcl_zoom_icon").show()
        });
        var v = function(b, c) {
            var e = a("#lcl_elem_wrap"),
                f = e.width(),
                k = e.height(),
                g = parseFloat(a(".lcl_elem").attr("lcl-zoom")),
                h = 0,
                n = d,
                p = d.img_sizes_cache[n.elems[n.elem_index].src];
            b && (f < p.w || k < p.h) ? (h = g + .25, e.css({
                width: 100 * h + "%",
                height: 100 * h + "%"
            })) : !b && f > a("#lcl_subj").width() && (h = g - .25, 1 >=
                h && (h = 1), e.css({
                    width: 100 * h + "%",
                    height: 100 * h + "%"
                }));
            h && (a(".lcl_elem").attr("lcl-zoom", h), 1 < h ? (a(".lcl_zoom_out").removeClass("lcl_zoom_disabled"), a("#lcl_subj").addClass("lcl_zoom_wrap"), a("#lcl_subj").lcl_smoothscroll(.35, 400), setTimeout(function() {
                p.w <= e.width() && p.h <= e.height() && a(".lcl_zoom_in").addClass("lcl_zoom_disabled")
            }, 310)) : (a(".lcl_zoom_out").addClass("lcl_zoom_disabled"), a(".lcl_zoom_in").removeClass("lcl_zoom_disabled"), a("#lcl_subj").removeClass("lcl_zoom_wrap")))
        };
        a(document).on("click",
            ".lcl_zoom_in",
            function() {
                if (g != lcl_curr_obj) return !0;
                v(!0)
            });
        a(document).on("click", ".lcl_zoom_out", function() {
            if (g != lcl_curr_obj) return !0;
            v(!1)
        });
        var Y = function() {
                var b = !1,
                    c = !1,
                    e = Date.now();
                a("#lcl_thumbs_nav").append('<span class="lcl_tn_prev"></span><ul class="lcl_tn_inner"></ul><span class="lcl_tn_next"></span>');
                a("#lcl_thumbs_nav").attr("rel", e);
                a.each(d.elems, function(f, k) {
                    if ("unknown" != k.type) {
                        b || (c && c != k.type ? b = !0 : c = k.type);
                        var g = "",
                            m = "";
                        tpc = "";
                        switch (k.type) {
                            case "image":
                                m = k.src;
                                break;
                            case "youtube":
                                m = "https://img.youtube.com/vi/" + k.video_id + "/maxresdefault.jpg";
                                break;
                            case "vimeo":
                                "undefined" == typeof d.vimeo_thumb_cache[k.src] ? (tpc = "lcl_tn_preload", a.getJSON("http://www.vimeo.com/api/v2/video/" + k.video_id + ".json?callback=?", {
                                        format: "json"
                                    }, function(b) {
                                        S(b[0].thumbnail_large, f, e);
                                        d.vimeo_thumb_cache[k.src] = b[0].thumbnail_large;
                                        a(".lcl_tn_inner li[rel=" + f + "]").attr("style", a(".lcl_tn_inner li[rel=" + f + "]").attr("style") + " background-image: url('" + b[0].thumbnail_large + "');")
                                    })) : m =
                                    d.vimeo_thumb_cache[k.src];
                                break;
                            case "video":
                            case "iframe":
                            case "html":
                                k.poster && (m = k.poster);
                                break;
                            case "dailymotion":
                                m = "http://www.dailymotion.com/thumbnail/video/" + k.video_id
                        }
                        m && (h.thumbs_maker_url && -1 === a.inArray(m, ["youtube", "vimeo", "dailymotion"]) && (m = h.thumbs_maker_url.replace("%URL%", encodeURIComponent(m)).replace("%W%", h.thumbs_w).replace("%H%", h.thumbs_h)), g = "style=\"background-image: url('" + m + "');\"");
                        if (("html" == k.type || "iframe" == k.type) && !g) return !0;
                        var n = "video" != k.type || g ? "" : '<video src="' +
                            k.src + '"></video>';
                        tpc = "lcl_tn_preload";
                        a(".lcl_tn_inner").append('<li class="lcl_tn_' + k.type + " " + tpc + '" title="' + k.title + '" rel="' + f + '" ' + g + ">" + n + "</li>");
                        tpc && S(m, f, e)
                    }
                });
                if (2 > a(".lcl_tn_inner > li").length) return a("#lcl_thumbs_nav").remove(), !1;
                a(".lcl_tn_inner > li").css("width", h.thumbs_w);
                lcl_on_mobile || a(".lcl_tn_inner").lcl_smoothscroll(.3, 400, !1, !0);
                b && h.tn_icons && a(".lcl_tn_inner").addClass("lcl_tn_mixed_types");
                O(d.elem_index)
            },
            S = function(b, c, e) {
                a("<img/>").bind("load", function() {
                    if (!d) return !1;
                    d.img_sizes_cache[b] = {
                        w: this.width,
                        h: this.height
                    };
                    a("#lcl_thumbs_nav[rel=" + e + "] li[rel=" + c + "]").removeClass("lcl_tn_preload");
                    setTimeout(function() {
                        N();
                        H()
                    }, 500)
                }).attr("src", b)
            },
            T = function() {
                var b = 0;
                a(".lcl_tn_inner > li").each(function() {
                    b += a(this).outerWidth(!0)
                });
                return b
            },
            N = function() {
                if (!a("#lcl_thumbs_nav").length) return !1;
                T() > a(".lcl_tn_inner").width() ? a("#lcl_thumbs_nav").addClass("lcl_tn_has_arr") : a("#lcl_thumbs_nav").removeClass("lcl_tn_has_arr")
            },
            H = function() {
                var b = a(".lcl_tn_inner").scrollLeft();
                b ? a(".lcl_tn_prev").removeClass("lcl_tn_disabled_arr").stop(!0).fadeTo(150, 1) : a(".lcl_tn_prev").addClass("lcl_tn_disabled_arr").stop(!0).fadeTo(150, .5);
                b >= T() - a(".lcl_tn_inner").width() ? a(".lcl_tn_next").addClass("lcl_tn_disabled_arr").stop(!0).fadeTo(150, .5) : a(".lcl_tn_next").removeClass("lcl_tn_disabled_arr").stop(!0).fadeTo(150, 1)
            };
        a(document).on("lcl_smoothscroll_end", ".lcl_tn_inner", function(a) {
            if (g != lcl_curr_obj) return !0;
            H()
        });
        var O = function(b) {
            var c = a(".lcl_tn_inner > li[rel=" + b + "]");
            if (!c.length) return !1;
            var e = 0;
            a(".lcl_tn_inner > li").each(function(c, f) {
                if (a(this).attr("rel") == b) return e = c, !1
            });
            var f = a(".lcl_tn_inner > li").last().outerWidth(),
                d = parseInt(a(".lcl_tn_inner > li").last().css("margin-left"));
            a(".lcl_tn_inner").width();
            var g = Math.floor((a(".lcl_tn_inner").width() - f - d) / 2);
            f = f * e + d * (e - 1) + Math.floor(d / 2) - g;
            a(".lcl_tn_inner").stop(!0).animate({
                scrollLeft: f
            }, 500, function() {
                a(".lcl_tn_inner").trigger("lcl_smoothscroll_end")
            });
            a(".lcl_tn_inner > li").removeClass("lcl_sel_thumb");
            c.addClass("lcl_sel_thumb")
        };
        a.fn.lcl_smoothscroll = function(b, c, e, f) {
            if (lcl_on_mobile) return !1;
            this.off("mousemove mousedown mouseup mouseenter mouseleave");
            var d = this,
                g = "undefined" != typeof e && e ? !1 : !0,
                h = "undefined" != typeof f && f ? !1 : !0,
                n = !1,
                p = !1,
                q = 0,
                r = 0,
                t = 0,
                u = 0;
            d.mousemove(function(a) {
                !0 === p && (d.stop(!0), g && d.scrollLeft(u + (r - a.pageX)), h && d.scrollTop(t + (q - a.pageY)))
            });
            d.mouseover(function() {
                n && clearTimeout(n)
            });
            d.mouseout(function() {
                n = setTimeout(function() {
                    n = p = !1
                }, 500)
            });
            d.mousedown(function(a) {
                "undefined" != typeof lc_sms_timeout &&
                    clearTimeout(lc_sms_timeout);
                p = !0;
                t = d.scrollTop();
                u = d.scrollLeft();
                q = a.pageY;
                r = a.pageX
            });
            d.mouseup(function(e) {
                p = !1;
                var f = d.scrollTop(),
                    k = -1 * (t - f);
                f += k * b;
                var l = d.scrollLeft(),
                    m = -1 * (u - l);
                l += m * b;
                if (3 > k && -3 < k && 3 > m && -3 < m) return a(e.target).trigger("lcl_tn_elem_click"), !1;
                if (20 < k || 20 < m) e = {}, h && (e.scrollTop = f), g && (e.scrollLeft = l), d.stop(!0).animate(e, c, "linear", function() {
                    d.trigger("lcl_smoothscroll_end")
                })
            })
        };
        if (!w.is_arr_instance)
            if (q.live_elements && "undefined" != typeof g.selector) a(document).off("click",
                g.selector).on("click", g.selector, function(b) {
                b.preventDefault();
                a.data(g, "lcl_vars").elems_count = a(g.selector).length;
                D(g, a(this));
                g.first().trigger("lcl_clicked_elem", [a(this)])
            });
            else g.off("click"), g.on("click", function(b) {
                b.preventDefault();
                D(g, a(this));
                g.first().trigger("lcl_clicked_elem")
            });
        a(document).on("click", "#lcl_overlay:not(.lcl_modal), .lcl_close, #lcl_corner_close", function(a) {
            if (g != lcl_curr_obj) return !0;
            G()
        });
        a(document).on("click", ".lcl_prev", function(a) {
            if (g != lcl_curr_obj) return !0;
            n("prev")
        });
        a(document).on("click", ".lcl_next", function(a) {
            if (g != lcl_curr_obj) return !0;
            n("next")
        });
        a(document).bind("keydown", function(b) {
            if (lcl_shown) {
                if (g != lcl_curr_obj) return !0;
                39 == b.keyCode ? (b.preventDefault(), n("next")) : 37 == b.keyCode ? (b.preventDefault(), n("prev")) : 27 == b.keyCode ? (b.preventDefault(), G()) : 122 == b.keyCode && h.fullscreen && ("undefined" != typeof lcl_fs_key_timeout && clearTimeout(lcl_fs_key_timeout), lcl_fs_key_timeout = setTimeout(function() {
                    a(".lcl_fullscreen_mode").length ? R() : C()
                }, 50))
            }
        });
        a(document).on("wheel", "#lcl_overlay, #lcl_window, #lcl_thumbs_nav:not(.lcl_tn_has_arr)", function(b) {
            if (g != lcl_curr_obj) return !0;
            lcl_curr_opts.mousewheel && b.target.scrollHeight <= a(b.target).height() && (b.preventDefault(), 0 < b.originalEvent.deltaY ? n("prev") : n("next"))
        });
        a(document).on("click", ".lcl_image_elem", function(b) {
            if (g != lcl_curr_obj) return !0;
            lcl_img_click_track = setTimeout(function() {
                a(".lcl_zoom_wrap").length || n("next")
            }, 250)
        });
        a(document).on("dblclick", ".lcl_image_elem", function(b) {
            if (g != lcl_curr_obj ||
                !lcl_curr_opts.img_zoom || !a(".lcl_zoom_icon").length) return !0;
            "undefined" != typeof lcl_img_click_track && (clearTimeout(lcl_img_click_track), v(!0))
        });
        a(document).on("click", ".lcl_txt_toggle", function(b) {
            if (g != lcl_curr_obj) return !0;
            b = h;
            if (!lcl_is_active && !a(".lcl_no_txt").length && !a(".lcl_toggling_txt").length)
                if ("over" != b.data_position) {
                    var c = "rside" == b.data_position || "lside" == b.data_position ? !0 : !1,
                        e = a(".lcl_force_txt_over").length,
                        d = 150 > b.animation_time ? b.animation_time : 150,
                        k = 0;
                    c && !e ? a("#lcl_subj").fadeTo(d,
                        0) : e || (a("#lcl_contents_wrap").fadeTo(d, 0), k = d);
                    setTimeout(function() {
                        a("#lcl_wrap").toggleClass("lcl_hidden_txt")
                    }, k);
                    e || (lcl_is_active = !0, a("#lcl_wrap").addClass("lcl_toggling_txt"), setTimeout(function() {
                        lcl_is_active = !1;
                        lcl_resize()
                    }, b.animation_time), setTimeout(function() {
                        a("#lcl_wrap").removeClass("lcl_toggling_txt");
                        c && !e ? a("#lcl_subj").fadeTo(d, 1) : e || a("#lcl_contents_wrap").fadeTo(d, 1)
                    }, 2 * b.animation_time + 50))
                } else a("#lcl_wrap").toggleClass("lcl_hidden_txt")
        });
        a(document).on("click", ".lcl_play",
            function(b) {
                if (g != lcl_curr_obj) return !0;
                a(".lcl_is_playing").length ? lcl_stop_slideshow() : lcl_start_slideshow()
            });
        a(document).on("click", ".lcl_elem", function(b) {
            if (g != lcl_curr_obj) return !0;
            a(".lcl_playing_video").length || -1 === a.inArray(a("#lcl_wrap").attr("lcl-type"), ["video"]) || (lcl_stop_slideshow(), a("#lcl_wrap").addClass("lcl_playing_video"))
        });
        var ca = function() {
            "undefined" != typeof lcl_iframe_click_intval && clearInterval(lcl_iframe_click_intval);
            lcl_iframe_click_intval = setInterval(function() {
                var b =
                    a(document.activeElement);
                b.is("iframe") && b.hasClass("lcl_elem") && (a(".lcl_youtube_elem").length || a(".lcl_vimeo_elem").length || a(".lcl_dailymotion_elem").length) && (lcl_stop_slideshow(), a("#lcl_wrap").addClass("lcl_playing_video"), clearInterval(lcl_iframe_click_intval))
            }, 300)
        };
        a(document).on("click", ".lcl_socials", function(b) {
            if (g != lcl_curr_obj) return !0;
            if (a(".lcl_socials > div").length) a(".lcl_socials_tt").removeClass("lcl_show_tt"), setTimeout(function() {
                    a(".lcl_socials").removeClass("lcl_socials_shown").empty()
                },
                260);
            else {
                b = lcl_curr_vars.elems[lcl_curr_vars.elem_index];
                var c = encodeURIComponent(window.location.href),
                    e = encodeURIComponent(b.src),
                    d = encodeURIComponent(b.title);
                encodeURIComponent(b.txt);
                b = '<div class="lcl_socials_tt lcl_tooltip lcl_tt_bottom"><a class="lcl_icon lcl_fb" onClick="window.open(\'https://www.facebook.com/sharer?u=' + c + "&display=popup','sharer','toolbar=0,status=0,width=590,height=325');\" href=\"javascript: void(0)\"></a><a class=\"lcl_icon lcl_twit\" onClick=\"window.open('https://twitter.com/share?text=Check%20out%20%22" +
                    d + "%22%20@&url=" + c + "','sharer','toolbar=0,status=0,width=548,height=325');\" href=\"javascript: void(0)\"></a><a class=\"lcl_icon lcl_pint\" onClick=\"window.open('http://pinterest.com/pin/create/button/?url=" + c + "&media=" + e + "&description=" + d + "','sharer','toolbar=0,status=0,width=575,height=330');\" href=\"javascript: void(0)\"></a></div>";
                a(".lcl_socials").addClass("lcl_socials_shown").html(b);
                setTimeout(function() {
                    a(".lcl_socials_tt").addClass("lcl_show_tt")
                }, 20)
            }
        });
        a(document).on("click", ".lcl_fullscreen",
            function(b) {
                if (g != lcl_curr_obj) return !0;
                a(".lcl_fullscreen_mode").length ? R(!0) : C(!0)
            });
        a(document).on("click", ".lcl_thumbs_toggle", function(b) {
            if (g != lcl_curr_obj) return !0;
            b = a(".lcl_fullscreen_mode").length;
            a("#lcl_wrap").addClass("lcl_toggling_tn").toggleClass("lcl_tn_hidden");
            b || setTimeout(function() {
                lcl_resize()
            }, 160);
            setTimeout(function() {
                a("#lcl_wrap").removeClass("lcl_toggling_tn")
            }, lcl_curr_opts.animation_time + 50)
        });
        q = lcl_on_mobile ? " click" : "";
        a(document).on("lcl_tn_elem_click" + q, ".lcl_tn_inner > li",
            function(b) {
                if (g != lcl_curr_obj) return !0;
                b = a(this).attr("rel");
                n(b)
            });
        a(document).on("click", ".lcl_tn_prev:not(.lcl_tn_disabled_arr)", function(b) {
            if (g != lcl_curr_obj) return !0;
            a(".lcl_tn_inner").stop(!0).animate({
                scrollLeft: a(".lcl_tn_inner").scrollLeft() - lcl_curr_opts.thumbs_w - 10
            }, 300, "linear", function() {
                a(".lcl_tn_inner").trigger("lcl_smoothscroll_end")
            })
        });
        a(document).on("click", ".lcl_tn_next:not(.lcl_tn_disabled_arr)", function(b) {
            if (g != lcl_curr_obj) return !0;
            a(".lcl_tn_inner").stop(!0).animate({
                scrollLeft: a(".lcl_tn_inner").scrollLeft() +
                    lcl_curr_opts.thumbs_w + 10
            }, 300, "linear", function() {
                a(".lcl_tn_inner").trigger("lcl_smoothscroll_end")
            })
        });
        a(document).on("wheel", "#lcl_thumbs_nav.lcl_tn_has_arr", function(b) {
            if (g != lcl_curr_obj) return !0;
            b.preventDefault();
            0 < b.originalEvent.deltaY ? a(".lcl_tn_prev:not(.lcl_tn_disabled_arr)").trigger("click") : a(".lcl_tn_next:not(.lcl_tn_disabled_arr)").trigger("click")
        });
        a(document).on("contextmenu", "#lcl_wrap *", function() {
            if (g != lcl_curr_obj) return !0;
            if (h.rclick_prevent) return !1
        });
        a(window).on("touchmove",
            function(b) {
                a(b.target);
                if (!lcl_shown || !lcl_on_mobile || g != lcl_curr_obj) return !0;
                a(b.target).parents("#lcl_window").length || a(b.target).parents("#lcl_thumbs_nav").length || b.preventDefault()
            });
        var X = function() {
                if ("function" != typeof AlloyFinger) return !1;
                lcl_is_pinching = !1;
                var b = document.querySelector("#lcl_wrap");
                new AlloyFinger(b, {
                    singleTap: function(b) {
                        "lcl_overlay" != a(b.target).attr("id") || h.modal || lcl_close()
                    },
                    doubleTap: function(a) {
                        a.preventDefault();
                        v(!0)
                    },
                    pinch: function(a) {
                        a.preventDefault();
                        lcl_is_pinching = !0;
                        "undefined" != typeof lcl_swipe_delay && clearTimeout(lcl_swipe_delay);
                        "undefined" != typeof lcl_pinch_delay && clearTimeout(lcl_pinch_delay);
                        lcl_pinch_delay = setTimeout(function() {
                            1.2 < a.scale ? v(!0) : .8 > a.scale && v(!1);
                            setTimeout(function() {
                                lcl_is_pinching = !1
                            }, 300)
                        }, 20)
                    },
                    touchStart: function(a) {
                        lcl_touchstartX = a.changedTouches[0].clientX
                    },
                    touchEnd: function(b) {
                        var c = lcl_touchstartX - b.changedTouches[0].clientX;
                        if ((-50 > c || 50 < c) && !lcl_is_pinching) {
                            if (a(b.target).parents("#lcl_thumbs_nav").length || a(b.target).parents(".lcl_zoom_wrap").length) return !1;
                            b = a(b.target).parents(".lcl_zoomable").length ? 250 : 0;
                            "undefined" != typeof lcl_swipe_delay && clearTimeout(lcl_swipe_delay);
                            lcl_swipe_delay = setTimeout(function() {
                                -50 > c ? n("prev") : n("next")
                            }, b)
                        }
                    }
                })
            },
            y = function() {
                if (!lcl_curr_obj) return !1;
                d = a.data(lcl_curr_obj, "lcl_vars");
                h = a.data(lcl_curr_obj, "lcl_settings");
                return d ? !0 : (console.error("LC Lightbox. Object not initialized"), !1)
            };
        lcl_open = function(b, c) {
            var e = d = a.data(b, "lcl_vars");
            if (e) {
                if ("undefined" == typeof e.elems[c]) return console.error("LC Lightbox - cannot open. Unexisting index"), !1;
                e.elem_index = c;
                $clicked_obj = e.is_arr_instance ? !1 : a(b[c]);
                return D(b, $clicked_obj)
            }
            console.error("LC Lightbox - cannot open. Object not initialized");
            return !1
        };
        lcl_resize = function() {
            if (!lcl_shown || lcl_is_active || !y()) return !1;
            var b = d;
            "undefined" != typeof lcl_size_check && clearTimeout(lcl_size_check);
            lcl_size_check = setTimeout(function() {
                a("#lcl_wrap").addClass("lcl_is_resizing");
                H();
                return r(b.elems[b.elem_index])
            }, 20)
        };
        lcl_close = function() {
            return lcl_shown && !lcl_is_active && y() ? G() : !1
        };
        lcl_switch =
            function(a) {
                return lcl_shown && !lcl_is_active && y() ? n(a) : !1
            };
        lcl_start_slideshow = function(b) {
            if (!lcl_shown || "undefined" == typeof b && "undefined" != typeof lcl_slideshow || !y()) return !1;
            var c = h;
            if (!c.carousel && d.elem_index == d.elems.length - 1) return !1;
            "undefined" != typeof lcl_slideshow && clearInterval(lcl_slideshow);
            a("#lcl_wrap").addClass("lcl_is_playing");
            var e = c.animation_time + c.slideshow_time;
            P(!0);
            lcl_slideshow = setInterval(function() {
                P(!1);
                n("next", !0)
            }, e);
            "undefined" == typeof b && ("function" == typeof c.slideshow_start &&
                c.slideshow_start.call({
                    opts: c,
                    vars: d
                }), d.is_arr_instance || lcl_curr_obj.first().trigger("lcl_slideshow_start", [e]));
            return !0
        };
        lcl_stop_slideshow = function() {
            if (!lcl_shown || "undefined" == typeof lcl_slideshow || !y()) return !1;
            var b = h;
            if (!b) return console.error("LC Lightbox. Object not initialized"), !1;
            clearInterval(lcl_slideshow);
            lcl_slideshow = void 0;
            a("#lcl_wrap").removeClass("lcl_is_playing");
            a("#lcl_progressbar").stop(!0).animate({
                marginTop: -3 * a("#lcl_progressbar").height()
            }, 300, function() {
                a(this).remove()
            });
            "function" == typeof b.slideshow_end && b.slideshow_end.call({
                opts: h,
                vars: d
            });
            d.is_arr_instance || lcl_curr_obj.first().trigger("lcl_slideshow_end", []);
            return !0
        };
        return g
    }
})(jQuery);
