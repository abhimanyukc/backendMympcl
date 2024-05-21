

//kycService.js
const Kyc = require("../models/kyc");
class KycService {
       
    async createKyc(firstName, middleName, lastName, gender, maritalStatus, familyStatus , education ,  cast, religion, occupation,houseType, roofType, familyNo, dob, citizenshipNo,issuedFrom,issuedDate,  yearlyTxnNumber, ruralMunicipality,district,province
        ,wardNo,tole,noOfRoom,familyMember,relationship,mobileNo,incomeHead, yearlyIncomeAmount,expenseHead
          , roomCost) {
        const newKyc = new Kyc({firstName, middleName, lastName, gender, maritalStatus, familyStatus , education ,  cast, religion, occupation,houseType, roofType, familyNo, dob, citizenshipNo,issuedFrom,issuedDate,  yearlyTxnNumber, ruralMunicipality,district,province
            ,wardNo,tole,noOfRoom,familyMember,relationship,mobileNo,incomeHead, yearlyIncomeAmount,expenseHead
              , roomCost});
        return await newKyc.save()
    }

    async getAllKyc(){
        return await Kyc.find();
    }
};

module.exports = new KycService();



