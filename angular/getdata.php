
<?php include 'config.php';

$sel = mysqli_query($con,"select * from foods");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("foodname"=>$row['foodname'],"foodtype"=>$row['foodtype'],"foodcata"=>$row['foodcata'],"fdesc"=>$row['fdesc']);
}
echo json_encode($data);
?>