import request from "supertest";
import app from "../app.js";

describe("App component", () => {
  describe("Routes ", () => {
    beforeAll(async () => {
      // wait until the server actually starts, otherwise eat weird errors
      await app.ready();
    });

    it("Validate reservation POST endpoint", async () => {
      const res = await request(app.server).post("/api/reservation").send({
        name: "John Doe",
        email: "JohnDoe@example.com",
        age: "20",
        adress: "1419 Westwood Blvd, Los Angeles, CA",
        reservationDate: "01/02/2024",
      });

      expect(res.statusCode).toEqual(201);
    });

    it("Validate reservation GET endpoint", async () => {
      const res = await request(app.server).get("/api/reservations");

      const arrayOfReservations = res.body;

      expect(res.body).toBe(arrayOfReservations);
    });

    it("Validate reservation PUT endpoint", async () => {
      const reservations = await request(app.server).get("/api/reservations");
      const reservation = reservations.body.pop().id;
      const res = await request(app.server)
        .put(`/api/reservations/${reservation}`)
        .send({
          name: "John Doe",
          email: "JohnDoe@example.com",
          age: "20",
          adress: "1419 Westwood Blvd, Los Angeles, CA",
          reservationDate: "10/02/2024",
        });

      expect(res.statusCode).toEqual(204);
    });

    it("Validate reservation DELETE endpoint", async () => {
      const reservations = await request(app.server).get("/api/reservations");
      const reservation = reservations.body.pop().id;
      const res = await request(app.server).delete(
        `/api/reservations/${reservation}`
      );

      expect(res.statusCode).toEqual(204);
    });
  });
});
