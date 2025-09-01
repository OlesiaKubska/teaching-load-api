import { Router } from "express";
import {
  getAllLoads,
  getLoadById,
  createLoad,
  updateLoad,
  deleteLoad
} from "../controllers/load.controller.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { loadValidationSchema } from "../validations/load.validation.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Loads
 *   description: Teaching load management
 */

/**
 * @swagger
 * /api/loads:
 *   get:
 *     summary: Get all teaching loads
 *     tags: [Loads]
 *     responses:
 *       200:
 *         description: List of loads
 */
router.get("/", getAllLoads);

/**
 * @swagger
 * /api/loads/{id}:
 *   get:
 *     summary: Get a load by ID
 *     tags: [Loads]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Load ID
 *     responses:
 *       200:
 *         description: Load object
 *       404:
 *         description: Load not found
 */
router.get("/:id", getLoadById);

/**
 * @swagger
 * /api/loads:
 *   post:
 *     summary: Create a new teaching load
 *     tags: [Loads]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - teacher
 *               - subject
 *               - group
 *               - type
 *             properties:
 *               teacher:
 *                 type: string
 *                 description: Teacher ID
 *               subject:
 *                 type: string
 *                 description: Subject ID
 *               group:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [lecture, practice]
 *     responses:
 *       201:
 *         description: Load created
 */
router.post("/", validateRequest(loadValidationSchema), createLoad);

/**
 * @swagger
 * /api/loads/{id}:
 *   put:
 *     summary: Update a teaching load by ID
 *     tags: [Loads]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Load ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               teacher:
 *                 type: string
 *               subject:
 *                 type: string
 *               group:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [lecture, practice]
 *     responses:
 *       200:
 *         description: Load updated
 *       404:
 *         description: Load not found
 */
router.put("/:id", validateRequest(loadValidationSchema), updateLoad);

/**
 * @swagger
 * /api/loads/{id}:
 *   delete:
 *     summary: Delete a teaching load by ID
 *     tags: [Loads]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Load ID
 *     responses:
 *       200:
 *         description: Load deleted
 *       404:
 *         description: Load not found
 */
router.delete("/:id", deleteLoad);

export default router;