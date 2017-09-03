/*
 * ls-presentation-template (https://www.buzzlms.de)
 * © 2017  Dennis Schulmeister-Zimolong <dennis@pingu-mail.de>
 * License of this file: 3-clause BSD
 */
"use strict";

import SlideshowPlayer from "lecture-slides.js";

import LsPluginHighlightJs from "ls-plugin-highlight.js";
import "./node_modules/highlight.js/styles/atom-one-light.css";

window.addEventListener("load", () => {
    let player = new SlideshowPlayer({
        plugins: {
            HighlightJs: new LsPluginHighlightJs(),
        }
    });

    player.start();
});
