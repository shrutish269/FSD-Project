# Experiment 7 - Role-Based Authorization (RBAC) using Spring Boot

**Name:** Shruti Sharma
**Course:** B.Tech CSE (AI & ML)
**UID:** 23BAI70539
---

## 📌 Project Overview

This project implements **Role-Based Access Control (RBAC)** using Spring Boot and Spring Security.

Authentication is done using **HTTP Basic Authentication**, and access to APIs is restricted based on user roles:

* USER
* ADMIN

---

## 🛠️ Tech Stack

* Java 17
* Spring Boot
* Spring Security
* Spring Data JPA
* H2 In-Memory Database
* Maven

---

## 📁 Project Structure

```id="f6w9ab"
src/
├── main/
│   ├── java/com/example/experiment7/
│   │   ├── config/
│   │   │   └── SecurityConfig.java
│   │   ├── controller/
│   │   │   ├── PublicController.java
│   │   │   ├── UserController.java
│   │   │   └── AdminController.java
│   │   ├── entity/
│   │   │   └── User.java
│   │   ├── repository/
│   │   │   └── UserRepository.java
│   │   ├── service/
│   │   │   └── CustomUserDetailsService.java
│   │   └── Experiment7Application.java
│   └── resources/
│       ├── application.properties
│       └── data.sql
```

---

## ▶️ How to Run

```id="txj7m3"
cd experiment7
.\mvnw.cmd spring-boot:run
```

Server runs at:

```id="5gk2xq"
http://localhost:8080
```

---

## 👤 Default Users (from data.sql)

| Username | Password | Role  |
| -------- | -------- | ----- |
| user1    | user123  | USER  |
| admin1   | admin123 | ADMIN |

---

## 🌐 API Endpoints (YOUR IMPLEMENTATION)

| Method | URL                  | Access      |
| ------ | -------------------- | ----------- |
| GET    | /api/public/hello    | Public      |
| GET    | /api/user/profile    | USER, ADMIN |
| GET    | /api/admin/dashboard | ADMIN only  |

---

## 🔐 Security Configuration

* `/api/public/**` → accessible to everyone
* `/api/user/**` → accessible to USER & ADMIN
* `/api/admin/**` → accessible to ADMIN only

---

## 🧪 Testing (Postman)

### ✅ Test 1: Public API

* GET `/api/public/hello`
  ✔ 200 OK

---

### ✅ Test 2: USER → User API

* GET `/api/user/profile`
* Auth: user1 / user123
  ✔ 200 OK

---

### ❌ Test 3: USER → Admin API

* GET `/api/admin/dashboard`
* Auth: user1 / user123
  ✔ 403 Forbidden

---

### ✅ Test 4: ADMIN → Admin API

* GET `/api/admin/dashboard`
* Auth: admin1 / admin123
  ✔ 200 OK

---

### ❌ Test 5: No Authentication

* GET `/api/user/profile`
  ✔ 401 Unauthorized

---

## 🗄️ H2 Database(optional)

* URL: http://localhost:8080/h2-console
* JDBC URL: `jdbc:h2:mem:testdb`
* Username: `sa`
* Password: *(empty)*

---

## 🔐 HTTP Status Codes

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 401  | Unauthorized |
| 403  | Forbidden    |

---

## 🎯 Conclusion

This project successfully demonstrates **authentication and role-based authorization** using Spring Security.

It shows how:

* Public and secured APIs are separated
* Access is controlled using roles
* Unauthorized and forbidden requests are handled properly

---