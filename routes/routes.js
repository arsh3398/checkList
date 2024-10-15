const express = require ('express');
const router = express.Router();
let checkListModel = require('../model/checkList');
let pointstModel = require('../model/points');

router.post('/addEntry', async(req,res)=>{
    let addChecklist = new checkListModel(req.body);
    const { wireCenter, jobNumber, designerName } = req.body; // Destructure to get required fields

    try {
        // Check if an entry with the same wireCenter, jobNumber, and designerName already exists
        const existingChecklist = await checkListModel.findOne({ wireCenter, jobNumber, designerName });

        if (existingChecklist) {
            return res.status(409).send({
                status: false,
                message: "Checklist entry already exists"
            });
        }

        // Create a new checklist entry
        let addChecklist = new checkListModel(req.body);
        await addChecklist.save();
        res.status(200).send({
            status: true,
            message: "Checklist submitted successfully"
        });
    } catch (err) {
        console.error('Error saving checklist:', err);
        res.status(400).send(err); // Send the error response
    }
});

router.get('/getchecklist', async(req,res)=>{
    const { wireCenter, jobNumber, designerName } = req.query;
    try{
        let applications = await checkListModel.findOne({wireCenter, jobNumber, designerName});
        if (applications) {
            res.status(200).send(applications); // Send the found document
        } else {
            res.status(200).send({}); // Send an empty object if no document is found
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
})

router.post('/addDesignPoints', async(req,res)=>{

    try {
        
    } catch (err) {
        
    }
});

router.get('/getchecklistitems', async(req,res)=>{
    try{
        let applications = await pointstModel.find({});
        if (applications) {
            res.status(200).send(applications);
        } else {
            res.status(200).send({});
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;