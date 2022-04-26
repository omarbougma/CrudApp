package com.test.demo.ws;

import java.util.List;

import com.test.demo.Services.ClientServices;
import com.test.demo.bean.Client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
@RestController
public class ClientWs {
    @Autowired
    ClientServices clientServce;

    @GetMapping("/info/id/{id}")
    public Client getInfoById(@PathVariable Long id) {
        return clientServce.getInfoById(id);
    }

    @DeleteMapping("/delete/id/{id}")
    public int deleteById(@PathVariable Long id) {
        return clientServce.deleteById(id);
    }

    @GetMapping("/clients")
    public List<Client> findAll() {
        return clientServce.findAll();
    }

    @GetMapping("/name/{name}")
    public Client findByName(@PathVariable String name) {
        return clientServce.findByName(name);
    }

    @DeleteMapping("/name/{name}")
    public int deleteByName(@PathVariable String name) {
        return clientServce.deleteByName(name);
    }

    @PostMapping("/")
    public int add(@RequestBody Client client) {
        return clientServce.add(client);
    }

    @PutMapping("/update/id/{id}")
    public ResponseEntity<Client> update(@PathVariable Long id, @RequestBody Client client) {
        return clientServce.update(id, client);
    }

}
