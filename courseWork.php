<!DOCTYPE PHP>
<html>
	<body>
		<head>
			<style>#nav-container{margin-top: -100px;}</style>
		</head>
		<?PHP
			include("header.php");
		?>
		<div class="main-container" style="background-color: #cccccc; height: 100%;">
			<div class="content-container2">
				<div class="title-container">
					<div class="white-container">
						<h1>Course Work</h1>
					</div>
				</div>
				<div class="content">
					<h3>PHP Conversion</h3>
					<form action="" method="POST">
						Input: <input type="text" name="value1">
						<button type="submit">Calculate</button>
						<h2 id="conversionResult">Result</h2>
					</form>
				</div>
			</div>
		</div>
	</body>
	<?PHP
		include("footer.php");
		echo $_POST["value1"];
	?>
</html>