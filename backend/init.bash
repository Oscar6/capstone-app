sequelize model:generate --name user \
    --attributes fname:string,lname:string,email:string,password:string,address:string,driversLicenseNumber:string,dob:string,carYear:integer,carMake:string,carModel:string

sequelize model:generate --name returnItem \
    --attributes store:string,receiptImagePath:string,itemImagePath:string,itemName:string
