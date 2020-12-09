var express = require("express")
var app = express()
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser")

app.use(express.static('static'))

app.use(bodyParser.urlencoded({ extended: true }));

var path = require("path")

var logowanie = 0

var sortowanie = 0

var users = [
    { id: 1, log: "AAA", pass: "PASS1", wiek: 10, uczen: "checked", plec: "M" },
    { id: 2, log: "BBB", pass: "PASS2", wiek: 12, uczen: "", plec: "K" },
    { id: 3, log: "CCC", pass: "PASS3", wiek: 9, uczen: "checked", plec: "M" },
    { id: 4, log: "DDD", pass: "PASS4", wiek: 14, uczen: "", plec: "K" },
    { id: 5, log: "EEE", pass: "PASS5", wiek: 3, uczen: "checked", plec: "M" },
]

var users1 = [
    { id: 1, log: "AAA", pass: "PASS1", wiek: 10, uczen: "checked", plec: "M" },
    { id: 2, log: "BBB", pass: "PASS2", wiek: 12, uczen: "", plec: "K" },
    { id: 3, log: "CCC", pass: "PASS3", wiek: 9, uczen: "checked", plec: "M" },
    { id: 4, log: "DDD", pass: "PASS4", wiek: 14, uczen: "", plec: "K" },
    { id: 5, log: "EEE", pass: "PASS5", wiek: 3, uczen: "checked", plec: "M" },
]

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/main.html"))
})

app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/register.html"))
})

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/login.html"))
})

app.get("/admin", function (req, res) {
    if (logowanie == 0) {
        res.send(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Main</title>
        <script src="js/script.js"></script>
        <link href="//fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2" rel="stylesheet">
        <style>
        .pasek{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(8, 210, 236);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        }
        
        .div{
            position: absolute;
            font-family: 'JetBrains Mono', monospace;
        }

        #pasek2{
            position: absolute;
            background-color: rgb(255, 0, 13);
            font-family: 'JetBrains Mono', monospace;
        }
        
        a{
            color: white;
        }

        .glowny{
            top: 80px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: rgb(172, 202, 202);
            text-align: center;
            font-size: 120px;
        }

        .glowny_administrator{
            top: 200px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: rgb(165, 207, 207);
            text-align: center;
            font-size: 100px;
        }

        </style>
        </head>
        
        <body>
        
        <div class="pasek div" id="pasek2">
        <a href="/">main</a>                    
        <a href="/register">register</a>                    
        <a href="/login">login</a>                    
        <a href="/admin">admin</a>
        
        </div>
        
        <div class="glowny div" id="glowny_administrator">Brak dostępu do tej strony!!</div>
        
        </body>

        </html>`)
    }
    else {
        res.sendFile(path.join(__dirname + "/static/admin.html"))
    }

})

app.post("/registerUser", function (req, res) {
    var w = 0
    for (i = 0; i < users.length; i++) {
        if (req.body.login == users[i].log) {
            w++
        }
    }
    if ( w == 0) {
        users.push({ id: users.length + 1, log: req.body.login, pass: req.body.password, wiek: req.body.wiek, uczen: req.body.uczen, plec: req.body.plec })
        users1.push({ id: users.length + 1, log: req.body.login, pass: req.body.password, wiek: req.body.wiek, uczen: req.body.uczen, plec: req.body.plec })
        res.send(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Main</title>
        <script src="js/script.js"></script>
        <link href="//fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2" rel="stylesheet">
        <style>
        
        .pasek{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(8, 210, 236);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        }

        .div{
            position: absolute;
            font-family: 'JetBrains Mono', monospace;
        }

        a{
            color: white;
        }
        
        input{
            padding-top: 30px;
            height: 15px;
            line-height: 40px;
            font-size: 25px;
            font-family: 'JetBrains Mono', monospace;
        }
        
        .glowny{
            top: 80px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: rgb(172, 202, 202);
            text-align: center;
            font-size: 120px;
        }

        </style>

        </head>
        
        <body>
        
        <div class="pasek div">
        <a href="/">main</a>                    
        <a href="/register">register</a>                    
        <a href="/login">login</a>                    
        <a href="/admin">admin</a>
        
        </div>
        
        <div class="glowny div">Witaj ${req.body.login}, zostałeś zarejestrowany!</div>
        
        </body>
        
        </html>`)
        
        console.log(users)
    }
    else {
        res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
    
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Register</title>
        <script src="js/script.js"></script>
        <link href="//fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2" rel="stylesheet">
        
        <style>
        
        .pasek{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(8, 210, 236);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        
        }
        
        .div{
            position: absolute;
            font-family: 'JetBrains Mono', monospace;
        }

        a{
            color: white;
        }
        
        .glowny{
            top: 80px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: rgb(172, 202, 202);
            text-align: center;
            font-size: 120px;
        }

        #bang{
            padding-left: 35%;
            text-align: left;
            font-size: 50px;
            color: rgb(66, 80, 80);
        }

        input{
            padding-top: 30px;
            height: 15px;
            line-height: 40px;
            font-size: 25px;
            font-family: 'JetBrains Mono', monospace;
        }

        button{
            font-size: 40px;
            width: 200px;
            height: 60px;
            font-family: 'JetBrains Mono', monospace;
            color: rgb(102, 190, 136);
        }

        </style>

    </head>
    
    <body>
        
    <div class="pasek div">
    
        <a href="/">main</a>
        <a href="/register">register</a>
        <a href="/login">login</a>
        <a href="/admin">admin</a>
    
    </div>
        
    <div class="glowny div">Podany login jest zajęty!!
            
        <form method="POST" action="/registerUser" id="bang">
            
            <label for="login">login:</label>
            <input required type="text" name="login">
            <br>
            <label for="password">password:</label>
            <input required type="password" name="password">
            <br>
            <label for="wiek">wiek:</label>
            <input required type="number" name="wiek" min="1">
            <br>
            <label for="uczen">uczen?:</label>
            <input type="checkbox" name="uczen" value="checked">
            <br>
            <label for="plec">plec:</label>
            <input required type="radio" name="plec" value="M">M
            <input required type="radio" name="plec" value="K">K
            <br>
            <button name="submit">Submit</button>
            
        </form>
    
    </div>
    
    </body>
    
    </html>`)
    }
})

app.post("/logUserIn", function (req, res) {
    var log = 0
    for (i = 0; i < users.length; i++) {
        if (req.body.login == users[i].log) {
            if (req.body.password == users[i].pass) {
                log = 1
            }
        }
    }
    if (log == 1) {
        logowanie = 1
        res.redirect("/admin")
    }
    else {
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>                    
        
        <meta charset="UTF-8">                    
        <meta name="viewport" content="width=device-width, initial-scale=1.0">                    
        <title>Login</title>                    
        <script src="js/script.js"></script>                                       
        <link href="//fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2" rel="stylesheet">                
        
        <style>

        .pasek{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(8, 210, 236);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        
        }
        
        a{
            color: white;
        }
        
        .glowny{
            top: 80px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: rgb(172, 202, 202);
            text-align: center;
            font-size: 120px;
        }
        
        .div{
            position: absolute;
            font-family: 'JetBrains Mono', monospace;
        }
        
        #bang{
            padding-left: 35%;
            text-align: left;
            font-size: 50px;
            color: rgb(66, 80, 80);
        }
        
        input{
            padding-top: 30px;
            height: 15px;
            line-height: 40px;
            font-size: 25px;
            font-family: 'JetBrains Mono', monospace;
        }
        button{
            font-size: 40px;
            width: 200px;
            height: 60px;
            font-family: 'JetBrains Mono', monospace;
            color: rgb(102, 190, 136);
        }

        </style>

        </head>                              
        
        <body>                    
        
        <div class="pasek div">                        
        
        <a href="/">main</a>                        
        <a href="/register">register</a>                        
        <a href="/login">login</a>                        
        <a href="/admin">admin</a>                    
        
        </div>                    
        
        <div class="glowny div">Niepoprawne hasło lub login!!                       
        
        <form method="POST" action="/logUserIn" id="bang">                            
        <label for="login">login:</label>                            
        <input required type="text" name="login">                           
        <br>                            
        <label for="password">password:</label>                            
        <input required type="password" name="password">                            
        <br>                            
        <button name="submit">Submit</button>                        
        
        </form>                    
        
        </div>                
        
        </body>                                
        
        </html>`)
    }
})

app.get("/logOut", function (req, res) {
    logowanie = 0
    res.redirect("/admin")
})

app.get("/show", function (req, res) {
    if (logowanie == 0) {
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Main</title>
        <script src="js/script.js"></script>
        <link href="//fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2" rel="stylesheet">
        
        <style>
        
        .pasek{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(8, 210, 236);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        
        }
        
        #pasek2{
            position: absolute;
            background-color: rgb(255, 0, 13);
            font-family: 'JetBrains Mono', monospace;
        }

        a{
            color: white;
        }
        
        .glowny{
            top: 80px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: rgb(172, 202, 202);
            text-align: center;
            font-size: 120px;
        }
        
        .div{
            position: absolute;
            font-family: 'JetBrains Mono', monospace;
        }

        </style>

        </head>
        
        <body>
        
        <div class="pasek div" id="pasek2">
        
        <a href="/">main</a>                    
        <a href="/register">register</a>                    
        <a href="/login">login</a>                    
        <a href="/admin">admin</a>
        
        </div>
        
        <div class="glowny div" id="glowny_administrator">Brak dostępu do tej strony!!</div>
        
        </body>
        
        </html>`)
    }
    else {
        res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>show</title>
        <script src="js/script.js"></script>
        <link href="//fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2" rel="stylesheet">
    
        <style>
        
        .pasek{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(8, 210, 236);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        
        }
        
        .div{
            position: absolute;
            font-family: 'JetBrains Mono', monospace;
        }

        #pasek_gorny{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(10, 75, 71);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        
        }

        a{
            color: white;
        }

        #glowny{
            position: absolute;
            top: 100px;
            float: left;
            padding-left: 30px;
            padding-right: 30px;
            left: 0px;
            width: 100%;
            height: 100%;
            font-size: 30px;
            line-height: 90px;
            background-color: rgb(231, 21, 203);
            font-family: 'JetBrains Mono', monospace;
        }

        .komorka_0 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_1 {
            padding-left: 5px;
            width: 30vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_2 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_3 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_4 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        
        #table1{
            font-size: 25px;
        }
        
        </style>

    </head>
    
    <body>
    
    <div class="pasek div"  id="pasek_gorny">
        
        <a href="/">main</a>
        <a href="/register">register</a>
        <a href="/login">login</a>
        <a href="/admin">admin</a>
        <a href="/logOut">logout</a>
    
    </div>
        
    <div id="glowny">
        
        <a href="/sort">sort</a>
        <a href="/gender">gender</a>
        <a href="/show">show</a>
    
    </div>
        
    <script>
        
        var tab1 = ${JSON.stringify(users)}
            
        var table = document.createElement("table");
        table.id = "table1";
        for (y = 0; y < tab1.length; y++) {
            
            var tr = document.createElement("tr");
            table.appendChild(tr);
            
            for (i = 0; i < 5; i++) {
                var td = document.createElement("td");
                td.id = "komorka." + y + "." + i;
                td.classList.add("komorka_" + i);
                if (i == 0) {
                    td.innerHTML = "id: " + tab1[y].id;
                }
                else if (i == 1) {
                    td.innerHTML = "user: " + tab1[y].log + " - " + tab1[y].pass;
                }
                else if (i == 2) {
                    td.innerHTML = "wiek: " + tab1[y].wiek;
                }
                else if (i == 3) {
                    td.innerHTML = "uczen: " + tab1[y].uczen;
                }
                else if (i == 4) {
                    td.innerHTML = "plec: " + tab1[y].plec;
                }
                tr.appendChild(td);
                };
            };
            
            document.getElementById("glowny").appendChild(table);

    </script>
    </body>  
    </html>`)
    }
})

app.get("/gender", function (req, res) {
    if (logowanie == 0) {
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Main</title>
        <script src="js/script.js"></script>
        <link href="//fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2" rel="stylesheet">
        
        <style>

        .pasek{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(8, 210, 236);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        
        }
        
        a{
            color: white;
        }
        
        .glowny{
            top: 80px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: rgb(172, 202, 202);
            text-align: center;
            font-size: 120px;
        }
        
        .div{
            position: absolute;
            font-family: 'JetBrains Mono', monospace;
        }

        #pasek2{
            position: absolute;
            background-color: rgb(255, 0, 13);
            font-family: 'JetBrains Mono', monospace;
        }

        .glowny_administrator{
            top: 200px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: rgb(165, 207, 207);
            text-align: center;
            font-size: 100px;
        }

        </style>

        </head>
        <body>
        
        <div class="pasek div" id="pasek2">
        
        <a href="/">main</a>                    
        <a href="/register">register</a>                    
        <a href="/login">login</a>                    
        <a href="/admin">admin</a>
        
        </div>
        
        <div class="glowny div" id="glowny_administrator">Brak dostępu do tej strony!!</div>
        </body>
        </html>`)
    }
    else {
        res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>show</title>
        <script src="js/script.js"></script>
        <link href="//fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2" rel="stylesheet">
        
        <style>

        .pasek{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(8, 210, 236);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        
        }
        
        .div{
            position: absolute;
            font-family: 'JetBrains Mono', monospace;
        }

        #pasek_gorny{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(10, 75, 71);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        
        }

        a{
            color: white;
        }

        #glowny{
            position: absolute;
            top: 100px;
            float: left;
            padding-left: 30px;
            padding-right: 30px;
            left: 0px;
            width: 100%;
            height: 100%;
            font-size: 30px;
            line-height: 90px;
            background-color: rgb(231, 21, 203);
            font-family: 'JetBrains Mono', monospace;
        }

        .komorka_0 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_1 {
            padding-left: 5px;
            width: 30vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_2 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_3 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_4 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        
        #table1{
            font-size: 25px;
        }

        </style>

    </head>
    
    <body>
    
    <div class="pasek div"  id="pasek_gorny">
        
        <a href="/">main</a>
        <a href="/register">register</a>
        <a href="/login">login</a>
        <a href="/admin">admin</a>
        <a href="/logOut">logout</a>
    
    </div>
    <div id="glowny">
        
        <a href="/sort">sort</a>
        <a href="/gender">gender</a>
        <a href="/show">show</a>
    
    </div>
        
    <script>
    
    var tab1 = ${JSON.stringify(users)}
        
        var table1 = document.createElement("table");
        table1.id = "table1";
        var table2 = document.createElement("table");
        table2.id = "table2";
        
        for (y = 0; y < tab1.length; y++) {
            if (tab1[y].plec == "K") {
                table = table1
            }
            else {
                table = table2
            }
            var tr = document.createElement("tr");
            for (i = 0; i < 5; i++) {
                var td = document.createElement("td");
                td.id = "komorka." + y + "." + i;
                td.classList.add("komorka_" + i);
                if (i == 0) {
                    td.innerHTML = "id: " + tab1[y].id;
                }
                else if (i == 1) {
                    td.innerHTML = "user: " + tab1[y].log + " - " + tab1[y].pass;
                }
                else if (i == 2) {
                    td.innerHTML = "wiek: " + tab1[y].wiek;
                }
                else if (i == 3) {
                    td.innerHTML = "uczen: " + tab1[y].uczen;
                }
                else if (i == 4) {
                    td.innerHTML = "plec: " + tab1[y].plec;
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        };
        document.getElementById("glowny").appendChild(table1);
        document.getElementById("glowny").appendChild(table2);
        
    </script>
    
    </body>  
    
    </html>`)
    }

})

app.get("/sort", function (req, res) {
    if (req.query.sort) {
        sortowanie = req.query.sort
    }
    if (logowanie == 0) {
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Main</title>
        <script src="js/script.js"></script>
        <link href="//fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2" rel="stylesheet">
        
        <style>

        .pasek{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(8, 210, 236);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        
        }
        
        a{
            color: white;
        }
        
        .glowny{
            top: 80px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: rgb(172, 202, 202);
            text-align: center;
            font-size: 120px;
        }
        
        .div{
            position: absolute;
            font-family: 'JetBrains Mono', monospace;
        }

        #pasek2{
            position: absolute;
            background-color: rgb(255, 0, 13);
            font-family: 'JetBrains Mono', monospace;
        }

        .glowny_administrator{
            top: 200px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: rgb(165, 207, 207);
            text-align: center;
            font-size: 100px;
        }

        </style>

        </head>
        
        <body>
        
        <div class="pasek div" id="pasek2">
        
        <a href="/">main</a>                    
        <a href="/register">register</a>                    
        <a href="/login">login</a>                    
        <a href="/admin">admin</a>
        
        </div>
        
        <div class="glowny div" id="glowny_administrator">Brak dostępu do tej strony!!</div>
        
        </body>
        
        </html>`)
    }
    else {
        if (sortowanie == 0) {
            users1.sort(function (a, b) {
                return parseFloat(a.wiek) - parseFloat(b.wiek);
            });
        }
        else {
            users1.sort(function (a, b) {

                return parseFloat(b.wiek) - parseFloat(a.wiek);
            });
        }
        if (sortowanie == 0) {
            res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>show</title>
        <script src="js/script.js"></script>
        <link href="//fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2" rel="stylesheet">
        
        <style>
        
        .pasek{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(8, 210, 236);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        
        }
        
        .div{
            position: absolute;
            font-family: 'JetBrains Mono', monospace;
        }

        #pasek_gorny{
            top: 0px;
            left: 0px;
            height: 100px;
            line-height: 70px;
            width: 100%;
            background-color: rgb(10, 75, 71);
            font-size: 40px;
            padding-left: 50px;
            float: left;
            display: block;
        
        }

        a{
            color: white;
        }

        #glowny{
            position: absolute;
            top: 100px;
            float: left;
            padding-left: 30px;
            padding-right: 30px;
            left: 0px;
            width: 100%;
            height: 100%;
            font-size: 30px;
            line-height: 90px;
            background-color: rgb(231, 21, 203);
            font-family: 'JetBrains Mono', monospace;
        }

        .komorka_0 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_1 {
            padding-left: 5px;
            width: 30vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_2 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_3 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        .komorka_4 {
            padding-left: 5px;
            width: 16vw;
            height: 50px;
            border: solid 1px;
            border-color: rgb(0, 0, 0);
        }
        
        #table1{
            font-size: 25px;
        }
        
        #bang2{
            font-size: 25px;
        }

        input{
            padding-top: 30px;
            height: 15px;
            line-height: 40px;
            font-size: 25px;
            font-family: 'JetBrains Mono', monospace;
        }

        </style>

    </head>
    <body>

    <div class="pasek div"  id="pasek_gorny">
        
        <a href="/">main</a>
        <a href="/register">register</a>
        <a href="/login">login</a>
        <a href="/admin">admin</a>
        <a href="/logOut">logout</a>
    
    </div>
    
    <div id="glowny">
        
        <a href="/sort">sort</a>
        <a href="/gender">gender</a>
        <a href="/show">show</a>
            
        <form id="bang2" onchange="this.submit()" method="GET>
            
            <label for="sort">rosnąco:</label>
            <input required type="radio" name="sort" value="0" checked="checked">
            <label for="sort">malejąco:</label>
            <input required type="radio" name="sort" value="1">
        
        </form>
    
    </div>
        
    <script>
        var tab1 = ${JSON.stringify(users1)}     
        var table = document.createElement("table");
        table.id = "table1";
        for (y = 0; y < tab1.length; y++) {
            var tr = document.createElement("tr");
            table.appendChild(tr);
            
            for (i = 0; i < 5; i++) {
                var td = document.createElement("td");
                td.id = "komorka." + y + "." + i;
                td.classList.add("komorka_" + i);
                if (i == 0) {
                    td.innerHTML = "id: " + tab1[y].id;
                }
                else if (i == 1) {
                    td.innerHTML = "user: " + tab1[y].log + " - " + tab1[y].pass;
                }
                else if (i == 2) {
                    td.innerHTML = "wiek: " + tab1[y].wiek;
                }
                else if (i == 3) {
                    td.innerHTML = "uczen: "
                    if(tab1[y].uczen == "yes"){
                        td.innerHTML = "uczen: " + tab1[y].uczen;
                    }
                }
                else if (i == 4) {
                    td.innerHTML = "plec: " + tab1[y].plec;
                }
                tr.appendChild(td);
            };
        };
            
        document.getElementById("glowny").appendChild(table);
        
    </script>
    
    </body>  
    
    </html>`)

        }
        else {
            res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>show</title>
    <script src="js/script.js"></script>
    <link href="//fonts.gstatic.com/s/jetbrainsmono/v1/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2" rel="stylesheet">
    
    <style>
    
    .pasek{
        top: 0px;
        left: 0px;
        height: 100px;
        line-height: 70px;
        width: 100%;
        background-color: rgb(8, 210, 236);
        font-size: 40px;
        padding-left: 50px;
        float: left;
        display: block;
    
    }
    
    .div{
        position: absolute;
        font-family: 'JetBrains Mono', monospace;
    }

    #pasek_gorny{
        top: 0px;
        left: 0px;
        height: 100px;
        line-height: 70px;
        width: 100%;
        background-color: rgb(10, 75, 71);
        font-size: 40px;
        padding-left: 50px;
        float: left;
        display: block;
    
    }

    a{
        color: white;
    }

    #glowny{
        position: absolute;
        top: 100px;
        float: left;
        padding-left: 30px;
        padding-right: 30px;
        left: 0px;
        width: 100%;
        height: 100%;
        font-size: 30px;
        line-height: 90px;
        background-color: rgb(231, 21, 203);
        font-family: 'JetBrains Mono', monospace;
    }

    .komorka_0 {
        padding-left: 5px;
        width: 16vw;
        height: 50px;
        border: solid 1px;
        border-color: rgb(0, 0, 0);
    }
    .komorka_1 {
        padding-left: 5px;
        width: 30vw;
        height: 50px;
        border: solid 1px;
        border-color: rgb(0, 0, 0);
    }
    .komorka_2 {
        padding-left: 5px;
        width: 16vw;
        height: 50px;
        border: solid 1px;
        border-color: rgb(0, 0, 0);
    }
    .komorka_3 {
        padding-left: 5px;
        width: 16vw;
        height: 50px;
        border: solid 1px;
        border-color: rgb(0, 0, 0);
    }
    .komorka_4 {
        padding-left: 5px;
        width: 16vw;
        height: 50px;
        border: solid 1px;
        border-color: rgb(0, 0, 0);
    }
    
    #table1{
        font-size: 25px;
    }
    
    #bang2{
        font-size: 25px;
    }

    input{
        padding-top: 30px;
        height: 15px;
        line-height: 40px;
        font-size: 25px;
        font-family: 'JetBrains Mono', monospace;
    }

    </style>

    </head>
    
    <body>
    
    <div class="pasek div"  id="pasek_gorny">
        
        <a href="/">main</a>
        <a href="/register">register</a>
        <a href="/login">login</a>
        <a href="/admin">admin</a>
        <a href="/logOut">logout</a>
    
    </div>
    
    <div id="glowny">
    
    <a href="/sort">sort</a>
    <a href="/gender">gender</a>
    <a href="/show">show</a>
    
    <form id="bang2" onchange=" this.submit()" method="GET>
    
    <label for="sort">rosnąco:</label>
    <input required type="radio" name="sort" value="0">
    <label for="sort">malejąco:</label>
    <input required type="radio" name="sort" value="1" checked="checked">
    
    </form>
    
    </div>
        
    <script>
        var tab1 = ${JSON.stringify(users1)}     
        var table = document.createElement("table");
        table.id = "table1";
        
        for (y = 0; y < tab1.length; y++) {
            var tr = document.createElement("tr");
            table.appendChild(tr);
            
            for (i = 0; i < 5; i++) {
                var td = document.createElement("td");
                td.id = "komorka." + y + "." + i;
                td.classList.add("komorka_" + i);
                if (i == 0) {
                    td.innerHTML = "id: " + tab1[y].id;
                }
                else if (i == 1) {
                    td.innerHTML = "user: " + tab1[y].log + " - " + tab1[y].pass;
                }
                else if (i == 2) {
                    td.innerHTML = "wiek: " + tab1[y].wiek;
                }
                else if (i == 3) {
                    td.innerHTML = "uczen: "
                    if(tab1[y].uczen == "yes"){
                        td.innerHTML = "uczen: " + tab1[y].uczen;
                    }
                }
                else if (i == 4) {
                    td.innerHTML = "plec: " + tab1[y].plec;
                }
                tr.appendChild(td);
            };
        };
            
        document.getElementById("glowny").appendChild(table);
        
    </script>
    
    </body>  
    
    </html>`)

        }
    }
})


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})