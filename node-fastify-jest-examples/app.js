import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

// rest client

const app = fastify();
const database = new DatabaseMemory();

app.post("/api/reservation", (request, reply) => {
  const { name, email, age, adress, reservationDate } = request.body;
  database.create({
    name,
    email,
    age,
    adress,
    reservationDate,
  });

  return reply.status(201).send();
});

app.get("/api/reservations", (request, reply) => {
  const search = request.query.search;

  return database.list(search);
});

app.put("/api/reservations/:id", (request, reply) => {
  const reservationID = request.params.id;
  const { name, email, age, adress, reservationDate } = request.body;

  database.update(reservationID, { name, email, age, adress, reservationDate });

  return reply.status(204).send();
});

app.delete("/api/reservations/:id", (request, reply) => {
  const reservationID = request.params.id;

  database.delete(reservationID);

  return reply.status(204).send();
});

export default app;