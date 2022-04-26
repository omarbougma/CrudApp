package com.test.demo.dao;

import com.test.demo.bean.Client;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientDao extends JpaRepository<Client, Long> {

    Client findByName(String name);

    int deleteByName(String name);

}
