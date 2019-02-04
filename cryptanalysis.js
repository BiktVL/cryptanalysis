/**
 * Скрипт для криптоанализа
 * частоты символов в тексте
 * только латиница
 */

// Находим холст для рисования и поля для ввода текста
var barChart=document.getElementById("barChart");
var textArea1=document.getElementById("textArea1");
var textArea2=document.getElementById("textArea2");

// Настройка гистограммы
var context=barChart.getContext("2d");
var width=1220;		// Длинна гистограммы
var ceiling=420;	// Потолок гистограммы
var factor=1;		// Множитель высоты столбиков
var thickness=10; 	// Толщина столбиков
var distance=0;		// Растояние между столбиками
var symbols=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ч","Ш","Щ","Ь","Ы","Ъ","Э","Ю","Я"," "];
var place=0;

// Подпись оси X
context.fillStyle="black";
context.font="bold 14px Arial";
for (symbol of symbols) {
	context.fillText(symbol,place*(thickness+distance)+5,ceiling+20);
	place+=2;
}
context.fillText("100%",1180,10);
context.fillText("90%",1190,52);
context.fillText("80%",1190,94);
context.fillText("70%",1190,136);
context.fillText("60%",1190,178);
context.fillText("50%",1190,220);
context.fillText("40%",1190,262);
context.fillText("30%",1190,304);
context.fillText("20%",1190,346);
context.fillText("10%",1190,388);

// Область графика с линиями
var lines=function(){
context.strokeRect(0,0,width,ceiling);
context.beginPath();
context.moveTo(0,42);
context.lineTo(width,42);
context.moveTo(width,84);
context.lineTo(0,84);
context.moveTo(0,126);
context.lineTo(width,126);
context.moveTo(width,168);
context.lineTo(0,168);
context.moveTo(0,210);
context.lineTo(width,210);
context.moveTo(width,252);
context.lineTo(0,252);
context.moveTo(0,294);
context.lineTo(width,294);
context.moveTo(width,336);
context.lineTo(0,336);
context.moveTo(0,378);
context.lineTo(width,378);
context.stroke();
}
lines();

// Функции обработки перехватчиков событий
var EventUtil={
	addHandler: function(element,type,handler){
		if (element,addEventListener){
			element.addEventListener(type,handler,false);
		} else if (element.attachEvent){
			element.attachEvent("on"+type,handler);
		} else element["on"+type]=handler;
	},
	getEvent: function(event){
		return event ? event : window.event;
	},
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	preventDefault: function(event){
		if (event.preventDefault){
			event.preventDefault();
		} else event.returnValue=false;
	},
	removeHandler: function(element,type,handler){
		if (element,removeEventListener){
			element.removeEventListener(type,handler,false);
		} else if (element.detachEvent){
			element.detachEvent("on"+type,handler);
		} else element["on"+type]=null;
	},
	stopPropagation: function(event){
		if (event.stopPropagation){
			event.stopPropagation();
		} else event.cancelBubble=true;
	}
}

// Построение синей гистограммы
var blueRect = function(){
	var textArea1Length=textArea1.value.match(/[A-ZА-Я ]/gi) ? textArea1.value.match(/[A-ZА-Я ]/gi).length : 0;
	var A=textArea1.value.match(/A/gi) ? textArea1.value.match(/A/gi).length / textArea1Length * ceiling : 0;
	var B=textArea1.value.match(/B/gi) ? textArea1.value.match(/B/gi).length / textArea1Length * ceiling : 0;
	var C=textArea1.value.match(/C/gi) ? textArea1.value.match(/C/gi).length / textArea1Length * ceiling : 0;
	var D=textArea1.value.match(/D/gi) ? textArea1.value.match(/D/gi).length / textArea1Length * ceiling : 0;
	var E=textArea1.value.match(/E/gi) ? textArea1.value.match(/E/gi).length / textArea1Length * ceiling : 0;
	var F=textArea1.value.match(/F/gi) ? textArea1.value.match(/F/gi).length / textArea1Length * ceiling : 0;
	var G=textArea1.value.match(/G/gi) ? textArea1.value.match(/G/gi).length / textArea1Length * ceiling : 0;
	var H=textArea1.value.match(/H/gi) ? textArea1.value.match(/H/gi).length / textArea1Length * ceiling : 0;
	var I=textArea1.value.match(/I/gi) ? textArea1.value.match(/I/gi).length / textArea1Length * ceiling : 0;
	var J=textArea1.value.match(/J/gi) ? textArea1.value.match(/J/gi).length / textArea1Length * ceiling : 0;
	var K=textArea1.value.match(/K/gi) ? textArea1.value.match(/K/gi).length / textArea1Length * ceiling : 0;
	var L=textArea1.value.match(/L/gi) ? textArea1.value.match(/L/gi).length / textArea1Length * ceiling : 0;
	var M=textArea1.value.match(/M/gi) ? textArea1.value.match(/M/gi).length / textArea1Length * ceiling : 0;
	var N=textArea1.value.match(/N/gi) ? textArea1.value.match(/N/gi).length / textArea1Length * ceiling : 0;
	var O=textArea1.value.match(/O/gi) ? textArea1.value.match(/O/gi).length / textArea1Length * ceiling : 0;
	var P=textArea1.value.match(/P/gi) ? textArea1.value.match(/P/gi).length / textArea1Length * ceiling : 0;
	var Q=textArea1.value.match(/Q/gi) ? textArea1.value.match(/Q/gi).length / textArea1Length * ceiling : 0;
	var R=textArea1.value.match(/R/gi) ? textArea1.value.match(/R/gi).length / textArea1Length * ceiling : 0;
	var S=textArea1.value.match(/S/gi) ? textArea1.value.match(/S/gi).length / textArea1Length * ceiling : 0;
	var T=textArea1.value.match(/T/gi) ? textArea1.value.match(/T/gi).length / textArea1Length * ceiling : 0;
	var U=textArea1.value.match(/U/gi) ? textArea1.value.match(/U/gi).length / textArea1Length * ceiling : 0;
	var V=textArea1.value.match(/V/gi) ? textArea1.value.match(/V/gi).length / textArea1Length * ceiling : 0;
	var W=textArea1.value.match(/W/gi) ? textArea1.value.match(/W/gi).length / textArea1Length * ceiling : 0;
	var X=textArea1.value.match(/X/gi) ? textArea1.value.match(/X/gi).length / textArea1Length * ceiling : 0;
	var Y=textArea1.value.match(/Y/gi) ? textArea1.value.match(/Y/gi).length / textArea1Length * ceiling : 0;
	var Z=textArea1.value.match(/Z/gi) ? textArea1.value.match(/Z/gi).length / textArea1Length * ceiling : 0;
	var А=textArea1.value.match(/А/gi) ? textArea1.value.match(/А/gi).length / textArea1Length * ceiling : 0;
	var Б=textArea1.value.match(/Б/gi) ? textArea1.value.match(/Б/gi).length / textArea1Length * ceiling : 0;
	var В=textArea1.value.match(/В/gi) ? textArea1.value.match(/В/gi).length / textArea1Length * ceiling : 0;
	var Г=textArea1.value.match(/Г/gi) ? textArea1.value.match(/Г/gi).length / textArea1Length * ceiling : 0;
	var Д=textArea1.value.match(/Д/gi) ? textArea1.value.match(/Д/gi).length / textArea1Length * ceiling : 0;
	var Е=textArea1.value.match(/Е/gi) ? textArea1.value.match(/Е/gi).length / textArea1Length * ceiling : 0;
	var Ё=textArea1.value.match(/Ё/gi) ? textArea1.value.match(/Ё/gi).length / textArea1Length * ceiling : 0;
	var Ж=textArea1.value.match(/Ж/gi) ? textArea1.value.match(/Ж/gi).length / textArea1Length * ceiling : 0;
	var З=textArea1.value.match(/З/gi) ? textArea1.value.match(/З/gi).length / textArea1Length * ceiling : 0;
	var И=textArea1.value.match(/И/gi) ? textArea1.value.match(/И/gi).length / textArea1Length * ceiling : 0;
	var Й=textArea1.value.match(/Й/gi) ? textArea1.value.match(/Й/gi).length / textArea1Length * ceiling : 0;
	var К=textArea1.value.match(/К/gi) ? textArea1.value.match(/К/gi).length / textArea1Length * ceiling : 0;
	var Л=textArea1.value.match(/Л/gi) ? textArea1.value.match(/Л/gi).length / textArea1Length * ceiling : 0;
	var М=textArea1.value.match(/М/gi) ? textArea1.value.match(/М/gi).length / textArea1Length * ceiling : 0;
	var Н=textArea1.value.match(/Н/gi) ? textArea1.value.match(/Н/gi).length / textArea1Length * ceiling : 0;
	var О=textArea1.value.match(/О/gi) ? textArea1.value.match(/О/gi).length / textArea1Length * ceiling : 0;
	var П=textArea1.value.match(/П/gi) ? textArea1.value.match(/П/gi).length / textArea1Length * ceiling : 0;
	var Р=textArea1.value.match(/Р/gi) ? textArea1.value.match(/Р/gi).length / textArea1Length * ceiling : 0;
	var С=textArea1.value.match(/С/gi) ? textArea1.value.match(/С/gi).length / textArea1Length * ceiling : 0;
	var Т=textArea1.value.match(/Т/gi) ? textArea1.value.match(/Т/gi).length / textArea1Length * ceiling : 0;
	var У=textArea1.value.match(/У/gi) ? textArea1.value.match(/У/gi).length / textArea1Length * ceiling : 0;
	var Ф=textArea1.value.match(/Ф/gi) ? textArea1.value.match(/Ф/gi).length / textArea1Length * ceiling : 0;
	var Х=textArea1.value.match(/Х/gi) ? textArea1.value.match(/Х/gi).length / textArea1Length * ceiling : 0;
	var Ч=textArea1.value.match(/Ч/gi) ? textArea1.value.match(/Ч/gi).length / textArea1Length * ceiling : 0;
	var Ш=textArea1.value.match(/Ш/gi) ? textArea1.value.match(/Ш/gi).length / textArea1Length * ceiling : 0;
	var Щ=textArea1.value.match(/Щ/gi) ? textArea1.value.match(/Щ/gi).length / textArea1Length * ceiling : 0;
	var Ь=textArea1.value.match(/Ь/gi) ? textArea1.value.match(/Ь/gi).length / textArea1Length * ceiling : 0;
	var Ы=textArea1.value.match(/Ы/gi) ? textArea1.value.match(/Ы/gi).length / textArea1Length * ceiling : 0;
	var Ъ=textArea1.value.match(/Ъ/gi) ? textArea1.value.match(/Ъ/gi).length / textArea1Length * ceiling : 0;
	var Э=textArea1.value.match(/Э/gi) ? textArea1.value.match(/Э/gi).length / textArea1Length * ceiling : 0;
	var Ю=textArea1.value.match(/Ю/gi) ? textArea1.value.match(/Ю/gi).length / textArea1Length * ceiling : 0;
	var Я=textArea1.value.match(/Я/gi) ? textArea1.value.match(/Я/gi).length / textArea1Length * ceiling : 0;
	var SPACE=textArea1.value.match(/ /gi) ? textArea1.value.match(/ /gi).length / textArea1Length * ceiling : 0;
	for (i=0;i<=116;i+=2) {
		context.clearRect(i*(thickness+distance),0,thickness,ceiling);
	}
	lines();
	context.fillStyle="blue";
	context.fillRect(0,ceiling-A*factor,thickness,A*factor);
	context.fillRect(2*(thickness+distance),ceiling-B*factor,thickness,B*factor);
	context.fillRect(4*(thickness+distance),ceiling-C*factor,thickness,C*factor);
	context.fillRect(6*(thickness+distance),ceiling-D*factor,thickness,D*factor);
	context.fillRect(8*(thickness+distance),ceiling-E*factor,thickness,E*factor);
	context.fillRect(10*(thickness+distance),ceiling-F*factor,thickness,F*factor);
	context.fillRect(12*(thickness+distance),ceiling-G*factor,thickness,G*factor);
	context.fillRect(14*(thickness+distance),ceiling-H*factor,thickness,H*factor);
	context.fillRect(16*(thickness+distance),ceiling-I*factor,thickness,I*factor);
	context.fillRect(18*(thickness+distance),ceiling-J*factor,thickness,J*factor);
	context.fillRect(20*(thickness+distance),ceiling-K*factor,thickness,K*factor);
	context.fillRect(22*(thickness+distance),ceiling-L*factor,thickness,L*factor);
	context.fillRect(24*(thickness+distance),ceiling-M*factor,thickness,M*factor);
	context.fillRect(26*(thickness+distance),ceiling-N*factor,thickness,N*factor);
	context.fillRect(28*(thickness+distance),ceiling-O*factor,thickness,O*factor);
	context.fillRect(30*(thickness+distance),ceiling-P*factor,thickness,P*factor);
	context.fillRect(32*(thickness+distance),ceiling-Q*factor,thickness,Q*factor);
	context.fillRect(34*(thickness+distance),ceiling-R*factor,thickness,R*factor);
	context.fillRect(36*(thickness+distance),ceiling-S*factor,thickness,S*factor);
	context.fillRect(38*(thickness+distance),ceiling-T*factor,thickness,T*factor);
	context.fillRect(40*(thickness+distance),ceiling-U*factor,thickness,U*factor);
	context.fillRect(42*(thickness+distance),ceiling-V*factor,thickness,V*factor);
	context.fillRect(44*(thickness+distance),ceiling-W*factor,thickness,W*factor);
	context.fillRect(46*(thickness+distance),ceiling-X*factor,thickness,X*factor);
	context.fillRect(48*(thickness+distance),ceiling-Y*factor,thickness,Y*factor);
	context.fillRect(50*(thickness+distance),ceiling-Z*factor,thickness,Z*factor);
	context.fillRect(52*(thickness+distance),ceiling-А*factor,thickness,А*factor);
	context.fillRect(54*(thickness+distance),ceiling-Б*factor,thickness,Б*factor);
	context.fillRect(56*(thickness+distance),ceiling-В*factor,thickness,В*factor);
	context.fillRect(58*(thickness+distance),ceiling-Г*factor,thickness,Г*factor);
	context.fillRect(60*(thickness+distance),ceiling-Д*factor,thickness,Д*factor);
	context.fillRect(62*(thickness+distance),ceiling-Е*factor,thickness,Е*factor);
	context.fillRect(64*(thickness+distance),ceiling-Ё*factor,thickness,Ё*factor);
	context.fillRect(66*(thickness+distance),ceiling-Ж*factor,thickness,Ж*factor);
	context.fillRect(68*(thickness+distance),ceiling-З*factor,thickness,З*factor);
	context.fillRect(70*(thickness+distance),ceiling-И*factor,thickness,И*factor);
	context.fillRect(72*(thickness+distance),ceiling-Й*factor,thickness,Й*factor);
	context.fillRect(74*(thickness+distance),ceiling-К*factor,thickness,К*factor);
	context.fillRect(76*(thickness+distance),ceiling-Л*factor,thickness,Л*factor);
	context.fillRect(78*(thickness+distance),ceiling-М*factor,thickness,М*factor);
	context.fillRect(80*(thickness+distance),ceiling-Н*factor,thickness,Н*factor);
	context.fillRect(82*(thickness+distance),ceiling-О*factor,thickness,О*factor);
	context.fillRect(84*(thickness+distance),ceiling-П*factor,thickness,П*factor);
	context.fillRect(86*(thickness+distance),ceiling-Р*factor,thickness,Р*factor);
	context.fillRect(88*(thickness+distance),ceiling-С*factor,thickness,С*factor);
	context.fillRect(90*(thickness+distance),ceiling-Т*factor,thickness,Т*factor);
	context.fillRect(92*(thickness+distance),ceiling-У*factor,thickness,У*factor);
	context.fillRect(94*(thickness+distance),ceiling-Ф*factor,thickness,Ф*factor);
	context.fillRect(96*(thickness+distance),ceiling-Х*factor,thickness,Х*factor);
	context.fillRect(98*(thickness+distance),ceiling-Ч*factor,thickness,Ч*factor);
	context.fillRect(100*(thickness+distance),ceiling-Ш*factor,thickness,Ш*factor);
	context.fillRect(102*(thickness+distance),ceiling-Щ*factor,thickness,Щ*factor);
	context.fillRect(104*(thickness+distance),ceiling-Ь*factor,thickness,Ь*factor);
	context.fillRect(106*(thickness+distance),ceiling-Ы*factor,thickness,Ы*factor);
	context.fillRect(108*(thickness+distance),ceiling-Ъ*factor,thickness,Ъ*factor);
	context.fillRect(110*(thickness+distance),ceiling-Э*factor,thickness,Э*factor);
	context.fillRect(112*(thickness+distance),ceiling-Ю*factor,thickness,Ю*factor);
	context.fillRect(114*(thickness+distance),ceiling-Я*factor,thickness,Я*factor);
	context.fillRect(116*(thickness+distance),ceiling-SPACE*factor,thickness,SPACE*factor);
};

// Построение красной гистограммы
var redRect = function(){
	var textArea2Length=textArea2.value.match(/[A-ZА-Я ]/gi) ? textArea2.value.match(/[A-ZА-Я ]/gi).length : 0;
	var A0=textArea2.value.match(/A/gi) ? textArea2.value.match(/A/gi).length / textArea2Length * ceiling : 0;
	var B0=textArea2.value.match(/B/gi) ? textArea2.value.match(/B/gi).length / textArea2Length * ceiling : 0;
	var C0=textArea2.value.match(/C/gi) ? textArea2.value.match(/C/gi).length / textArea2Length * ceiling : 0;
	var D0=textArea2.value.match(/D/gi) ? textArea2.value.match(/D/gi).length / textArea2Length * ceiling : 0;
	var E0=textArea2.value.match(/E/gi) ? textArea2.value.match(/E/gi).length / textArea2Length * ceiling : 0;
	var F0=textArea2.value.match(/F/gi) ? textArea2.value.match(/F/gi).length / textArea2Length * ceiling : 0;
	var G0=textArea2.value.match(/G/gi) ? textArea2.value.match(/G/gi).length / textArea2Length * ceiling : 0;
	var H0=textArea2.value.match(/H/gi) ? textArea2.value.match(/H/gi).length / textArea2Length * ceiling : 0;
	var I0=textArea2.value.match(/I/gi) ? textArea2.value.match(/I/gi).length / textArea2Length * ceiling : 0;
	var J0=textArea2.value.match(/J/gi) ? textArea2.value.match(/J/gi).length / textArea2Length * ceiling : 0;
	var K0=textArea2.value.match(/K/gi) ? textArea2.value.match(/K/gi).length / textArea2Length * ceiling : 0;
	var L0=textArea2.value.match(/L/gi) ? textArea2.value.match(/L/gi).length / textArea2Length * ceiling : 0;
	var M0=textArea2.value.match(/M/gi) ? textArea2.value.match(/M/gi).length / textArea2Length * ceiling : 0;
	var N0=textArea2.value.match(/N/gi) ? textArea2.value.match(/N/gi).length / textArea2Length * ceiling : 0;
	var O0=textArea2.value.match(/O/gi) ? textArea2.value.match(/O/gi).length / textArea2Length * ceiling : 0;
	var P0=textArea2.value.match(/P/gi) ? textArea2.value.match(/P/gi).length / textArea2Length * ceiling : 0;
	var Q0=textArea2.value.match(/Q/gi) ? textArea2.value.match(/Q/gi).length / textArea2Length * ceiling : 0;
	var R0=textArea2.value.match(/R/gi) ? textArea2.value.match(/R/gi).length / textArea2Length * ceiling : 0;
	var S0=textArea2.value.match(/S/gi) ? textArea2.value.match(/S/gi).length / textArea2Length * ceiling : 0;
	var T0=textArea2.value.match(/T/gi) ? textArea2.value.match(/T/gi).length / textArea2Length * ceiling : 0;
	var U0=textArea2.value.match(/U/gi) ? textArea2.value.match(/U/gi).length / textArea2Length * ceiling : 0;
	var V0=textArea2.value.match(/V/gi) ? textArea2.value.match(/V/gi).length / textArea2Length * ceiling : 0;
	var W0=textArea2.value.match(/W/gi) ? textArea2.value.match(/W/gi).length / textArea2Length * ceiling : 0;
	var X0=textArea2.value.match(/X/gi) ? textArea2.value.match(/X/gi).length / textArea2Length * ceiling : 0;
	var Y0=textArea2.value.match(/Y/gi) ? textArea2.value.match(/Y/gi).length / textArea2Length * ceiling : 0;
	var Z0=textArea2.value.match(/Z/gi) ? textArea2.value.match(/Z/gi).length / textArea2Length * ceiling : 0;
	var А0=textArea2.value.match(/А/gi) ? textArea2.value.match(/А/gi).length / textArea2Length * ceiling : 0;
	var Б0=textArea2.value.match(/Б/gi) ? textArea2.value.match(/Б/gi).length / textArea2Length * ceiling : 0;
	var В0=textArea2.value.match(/В/gi) ? textArea2.value.match(/В/gi).length / textArea2Length * ceiling : 0;
	var Г0=textArea2.value.match(/Г/gi) ? textArea2.value.match(/Г/gi).length / textArea2Length * ceiling : 0;
	var Д0=textArea2.value.match(/Д/gi) ? textArea2.value.match(/Д/gi).length / textArea2Length * ceiling : 0;
	var Е0=textArea2.value.match(/Е/gi) ? textArea2.value.match(/Е/gi).length / textArea2Length * ceiling : 0;
	var Ё0=textArea2.value.match(/Ё/gi) ? textArea2.value.match(/Ё/gi).length / textArea2Length * ceiling : 0;
	var Ж0=textArea2.value.match(/Ж/gi) ? textArea2.value.match(/Ж/gi).length / textArea2Length * ceiling : 0;
	var З0=textArea2.value.match(/З/gi) ? textArea2.value.match(/З/gi).length / textArea2Length * ceiling : 0;
	var И0=textArea2.value.match(/И/gi) ? textArea2.value.match(/И/gi).length / textArea2Length * ceiling : 0;
	var Й0=textArea2.value.match(/Й/gi) ? textArea2.value.match(/Й/gi).length / textArea2Length * ceiling : 0;
	var К0=textArea2.value.match(/К/gi) ? textArea2.value.match(/К/gi).length / textArea2Length * ceiling : 0;
	var Л0=textArea2.value.match(/Л/gi) ? textArea2.value.match(/Л/gi).length / textArea2Length * ceiling : 0;
	var М0=textArea2.value.match(/М/gi) ? textArea2.value.match(/М/gi).length / textArea2Length * ceiling : 0;
	var Н0=textArea2.value.match(/Н/gi) ? textArea2.value.match(/Н/gi).length / textArea2Length * ceiling : 0;
	var О0=textArea2.value.match(/О/gi) ? textArea2.value.match(/О/gi).length / textArea2Length * ceiling : 0;
	var П0=textArea2.value.match(/П/gi) ? textArea2.value.match(/П/gi).length / textArea2Length * ceiling : 0;
	var Р0=textArea2.value.match(/Р/gi) ? textArea2.value.match(/Р/gi).length / textArea2Length * ceiling : 0;
	var С0=textArea2.value.match(/С/gi) ? textArea2.value.match(/С/gi).length / textArea2Length * ceiling : 0;
	var Т0=textArea2.value.match(/Т/gi) ? textArea2.value.match(/Т/gi).length / textArea2Length * ceiling : 0;
	var У0=textArea2.value.match(/У/gi) ? textArea2.value.match(/У/gi).length / textArea2Length * ceiling : 0;
	var Ф0=textArea2.value.match(/Ф/gi) ? textArea2.value.match(/Ф/gi).length / textArea2Length * ceiling : 0;
	var Х0=textArea2.value.match(/Х/gi) ? textArea2.value.match(/Х/gi).length / textArea2Length * ceiling : 0;
	var Ч0=textArea2.value.match(/Ч/gi) ? textArea2.value.match(/Ч/gi).length / textArea2Length * ceiling : 0;
	var Ш0=textArea2.value.match(/Ш/gi) ? textArea2.value.match(/Ш/gi).length / textArea2Length * ceiling : 0;
	var Щ0=textArea2.value.match(/Щ/gi) ? textArea2.value.match(/Щ/gi).length / textArea2Length * ceiling : 0;
	var Ь0=textArea2.value.match(/Ь/gi) ? textArea2.value.match(/Ь/gi).length / textArea2Length * ceiling : 0;
	var Ы0=textArea2.value.match(/Ы/gi) ? textArea2.value.match(/Ы/gi).length / textArea2Length * ceiling : 0;
	var Ъ0=textArea2.value.match(/Ъ/gi) ? textArea2.value.match(/Ъ/gi).length / textArea2Length * ceiling : 0;
	var Э0=textArea2.value.match(/Э/gi) ? textArea2.value.match(/Э/gi).length / textArea2Length * ceiling : 0;
	var Ю0=textArea2.value.match(/Ю/gi) ? textArea2.value.match(/Ю/gi).length / textArea2Length * ceiling : 0;
	var Я0=textArea2.value.match(/Я/gi) ? textArea2.value.match(/Я/gi).length / textArea2Length * ceiling : 0;
	var SPACE0=textArea2.value.match(/ /gi) ? textArea2.value.match(/ /gi).length / textArea2Length * ceiling : 0;
	for (i=1;i<=117;i+=2) {
		context.clearRect(i*(thickness+distance),0,thickness,ceiling);
	}
	lines();
	context.fillStyle="red";
	context.fillRect(1*(thickness+distance),ceiling-A0*factor,thickness,A0*factor);
	context.fillRect(3*(thickness+distance),ceiling-B0*factor,thickness,B0*factor);
	context.fillRect(5*(thickness+distance),ceiling-C0*factor,thickness,C0*factor);
	context.fillRect(7*(thickness+distance),ceiling-D0*factor,thickness,D0*factor);
	context.fillRect(9*(thickness+distance),ceiling-E0*factor,thickness,E0*factor);
	context.fillRect(11*(thickness+distance),ceiling-F0*factor,thickness,F0*factor);
	context.fillRect(13*(thickness+distance),ceiling-G0*factor,thickness,G0*factor);
	context.fillRect(15*(thickness+distance),ceiling-H0*factor,thickness,H0*factor);
	context.fillRect(17*(thickness+distance),ceiling-I0*factor,thickness,I0*factor);
	context.fillRect(19*(thickness+distance),ceiling-J0*factor,thickness,J0*factor);
	context.fillRect(21*(thickness+distance),ceiling-K0*factor,thickness,K0*factor);
	context.fillRect(23*(thickness+distance),ceiling-L0*factor,thickness,L0*factor);
	context.fillRect(25*(thickness+distance),ceiling-M0*factor,thickness,M0*factor);
	context.fillRect(27*(thickness+distance),ceiling-N0*factor,thickness,N0*factor);
	context.fillRect(29*(thickness+distance),ceiling-O0*factor,thickness,O0*factor);
	context.fillRect(31*(thickness+distance),ceiling-P0*factor,thickness,P0*factor);
	context.fillRect(33*(thickness+distance),ceiling-Q0*factor,thickness,Q0*factor);
	context.fillRect(35*(thickness+distance),ceiling-R0*factor,thickness,R0*factor);
	context.fillRect(37*(thickness+distance),ceiling-S0*factor,thickness,S0*factor);
	context.fillRect(39*(thickness+distance),ceiling-T0*factor,thickness,T0*factor);
	context.fillRect(41*(thickness+distance),ceiling-U0*factor,thickness,U0*factor);
	context.fillRect(43*(thickness+distance),ceiling-V0*factor,thickness,V0*factor);
	context.fillRect(45*(thickness+distance),ceiling-W0*factor,thickness,W0*factor);
	context.fillRect(47*(thickness+distance),ceiling-X0*factor,thickness,X0*factor);
	context.fillRect(49*(thickness+distance),ceiling-Y0*factor,thickness,Y0*factor);
	context.fillRect(51*(thickness+distance),ceiling-Z0*factor,thickness,Z0*factor);
	context.fillRect(53*(thickness+distance),ceiling-А0*factor,thickness,А0*factor);
	context.fillRect(55*(thickness+distance),ceiling-Б0*factor,thickness,Б0*factor);
	context.fillRect(57*(thickness+distance),ceiling-В0*factor,thickness,В0*factor);
	context.fillRect(59*(thickness+distance),ceiling-Г0*factor,thickness,Г0*factor);
	context.fillRect(61*(thickness+distance),ceiling-Д0*factor,thickness,Д0*factor);
	context.fillRect(63*(thickness+distance),ceiling-Е0*factor,thickness,Е0*factor);
	context.fillRect(65*(thickness+distance),ceiling-Ё0*factor,thickness,Ё0*factor);
	context.fillRect(67*(thickness+distance),ceiling-Ж0*factor,thickness,Ж0*factor);
	context.fillRect(69*(thickness+distance),ceiling-З0*factor,thickness,З0*factor);
	context.fillRect(71*(thickness+distance),ceiling-И0*factor,thickness,И0*factor);
	context.fillRect(73*(thickness+distance),ceiling-Й0*factor,thickness,Й0*factor);
	context.fillRect(75*(thickness+distance),ceiling-К0*factor,thickness,К0*factor);
	context.fillRect(77*(thickness+distance),ceiling-Л0*factor,thickness,Л0*factor);
	context.fillRect(79*(thickness+distance),ceiling-М0*factor,thickness,М0*factor);
	context.fillRect(81*(thickness+distance),ceiling-Н0*factor,thickness,Н0*factor);
	context.fillRect(83*(thickness+distance),ceiling-О0*factor,thickness,О0*factor);
	context.fillRect(85*(thickness+distance),ceiling-П0*factor,thickness,П0*factor);
	context.fillRect(87*(thickness+distance),ceiling-Р0*factor,thickness,Р0*factor);
	context.fillRect(89*(thickness+distance),ceiling-С0*factor,thickness,С0*factor);
	context.fillRect(91*(thickness+distance),ceiling-Т0*factor,thickness,Т0*factor);
	context.fillRect(93*(thickness+distance),ceiling-У0*factor,thickness,У0*factor);
	context.fillRect(95*(thickness+distance),ceiling-Ф0*factor,thickness,Ф0*factor);
	context.fillRect(97*(thickness+distance),ceiling-Х0*factor,thickness,Х0*factor);
	context.fillRect(99*(thickness+distance),ceiling-Ч0*factor,thickness,Ч0*factor);
	context.fillRect(101*(thickness+distance),ceiling-Ш0*factor,thickness,Ш0*factor);
	context.fillRect(103*(thickness+distance),ceiling-Щ0*factor,thickness,Щ0*factor);
	context.fillRect(105*(thickness+distance),ceiling-Ь0*factor,thickness,Ь0*factor);
	context.fillRect(107*(thickness+distance),ceiling-Ы0*factor,thickness,Ы0*factor);
	context.fillRect(109*(thickness+distance),ceiling-Ъ0*factor,thickness,Ъ0*factor);
	context.fillRect(111*(thickness+distance),ceiling-Э0*factor,thickness,Э0*factor);
	context.fillRect(113*(thickness+distance),ceiling-Ю0*factor,thickness,Ю0*factor);
	context.fillRect(115*(thickness+distance),ceiling-Я0*factor,thickness,Я0*factor);
	context.fillRect(117*(thickness+distance),ceiling-SPACE0*factor,thickness,SPACE0*factor);
};

// Перехватчики событий
EventUtil.addHandler(textArea1,"keyup",blueRect);
EventUtil.addHandler(textArea2,"keyup",redRect);
