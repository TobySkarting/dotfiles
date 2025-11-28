// ==UserScript==
// @name         Medium for Free
// @namespace    tobyskarting
// @version      0.7
// @author       TobySkarting
// @description  Redirect all URLs hosted on medium.com to unblocker
// @license      AGPL-3.0-or-later
// @homepage     https://github.com/TobySkarting
// @supportURL   https://github.com/TobySkarting/dotfiles
// @updateURL    https://github.com/TobySkarting/dotfiles/raw/main/medium-for-free.js
// @downloadURL  https://github.com/TobySkarting/dotfiles/raw/main/medium-for-free.js
// @match        *://medium.com/*
// @match        *://*.medium.com/*
// @match        *://towardsaws.com/*
// @match        *://towardsdatascience.com/*
// @match        *://hackernoon.com/*
// @match        *://medium.freecodecamp.org/*
// @match        *://psiloveyou.xyz/*
// @match        *://betterhumans.coach.me/*
// @match        *://codeburst.io/*
// @match        *://theascent.pub/*
// @match        *://medium.mybridge.co/*
// @match        *://uxdesign.cc/*
// @match        *://levelup.gitconnected.com/*
// @match        *://itnext.io/*
// @match        *://entrepreneurshandbook.co/*
// @match        *://proandroiddev.com/*
// @match        *://blog.prototypr.io/*
// @match        *://thebolditalic.com/*
// @match        *://blog.usejournal.com/*
// @match        *://blog.angularindepth.com/*
// @match        *://blog.bitsrc.io/*
// @match        *://blog.devartis.com/*
// @match        *://blog.maddevs.io/*
// @match        *://blog.getambassador.io/*
// @match        *://uxplanet.org/*
// @match        *://instagram-engineering.com/*
// @match        *://calia.me/*
// @match        *://productcoalition.com/*
// @match        *://engineering.opsgenie.com/*
// @match        *://android.jlelse.eu/*
// @match        *://robinhood.engineering/*
// @match        *://blog.hipolabs.com/*
// @match        *://ux.shopify.com/*
// @match        *://enlear.academy/*
// @match        *://www.cantorsparadise.com/*
// @match        *://betterprogramming.pub/*
// @match        *://blog.roost.io/*
// @match        *://500ish.com/*
// @match        *://faun.pub/*
// @match        *://towardsdev.com/*
// @match        *://writingcooperative.com/*
// @match        *://asleekgeek.com/*
// @match        *://andrewzuo.com/*
// @match        *://awstip.com/*
// @match        *://baos.pub/*
// @match        *://*.plainenglish.io/*
// @match        *://betterappsec.com/*
// @match        *://betterhumans.pub/*
// @match        *://bettermarketing.pub/*
// @match        *://blog.angulartraining.com/*
// @match        *://blog.codegiant.io/*
// @match        *://blog.coffeeapplied.com/*
// @match        *://blog.devgenius.io/*
// @match        *://blog.devops.dev/*
// @match        *://blog.kotlin-academy.com/*
// @match        *://blog.kubernauts.io/*
// @match        *://blog.securitybreak.io/*
// @match        *://blog.securityevaluators.com/*
// @match        *://blog.startupstash.com/*
// @match        *://bootcamp.uxdesign.cc/*
// @match        *://bytes.grubhub.com/*
// @match        *://code.likeagirl.io/*
// @match        *://coinsbench.com/*
// @match        *://eand.co/*
// @match        *://engineering.talkdesk.com/*
// @match        *://infosecwriteups.com/*
// @match        *://interviewnoodle.com/*
// @match        *://levelupprogramming.net/*
// @match        *://marcbalmer.ch/*
// @match        *://medium.datadriveninvestor.com/*
// @match        *://medium.matcha.fyi/*
// @match        *://netflixtechblog.com/*
// @match        *://pub.towardsai.net/*
// @match        *://systemweakness.com/*
// @match        *://tech.olx.com/*
// @match        *://techuisite.com/*
// @match        *://themakingofamillionaire.com/*
// @match        *://trading-data-analysis.pro/*
// @match        *://unbounded.io/*
// @match        *://wire.insiderfinance.io/*
// @match        *://www.inbitcoinwetrust.net/*
// @match        *://blog.dancounsell.com/*
// @match        *://experiencestack.co/*
// @match        *://golang.thisweekin.io/*
// @match        *://insightsndata.com/*
// @match        *://artificialcorner.com/*
// @match        *://freedium.cfd/*
// @run-at       document-start
// ==/UserScript==
(function() {
    "use strict";
    let previousUrl = '';
    function redirect() {
        let { host, href, pathname } = location;
        if (!pathname.match(/\/[^\/]+-[0-9a-f]{8,}$/)) {
            return;
        }
        let redirectUrl = href.replace(host, 'freedium-mirror.cfd');
        return location.replace(redirectUrl);
    }

    function mutationsObs(mutations) {
        if (location.href !== previousUrl) {
            previousUrl = location.href;
            console.log(`URL changed to ${location.href}`);
        }
    }

    let observer = new MutationObserver(redirect);

    window.addEventListener('load', redirect);

    window.addEventListener('beforeunload', function (event) {
        observer.disconnect();
    });
    
    const config = {subtree: true, childList: true};
    observer.observe(document, config);
})();
