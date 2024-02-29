import { Router } from 'express';
import {
    getChannelStats,
    getChannelVideos,
} from "../Controller/Dashboard.js"
import {verifyJWT} from "../Middleway/Verify.js"

const router = Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/stats").get(getChannelStats);
router.route("/videos").get(getChannelVideos);

export default router