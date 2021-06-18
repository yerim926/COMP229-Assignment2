"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBusinessListPage = void 0;
const business_1 = __importDefault(require("../Models/business"));
function DisplayBusinessListPage(req, res, next) {
    business_1.default.find(function (err, businessCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'business-list', business: businessCollection });
    });
}
exports.DisplayBusinessListPage = DisplayBusinessListPage;
//# sourceMappingURL=business.js.map