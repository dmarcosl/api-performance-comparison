# Axum - WebFlux - RestClient - Performance Comparison

This project is a simple performance comparison between **Rust with Axum**, **Java with WebFlux** and **Java with RestClient**, using 6 different endpoints

- `/health` - A fast GET request that returns a simple message
- `/post-item` - A POST request that stores an item in H2 / SQLite
- `/get-item/{id}` - A GET request that retrieves an item from the db
- `/get-item-list` - A GET request that retrieves all items from the db
- `/get-item-cache/{id}` - A GET request that retrieves an item from the db and caches it for the next request
- `/get-item-cache-list` - A GET request that retrieves all items from the db and caches them for the next request

## Running the project

To run the project, you need to have **Docker and Docker Compose installed**. Then, you can run the following command:

`docker-compose up`

Then open Grafana at `http://localhost:3000` and login with `admin` and `admin`, skip the password change, and go to the dashboard.

If you have any problem doing changes in the code, you can rebuild the images with the following command:

`docker-compose down --remove-orphans`

`docker-compose down --volumes --rmi all`

## Source Projects

- https://github.com/dmarcosl/rust-axum-performance
- https://github.com/dmarcosl/java-webclient-performance
- https://github.com/dmarcosl/java-restclient-performance
