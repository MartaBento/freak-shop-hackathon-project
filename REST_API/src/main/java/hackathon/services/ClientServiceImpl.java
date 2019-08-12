package hackathon.services;


import hackathon.dao.ClientDao;
import hackathon.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService{

    private ClientDao clientDao;

    public ClientDao getClientDao() {
        return clientDao;
    }

    @Autowired
    public void setClientDao(ClientDao clientDao) {
        this.clientDao = clientDao;
    }

    @Override
    public Client get(String username) {
        return clientDao.findByUsername(username);
    }

    @Override
    public Client save(Client client) {
        List<Client> clientList = clientList();

        for (Client c :clientList) {
            if(c.getUsername().equals(client.getUsername())){
                return null;
            }
        }

        return clientDao.saveOrUpdate(client);
    }

    @Override
    public void delete(String username) {
       clientDao.delete(username);
    }

    @Override
    public List<Client> clientList() {
        return clientDao.findAll();
    }
}
