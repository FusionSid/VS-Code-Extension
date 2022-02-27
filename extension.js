const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	vscode.window.showInformationMessage("Extension Activated");
	
	console.log('"imageapi" is now active!');

	let disposable = vscode.commands.registerCommand('imageapi.helloWorld', async function () {

		vscode.window.showInformationMessage('Hello World');
	});

	let abandon = vscode.commands.registerCommand("imageapi.abandon", async function () {

		const searchQuery = await vscode.window.showInputBox({
			placeHolder: "Enter Text"
		  });
		if(searchQuery == ''){
			return vscode.window.showErrorMessage('You must input text for this to work');
		}
		const text = searchQuery.replace(" ", "+")
		vscode.window.showInformationMessage("Image Saved!");
		vscode.env.openExternal(`https://memegenapi.herokuapp.com/api/abandon/?text=${text}`);

	});
	

	context.subscriptions.push(disposable);
	context.subscriptions.push(abandon);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
