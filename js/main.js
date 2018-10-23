function run_code() {
	var code_content = document.getElementById('editor').value;
	document.getElementById('view').srcdoc = code_content;
}