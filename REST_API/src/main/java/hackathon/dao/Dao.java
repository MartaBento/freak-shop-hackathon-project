package hackathon.dao;

import hackathon.model.Client;

import java.util.List;

public interface Dao {

    List<Client> findAll();
    Client findByUsername(String username);
    Client saveOrUpdate(Client client);
    void delete(String username);
}
