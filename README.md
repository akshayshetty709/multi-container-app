Multi-Container Web Application Deployment using Docker on AWS EC2
Project Overview

This project demonstrates how to deploy a multi-container web application on an AWS EC2 instance using Docker and Docker Compose. The application consists of a Node.js web server and a MySQL database container with persistent storage using AWS EBS.

User Browser
      │
      │ HTTP (Port 80)
      ▼
EC2 Instance
      │
      │ Docker Compose
      │
 ┌───────────────┐
 │ Web Container │  (Node.js)
 └───────▲───────┘
         │
         │ Database Connection
         ▼
 ┌───────────────┐
 │ DB Container  │ (MySQL)
 └───────▲───────┘
         │
         │ Persistent Storage
         ▼
      EBS Volume

Architecture

User → EC2 Instance → Docker Compose → Web Container (Node.js) → Database Container (MySQL) → EBS Volume for persistent storage.

Technologies Used

AWS EC2

AWS EBS

Docker

Docker Compose

Node.js

MySQL

Project Structure

multi-container-app
│
├── docker-compose.yml
├── web
│ ├── Dockerfile
│ ├── package.json
│ └── app.js

Setup Steps
1 Launch EC2 Instance

Ubuntu 22.04

Open ports 22 and 80

2 Install Docker

sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker

3 Install Docker Compose

sudo apt install docker-compose -y

4 Attach and Mount EBS Volume

lsblk
sudo mkfs -t ext4 /dev/xvdf
sudo mkdir /data
sudo mount /dev/xvdf /data

5 Run Application

docker-compose up -d

6 Access Application

http://EC2-PUBLIC-IP

Features

Multi-container architecture

Persistent database storage using AWS EBS

Dockerized deployment

Easy scaling with Docker Compose
