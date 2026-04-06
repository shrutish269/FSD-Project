package com.example.experiment7.service;

import org.springframework.stereotype.Service;

@Service
public class AuthService {

    public String login(String username) {
        return "Login successful for " + username;
    }
}