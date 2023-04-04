// Admin Pages

exports.login = function(req, res){
    res.send("Login Page")
};

exports.adminhome = function(req, res){
    res.send("Admin Home Page")
};

exports.about = function(req, res){
    res.send("About Page")
};

exports.viewUser = function(req, res){
    res.send("View User Page")
};

exports.approveitems = function(req, res){
    res.send("Admin Approve Items Page")
};

exports.adminviewlost = function(req, res){
    res.send("Admin Lost Items Page")
};

exports.adminhistory = function(req, res){
    res.send("Admin View User History Page")
};


exports.adminhistory = function(req, res){
    res.send("Admin View User Feedback Page")
};


//User Pages

exports.userhome = function(req, res){
    res.send("User Home Page")
};


exports.usersignup = function(req, res){
    res.send("User Sign Up Page")
};

exports.submitlost = function(req, res){
    res.send("User Submit Lost Page")
};

exports.submitfound = function(req, res){
    res.send("User Submit Found Page")
};

exports.userfeedback = function(req, res){
    res.send("User Feedback Page")
};

exports.userhistory = function(req, res){
    res.send("User History Page")
};

exports.usereditprofile = function(req, res){
    res.send("User Edit Profile Page")
}


