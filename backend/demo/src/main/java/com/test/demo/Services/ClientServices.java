package com.test.demo.Services;

import java.util.List;

import com.test.demo.bean.Client;
import com.test.demo.dao.ClientDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ClientServices {

    @Autowired
    ClientDao clientDao;

    public Client getInfoById(Long id) {
        if (id == null) {
            return null;
        } else {
            return clientDao.getById(id);
        }
    }

    public int deleteById(Long id) {
        if (id == null) {
            return -1;
        } else {
            clientDao.deleteById(id);
            return 1;
        }
    }

    public List<Client> findAll() {
        return clientDao.findAll();
    }

    public Client findByName(String name) {
        return clientDao.findByName(name);
    }

    @Transactional
    public int deleteByName(String name) {
        return clientDao.deleteByName(name);
    }

    public int add(Client client) {
        if (findByName(client.getName()) != null) {
            return -1;
        } else {
            clientDao.save(client);
            return 1;
        }
    }

    public ResponseEntity<Client> update(Long id, Client client) {
        Client curreClient = clientDao.getById(id);
        curreClient.setName(client.getName());
        curreClient.setAge(client.getAge());
        Client updatedClient = clientDao.save(curreClient);
        return ResponseEntity.ok(updatedClient);
    }

}