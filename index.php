
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
  <title>Devdactic Image Upload</title>
</head>
<body>
<h1>Ionic Image Upload</h1>
  <?php
  $scan = scandir('uploads');
  foreach($scan as $file)
  {
    if (!is_dir($file))
    {
        echo '<h3>'.$file.'</h3>';
      echo '<img src="uploads/'.$file.'" style="width: 400px;"/><br />';
    }
  }
  ?>
</body>
</html>