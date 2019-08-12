package hackathon.dao;

import hackathon.model.Client;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Repository
public class ClientDao implements Dao{

    private List<Client> clientList = new LinkedList<>();

    public ClientDao() {

    }

    @Override
    public List<Client> findAll() {

        return clientList;
    }

    @Override
    public Client findByUsername(String username) {
        for (Client c: clientList) {
            if(c.getUsername().equals(username)){
                return c;
            }
        }
        return null;
    }

    @Override
    public Client saveOrUpdate(Client client) {
        clientList.add(client);
        return client;
    }

    @Override
    public void delete(String username) {
        for (Client c: clientList) {
            if(c.getUsername().equals(username)){
                clientList.remove(c);

            }
        }

    }
}
