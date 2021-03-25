
<?php include "includes/header.php"; ?>

    <div id='header'>
        <h1>JCCO <span>Online Training System (Beta)</span></h1>
    </div>

    <div id='signIn_Container'>
        <h4><span>Welcome</span><br />
            Please complete form to unlock 'Start'</h4><br />
        <input type="text" autocomplete="off" id="fname" readonly placeholder="First name" onkeyup="checkform()"
            onfocus="if(placeholder=='First name')placeholder='';this.removeAttribute('readonly')" onblur="if(placeholder=='')placeholder='First name'" >
        
        <input type="text" autocomplete="off" id="lname" placeholder="Last name" placeholder="Last name"
            onkeyup="checkform()" onfocus="if(placeholder=='Last name')placeholder=''"
            onblur="if(placeholder=='')placeholder='Last name'">

        <hr>

        <!-- <label>Department</label> -->
        <select name="deptSelect" id="deptSelect" onchange="checkform()">
            <option value="" selected disabled>Select department</option>
            <option value="finance">Finance</option>
            <option value="callCenter">Call Center/Processing</option>
            <option value="communications">Communications</option>
            <option value="vehicles">Motor Vehicles</option>
            <option value="resources">Human Resources</option>
            <option value="dealers">Motor Vehicle Dealers</option>
            <option value="liens">Motor Vehicle Liens</option>
            <option value="technology">Information Technology</option>
            <option value="other">Other</option>
        </select><br />

        <!-- <label>Position</label> -->
        <select name="positionSelect" id="positionSelect" onchange="checkform()">
            <option value="" selected disabled>Select position</option>
            <option value="director">Director</option>
            <option value="manager">Manager</option>
            <option value="assistManager">Assitant Manager</option>
            <option value="assist">Assitant</option>
            <option value="clerk">Clerk</option>
            <option value="csr">CSR</option>
            <option value="other">Other</option>
        </select>

        <a href="main.php"> <button id="beginBtn" class="beginBtnLink"><i
                    class="fas fa-lock"></i>&nbsp;&nbsp;Start</button></a>
    </div>

    <h3 id="adminBtn">Admin</h3>

<?php include "includes/footer.php"; ?>
