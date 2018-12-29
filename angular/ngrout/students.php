<?php include 'config.php';

$sel = mysqli_query($con,"select * from students");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("name"=>$row['students']);
}
echo json_encode($data);
?>