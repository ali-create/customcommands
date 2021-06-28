let day = document.querySelector(".day");
let area = document.querySelector(".area");
let markhome = document.querySelector(".markhome");
let tohome = document.querySelector(".tohome");
let agentitemid = document.querySelector(".agentitemid");
let drain = document.querySelector(".drain");
let healthheal = document.querySelector(".healthheal");
let fullheal = document.querySelector(".fullheal");
let speed = document.querySelector(".speed");
let fillarea = document.querySelector(".fill");
let creative = document.querySelector(".creative");
let survival = document.querySelector(".survival");
let pointA = document.querySelector(".pointA");
let pointB = document.querySelector(".pointB");
let killall = document.querySelector(".killall");
let night = document.querySelector(".night");
day.addEventListener("click", function () {
  alert("Sets Time to day.");
});
night.addEventListener("click", function () {
  alert("Sets time to night");
});
area.addEventListener("click", function () {
  alert("Tells Pos of pointA and pointB");
});
markhome.addEventListener("click", function () {
  alert("Marks your Location as home");
});
tohome.addEventListener("click", function () {
  alert("Teleports you to home");
});
agentitemid.addEventListener("click", function () {
  alert(
    "Gives item id of specified slot (e.x.: :agentitemid 4 will check your agents 4th slot)"
  );
});
drain.addEventListener("click", function () {
  alert("Drains water around you with radi controlled by the first paramater");
});
fullheal.addEventListener("click", function () {
  alert("Fully heals you");
});
speed.addEventListener("click", function () {
  alert("Gives you speed, first paramater is amplifier, second is length");
});
fillarea.addEventListener("click", function () {
  alert(
    "Fills the area between pointA and pointB. Param decides either to fill with air or white concrete"
  );
});
healthheal.addEventListener("click", function () {
  alert("Heals you for 1 second. Param is the amplifier");
});
creative.addEventListener("click", function () {
  alert("Puts you in creative");
});
survival.addEventListener("click", function () {
  alert("Puts you in Survival");
});
pointA.addEventListener("click", function () {
  alert("Sets pointA");
});
pointB.addEventListener("click", function () {
  alert("Sets point B");
});
killall.addEventListener("click", function () {
  alert("Kills all entities expect players");
});
