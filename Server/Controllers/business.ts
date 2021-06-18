import express, { Request, Response, NextFunction } from 'express';

import Business from "../Models/business";

export function DisplayBusinessListPage(req: Request, res: Response, next: NextFunction): void
{
    //mongo db - find method to return all the business collection
    Business.find(function(err,businessCollection){
        if(err)
        {
            return console.error(err);
        }

        // (Read) print out the business list
        // console.log(business);

        //render the business-list content partial page
        res.render('index', {title: 'Business Contact List', page: 'business-list', business: businessCollection})
    });
}

export function DisplayEditPage(req: Request, res: Response, next: NextFunction):void
{
    let id = req.params.id;

    console.log(id);

    // pass the id to the db 

    //db.business.find({"_id": id})
    Business.findById(id,{},{},(err, businessContactToEdit) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        //show the edit view
        res.render('index',{title: 'Edit', page: 'edit', business: businessContactToEdit})
    });
}