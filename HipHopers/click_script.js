var vipPassword = 'missyelliott';
var string;


var clientOne = {
    username: 'Sara',
    password: '123',
    login: false
};

var clientTwo = {
    username: 'Nico',
    password: '987',
    login: false
};

var clientThree = {
    username: 'Marta',
    password: 'umdoistres',
    login: false
};

var clientList = [clientOne, clientTwo, clientThree];


$(document).ready(function() {
    console.log("on")
    logCustomer();
    openPopUp();
});

//regCustomer
function regCustomer() {
    $('#reg').click( function(event){
            console.log('entrou');
            //var id = event.target.id.split(' ')[1];
            var client = {
                username: $('#username').val(),
                password: $('#password').val(),
                login: true
            };
            clientList.push(client);
            console.log(clientList);
            window.location.reload();
    });
}

//logCustomer
function logCustomer() {
    $('#log').click( function(event){
            console.log('entrou');
            //var id = event.target.id.split(' ')[1];
            var clientInput = {
                username: $('#username').val(),
                password: $('#password').val(),
            };
            console.log(clientInput.password, clientInput.username);
            clientList.forEach(function (client){
                console.log('estou a percorrer os clientes');
                if ((client.username === clientInput.username) && client.password === clientInput.password) {
                    console.log('entrei no if else');
                    client.login = true;
                }
            });
            console.log(clientList);
            //$('#login').hide();
            //$('#logout').show();
            window.location.replace("http://www.google.com");



    });
}

//vipLogCustomer
function vipLogCustomer() {
    $('#log').click( function(event){
            console.log('entrou');
            var clientInput = {
                username: $('#username').val(),
                password: $('#password').val(),
            };
            clientList.forEach(function (client){
                if ((client.name === clientInput.name) && clientInput.password === vipPassword) {
                    client.login = true;
                }
            });
            console.log(clientList);
            window.location.replace('FreakOn/freakon.html');
    });
}







function openPopUp() {
    $(".open").on("click", function(){
        $(".popup, .popup-content").addClass("active");
    });
    closePopUp();
}

function closePopUp() {
    $(".close, .popup, .product").on("click", function(){
        $(".popup, .popup-content").removeClass("active");
    });
}