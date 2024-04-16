document.addEventListener('DOMContentLoaded', postData);

const data = document.location.search;

const params = new URLSearchParams(data);

const name1 = params.get('fname');
const season = params.get('seasons');
const food = params.get('foods');
const superpower = params.get('super');
const color = params.getAll('colors');
const month = params.get('month');
const occupation = params.getAll('job');
const place = params.get('state');
const tactic = params.get('army');

let image;
let spiel;

let elyrion=0;
let polaris=0;
let aimo=0;
let vengir=0;
let luxidoor=0;
let hoodrick=0;
let kickoo=0;



if (name1[0].toUpperCase()=="E") { 
    elyrion+=1;
}else if(name1[0].toUpperCase()=="P" ) {
    polaris+=1;
}else if(name1[0].toUpperCase()=="A" ) {
    aimo+=1;
}else if(name1[0].toUpperCase()=="V" ) {
    vengir+=1;
}else if(name1[0].toUpperCase()=="L" ) {
    luxidoor+=1;
}else if(name1[0].toUpperCase()=="H" ) {
    hoodrick+=1;
}else if(name1[0].toUpperCase()=="K" ) {
    kickoo+=1;
}

if (season=="summer"){
    elyrion+=1;
    kickoo+=1;
}else if(season=="autumn"){
    hoodrick+=1;
}else if(season=="winter"){
    polaris+=1;
}else if(season=="spring"){
    luxidoor+=1;
    aimo+=1;
}else{
    vengir+=1;
}

if ( food=="fish"){
    kickoo+=1;
}else if(food=="pork"){
    vengir+=1;
}else if(food=="beef"){
    hoodrick+=1;
}else if(food=="salad"){
    elyrion+=1;
}else if(food=="cream"){
    polaris+=1;
}else if(food=="steak"){
    luxidoor+=1;
}else{
    aimo+=1;
}


if ( superpower=="water"){
    kickoo+=1;
}else if(superpower=="str"){
    vengir+=1;
}else if(superpower=="aim"){
    hoodrick+=1;
}else if(superpower=="anima"){
    elyrion+=1;
}else if(superpower=="ice"){
    polaris+=1;
}else if(superpower=="money"){
    luxidoor+=1;
}else if(superpower=="mind"){
    aimo+=1;
}


if(color.includes("pink")){
    elyrion+=1;
}
if(color.includes("white")){
    polaris+=1;
}
if(color.includes("turq")){
    aimo+=1;
}
if(color.includes("black")){
    vengir+=1;
}
if(color.includes("purp")){
    luxidoor+=1;
}
if(color.includes("carml")){
    hoodrick+=1;
}
if(color.includes("green")){
    kickoo+=1;
}


if ( month=="february"){
    kickoo+=1;
}else if(month=="june"){
    vengir+=1;
    polaris+=1;
}else if(month=="march"){
    hoodrick+=1;
    luxidoor+=1;
}else if(month=="december"){
    aimo+=1;
}else if(month=="may"){
    elyrion+=1;
}

if(occupation.includes("ranger")){
    elyrion+=1;
}
if(occupation.includes("snow")){
    polaris+=1;
}
if(occupation.includes("monk")){
    aimo+=1;
}
if(occupation.includes("bounce")){
    vengir+=1;
}
if(occupation.includes("bank")){
    luxidoor+=1;
}
if(occupation.includes("wood")){
    hoodrick+=1;
}
if(occupation.includes("fisher")){
    kickoo+=1;
}

if ( place=="hawaii"){
    kickoo+=1;
}else if(place=="mor"){
    vengir+=1;
}else if(place=="eng"){
    hoodrick+=1;
}else if(place=="brazil"){
    elyrion+=1;
}else if(place=="fin"){
    polaris+=1;
}else if(place=="india"){
    luxidoor+=1;
}else if(place=="nepal"){
    aimo+=1;
}

if ( tactic=="ship"){
    kickoo+=1;
}else if(tactic=="infantry"){
    vengir+=1;
}else if(tactic=="arrow"){
    hoodrick+=1;
}else if(tactic=="ani"){
    elyrion+=1;
}else if(tactic=="snows"){
    polaris+=1;
}else if(tactic=="pay"){
    luxidoor+=1;
}else if(tactic=="peace"){
    aimo+=1;
}

const tribelist=[elyrion,polaris,aimo,vengir,luxidoor,hoodrick,kickoo];
tribelist.sort();
tribelist.reverse();

let tribe; 
if(tribelist[0]==elyrion){
    tribe="Elyrion";
    image='images/elyrion.jpg';
    spiel="The mysterious Elyrion defend their woodland homes with colorful magic. They regard Nature as a holy spirit and cannot hunt animals or chop down trees. They can use enchantment to turn regular animals into powerful monsters. You must love nature!";
}else if( tribelist[0]==polaris){
    tribe="Polaris";
    image='images/polaris.png';
    spiel="The Polaris have lain trapped in the far reaches of the freezing tundra for eons, but were blessed by the unknowable Gaami with the power to expand their unnatural icy terrain farther than the weather permits. The Polaris are determined to transform the land into a frigid paradise. I take it you like the cold?";
}else if(tribelist[0]==aimo){
    tribe="Ai-Mo";
    image='images/aimo.png';
    spiel="The tranquil and wise Ai-Mo inhabits the harshest, windiest, and highest mountain range of the square, where they have found inner peace through meditation. You must be pretty chill!";
}else if(tribelist[0]==vengir){
    tribe="Vengir";
    image='images/vengir.jpg';
    spiel="The Vengir were frowned upon by the other tribes and pushed into the wastelands. They excel in swordmanship. You must be pretty tough!"
}else if(tribelist[0]==luxidoor){
    tribe="Luxidoor";
    image='images/luxidoor.jpg';
    spiel="The Luxidoor love expensive things, jewels, rare spices, and exclusive ornatments. You must enjoy the finer things in life.";
}else if(tribelist[0]==hoodrick){
    tribe="Hoodrick";
    image='images/Hoodrick_tribe_moon_2.jpg';
    spiel="The yellow autumn leaves of the Hoodrick woods are perfect hideouts for its peculiar mushroom stuffing inhabitants. They are also excellent archers. Simple things like an Autumn stroll make you very happy."
}else if(tribelist[0]==kickoo){
    tribe="Kickoo";
    image='images/kickoo.png';
    spiel="White sandy beaches with coconut palms; abundance of fruit and fish. The Kickoo are a people of the islands and oceans. You long for the open sea and adventure. Or you just like the beach."
}

function postData(){
    const container = document.getElementById('results');
    container.innerHTML = `<h1>You're in ${tribe}!</h1>
                           <img src="${image}"></img>
                           <p1 id="desc">${spiel}</p1>
                           <a id="home" class="home" href="form.html">Back to quiz</a>`;
}

