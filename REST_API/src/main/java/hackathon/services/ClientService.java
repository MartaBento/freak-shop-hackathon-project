package hackathon.services;

import hackathon.model.Client;

import java.util.List;

public interface ClientService {

    Client get(String username);
    Client save (Client client);
    void delete(String username);
    List<Client> clientList();
}
