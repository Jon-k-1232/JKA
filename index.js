
/**************************************////// Login Page \\\\\\***********************************/



/**************************************////// Connect Page \\\\\\***********************************/




/**************************************////// Events Page \\\\\\***********************************/


/*****////// Buttons for each event \\\\\\*****/
function eventOneClicked(){
    $('.eventOne').on('click','#eventOneButton', function() {
        $('.eventsMain').hide();
        $('.expandedEventOne').show();
    });
}



function eventTwoClicked(){
    $('.eventTwo').on('click','#eventTwoButton', function() {
        $('.eventsMain').hide();
        $('.expandedEventTwo').show();
    });
}



/**************************************////// Insights Page \\\\\\***********************************/



/*****////// Buttons for each article \\\\\\*****/
function readMoreOneClicked(){
    $('.articleOne').on('click','#readMoreOne', function() {
        $('.articleList').hide();
        $('.expandedArticle').show();
        $(articleOne);
    });
}



function readMoreTwoClicked(){
    $('.articleTwo').on('click','#readMoreTwo', function() {
        $('.articleList').hide();
        $('.expandedArticle').show();
        $(articleTwo);
    });
}



function readMoreThreeClicked(){
    $('.articleThree').on('click','#readMoreThree', function() {
        $('.articleList').hide();
        $('.expandedArticle').show();
        $(articleThree);
    });
}



function readMoreFourClicked(){
    $('.articleFour').on('click','#readMoreFour', function() {
        $('.articleList').hide();
        $('.expandedArticle').show();
        $(articleFour);
    });
}


/*****////// Contents of each article once expanded \\\\\\*****/
function articleOne() {
    $('#articleTitle, .articleContentFull').empty();

    $('#articleTitle').append(`
        <h1>Keeping Your Investment Plan on Track</h1>
        <time datetime="2019-12-13">December 13, 2019</time>
        <span>::before</span>
        <span>Investments</span>
    `); // this will amend the title of the article once displayed on screen

    $('.articleContentFull').append(`
        <p> THIS WILL BE WHERE A ARTICLE WILL APPEAR ONCE READ MORE IS CLICKED.
        <span><br><span>
        Putant malorum recteque pro ad, oratio vituperata constituam eum at. No eleifend sapientem ius,
        usu praesent gubergren quaerendum ex, quo no denique adipisci postulant.
        </p>
    `); // type in the article here use the <p> tag for each paragraph
}



function articleTwo() {
    $('#articleTitle, .articleContentFull').empty();

    $('#articleTitle').append(`
        <h1>Navigation Choppy Waters</h1>
        <time datetime="2019-12-13">December 13, 2019</time>
        <span>::before</span>
        <span>Investments</span>
    `); // this will amend the title of the article once displayed on screen

    $('.articleContentFull').append(`
        <p> THIS WILL BE WHERE A ARTICLE WILL APPEAR ONCE READ MORE IS CLICKED.
        <span><br><span>
        Putant malorum recteque pro ad, oratio vituperata constituam eum at. No eleifend sapientem ius,
        usu praesent gubergren quaerendum ex, quo no denique adipisci postulant.
        </p>
    `); // type in the article here use the <p> tag for each paragraph

}



function articleThree() {
    $('#articleTitle, .articleContentFull').empty();

    $('#articleTitle').append(`
        <h1>Retiring? Keep Your Budget in Check</h1>
        <time datetime="2019-12-13">December 13, 2019</time>
        <span>::before</span>
        <span>Investments</span>
    `); // this will amend the title of the article once displayed on screen

    $('.articleContentFull').append(`
        <p> THIS WILL BE WHERE A ARTICLE WILL APPEAR ONCE READ MORE IS CLICKED.
        <span><br><span>
        Putant malorum recteque pro ad, oratio vituperata constituam eum at. No eleifend sapientem ius,
        usu praesent gubergren quaerendum ex, quo no denique adipisci postulant.
        </p>
    `); // type in the article here use the <p> tag for each paragraph

}



function articleFour() {
    $('#articleTitle, .articleContentFull').empty();

    $('#articleTitle').append(`
        <h1>Talking to Your Kids About Money</h1>
        <time datetime="2019-12-13">December 13, 2019</time>
        <span>::before</span>
        <span>Investments</span>
    `); // this will amend the title of the article once displayed on screen

    $('.articleContentFull').append(`
        <p> THIS WILL BE WHERE A ARTICLE WILL APPEAR ONCE READ MORE IS CLICKED.
        <span><br><span>
        Putant malorum recteque pro ad, oratio vituperata constituam eum at. No eleifend sapientem ius,
        usu praesent gubergren quaerendum ex, quo no denique adipisci postulant.
        </p>
    `); // type in the article here use the <p> tag for each paragraph

}



/***************************************////// About page \\\\\\************************************/


/*****////// Middle nav buttons \\\\\\*****/
//team button middle of page
function teamDisplaySub(){
    $('.subNavAbout').on('click','#aboutSub', function() {
        $(teamDisplay);
    });
}


// culture button middle of page
function cultureDisplaySub(){
    $('.subNavAbout').on('click','#cultureSub', function() {
        $(cultureDisplay);
    });
}



/*****////// About page content \\\\\\*****/

/* this will change the wording on the top graphic and change the lower portion of the page below the nav
to display the material for culture page
 */
function cultureDisplay() {
    $('#upperAbout,#lowerAbout').empty();
    $(teamDisplaySub);
    $(cultureDisplaySub);

    $('#upperAbout').append(`
            <img src="Images/canyon.jpg" alt="Looking up from narrow canyon." class="aboutCanyonImage">
            <h1>We serve as your financial compass helping customize a plan to fit your goals</h1>
    `);

    $('#lowerAbout').append(`
        <h4 id="cultureStatement">
            <strong>
                THROUGH 40 YEARS OF FINANCIAL PLANNING EXPERIENCE WITH INTEGRITY, WE HELP OUR CLIENTS
                GROW AND PRESERVE THEIR WEALTH LONG TERM. WHETHER YOU ARE LOOKING FORWARD TO RETIREMENT,
                PAYING OFF COLLEGE DEBT, CARING FOR AN OLDER PARENT, OR PLANNING FOR THE FUTURE, WE HELP
                YOU CREATE SOUND FINANCIAL STRATEGIES WITH EXTRAORDINARY PERSONAL SERVICE.
            </strong>
        </h4>
            <h2 id="beni">Benefits of Working With Us</h2>
            <h3 id="strive">We strive to exceed your expectations every day.</h3>
            <p id="promises">
                Our philosophy focuses on building and maintaining confident relationships. We focus on the
                client experience through competent professional advice, fine-tuning financial goals, transparent
                communication, and customized personal service.
            </p>
    `);

}



/* this will change the wording on the top graphic and change the lower portion of the page below the nav
to display the material for team members page
 */
function teamDisplay() {
    $('#upperAbout,#lowerAbout').empty();
    $(teamDisplaySub);
    $(cultureDisplaySub);

    $('#upperAbout').append(`
        <img src="Images/stars.jpg" alt="Looking at stars from narrow canyon." class="aboutStarsImage">
        <h1>Your Valuable Team at<br>
            James F. Kimmel & Associates</h1>
    `);

    $('#lowerAbout').append(`
        <section class="teamMembers">
            <div class="crow">
                <img src="Images/dc.jpg" alt="memorial in Washington D.C." class="CrowImage">
                <h3>James F. Kimmel</h3>
                <p>PRESIDENT</p>
            </div>
            
            <div class="employeeOne">
                <img src="Images/coin.jpg" alt="money sitting on table" class="employeeOneImage">
                <h3>Misty Segafredo</h3>
                <p>OFFICE MANAGER</p>
            </div>
            
            <div class="employeeTwo">
                <img src="Images/cacti.jpg" alt="saguaro cactus at night" class="employeeTwoImage">
                <h3>Sidney Brinn</h3>
                <p>RECEPTIONIST</p>
            </div>
            
            <div class="employeeThree">
                <img src="Images/beach.jpg" alt="waves crashing on rocks" class="employeeThreeImage">
                <h3>Katrina Will</h3>
                <p>ADMINISTRATIVE ASSISTANT</p>
            </div>
            
            <div class="employeeFour">
                <img src="Images/disney.jpg" alt="mickey ears on girl at disneyland" class="employeeFourImage">
                <h3>Jaclyn Kimmel-Cano</h3>
                <p>SENIOR MARKETING MANAGER</p>
            </div>
            
            <div class="employeeFive">
                <img src="Images/starWars.jpg" alt="starTroopers" class="employeeFiveImage">
                <h3>Jaimee Kimmel-Trujillo</h3>
                <p>INSURANCE AGENT</p>
            </div>
            
            <div class="employeeSix">
                <img src="Images/swan.jpg" alt="swan in pond." class="employeeSixImage">
                <h3>Marsha Johnson</h3>
                <p>CPA</p>
            </div> 
        </section>
    `);
}



/*****************************////// Top nav sub page wrapper control \\\\\\**************************/



//toggles the hamburger menu
function toggleMenu() {
        $('.mainNavbar').on('click', '.hamIcon', function () {
            $('.toggleCls').show();
            var menu = document.querySelector(".mainNavItems");
            menu.classList.toggle("toggleCls");
        });
}



//shows home
function homeDisplay(){
    $('.constantHead').on('click','#companyName', function() {
        $('.homeWrapper').show();
        $('.aboutWrapper, .insightsWrapper, .eventsWrapper, .connectWrapper, .loginWrapper').hide();
        $('.toggleCls').removeClass("toggleCls");
    });
}



//shows about
function aboutDisplay(){
    $('.constantHead').on('click','#about', function() {
        $('.aboutWrapper').show();
        $('.homeWrapper, .insightsWrapper, .eventsWrapper, .connectWrapper, .loginWrapper').hide();
        $(teamDisplay);
        $('.toggleCls').removeClass("toggleCls");
    });
}



//shows insight
function insightDisplay(){
    $('.constantHead').on('click','#insights', function() {
        $('.insightsWrapper, .articleList').show();
        $('.homeWrapper, .aboutWrapper, .eventsWrapper, .connectWrapper, .loginWrapper, .expandedArticle').hide();
        $(readMoreOneClicked); // this call initializes the read more button on each article
        $(readMoreTwoClicked); // this call initializes the read more button on each article
        $(readMoreThreeClicked); // this call initializes the read more button on each article
        $(readMoreFourClicked); // this call initializes the read more button on each article
        $('.toggleCls').removeClass("toggleCls");
    });
}



//shows events
function eventsDisplay(){
    $('.constantHead').on('click','#events', function() {
        $('.eventsWrapper, .eventsMain').show();
        $('.homeWrapper, .aboutWrapper, .insightsWrapper, .connectWrapper, .loginWrapper, .expandedEventOne, .expandedEventTwo').hide();
        $(eventOneClicked);
        $(eventTwoClicked);
        $('.toggleCls').removeClass("toggleCls");
    });
}



//shows connect
function connectDisplay(){
    $('.constantHead').on('click','#connect', function() {
        $('.connectWrapper').show();
        $('.homeWrapper, .aboutWrapper, .insightsWrapper, .eventsWrapper, .loginWrapper').hide();
        $('.toggleCls').removeClass("toggleCls");
    });
}


//shows login
function loginDisplay(){
    $('.constantHead').on('click','#login', function() {
        $('.loginWrapper').show();
        $('.homeWrapper, .aboutWrapper, .insightsWrapper, .eventsWrapper, .connectWrapper').hide();
        $('.toggleCls').removeClass("toggleCls");
    });
}



/**************************************////// Initialization \\\\\\***********************************/



function initializeStart() {
    homeDisplay();
    aboutDisplay();
    insightDisplay();
    eventsDisplay();
    connectDisplay();
    loginDisplay();
    toggleMenu();
    $('.aboutWrapper, .insightsWrapper, .eventsWrapper, .connectWrapper, .loginWrapper').hide();
}

$(initializeStart);
