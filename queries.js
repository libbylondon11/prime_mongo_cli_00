2.> db.bios.find({"awards":{$exists:true}});
3.> db.bios.find({"awards":{$exists:false}});
4.> db.bios.find({$or:[{"contribs":"OPP"},{"contribs":"UNIX"}]});
5.>db.bios.find({"awards.award":{$in["Turing Award"]}});
6.>> db.bios.find({"_id":{"$gt":3,"$lt":7}});
7.> db.bios.find({"awards.year":{"$lt":2000}}); //???
8.>db.bios.find({"death":{$exists:false}});
