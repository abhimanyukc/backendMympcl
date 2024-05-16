const Kyc = require("../models/kyc");

class KycService {
       
    async createKyc(firstName, middleName, lastName, Gender, MaritalStatus, FamilyStatus , Education ,  Cast, Religion, Occupation,HouseType, RoofType, FamilyNo, DateOfBirth, CitizenshipNo,IssuedFrom,IssuedDate,  YearlyTaxNumber, RuralMunicipality,District,Province
        ,WardNo,Tole,FamilyMemberName,Relationship,MobileNo,IncomeHead, YearlyIncomeAmount,ExpenseHead
         ,ExpenseAmount,NoOfHouse,RoofOfHouse, NoOfRoom, Cost) {
        const newKyc = new Kyc({firstName, middleName, lastName, Gender, MaritalStatus, FamilyStatus , Education ,  Cast, Religion, Occupation,HouseType, RoofType, FamilyNo, DateOfBirth, CitizenshipNo,IssuedFrom,IssuedDate,  YearlyTaxNumber, RuralMunicipality,District,Province
            ,WardNo,Tole,FamilyMemberName,Relationship,MobileNo,IncomeHead, YearlyIncomeAmount,ExpenseHead
             ,ExpenseAmount,NoOfHouse,RoofOfHouse, NoOfRoom, Cost});
        return await newKyc.save()
    }

    async getAllKyc(){
        return await Kyc.find();
    }
};

module.exports = new KycService();



