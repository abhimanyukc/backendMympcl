

//kycController.js
const kycService = require("../services/kycService");
class KycController {

    async createKyc(req,res) {
        try{
            const {  firstName, middleName, lastName, gender, maritalStatus, familyStatus , education ,  cast, religion, occupation,houseType, roofType, familyNo, dob, citizenshipNo,issuedFrom,issuedDate,  yearlyTxnNumber, ruralMunicipality,district,province
                ,wardNo,tole,noOfRoom,familyMember,relationship,mobileNo,incomeHead, yearlyIncomeAmount,expenseHead
                  , roomCost } = req.body;
            const saveKyc = await kycService.createKyc(firstName, middleName, lastName, gender, maritalStatus, familyStatus , education ,  cast, religion, occupation,houseType, roofType, familyNo, dob, citizenshipNo,issuedFrom,issuedDate,  yearlyTxnNumber, ruralMunicipality,district,province
                ,wardNo,tole,noOfRoom,familyMember,relationship,mobileNo,incomeHead, yearlyIncomeAmount,expenseHead
                  , roomCost);
            res.json(saveKyc);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllKyc(req, res){
        try{
              const kyc = await kycService.getAllKyc();
              res.json(kyc);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  KycController();
