package hackathon.controller;

import hackathon.model.Client;
import hackathon.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/hiphoper")
public class ClientController {
    private ClientService clientService;


    public ClientService getClientService() {
        return clientService;
    }

    @Autowired
    public void setClientService(ClientService clientService) {
        this.clientService = clientService;
    }

    @RequestMapping(method = RequestMethod.POST,path = "/log")
    public ResponseEntity<Client> logClient(@RequestBody Client client) {

       List<Client> clientList = clientService.clientList();

       for (Client c:clientList) {
           if(c.getUsername().equals(client.getUsername())&&(c.getPassword()==client.getPassword())){
                return new ResponseEntity<>(clientService.get(client.getUsername()), HttpStatus.OK);
           }

       }
       return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(method = RequestMethod.POST,path = "/reg")
    public ResponseEntity<Client> saveClient(@RequestBody Client client) {

        clientService.save(client);
        return new ResponseEntity<>( client, HttpStatus.OK);
    }
}
