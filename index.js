
const Translator = require('./lib/translator.js');
const translator = new Translator();
	const FACTIONS = [
	{name: "Elyos", raceid: 1},
	{name: "Asmo", raceid: 2}
	];

	module.exports = function Translator(mod) {
	const {command } = mod.require;

	let enabled = false;

	// TO DO: find a packet what get send before entering the world to get OWN Player-gameid & playername

	mod.hook('S_MESSAGE',1,(event)=>{
		let race = FACTIONS.find(obj=>obj.raceid === event.canRead).name;
		if (event.type === 0 && enabled)
				if (race === 'Elyos'){
					console.log('[translator] | '+race+'->Asmo'+' | '+event.gameId+' | '+event.name+' | '+event.message)
					}
					else if (race === 'Asmo'){
					console.log('[translator] | '+race+'->Elyos'+' | '+event.gameId+' | '+event.name+' | '+event.message)
					}
	});
	// TO DO remove ?ely / ?asmo in translated text
	mod.hook('C_CHAT',1,(event)=>{
	if(event.type === 0 && enabled){
		if(event.message.includes('?ely')) {
			var string = event.message.substring(4)
			let test = translator.translateHelper(string);
			//event.message = test;
			console.log(test)
			return false;
		}
		else if(event.message.includes('?asmo')) {
		let isAsmoSelected = true;
		var string = event.message.substring(5)
		let test2 = translator.translateHelper(string, isAsmoSelected)
		//event.message = test2;
		console.log(test2)
		return false;
		}
		if (event.type === 36){
			return false;
		}
	}
	})
	// ?ely | ?asmo
	command.add('translator',()=>{
		enabled = !enabled
	console.log(`Translator is now: ${enabled ? "enabled" : "disabled"}.`);
	});

	}