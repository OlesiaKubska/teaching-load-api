import { Router } from "express";

const router = Router();

/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Health check
 *     description: Returns a simple status message to confirm the API is up.
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Backend is running!
 */

router.get("/health", (_req, res) => {
  res.json({ message: "Backend is running!" });
});

export default router;