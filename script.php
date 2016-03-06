<?php  



$url = $_POST["primer"];

$html = file_get_contents($url);

$js = json_encode($html);
echo $js;

?>