<?php include "includes/header.php"; ?>

<div id='header'>
    <h1>JCCO <span>Online Training System (Beta)</span></h1>
    <h2><span id="greet"></span><span id="name">Admin</span></h2>
</div>
<div id='dropDown'>
    <ul id="menu">
        <a href="index.php" id="logOutLink"><li id="logOut">Log out</li></a>
        <li id="quit">Quit</li>
        <li id="restart">Restart</li>
    </ul>
    <div id='triangleUp'></div>
</div>

<div id='admin-nav-container'>
    <div id='allUsers' class="admin-nav-tab admin-nav-tab-active">All Users</div>
    <div id='curUser' class="admin-nav-tab">Current User</div>
</div>

<div id='userRespons-container'>
<label for="sortBy">Sort by:</label>
    <select name="sortBy" id="sortBy">
        <option value="date">Date (latest)</option>
        <option value="date">Date (earliest)</option>
        <option value="lname">Last name</option>
        <option value="fname">First name</option>
        <option value="highest">Score (high to low)</option>
        <option value="lowest">Score (low to high)</option>
        <option value="deptartment">Department</option>
        <option value="position">Position</option>
    </select><br>

    Waiting on server...
</div>

<?php include "includes/footer.php"; ?>