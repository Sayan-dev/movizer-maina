var users = {
    byUserID: {
        "20208285276820SXNY6YXMGN0001":{
            userId: "20208285276820SXNY6YXMGN0001",
            "prefix": "Mr.",
            "firstName": "Say",
            "middleName": null,
            "lastName": "Bhat",
            "suffix": null,
            "dateOfBirth": "2020-08-26T18:30:00.000+00:00",
            "birthCountry": null,
            "birthState": null,
            "gender": "Male",
            "bloodGroup": "B+",
            "userCode": "US0322",
            "displayName": "Say  Bhat",
        },
        "20208285276820SXFYDXMGN0001":{
            userId: "20208285276820SXFYDXMGN0001",
            "prefix": "Mr.",
            "firstName": "Say",
            "middleName": null,
            "lastName": "Bhat",
            "suffix": null,
            "dateOfBirth": "2020-08-26T18:30:00.000+00:00",
            "birthCountry": null,
            "birthState": null,
            "gender": "Male",
            "bloodGroup": "B+",
            "userCode": "US0323",
            "displayName": "Say  Bhat",
        }
	},
allUserIds: ["20208285276820SXNY6YXMGN0001", "20208285276820SXFYDXMGN0001"]
}

const userTableCells = [
    { id: 'userID', numeric: false, disablePadding: true, label: 'Id' },
    { id: 'firstName', numeric: false, disablePadding: false, label: 'First Name' },
    { id: 'lastName', numeric: false, disablePadding: false, label: 'Last Name' },

    { id: 'dateOfBirth', numeric: false, disablePadding: false, label: 'Date of Birth' },

    { id: 'bloodGroup', numeric: false, disablePadding: false, label: 'Blood Group' },

    { id: 'createdAt', numeric: false, disablePadding: false, label: 'Joining Date' },

    { id: 'orgCode', numeric: false, disablePadding: false, label: 'Organization' },

    { id: 'roleCode', numeric: false, disablePadding: false, label: 'Role' },

    {
        id: `actionOfTable-${new Date()
            .toJSON()
            .replace(/[\-TZ]/g, "-")
            .split("-")
            .slice(0, 3)
            .reverse()
            .join("-")}`, numeric: true, disablePadding: false, label: 'Action'
    },
];

const UserRowCell = (data) => (eachTableCell) => {

    const cellValue = data[eachTableCell.id];
    // TODO paste logic here for orgCode and roleCode
    const button = <Button>{cellValue}</Button>

    return <Cell>{cellValue && "----"}</Cell>
}

// userTableCells : []

const UserRow = (eachId) => {
    // user:Object
    const user = state.byUserId[eachId];

    return <> {userTableCells.map(UserRowCell(user))} </>

}

const Table = () => {

    const allUsers = state.users.allUserIds;

    return (
        <>
            {allUsers.map(UserRow)}
        </>
    )
}


const a = [
    {
        parentId: null,
        menuCode: 5,
        menuName: "Adm",
    },

    {
        parentId: 5,
        menuCode: 7,
        menuName: "Adm"
    },

    {
        parentId: null,
        menuCode: 77,
        menuName: "Adm"
    },

    {
        parentId: 77,
        menuCode: 55,
        menuName: "Adm"
    },
]

const form = new FormData();

arr: [
    {inputValue:'fname', compoment:FnameInput }
]

const [fname,FnameInput] = SelfTextBox({

});

const [fname,FnameInput] = SelfTextBox({

});

// switch(TYPE){
//     case TEXTBOX:
//         return SelfTextBox({...props});

//     case DATEPICKER:
//         return <DatePicker {...props}>;
// }


// const userDetails = {
//     fname,
//     fname,
//     fname,
//     fname,
//     fname,
    
// }

// form.append('userDetails',userDetails);





// return(
//     arr.map((each,i)=> each.compoment )
// )

