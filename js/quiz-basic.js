var baseOptions = document.getElementsByClassName("base-option-group"),
secondaryOptions = document.getElementsByClassName("secondary-option-group"),
finisherOptions = document.getElementsByClassName("finisher-option-group"),
baseLayerFill = document.getElementById("base-layer-fill"),
baseLayerWavey = document.getElementById("base-layer-wavey"),
secondaryLayerFill = document.getElementById("secondary-layer-fill"),
secondaryLayerWavey = document.getElementById("secondary-layer-wavey"),
garnishSplash = document.getElementById("garnish-splash"),
garnishWedge = document.getElementById("garnish-wedge"),
infoBase = document.getElementById("info-base"),
infoSecondary = document.getElementById("info-secondary"),
infoFinisher = document.getElementById("info-finisher");

//BASE LAYER

for (var i = 0; i < baseOptions.length; i++){
baseOptions[i].addEventListener("click", baseClicked);
}

//base color vodka
baseOptions[0].addEventListener("click", function() {
baseLayerWavey.style.fill="azure";
infoBase.innerText="Vodka";
});

//base color gin
baseOptions[1].addEventListener("click", function() {
baseLayerWavey.style.fill="antiquewhite";
infoBase.innerText="Gin";
});

//base color rum
baseOptions[2].addEventListener("click", function() {
baseLayerWavey.style.fill="brown";
infoBase.innerText="Rum";
});

//base color tequila
baseOptions[3].addEventListener("click", function() {
baseLayerWavey.style.fill="floralwhite";
infoBase.innerText="Tequila";
});

//base color whiskey
baseOptions[4].addEventListener("click", function() {
baseLayerWavey.style.fill="goldenrod";
infoBase.innerText="Whiskey";
});

function baseClicked() {
baseLayerFill.classList.add("fill-anim");
baseLayerWavey.classList.add("wavey-anim");
baseLayerWavey.style.opacity="1";
setTimeout(function() {
document.getElementById("secondary-option-holder").style.display="block";
document.getElementById("secondary-option-holder").classList.add("nextCategory-anim");
}, 1000);
}

//END BASE LAYER





//SECONDARY LAYER

for (var i = 0; i < secondaryOptions.length; i++){
secondaryOptions[i].addEventListener("click", secondaryClicked);
}
	
//secondary color ginger ale
secondaryOptions[0].addEventListener("click", function() {
secondaryLayerWavey.style.fill="chocolate";
infoSecondary.innerText="Ginger Ale";
});

//secondary color cranberry juice
secondaryOptions[1].addEventListener("click", function() {
secondaryLayerWavey.style.fill="crimson";
infoSecondary.innerText="Cranberry Juice";
});

//secondary color cola soda
secondaryOptions[2].addEventListener("click", function() {
secondaryLayerWavey.style.fill="maroon";
infoSecondary.innerText="Cola Soda";
});

//secondary color orange juice
secondaryOptions[3].addEventListener("click", function() {
secondaryLayerWavey.style.fill="orangered";
infoSecondary.innerText="Orange Juice";
});

//secondary color water tonic
secondaryOptions[4].addEventListener("click", function() {
secondaryLayerWavey.style.fill="paleturquoise";
infoSecondary.innerText="Water Tonic";
});

function secondaryClicked() {
secondaryLayerFill.classList.add("fill-anim-long");
secondaryLayerWavey.classList.add("wavey-anim");
secondaryLayerWavey.style.opacity="1";
setTimeout(function() {
document.getElementById("finisher-option-holder").style.display="block";
document.getElementById("finisher-option-holder").classList.add("nextCategoryShort-anim");
}, 1000);
}

//END SECONDARY LAYER







for (var i = 0; i < finisherOptions.length; i++){
finisherOptions[i].addEventListener("click", finisherClicked);
}

//finisher lemon wedge
finisherOptions[0].addEventListener("click", function() {
garnishWedge.style.backgroundImage="url('assets/images/wedge-lemon.svg')";
garnishWedge.classList.add("wedge-anim");
infoFinisher.innerText="Lemon Wedge";
garnishWedge.style.opacity="1";
});

//finisher lime wedge
finisherOptions[1].addEventListener("click", function() {
garnishWedge.style.backgroundImage="url('assets/images/wedge-lime.svg')";
garnishWedge.classList.add("wedge-anim");
infoFinisher.innerText="Lime Wedge";
garnishWedge.style.opacity="1";
});

//finisher grenadine syrup
finisherOptions[2].addEventListener("click", function() {
garnishSplash.style.backgroundColor="palevioletred";
garnishSplash.classList.add("splash-anim");
infoFinisher.innerText="Grenadine Syrup";
garnishWedge.style.opacity="0";
setTimeout(function() {
garnishSplash.classList.remove("splash-anim");
garnishWedge.classList.remove("wedge-anim");
}, 500);
});

//finisher orange bitters
finisherOptions[3].addEventListener("click", function() {
garnishSplash.style.backgroundColor="orange";
garnishSplash.classList.add("splash-anim");
infoFinisher.innerText="Orange Bitters";
garnishWedge.style.opacity="0";
setTimeout(function() {
garnishSplash.classList.remove("splash-anim");
garnishWedge.classList.remove("wedge-anim");
}, 500);
});

function finisherClicked() {
setTimeout(function() {
document.getElementById("end-option-holder").style.display="block";
document.getElementById("end-option-holder").classList.add("nextCategory-anim");
}, 500);
}

//END FINISHER LAYER





//FINISHED OPTIONS LAYER

document.getElementById("results-option").addEventListener("click", function() {
document.getElementById("results-option").remove();
document.getElementById("finisher-option-holder").remove();
document.getElementById("secondary-option-holder").remove();
document.getElementById("base-option-holder").remove();
document.getElementById("end-option-holder").remove();
document.getElementById("reset-option").style.display="block";
document.getElementById("results-brella").style.display="block";
	
	
//VODKA BASE RESULTS
if (infoBase.innerText==="Vodka" && infoSecondary.innerText==="Ginger Ale") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Good combination! Sometimes referred to as a Moscow Buck, this drink has a number of variations, with the Ale sometimes being replaced with Ginger Beer or Citrus Juice and the Vodka being replaced with almost any other spirit. Finishers such as fruits, syrups, and mint could be shaken or muddled in. Excellento!</p>');
}
else if (infoBase.innerText==="Vodka" && infoSecondary.innerText==="Cranberry Juice") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>The good old Vodka and Cran! Otherwise known as Cape Cod, this classic drink is typically made with only fruit juice and spirits. Served on the rocks, suggested proportions vary wildly for this drink, with some recommending not to follow exact measurements at all. From a Cosmopolitan to a Madras, variations of this classic combination is seen in many drinks today. Sometimes, instead of a wedge, the fruit’s juice is splashed directly into the drink. Good job!</p>');
}
else if (infoBase.innerText==="Vodka" && infoSecondary.innerText==="Cola Soda") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Not too bad! Vodka and Cola can be an acquired choice for some people. Due to its blandness, Clear Vodka typically does well with most mixers. However, some may argue that Cola goes best with brown liquor. But hey, don’t let that stop you!</p>');
}
else if (infoBase.innerText==="Vodka" && infoSecondary.innerText==="Orange Juice") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Youv’e made what is widely known as a Screwdriver! This simple, no-nonsense drink uses Vodka combined with either orange juice or orange soda (sometimes both are used). As for garnish, typically an orange slice is added in, but a lemon/lime wedge should do just fine. Thumbs up!</p>');
}
else if (infoBase.innerText==="Vodka" && infoSecondary.innerText==="Water Tonic") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>That’s what folks call the Vodka Tonic! A simple drink, it is usually made with a combination of one-part Vodka and three-parts Water Tonic, to taste. It is usually prepared by mixing the ingredients together and serving stirred, not shaken. The wedge is a great choice for garnish! It is typically squeezed into the drink before serving. Goodo old fruit!</p>');
}
//END VODKA BASE RESULTS	

//GIN BASE RESULTS
if (infoBase.innerText==="Gin" && infoSecondary.innerText==="Ginger Ale") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Gin and Gin! Considered as the original ‘Buck’, this classic combo is fizzier than a Gin Gimlet and a good bit sweeter than Gin and Tonic. The lemon and lime finishers are interchangeable and are often squeezed into the drink. Good work!</p>');
}
else if (infoBase.innerText==="Gin" && infoSecondary.innerText==="Cranberry Juice") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Not too shabby! Gin and Cran is a fairly common mix, although a third juice component is usually added in too. In most cases, cranberry juice is combined with grape. Stronger tasting citrus juices, such as lemon and lime, can also be added in but they are typically combined with other ingredients such as syrups or soda water to combat the sour taste. Not bad!</p>');
}
else if (infoBase.innerText==="Gin" && infoSecondary.innerText==="Cola Soda") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Hmm, that may not be the best combination there, matey! The Cola may overwhelm the botanicals of the Gin leaving a bitter if somewhat floral taste. Depending on the type of Gin you’ve used, it may then leave a sweet, out-of-place aftertaste. Try again!</p>');
}
else if (infoBase.innerText==="Gin" && infoSecondary.innerText==="Orange Juice") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Nice! That combo’s called an Adirondack, or Orange Blossom depending on where you’re from. The cocktail is sometimes served shaken and strained into a chilled glass, although there are versions where the ingredients are just poured on the rocks. Amazing work!</p>');
}
else if (infoBase.innerText==="Gin" && infoSecondary.innerText==="Water Tonic") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Ah, the good old G and T. Nice work! This classic drink combines two particularly bitter ingredients such that they cancel each other’s bitterness out. A slice or wedge of lime is usually the prefered finisher for this drink. Awesomely done!</p>');
}
//END GIN BASE RESULTS

//RUM BASE RESULTS
if (infoBase.innerText==="Rum" && infoSecondary.innerText==="Ginger Ale") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Arrr, that be a Dark N’ Stormy you be havin’ there, mate! Although usually made with Ginger Beer instead of Ginger Ale, when the latter is used, the cocktail gets a nice frizzy flavor. Contrary to its namesake, if the ale is used, the drink stays light and bright. Throw in a few lemon slices and you’re good to go!</p>');
}
else if (infoBase.innerText==="Rum" && infoSecondary.innerText==="Cranberry Juice") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Not too bad! Some people may not recommend it but Rum and Cran can still definitely go together. Of course, there are a few things to be mindful of. For example, you probably shouldn’t use Dark Rum; just use light ones instead. You could also throw in a little bit of Triple Sec for a better taste, or a Club Soda to lighten it instead. Keep trying!</p>');
}
else if (infoBase.innerText==="Rum" && infoSecondary.innerText==="Cola Soda") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Ah, the good old Cuba Libre! The classic college drink, it nowadays has garnered a reputation for being a common man’s beverage. Once considered exotic, its cheap ingredients has led to its widespread popularity. Of course, that means that the drink has had numerous variations such as the Cuba Pintada, Cuba Light, and the awesomely named, Cuban Missile Crisis. Rock on!</p>');
}
else if (infoBase.innerText==="Rum" && infoSecondary.innerText==="Orange Juice") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>That drink is what is called a Cuban Screw! Highly popular, this drink is all about the balance. Because of that, it has garnered a large number of variations, with the base often being replaced by other spirits such as Vodka (turning it into a Screwdriver Cocktail), Tequila (Mexican Screw), Gin (Left Handed Screwdriver), and Brandy (Rusty Screw). High five!</p>');
}
else if (infoBase.innerText==="Rum" && infoSecondary.innerText==="Water Tonic") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Cool combo! The Rum and Tonic is the lesser known cousin of the popular Gin and Tonic drink. It is sweeter and more refreshing than the latter. Do note that the Rum family is widely varied. While there are plenty of light-bodied Rum that would work fine with Water Tonic, most others will require an equally strong Tonic partner, such as Schweppes. Alright, alright, alright!</p>');
}
//END RUM BASE RESULTS

//TEQUILA BASE RESULTS
if (infoBase.innerText==="Tequila" && infoSecondary.innerText==="Ginger Ale") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Nice mix! Known as a Tequila Slammer to some, this drink is surprisingly not very well known. Tequila’s earthy bite, coupled with the Ale’s sweet, prickly heat, makes for a great, balanced experience. Some add citrus, others a splash of grenadine, and a few even muddle in a Jalapeno or two for that authentic taste. Cool beans!</p>');
}
else if (infoBase.innerText==="Tequila" && infoSecondary.innerText==="Cranberry Juice") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Solid choice! Tequila Cranberry is one of the easiest cocktails to make. The only tricky part is in adjusting for the tartness of the juice. Surprisingly, going with diluted and sweetened commercial juice works best for this. Ideally, shake the mix with a shaker filled with ice cubes and then pour it into the glass without the ice. This helps prevent further dilution and unintended blandness. Awesome possum!</p>');
}
else if (infoBase.innerText==="Tequila" && infoSecondary.innerText==="Cola Soda") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Well that’s a drink I don’t see often! Go south of the equator and you’ll hear people call this drink the Charro Negro or the Batanga. The glass rim is typically rubbed with a lemon or lime wedge before being dipped into a dish of salt. More citrus juice is then squeezed into the glass before the mix is thrown in. Way to go!</p>');
}
else if (infoBase.innerText==="Tequila" && infoSecondary.innerText==="Orange Juice") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Ah, the beautiful Tequila Sunrise! This drink, partly made famous by celebrities over the years, gets its signature look by adding grenadine syrup to a glass of unmixed Tequila, Orange Juice, and Ice. Way to go!</p>');
}
else if (infoBase.innerText==="Tequila" && infoSecondary.innerText==="Water Tonic") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Oh, hey! It’s the good old T n’ T, or Teqtonic to some! This light and refreshing drink, if done right, has a balanced sweet and bitter taste and can have a few herbal notes added to it too, depending on the Tonic used. It’s typically garnished with a simple lime wedge and little else. Awesome sauce!</p>');
}
//END TEQUILA BASE RESULTS

//WHISKEY BASE RESULTS
if (infoBase.innerText==="Whiskey" && infoSecondary.innerText==="Ginger Ale") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Nice job! That’s what people call a Whiskey Ginger, or an Irish Buck depending on which side of the North American continent you’re on. The combo of whiskey and light ale is pretty hard to beat, although you could also try experimenting with spicy Ginger Beer in place of the Ale to get more of a nice ginger kick. Rock on!</p>');
}
else if (infoBase.innerText==="Whiskey" && infoSecondary.innerText==="Cranberry Juice") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Not bad at all! Cranberry and Whiskey isn’t the most common drink combo out there but it’s got a good following. You can throw in a sour component via lemons which, when combined with the Cranberry Juice, can really highlight the spiciness of the whiskey. It’s definitely a combo worth experimenting more on. Yeah, baby!</p>');
}
else if (infoBase.innerText==="Whiskey" && infoSecondary.innerText==="Cola Soda") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>That’s what’s called the Jack and Coke, or a Lemmy by some. It’s a pretty common drink that’s easily made. Unfortunately, it’s also easy to screw up. The sugary sweet cola can easily take over the entire drink, unless you use a stronger whiskey like Rye, Melon Corn, or some such. Keep on mixin’!</p>');
}
else if (infoBase.innerText==="Whiskey" && infoSecondary.innerText==="Orange Juice") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Rawr! You just made the Tiger Juice cocktail! Best made with Canadian Whiskey, this alcohol-heavy drink uses the fruit juice to rough out the edges of the whiskey while livening it up with notes of citrus. It is typically shaken and strained with lemon juice. It can be an acquired taste, what with it having its fair share of critics and fans. Bottoms up!</p>');
}
else if (infoBase.innerText==="Whiskey" && infoSecondary.innerText==="Water Tonic") {
document.getElementById("results-holder").insertAdjacentHTML("afterbegin", '<p>Interesting! Typically, these two wouldn’t go over very well. Tonic Water has quite a bitter taste that could easily overpower Whiskey. With that said, there are drinks out there that utilize this combination. One such drink is the Leprechaun! It uses Irish Whiskey and Tonic with a lime or lemon wedge for garnish. Keep trying!</p>');
}
//END WHISKEY BASE RESULTS

/* DELETED - THIS SECTION HAS BEEN CUT OUT DUE TO TIME CONSTRAINTS :(

//LEMON WEDGE RESULTS
if (infoFinisher.innerText==="Lemon Wedge") {
document.getElementById("results-holder").insertAdjacentHTML("beforeend", '<p>lemon wedge info</p>');
}
//END LEMON WEDGE RESULTS

//LIME WEDGE RESULTS
else if (infoFinisher.innerText==="Lime Wedge") {
document.getElementById("results-holder").insertAdjacentHTML("beforeend", '<p>lime wedge info</p>');
}
//END LIME WEDGE RESULTS

//GRENADINE RESULTS
else if (infoFinisher.innerText==="Grenadine Syrup") {
document.getElementById("results-holder").insertAdjacentHTML("beforeend", '<p>grenadine syrup info</p>');
}
//END GRENADINE RESULTS

//ORANGE BITTERS
else if (infoFinisher.innerText==="Orange Bitters") {
document.getElementById("results-holder").insertAdjacentHTML("beforeend", '<p>orange bitters info</p>');
}
//END ORANGE BITTERS

DELETED */

});

//END FINISHED OPTIONS LAYER
