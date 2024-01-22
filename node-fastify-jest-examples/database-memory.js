import { randomUUID } from "node:crypto";
export class DatabaseMemory {
  #reservations = new Map();

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

  create(reservation) {
    const reservationID = randomUUID();
    this.#reservations.set(reservationID, reservation);
  }

  update(id, reservation) {
    this.#reservations.set(id, reservation);
  }

  delete(id) {
    this.#reservations.delete(id);
  }
}
