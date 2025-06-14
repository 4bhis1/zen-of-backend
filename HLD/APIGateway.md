# What is an API Gateway?

An API Gateway is a centralized entry point for client requests in a microservices architecture. It acts as a reverse proxy, handling key responsibilities such as:

* Authentication and Authorization: Verifies the identity of the user and determines whether they have access to specific services or endpoints.

* Rate Limiting & Throttling: Prevents abuse by controlling how many requests a client can make in a given time.

* Routing: Determines which microservice should handle a specific API request and forwards the request accordingly.

* Response Aggregation: If an API call requires data from multiple microservices, the API Gateway can invoke those services, collect their responses, and combine them into a single, unified response. This way, the frontend only needs to make one request, reducing complexity and latency.

* Error Handling & Logging: Centralized logging, metrics collection, and consistent error handling across all services.


## FAQS

1. If there is a common path of handling authentication then how you manage requests which directly comes to your server ?
2. Which tool you use for API-Gateway can you use your own server in node JS? 