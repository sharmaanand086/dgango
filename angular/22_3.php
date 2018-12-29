<?php include 'config.php';

$sel = mysqli_query($con,"select cities.ctry_id ,country.Name as country,Cities.Name as city from country LEFT OUTER JOIN cities ON country.id = cities.ctry_id");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
	 
 $data[] = array("country"=>$row['country'],"city"=>$row['city']);
}
echo json_encode($data);
?>