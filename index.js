
const translator = ('./lib/translator.js');
	const FACTIONS = [
	{name: "Elyos", raceid: 1},
	{name: "Asmo", raceid: 2}
	];

	module.exports = function Translator(mod) {
	const {command } = mod.require;

	let enabled = false;
	//let elyosmode = false;
	//let asmomode = false;

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


	command.add('translator',()=>{
		enabled = !enabled
	console.log(`Translator is now: ${enabled ? "enabled" : "disabled"}.`);
	});

	}