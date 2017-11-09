<!DOCTYPE PHP>
<html>
	<body>
		<?PHP
			include("footer.php");
		?>
		<head>
			<style>#nav-container{margin-top: -100px;}</style>
		</head>
		<?PHP
			include("header.php");
			$value = "";
			$celcius = "";
			if ($_SERVER["REQUEST_METHOD"] == "POST") {

				$celcius = $_POST["value1"];
				$value =  $celcius*9/5+32;
			}
		?>
		<div class="main-container" style="background-color: #cccccc; height: 100%;">
			<div class="content-container2">
				<div class="title-container">
					<div class="white-container">
						<h1>Course Work</h1>
					</div>
				</div>
				<div class="content">
					<h3>PHP Temperature Conversion</h3>
					<form style="height:80px;" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
						Temperature in Celcius: <input type="text" name="value1" value=""> °C
						<br><button type="submit">Calculate</button>
					</form>
					<h3>Result in Fahrenheit:</h3>
					<?PHP 
						echo $value;
					?>
				</div>
			</div>
		</div>
	</body>
</html>