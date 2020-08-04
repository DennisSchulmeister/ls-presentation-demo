/*
 * ls-presentation-template (https://www.buzzlms.de)
 * © 2017 – 2020 Dennis Schulmeister-Zimolong <dennis@pingu-mail.de>
 * License of this file: 3-clause BSD
 */
"use strict";

import SlideshowPlayer from "lecture-slides.js";

import LsPluginExtraTags from "ls-plugin-extra-tags";

import LsPluginHighlightJs from "ls-plugin-highlight.js";
import "highlight.js/styles/atom-one-light.css";

window.addEventListener("load", () => {
    let player = new SlideshowPlayer({
        plugins: {
            ExtraTags: new LsPluginExtraTags({
                //labelCarouselNext: "Next Step",
                //labelCarouselPrev: "Previus Step",
                //labelCarouselReset: "Restart",
            }),
            HighlightJs: new LsPluginHighlightJs(),
        }
    });

    player.start();
});
