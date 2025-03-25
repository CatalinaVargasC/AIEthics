function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WwIsrrANUz":
        Script1();
        break;
      case "6Fw5G4l17jb":
        Script2();
        break;
      case "6gqSUxt8DqJ":
        Script3();
        break;
      case "6iJkeVdpAD2":
        Script4();
        break;
      case "5td0dUXulhq":
        Script5();
        break;
      case "5etVHkKeK1d":
        Script6();
        break;
      case "6Igvlep3iQi":
        Script7();
        break;
      case "6XmLQRDDuDS":
        Script8();
        break;
      case "62I22IbbTSO":
        Script9();
        break;
      case "5ul1KmhdlJ3":
        Script10();
        break;
      case "5s0D0cQx6wh":
        Script11();
        break;
      case "5W1c6vEPLuZ":
        Script12();
        break;
      case "5wmMB7xREXh":
        Script13();
        break;
      case "5a2k0pxqyql":
        Script14();
        break;
      case "5XY5xbqqxFU":
        Script15();
        break;
      case "6dHhapxMMU2":
        Script16();
        break;
      case "62tIUDLlwlQ":
        Script17();
        break;
      case "6Y0ecuxESq3":
        Script18();
        break;
      case "6XkBdKGyPhX":
        Script19();
        break;
      case "6qXzbSjFYSz":
        Script20();
        break;
      case "67dEY7NVjVI":
        Script21();
        break;
      case "66dbDGPL5uo":
        Script22();
        break;
      case "5iGQPgzJ5tD":
        Script23();
        break;
      case "6BGR8M4rycQ":
        Script24();
        break;
      case "6Eh6clazkLY":
        Script25();
        break;
      case "5XZZGg1SUAI":
        Script26();
        break;
      case "6i4vGS7ENHt":
        Script27();
        break;
      case "6DDHPIItrdt":
        Script28();
        break;
      case "6fY5fUf6s2x":
        Script29();
        break;
      case "6YGKSDqjJy4":
        Script30();
        break;
      case "5adUQyOaNFh":
        Script31();
        break;
      case "6HstMc1JaME":
        Script32();
        break;
      case "5uQiH7QGBtU":
        Script33();
        break;
      case "6phV19AqDrE":
        Script34();
        break;
      case "5sgpbg9LY0S":
        Script35();
        break;
      case "5coiAlQXsZP":
        Script36();
        break;
      case "6EozbnlqsMQ":
        Script37();
        break;
      case "6NZeexmcedL":
        Script38();
        break;
      case "62ydnx4lsPW":
        Script39();
        break;
      case "6lmekPSBbDO":
        Script40();
        break;
      case "5VNfv7YlRxD":
        Script41();
        break;
      case "68P0f0penim":
        Script42();
        break;
      case "6eSEzwO57x2":
        Script43();
        break;
      case "5zVoBXLBqFP":
        Script44();
        break;
      case "5Yo3W8UXc9h":
        Script45();
        break;
      case "6podnqWocni":
        Script46();
        break;
      case "65wqM0xAvky":
        Script47();
        break;
      case "69hhPOHpyBS":
        Script48();
        break;
      case "6IjnwDcSlIv":
        Script49();
        break;
      case "6IhFfSOrEbU":
        Script50();
        break;
      case "5VXSsRNiI4j":
        Script51();
        break;
      case "5WMby45y7M0":
        Script52();
        break;
      case "6mSDFfZ9edk":
        Script53();
        break;
      case "6igFMLlEhYP":
        Script54();
        break;
      case "5u6Emq7uydh":
        Script55();
        break;
      case "5dK94MtkYiC":
        Script56();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6rUECW8AVHR');
const duration = 750;
const easing = 'ease-out';
const id = '6LqoaOh5s6o';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6rUECW8AVHR');
const duration = 750;
const easing = 'ease-out';
const id = '6LqoaOh5s6o_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6W62V2NvFRS');
const duration = 6750;
const easing = 'ease-out';
const id = '5YZYjAW1mgp';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('6Ymm3ksI7Cq');
const duration = 750;
const easing = 'ease-out';
const id = '6JMqSDWVhXI';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6Ymm3ksI7Cq');
const duration = 750;
const easing = 'ease-out';
const id = '6JMqSDWVhXI_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  player.once(() => {
const target = object('5eEjuqQ9XGF');
const duration = 12750;
const easing = 'ease-out';
const id = '5raESWsUrVE';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  const target = object('664lgunmoGv');
const duration = 750;
const easing = 'ease-out';
const id = '5lsz1R6e2ud';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('664lgunmoGv');
const duration = 750;
const easing = 'ease-out';
const id = '5lsz1R6e2ud_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  player.once(() => {
const target = object('5vSuGEeFJut');
const duration = 10000;
const easing = 'ease-out';
const id = '5YqqySZ3c4V';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  const target = object('6BTj1B86jFx');
const duration = 750;
const easing = 'ease-out';
const id = '5lsz1R6e2ud';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6BTj1B86jFx');
const duration = 750;
const easing = 'ease-out';
const id = '5lsz1R6e2ud_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6iyjS0IvE86');
const duration = 8250;
const easing = 'ease-out';
const id = '6YHPdZrs6eJ';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script13 = function()
{
  const target = object('5hEJDK19Kva');
const duration = 750;
const easing = 'ease-in-out';
const id = '6EEZBjRiAet';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('5hEJDK19Kva');
const duration = 750;
const easing = 'ease-in-out';
const id = '6EEZBjRiAet_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('5u6FnGhzjql');
const duration = 750;
const easing = 'ease-in-out';
const id = '6TSOmIN23GC';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('5u6FnGhzjql');
const duration = 750;
const easing = 'ease-in-out';
const id = '6TSOmIN23GC_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6g3MfFn7o7j');
const duration = 750;
const easing = 'ease-out';
const id = '5UxOjXVyjo9';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('6g3MfFn7o7j');
const duration = 750;
const easing = 'ease-out';
const id = '5UxOjXVyjo9_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  player.once(() => {
const target = object('6p4O7iglYVN');
const duration = 6750;
const easing = 'ease-out';
const id = '6G13cbWwVHK';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script20 = function()
{
  player.once(() => {
const target = object('6p4O7iglYVN');
const duration = 6750;
const easing = 'ease-out';
const id = '6G13cbWwVHK';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  const target = object('5rS9CpnQ35u');
const duration = 750;
const easing = 'ease-in-out';
const id = '6EEZBjRiAet';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('5rS9CpnQ35u');
const duration = 750;
const easing = 'ease-in-out';
const id = '6EEZBjRiAet_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('5YWoaSAJVFI');
const duration = 750;
const easing = 'ease-out';
const id = '6FLhx8BvOjY';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('5YWoaSAJVFI');
const duration = 750;
const easing = 'ease-out';
const id = '6FLhx8BvOjY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('5nP5fitc3HT');
const duration = 750;
const easing = 'ease-out';
const id = '5uyCyNq8q2i';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6D4YiE94ogR');
const duration = 750;
const easing = 'ease-out';
const id = '6EBigZzLVAA';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('6D4YiE94ogR');
const duration = 750;
const easing = 'ease-out';
const id = '6EBigZzLVAA_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  player.once(() => {
const target = object('5Zik5VRb7NM');
const duration = 6750;
const easing = 'ease-out';
const id = '62GVetQ1ks5';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script29 = function()
{
  const target = object('6hrDXaPulU9');
const duration = 750;
const easing = 'ease-out';
const id = '63343ufr1pQ';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6hrDXaPulU9');
const duration = 750;
const easing = 'ease-out';
const id = '63343ufr1pQ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('64jbwv3191n');
const duration = 750;
const easing = 'ease-out';
const id = '6iWSIsqoJEZ';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('64jbwv3191n');
const duration = 750;
const easing = 'ease-out';
const id = '6iWSIsqoJEZ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('6IoZbC8TRML');
const duration = 750;
const easing = 'ease-out';
const id = '6ShoFdV7OU4';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('5abzRLlAUC8');
const duration = 750;
const easing = 'ease-out';
const id = '6OeTBu3u3b3';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('5abzRLlAUC8');
const duration = 750;
const easing = 'ease-out';
const id = '6OeTBu3u3b3_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('6QhNIT6Wz5I');
const duration = 750;
const easing = 'ease-out';
const id = '6GL8OmI4xo0';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('6QhNIT6Wz5I');
const duration = 750;
const easing = 'ease-out';
const id = '6GL8OmI4xo0_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  player.once(() => {
const target = object('6OLIt3WpIHq');
const duration = 6750;
const easing = 'ease-out';
const id = '5YZYjAW1mgp';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script39 = function()
{
  const target = object('6nVfZal3PFF');
const duration = 750;
const easing = 'ease-out';
const id = '6AwW4xnJgTs';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('6nVfZal3PFF');
const duration = 750;
const easing = 'ease-out';
const id = '6AwW4xnJgTs_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  player.once(() => {
const target = object('6BO48cktcp8');
const duration = 750;
const easing = 'ease-out';
const id = '5skP0TtLAGs';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script42 = function()
{
  const target = object('6dJczMk530Z');
const duration = 750;
const easing = 'ease-out';
const id = '5mXWNLt405H';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('6X4i9ZKJnsf');
const duration = 750;
const easing = 'ease-out';
const id = '68X5WSXXyFW';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('6CEyfxYRyBB');
const duration = 750;
const easing = 'ease-out';
const id = '5rLyJpkn0b6';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('6CEyfxYRyBB');
const duration = 750;
const easing = 'ease-out';
const id = '5rLyJpkn0b6_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('6dF0bKkiA9Z');
const duration = 750;
const easing = 'ease-out';
const id = '642YV4aIRIH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  player.once(() => {
const target = object('67sHSNuNcaK');
const duration = 750;
const easing = 'ease-out';
const id = '6SHYfx5rVNu';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script48 = function()
{
  player.once(() => {
const target = object('6GUS9ZCl88i');
const duration = 750;
const easing = 'ease-out';
const id = '5l42IECG96m';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script49 = function()
{
  const target = object('6jLGfS4lyKd');
const duration = 750;
const easing = 'ease-out';
const id = '6m1E54THDzH';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  const target = object('6jLGfS4lyKd');
const duration = 750;
const easing = 'ease-out';
const id = '6m1E54THDzH_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  const target = object('5cGoFwUptFr');
const duration = 750;
const easing = 'ease-out';
const id = '68X5WSXXyFW';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  player.once(() => {
const target = object('61bCux5s4GJ');
const duration = 8250;
const easing = 'ease-out';
const id = '61XKjuxxjdg';
const pulseAmount = 0.1;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script53 = function()
{
  const target = object('6SxvVHvz73F');
const duration = 750;
const easing = 'ease-out';
const id = '67ct4615wF4';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  const target = object('6SxvVHvz73F');
const duration = 750;
const easing = 'ease-out';
const id = '67ct4615wF4_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('6A0bqNLq6By');
const duration = 750;
const easing = 'ease-out';
const id = '62Xv1OscikU';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  const target = object('6A0bqNLq6By');
const duration = 750;
const easing = 'ease-out';
const id = '62Xv1OscikU_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
