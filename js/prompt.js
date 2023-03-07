function search() {
	var data = [
		{
			"id": 1,
			"name": "Act as a Linux Terminal",
			"prompt": "I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}. My first command is pwd"
		},
		{
			"id": 2,
			"name": "Act as an English Translator and Improver",
			"prompt": 'I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is “istanbulu cok seviyom burada olmak cok guzel”'
		}
	]

	var inPrompt = $('#prompt-in').val().toLowerCase();
	var firstWord = inPrompt.replace(/ .*/,''); // FIXME search for more than 1 word
	var outPrompt = "We apologize, but our database is still new and growing and we do not seem to have any related prompts. Feel free to reach out to TylerJoshuaHilbert@gmail.com to make requests."
	var id = -1
	for (const prompt of data) { 
		if (prompt.prompt.toLowerCase().includes(firstWord) || prompt.name.toLowerCase().includes(firstWord)) {
			outPrompt = prompt.prompt
			id = prompt.id
		}
	}
	$('#prompt-out').html(outPrompt);
}
