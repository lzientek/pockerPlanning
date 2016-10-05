/**
 * Created by Lzientek on 01-10-2016.
 */

import express = require("express");
import RoomBusiness = require("./../app/business/RoomBusiness");
import IBaseController = require("./BaseController");
import IRoomModel = require("./../app/model/RoomModel");

class RoomController implements IBaseController <RoomBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var room: IRoomModel = <IRoomModel>req.body;
            console.log(req.body);
            var roomBusiness = new RoomBusiness();
            roomBusiness.create(room, (error, result) => {
                if (error) {
                    res.send({"error": "error"});
                } else {res.send(result); }
            });
        } catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var hero: IRoomModel = <IRoomModel>req.body;
            var _id: string = req.params._id;
            var roomBusiness = new RoomBusiness();
            roomBusiness.update(_id, hero, (error, result) => {
                if (error) {res.send({"error": "error"});
                } else {res.send(result); };
            });
        } catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var roomBusiness = new RoomBusiness();
            roomBusiness.delete(_id, (error, result) => {
                if (error) {res.send({"error": error});
                } else {res.send(result); }
            });
        } catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var roomBusiness = new RoomBusiness();
            roomBusiness.retrieve((error, result) => {
                if (error) {res.send({"error": error});
                } else {res.send(result); }
            });
        } catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var roomBusiness = new RoomBusiness();
            roomBusiness.findById(_id, (error, result) => {
                if (error) {res.send({"error": error});
                } else {res.send(result); }
            });
        } catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
}
export = RoomController;