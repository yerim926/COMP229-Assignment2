"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const business_1 = require("../Controllers/business");
router.get('/', business_1.DisplayBusinessListPage);
router.get('/edit/:id', business_1.DisplayEditPage);
//# sourceMappingURL=business.js.map