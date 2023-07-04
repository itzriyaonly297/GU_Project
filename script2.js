var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");

var Cone = document.getElementById("Cone");
var Ctwo = document.getElementById("Ctwo");
var Cthree = document.getElementById("Cthree");
var Cfour = document.getElementById("Cfour");
var Cfive = document.getElementById("Cfive");

var Lander = document.getElementById("Lander");
var Course = document.getElementById("course");
var Perks = document.getElementById("Perks");
var Contact = document.getElementById("Contact");
var AboutH = document.getElementById("AboutH");

var BrandingC = document.getElementById("Branding");
var TrafficC = document.getElementById("Traffic");
var InfluenceC = document.getElementById("Influence");
var MarketingC = document.getElementById("Marketing");
var FinanceC = document.getElementById("Finance");

var CourcesP = document.getElementById("Cources");
var CommunityP = document.getElementById("Community");
var RewardsP = document.getElementById("Rewards");
var AffilateP = document.getElementById("Affilate");

var root = document.querySelector(":root");
function setRed() {
    root.style.setProperty('--skin-color','red');
}
function setBlue() {
    root.style.setProperty('--skin-color','blue');
}
function setGreen() {
    root.style.setProperty('--skin-color','#00ff95');
}
function setOrange() {
    root.style.setProperty('--skin-color','rgb(255, 146, 58)');
}
function openDay() {
    document.getElementById("Day").style.display = "none";
    document.getElementById("Night").style.display = "flex";
    document.getElementById("navbar").style.color = "black";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("container").style.backgroundColor = "rgb(240, 240, 240)";
    document.getElementById("container").style.color = "black";
}

function openNight() {
    document.getElementById("Night").style.display = "none";
    document.getElementById("Day").style.display = "flex";
    document.getElementById("navbar").style.color = "white";
    document.getElementById("navbar").style.backgroundColor = "#05000c";
    document.getElementById("container").style.backgroundColor = "rgb(9 0 24)";
    document.getElementById("container").style.color = "white";
}

function openCourc() {
    CourcesP.style.left = "5%";
    CommunityP.style.left = "-105%";
    RewardsP.style.left = "-105%";
    AffilateP.style.left = "-105%";
    one.style.backgroundColor = "var(--skin-color)";
    two.style.backgroundColor = "transparent";
    three.style.backgroundColor = "transparent";
    four.style.backgroundColor = "transparent";
}
function openCommunity() {
    CourcesP.style.left = "-105%";
    CommunityP.style.left = "5%";
    RewardsP.style.left = "-105%";
    AffilateP.style.left = "-105%";
    two.style.backgroundColor = "var(--skin-color)";
    one.style.backgroundColor = "transparent";
    three.style.backgroundColor = "transparent";
    four.style.backgroundColor = "transparent";
}
function openRewards() {
    CourcesP.style.left = "-105%";
    CommunityP.style.left = "-105%";
    RewardsP.style.left = "5%";
    AffilateP.style.left = "-105%";
    three.style.backgroundColor = "var(--skin-color)";
    one.style.backgroundColor = "transparent";
    two.style.backgroundColor = "transparent";
    four.style.backgroundColor = "transparent";
}
function openAffilate() {
    CourcesP.style.left = "-105%";
    CommunityP.style.left = "-105%";
    RewardsP.style.left = "-105%";
    AffilateP.style.left = "5%";
    four.style.backgroundColor = "var(--skin-color)";
    one.style.backgroundColor = "transparent";
    two.style.backgroundColor = "transparent";
    three.style.backgroundColor = "transparent";
}
function openBranding() {
    BrandingC.style.left = "5%";
    TrafficC.style.left = "-105%";
    InfluenceC.style.left = "-105%";
    MarketingC.style.left = "-105%";
    FinanceC.style.left = "-105%";
    Cone.style.backgroundColor = "var(--skin-color)";
    Cfour.style.backgroundColor = "transparent";
    Ctwo.style.backgroundColor = "transparent";
    Cthree.style.backgroundColor = "transparent";
    Cfive.style.backgroundColor = "transparent";
}
function openTraffic() {
    BrandingC.style.left = "-105%";
    TrafficC.style.left = "5%";
    InfluenceC.style.left = "-105%";
    MarketingC.style.left = "-105%";
    FinanceC.style.left = "-105%"; Cone.style.backgroundColor = "var(--skin-color)";
    Cfour.style.backgroundColor = "transparent";
    Cone.style.backgroundColor = "transparent";
    Cthree.style.backgroundColor = "transparent";
    Cfive.style.backgroundColor = "transparent";
    Ctwo.style.backgroundColor = "var(--skin-color)";
}
function openInfluence() {
    BrandingC.style.left = "-105%";
    TrafficC.style.left = "-105%";
    InfluenceC.style.left = "5%";
    MarketingC.style.left = "-105%";
    FinanceC.style.left = "-105%";
    Cthree.style.backgroundColor = "var(--skin-color)";
    Cfour.style.backgroundColor = "transparent";
    Ctwo.style.backgroundColor = "transparent";
    Cone.style.backgroundColor = "transparent";
    Cfive.style.backgroundColor = "transparent";
}
function openMarketing() {
    BrandingC.style.left = "-105%";
    TrafficC.style.left = "-105%";
    InfluenceC.style.left = "-105%";
    MarketingC.style.left = "5%";
    FinanceC.style.left = "-105%";
    Cfour.style.backgroundColor = "var(--skin-color)";
    Cthree.style.backgroundColor = "transparent";
    Ctwo.style.backgroundColor = "transparent";
    Cone.style.backgroundColor = "transparent";
    Cfive.style.backgroundColor = "transparent";
}
function openFinance() {
    BrandingC.style.left = "-105%";
    TrafficC.style.left = "-105%";
    InfluenceC.style.left = "-105%";
    MarketingC.style.left = "-105%";
    FinanceC.style.left = "5%";
    Cfive.style.backgroundColor = "var(--skin-color)";
    Cfour.style.backgroundColor = "transparent";
    Ctwo.style.backgroundColor = "transparent";
    Cone.style.backgroundColor = "transparent";
    Cthree.style.backgroundColor = "transparent";
}
function openHome() {
    Course.style.display = "none";
    Perks.style.display = "none";
    AboutH.style.display = "none";
    Contact.style.display = "none";
    Lander.style.display = "flex";
    document.getElementById("HomeN").style.color = "var(--skin-color)";
    document.getElementById("AboutN").style.color = "";
    document.getElementById("CourcesN").style.color = "";
    document.getElementById("PerksN").style.color = "";
    document.getElementById("ContactN").style.color = "";
}
function openAbout() {
    AboutH.style.display = "grid";
    Course.style.display = "none";
    Perks.style.display = "none";
    Contact.style.display = "none";
    Lander.style.display = "none";
    document.getElementById("HomeN").style.color = "";
    document.getElementById("PerksN").style.color = "";
    document.getElementById("CourcesN").style.color = "";
    document.getElementById("AboutN").style.color = "var(--skin-color)";
    document.getElementById("ContactN").style.color = "";
    openCourc();
}
function openPerks() {
    Course.style.display = "none";
    Perks.style.display = "grid";
    Contact.style.display = "none";
    Lander.style.display = "none";
    AboutH.style.display = "none";
    document.getElementById("HomeN").style.color = "";
    document.getElementById("AboutN").style.color = "";
    document.getElementById("CourcesN").style.color = "";
    document.getElementById("PerksN").style.color = "var(--skin-color)";
    document.getElementById("ContactN").style.color = "";
    openCourc();
}
function openCourses() {
    Course.style.display = "grid";
    Perks.style.display = "none";
    Contact.style.display = "none";
    Lander.style.display = "none";
    AboutH.style.display = "none";
    openBranding();
    document.getElementById("CourcesN").style.color = "var(--skin-color)";
    document.getElementById("AboutN").style.color = "";
    document.getElementById("HomeN").style.color = "";
    document.getElementById("PerksN").style.color = "";
    document.getElementById("ContactN").style.color = "";
}
function openContact() {
    Course.style.display = "none";
    Perks.style.display = "none";
    Contact.style.display = "grid";
    Lander.style.display = "none";
    AboutH.style.display = "none";
    document.getElementById("ContactN").style.color = "var(--skin-color)";
    document.getElementById("AboutN").style.color = "";
    document.getElementById("CourcesN").style.color = "";
    document.getElementById("PerksN").style.color = "";
    document.getElementById("HomeN").style.color = "";
}