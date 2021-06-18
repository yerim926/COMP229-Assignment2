"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayEditPage = exports.DisplayBusinessListPage = void 0;
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
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    business_1.default.findById(id, {}, {}, (err, businessContactToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', business: businessContactToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
//# sourceMappingURL=business.js.map