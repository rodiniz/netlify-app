import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Web Components Demo</title>
	</head>
	<body>
		<div id="app"></div>
		<script type="module" src="app.ts"></script>
	</body>
</html>
`


