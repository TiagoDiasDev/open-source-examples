import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

// Criar uma instância da classe fastify
// Create an instance of the fastify class
const app = fastify();

// Criar uma instância do nosso database
// Create an instance of our database
const database = new DatabaseMemory();

// Registra uma nova rota de POST em nossa aplicação.
// Register a new POST route in our application.
app.post("/api/reservation", (request, reply) => {
  // Através de desconstrução de objeto recuperamos os atributos da request para criação de uma reserva.
  // Through object deconstruction we retrieve the request attributes to create a reservation.
  const { name, email, age, adress, reservationDate } = request.body;

  // Chamada do método de criar reserva
  // Calling the create reservation method
  database.create({
    name,
    email,
    age,
    adress,
    reservationDate,
  });

  // Retorna o HTTP status de criação
  // Returns the HTTP creation status
  return reply.status(201).send();
});

// Registra uma nova rota de GET em nossa aplicação
// Register a new GET route in our application
app.get("/api/reservations", () => {
  // Recupera todas as reservas cadastradas
  // Retrieves all registered reservations
  return database.list();
});

// Registra uma nova rota de PUT em nossa aplicação
// Register a new PUT route in our application
app.put("/api/reservations/:id", (request, reply) => {
  // Recupera o ID de uma reserva através de request params
  // Retrieves the ID of a reservation through request params
  const reservationID = request.params.id;

  // Através de desconstrução de objeto recuperamos os atributos da request para atualização de uma reserva.
  // Through object deconstruction we retrieve the request attributes to update a reservation.
  const { name, email, age, adress, reservationDate } = request.body;

  // Chamada do método de criar reserva
  // Calling the update reservation method
  database.update(reservationID, { name, email, age, adress, reservationDate });

  // Retorno do HTTP status
  // HTTP status return
  return reply.status(204).send();
});

// Registra uma nova rota de DELETE em nossa aplicação
// Register a new DELETE route in our application
app.delete("/api/reservations/:id", (request, reply) => {
  // Recupera o ID de uma reserva através de request params
  // Retrieves the ID of a reservation through request params
  const reservationID = request.params.id;

  // Chamada do método de deletar reserva
  // Calling the delete reservation method
  database.delete(reservationID);

  // Retorno do HTTP status
  // HTTP status return
  return reply.status(204).send();
});

export default app;
