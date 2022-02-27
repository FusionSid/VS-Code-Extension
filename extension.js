const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	vscode.window.showInformationMessage("Extension Activated");
	
	console.log('"imageapi" is now active!');

	let disposable = vscode.commands.registerCommand('imageapi.helloWorld', function () {

		vscode.window.showInformationMessage('Hello World');
	});
	

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
