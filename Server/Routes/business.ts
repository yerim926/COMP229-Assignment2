import express from 'express';
const router = express.Router();
export default router;

//create a business controller instance
import {DisplayBusinessListPage} from '../Controllers/business';

/*GET business contact list - with /business-list */
router.get('/', DisplayBusinessListPage);

/*DISPLAY edit/:id page /business-list/edit:id */
