var API_URL = 'http://localhost:8080/javabank5/api/customer/';

var customerData;

var customerId;


$(document).ready(function() {
    fetchCustomers();
});


function delCustomer(id) {
    console.log(id);
    $.ajax({
        url: API_URL + id,
        type:'DELETE',
        async: true,
        success: function() {
            ok();
        },
        error: wrong
    });
    window.location.reload();
}


function addCustomer() {
    $.ajax({
        url: API_URL,
        type:'POST',
        data: JSON.stringify({
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            phone: $('#phone').val()
        }),
        contentType: 'application/json',
        async: true,
        success: function() {
            ok();
        },
        error: wrong
    });
    window.location.reload();
}

function editCustomer() {
    console.log(customerId + ' first log in editCustomer');
    $.ajax({
        url: API_URL + customerId,
        type:'PUT',
        data: JSON.stringify({
            id: customerId.toString(),
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            phone: $('#phone').val()
        }),
        contentType: 'application/json',
        async: true,
        success: function() {
            console.log(customerId + ' edit success')
            ok();
        },
        error: wrong
    });
    window.location.reload();
}

function fetchCustomer(id) {
    console.log('isto correu bem');
    $.ajax( {
        url: API_URL + id,
        async: true,
        success: function(response) {
            $('#firstName').val(response.firstName);
            $('#lastName').val(response.lastName);
            $('#email').val(response.email);
            $('#phone').val(response.phone);
            },
        error: function(request, status, error) {
            console.log('Something went wrong');
        }
    });
    console.log('aqui esta tudo bem');
    customerId = id;
    console.log(customerId);
}





function fetchCustomers() {
    $.ajax( {
        url: API_URL,
        async: true,
        success: function(response) {
            addToList(response);
            },
        error: function(request, status, error) {
            console.log('Something went wrong');
        }
    });
}

function addToList(customerData) {

    var userTable = $('#table_body');
    var row;

    customerData.forEach (function (element) {
        row ='<tr>' +
        '<td>'+ element.firstName+ 
        '</td><td>'+ element.lastName+ 
        '</td><td>'+ element.email+ 
        '</td><td>'+ element.phone+ 
        '</td><td><button id = "edit '+ element.id +'" type="button" class="btn btn-success edit">Edit</button>'
        +'</td><td><button id = "del ' + element.id + '" type="submit" class="btn btn-danger delete">Delete</button></td>'
        + '</tr>';
        $(row).appendTo(userTable);
    });
    readyEvents();
}

function readyEvents (event) {
    $('.delete').click( function(event){
        console.log('entrou');
        var id = event.target.id.split(' ')[1];
        delCustomer(id);
    });
    $('.edit').click(function(event) {
        console.log('heyoooo');
        var id = event.target.id.split(' ')[1];
        fetchCustomer(id);
    });
    $('.update').click(function(){
        console.log('julio, ve isto');
        editCustomer();
        customerId = null;
    })
    $('.add').click(function(){
        addCustomer();
    });

    $('.reset').click(function(){
        resetSpace();
    });
}

function resetSpace() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#email').val('');
    $('#phone').val('');
    console.log('ok');
}

function wrong () {
    alert('Cannot do that');
}

function ok() {
    alert('Task completed');
}
