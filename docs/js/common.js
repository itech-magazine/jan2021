$(document).ready(function () {

    // URLs for menu
    var URL_MENU   = document.location.origin + '/docs/_shared/toc.menu';

    //url: 'http://127.0.0.1:5500/docs/_shared/toc.menu',

    // --------------------------------------------
    //  A S Y N C    W O R K E R S
    // --------------------------------------------

    // Fetches menu in background 
    window.fetchMenu = function () {
        $.ajax({
            url: URL_MENU,
            type: 'GET',
            async: true,
            success: function (data) {

                // invoke callback
                onFetchMenu(data);
            }
        });
    };

    // Fetches menu in background 
    window.fetchMarkdown = function () {
        $.ajax({
            url: getMarkdownFileURL(),
            type: 'GET',
            async: true,
            success: function (data) {

                // invoke callback
                onFetchMarkdown(data);
            }
        });
    };

    // --------------------------------------------
    //  W O R K E R S
    // --------------------------------------------

    // generates links in table of contents
    window.generateTocUrls = function() {

        // get all lnks in menu
        var hyperlinks = getMenuLinks();

        // go over each one
        for(var inx = 0; inx < hyperlinks.length; inx++) {

            // get hyperlink at current index
            var hyperlink = hyperlinks[inx];

            // get and store link
            hyperlink.href =  getLink(hyperlink.text);
        }

    };

    // sets the link for prev and next buttons present in the bottom of the page
    window.setPrevNextHrefs = function(title) {
        
        // if we got the title
        if(title != null) {
            // get hrefs
            var hrefs = getPrevNextHrefs(title);

            // set in button the href we got
            var prevBtn = document.getElementsByClassName('buttons')[0].getElementsByTagName('a')[0];
            prevBtn.href = hrefs[0];
            var nextBtn = document.getElementsByClassName('buttons')[0].getElementsByTagName('a')[1];
            nextBtn.href = hrefs[1];
        }
        
    };

    // --------------------------------------------
    //  U T I L S
    // --------------------------------------------

    // coverts space separated text to '-' separated
    window.spaceSepTxtToHypenSep = function(txt) {
        return txt.toLowerCase().split(' ').join('-');
    };

    // gets a link based on hyperlink name
    window.getLink = function(hyperlinkTxt) {
        return document.location.origin + '/docs/pages/article.html?title=' + spaceSepTxtToHypenSep(hyperlinkTxt);
    };

    // get all lnks in menu
    window.getMenuLinks = function() {
        return document.getElementsByClassName('toc')[0].getElementsByTagName('a');
    };

    // return the current addressed page
    window.getCurrentPage = function() {
        return new URLSearchParams(window.location.search).get('title');
    };

    // gets markdown page url for current invoked page
    window.getMarkdownFileURL = function() {
        return document.location.origin + '/docs/pages/mds/' + getCurrentPage() + '.md';
    };

    // finds in menu item with given title
    window.findInMenu = function(title) {

        var hyperlinks = getMenuLinks();

        // go over each one
        for(var inx = 0; inx < hyperlinks.length; inx++) {

            // get hyperlink at current index
            var hyperlink = hyperlinks[inx];
            
            // if this matches with title
            if(spaceSepTxtToHypenSep(hyperlink.text) == title) {
                return hyperlink;
            }
        }

        // not found
        return null;
    };

    // highlights current viewed page in menu item
    window.highlightCurrentMenuItem = function() {

        // get reference to current page's menu item
        var currentMenuItem = findInMenu(getCurrentPage());

        // if we got something
        if(currentMenuItem != null){
            // make it bold
            currentMenuItem.classList.add('font-weight-bold');
        }
    };

    // returns the image URL for given user
    window.getUserImageLink= function(name) {
        return document.location.origin + '/docs/pages/images/authors/' + spaceSepTxtToHypenSep(name) + ".jpg";
    };

    // sets previous and next buttons hrefs
    window.getPrevNextHrefs = function(title) {

        var hyperlinks = getMenuLinks();

        // go over each one
        for(var inx = 0; inx < hyperlinks.length; inx++) {

            // get hyperlink at current index
            var hyperlink = hyperlinks[inx];
            
            // if this matches with title
            if(spaceSepTxtToHypenSep(hyperlink.text) == title) {
                if(inx - 1 < 0) {
                    return ['../index.html', hyperlinks[inx + 1].href]
                }
                else {
                    return [hyperlinks[inx - 1].href, hyperlinks[inx + 1].href]
                }
            }
        }

        // not found
        return null;

    };

    // --------------------------------------------
    //  C A L L B A C K S
    // --------------------------------------------

    // invoked when menu is fetched
    window.onFetchMenu = function(data) {

        // set menu
        $('.toc').html(data);

        // create hyperlinks
        generateTocUrls();

        // highight current menu item
        highlightCurrentMenuItem();

        // set previous and next button links
        setPrevNextHrefs(getCurrentPage());
    };

    // Callback when fetching markdown completes
    window.onFetchMarkdown = function(data) {

        // process markdown
        var markedData = marked(data);

        // get refernce to content area
        var article = document.getElementsByClassName('article')[0];
        var content = article.getElementsByClassName('content')[0];

        // show to user
        content.innerHTML = markedData;

        // parse author and his/her creds
        var author = content.getElementsByTagName('p')[0];

        // set author name
        var authorInfo = document.getElementsByClassName('author-info')[0].getElementsByTagName('div')[0];

        authorInfo.getElementsByTagName('span')[0].innerHTML = author.innerHTML.trim().split('\n')[0];

        // set author creds
        authorInfo.getElementsByTagName('span')[1].innerHTML = author.innerHTML.trim().split('\n')[1];

        // remove author from markdown
        content.removeChild(author);

        // get reference to img
        var authorImg = article.getElementsByClassName('author-img')[0];
        // and author image
        //authorImg.src = getUserImageLink(author.innerHTML.trim().split('\n')[0]);
        authorImg.style.backgroundImage = 'url(' + getUserImageLink(author.innerHTML.trim().split('\n')[0]) + ')';

        // get title
        var title = content.getElementsByTagName('h1')[0];

        // set heading
        article.getElementsByClassName('heading')[0].innerHTML = title.innerHTML;

        // remove title
        content.removeChild(title);
    };


    // --------------------------------------------
    //  E N T R Y   P O I N T
    // --------------------------------------------
    window.onLoad = function() {

        // Fetch Menu
        fetchMenu();

        // and markdown for article
        fetchMarkdown();
    }.apply();

});