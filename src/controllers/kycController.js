const kycService = require("../services/kycService");

class KycController {

    async createKyc(req,res) {
        try{
            const {firstName, middleName, lastName, Gender, MaritalStatus, FamilyStatus , Education ,  Cast, Religion, Occupation,HouseType, RoofType, FamilyNo, DateOfBirth, CitizenshipNo,IssuedFrom,IssuedDate,  YearlyTaxNumber, RuralMunicipality,District,Province
                ,WardNo,Tole,FamilyMemberName,Relationship,MobileNo,IncomeHead, YearlyIncomeAmount,ExpenseHead
                 ,ExpenseAmount,NoOfHouse,RoofOfHouse, NoOfRoom, Cost } = req.body;
            const saveKyc = await kycService.createKyc(firstName, middleName, lastName, Gender, MaritalStatus, FamilyStatus , Education ,  Cast, Religion, Occupation,HouseType, RoofType, FamilyNo, DateOfBirth, CitizenshipNo,IssuedFrom,IssuedDate,  YearlyTaxNumber, RuralMunicipality,District,Province
                ,WardNo,Tole,FamilyMemberName,Relationship,MobileNo,IncomeHead, YearlyIncomeAmount,ExpenseHead
                 ,ExpenseAmount,NoOfHouse,RoofOfHouse, NoOfRoom, Cost);
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
