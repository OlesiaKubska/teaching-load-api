import { Router } from "express";
import {
  getAllLoads,
  getLoadById,
  createLoad,
  updateLoad,
  patchLoad,
  deleteLoad
} from "../controllers/load.controller.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { loadValidationSchema, loadPatchValidationSchema } from "../validations/load.validation.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

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
 *     summary: Get all teaching loads (optionally filter by year)
 *     tags: [Loads]
 *     parameters:
 *       - in: query
 *         name: year
 *         schema:
 *           type: integer
 *         required: false
 *         description: Filter loads by year
 *     responses:
 *       200:
 *         description: List of loads
 */
router.get("/", authMiddleware, getAllLoads);

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
router.get("/:id", authMiddleware, getLoadById);

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
 *               - year
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
 *               year:
 *                 type: number
 *                 description: Year of the load  
 *     responses:
 *       201:
 *         description: Load created
 */
router.post("/", authMiddleware, validateRequest(loadValidationSchema), createLoad);

/**
 * @swagger
 * /api/loads/{id}:
 *   put:
 *     summary: Full update a teaching load by ID
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
 *               year:
 *                 type: number
 *     responses:
 *       200:
 *         description: Load updated
 *       404:
 *         description: Load not found
 */
router.put("/:id", authMiddleware, validateRequest(loadValidationSchema), updateLoad);

/**
 * @swagger
 * /api/loads/{id}:
 *   patch:
 *     summary: Partial update of a teaching load by ID
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
 *               year:
 *                 type: number
 *     responses:
 *       200:
 *         description: Load patched
 *       404:
 *         description: Load not found
 */
router.patch("/:id", authMiddleware, validateRequest(loadPatchValidationSchema), patchLoad);


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
router.delete("/:id", authMiddleware, deleteLoad);

export default router;