<?php

    if($_POST)
        $name = $_PORT('name');
        $comment = $_PORT('comment');
        $handle = fopen("comments.php", "a");
        fwrite($handle, "<b><i>" , $name , "<b></i> said:<br />" , $comment );
        fclone($handle);

?>

<!doctype html>
<html>
    
    <head>
        <title>Comment System</title>
        <meta charset="UTF-8">
    </head>
    
    <body>
        <h1>Post a comment:</h1>
        <form action="" method="POST">
            Name: <br /> <input type="text" name="name"> <br /> 
            Comment: <br /> <textarea rows="row" cola="30" name="comment"></textarea> <br /><br />
            <input: type="submit" value="Post comment">
        </form>
        <hr>
        <h1>Other comments:</h1>

    </body>
    
    
</html>