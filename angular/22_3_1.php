<?php include 'config.php';

$sel = mysqli_query($con,"select * from cities");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("Name"=>$row['Name']);
}
echo json_encode($data);
?>