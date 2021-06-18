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