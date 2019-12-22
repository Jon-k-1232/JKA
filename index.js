








/*****************************////// About page sub nav \\\\\\**************************/



function teamDisplaySub(){
    $('.subNavAbout').on('click','#teamSub', function() {
        $(teamDisplay);
    });
}



function cultureDisplaySub(){
    $('.subNavAbout').on('click','#cultureSub', function() {
        $(cultureDisplay);
    });
}



// this will display the culture page
function cultureDisplay() {
    $('#upperAbout,#middleAbout,#lowerAbout').empty();
    $(teamDisplaySub);
    $(cultureDisplaySub);

    $('#upperAbout').append(`
        <div class="cultureTop">
            <h1>We serve as your financial compass helping customize a plan to fit your goals</h1>
        </div>
    `);

    $('#middleAbout').append(`
        <nav class="subNavAbout">
            <ul>
                <li id="teamSub"><a href="#AboutTeam">Team</a></li>
                <li id="cultureSub"><a href="#AboutCulture">Culture</a></li>
            </ul>
        </nav>
    `);

    $('#lowerAbout').append(`
        <h4>
            <strong>
                THROUGH 40 YEARS OF FINANCIAL PLANNING EXPERIENCE WITH INTEGRITY, WE HELP OUR CLIENTS
                GROW AND PRESERVE THEIR WEALTH LONG TERM. WHETHER YOU ARE LOOKING FORWARD TO RETIREMENT,
                PAYING OFF COLLEGE DEBT, CARING FOR AN OLDER PARENT, OR PLANNING FOR THE FUTURE, WE HELP
                YOU CREATE SOUND FINANCIAL STRATEGIES WITH EXTRAORDINARY PERSONAL SERVICE.
            </strong>>
        </h4>
            <h2>Benefits of Working With Us</h2>
            <h3>We strive to exceed your expectations every day.</h3>
            <p>
                Our philosophy focuses on building and maintaining confident relationships. We focus on the
                client experience through competent professional advice, fine-tuning financial goals, transparent
                communication, and customized personal service.
            </p>
    `);

}



// this will display the team page
function teamDisplay() {
    $('#upperAbout,#middleAbout,#lowerAbout').empty();
    $(teamDisplaySub);
    $(cultureDisplaySub);

    $('#upperAbout').append(`
        <h1>Your Valuable Team at</h1>
        <h1>Kimmel Financial Advisors</h1>
    `);

    $('#middleAbout').append(`
        <nav class="subNavAbout">
            <ul>
                <li id="teamSub"><a href="#AboutTeam">Team</a></li>
                <li id="cultureSub"><a href="#AboutCulture">Culture</a></li>
            </ul>
        </nav>
    `);

    $('#lowerAbout').append(`
        <section class="teamMembers">
            <div>
                <h3>James F. Kimmel</h3>
                <p>PRESIDENT</p>
            </div>
            
            <div>
                <h3>Misty Segafredo</h3>
                <p>OFFICE MANAGER</p>
            </div>
            
            <div>
                <h3>Sidney Brinn</h3>
                <p>RECEPTIONIST</p>
            </div>
            
            <div>
                <h3>Katrina Will</h3>
                <p>ADMINISTRATIVE ASSISTANT</p>
            </div>
            
            <div>
                <h3>Jaclyn Kimmel-Cano</h3>
                <p>SENIOR MARKETING MANAGER</p>
            </div>
            
            <div>
                <h3>Jaimee Kimmel-Trujillo</h3>
                <p>INSURANCE AGENT</p>
            </div>
            
            <div>
                <h3>Marsha Johnson</h3>
                <p>CPA</p>
            </div> 
        </section>
    `);
}



/*****************************////// Top nav sub page wrapper control \\\\\\**************************/



//shows home
function homeDisplay(){
    $('.constantHead').on('click','#companyName', function() {
        $('.homeWrapper').show();
        $('.aboutWrapper, .insightsWrapper, .eventsWrapper, .connectWrapper, .loginWrapper').hide();
        //$('.toggleCls').removeClass("toggleCls");
        console.log('homeDisplay ran.');
    });
}



//shows about
function aboutDisplay(){
    $('.constantHead').on('click','#about', function() {
        $('.aboutWrapper').show();
        $('.homeWrapper, .insightsWrapper, .eventsWrapper, .connectWrapper, .loginWrapper').hide();
        $(teamDisplay);
        //$('.toggleCls').removeClass("toggleCls");
        console.log('aboutDisplay ran.');
    });
}



//shows insight
function insightDisplay(){
    $('.constantHead').on('click','#insights', function() {
        $('.insightsWrapper').show();
        $('.homeWrapper, .aboutWrapper, .eventsWrapper, .connectWrapper, .loginWrapper').hide();
        //$('.toggleCls').removeClass("toggleCls");
        console.log('insightDisplay ran.');
    });
}



//shows events
function eventsDisplay(){
    $('.constantHead').on('click','#events', function() {
        $('.eventsWrapper').show();
        $('.homeWrapper, .aboutWrapper, .insightsWrapper, .connectWrapper, .loginWrapper').hide();
        //$('.toggleCls').removeClass("toggleCls");
        console.log('eventsDisplay ran.');
    });
}



//shows connect
function connectDisplay(){
    $('.constantHead').on('click','#connect', function() {
        $('.connectWrapper').show();
        $('.homeWrapper, .aboutWrapper, .insightsWrapper, .eventsWrapper, .loginWrapper').hide();
        //$('.toggleCls').removeClass("toggleCls");
        console.log('connectDisplay ran.');
    });
}


//shows login
function loginDisplay(){
    $('.constantHead').on('click','#login', function() {
        $('.loginWrapper').show();
        $('.homeWrapper, .aboutWrapper, .insightsWrapper, .eventsWrapper, .connectWrapper').hide();
        //$('.toggleCls').removeClass("toggleCls");
        console.log('loginDisplay ran.');
    });
}



/*****************************////// Initialization \\\\\\**************************/

function initializeStart() {
    homeDisplay();
    aboutDisplay();
    insightDisplay();
    eventsDisplay();
    connectDisplay();
    loginDisplay();
    $('.aboutWrapper, .insightsWrapper, .eventsWrapper, .connectWrapper, .loginWrapper').hide();
}

$(initializeStart);