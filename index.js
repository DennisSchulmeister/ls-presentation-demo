/*
 * ls-presentation-template (https://www.buzzlms.de)
 * © 2017 – 2020 Dennis Schulmeister-Zimolong <dennis@pingu-mail.de>
 * License of this file: 3-clause BSD
 */
"use strict";

import SlideshowPlayer from "@dschulmeis/lecture-slides.js";

import LsPluginExtraTags from "@dschulmeis/ls-plugin-extra-tags";

import LsPluginHighlightJs from "@dschulmeis/ls-plugin-highlight.js";
import HLJS_Language_XML from 'highlight.js/lib/languages/xml';
import HLJS_Language_JS from 'highlight.js/lib/languages/javascript';
import HLJS_Language_PYTHON from 'highlight.js/lib/languages/python';
import "highlight.js/styles/atom-one-light.css";

window.addEventListener("load", () => {
    let player = new SlideshowPlayer({
        plugins: {
            ExtraTags: new LsPluginExtraTags({
                //labelCarouselNext: "Next Step",
                //labelCarouselPrev: "Previous Step",
                //labelCarouselReset: "Restart",
            }),
            HighlightJs: new LsPluginHighlightJs({
                languages: {
                    html: HLJS_Language_XML,
                    javascript: HLJS_Language_JS,
                    python: HLJS_Language_PYTHON,
                }
            }),
        }
    });

    player.start();
});
