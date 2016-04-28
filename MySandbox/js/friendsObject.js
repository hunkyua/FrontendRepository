var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Tallen",
        number: 1,
        address: ["olololo"]
        },
    steve: { 
        firstName: "Steve",
        lastName: "Ibn",
        number: 1,
        address: ["suxx"]
        }
};

function list(objs) {
    for (var obj in objs){
     console.log(obj);   
    };
};

function search(name) {
    for (var friend in friends) {
      if(friends[friend].firstName === name)  {
         console.log(friends[friend].firstName + " " +
          friends[friend].lastName + " " + friends[friend].number + " " +
           friends[friend].address);
         console.log(friends[friend]);
          return friends[friend];
      };
    };
};
search("Bill");