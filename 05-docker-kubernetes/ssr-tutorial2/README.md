# Docker


## SSR

client -------> node --> angular
client <------ Full HTML

node

173.345.23.23

bet-yaakov.com


## Run our project

```
docker run -p 4000:4000 academeez/ssr:1.6.0
```

## Kubernetes

- Install docker
- Install kubernetes
https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows
- Install minikube
https://minikube.sigs.k8s.io/docs/start/


## Configuring our production

client              ingress controller       ingress            service         deployment - pod
browser -----------> Nginx                 bet-yaakov.com      bet-yaakov         our app
                                          api.bet-yaakov.com   backend            other pod                 

## helm

## EX

your next deployment try to do with SSR + Node servcer using docker and kubernetes.
