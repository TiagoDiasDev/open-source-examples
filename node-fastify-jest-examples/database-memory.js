import { randomUUID } from "node:crypto";

// Banco de dados criado na memória.
// Database create in memory.
export class DatabaseMemory {
  #reservations = new Map();

  // Recupera todas as reservas.
  // Retrieves all reservations.
  list() {
    return Array.from(this.#reservations.entries()).map((reservationArray) => {
      const id = reservationArray[0];
      const data = reservationArray[1];

      return {
        id,
        ...data,
      };
    });
  }

  // Cria uma nova reserva.
  // Create a new reservation.
  create(reservation) {
    const reservationID = randomUUID();
    this.#reservations.set(reservationID, reservation);
  }

  // Atualiza uma reserva já criada.
  // Update an already created reservation.
  update(id, reservation) {
    this.#reservations.set(id, reservation);
  }

  // Exclui uma reserva.
  // Deletes a reservation.
  delete(id) {
    this.#reservations.delete(id);
  }
}
