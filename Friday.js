// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    onValue,
    child,
    get
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBRJph0yxSeE3fN_KsUr20p1JI70KsdkSU",
    authDomain: "notice-board-98214.firebaseapp.com",
    databaseURL: "https://notice-board-98214-default-rtdb.firebaseio.com",
    projectId: "notice-board-98214",
    storageBucket: "notice-board-98214.appspot.com",
    messagingSenderId: "389033309038",
    appId: "1:389033309038:web:a370df2638f06c95e8877f",
    measurementId: "G-XHPDGB6341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(getDatabase());


//Writing the data with an event
// document.getElementById("display").addEventListener("click", function writeUserData(text) {
//     text = document.getElementById("text").value
//     set(ref(db, 'website_data/'), {
//         display_text: text
//     });
// });

//test module for display board

const ReadData = ref(db, '1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0');
onValue(ReadData, (snapshot) => {
    const data = snapshot.val();
});



var dateTime = new Date();
var hrs = dateTime.getHours();
var min = dateTime.getMinutes();
var sec = dateTime.getSeconds();
var day = dateTime.getDay();

// array of the lab names
var labs = ["DL", "CG", "INT", "SL-1", "SL-2", "CR-1", "CR-2", "CR-3", "MP", "HW", "SL-3", "SL-4", "CR-4", "FPL", "PG"];

// this function gives the number of lab mentioned in the table 
function lab(name) {
    switch (name) {
        case "DL":
            return 1;
            break;

        case "CG":
            return 2;
            break;

        case "INT":
            return 3;
            break;

        case "SL-1":
            return 4;
            break;

        case "SL-2":
            return 5;
            break;

        case "CR-1":
            return 6;
            break;

        case "CR-2":
            return 7;
            break;

        case "CR-3":
            return 8;
            break;

        case "MP":
            return 9;
            break;

        case "HW":
            return 10;
            break;

        case "SL-3":
            return 11;
            break;

        case "SL-4":
            return 12;
            break;

        case "CR-4":
            return 13;
            break;

        case "FPL":
            return 14;
            break;

        case "PG":
            return 15;
            break;

        default:
            break;
    }
}


// this function gives the name of lab at tne num from the table
function lab2(num) {
    switch (num) {
        case 1:
            return "DL";
            break;

        case 2:
            return "CG";
            break;

        case 3:
            return "INT";
            break;

        case 4:
            return "SL-1";
            break;

        case 5:
            return "SL-2";
            break;

        case 6:
            return "CR-1";
            break;

        case 7:
            return "CR-2";
            break;

        case 8:
            return "CR-3";
            break;

        case 9:
            return "MP";
            break;

        case 10:
            return "HW";
            break;

        case 11:
            return "SL-3";
            break;

        case 12:
            return "SL-4";
            break;

        case 13:
            return "CR-4";
            break;

        case 14:
            return "FPL";
            break;

        case 15:
            return "PG";
            break;

        default:
            break;
    }
}

// for day 5 = Friday

if (day == 5) {
    //9:00
    var text2, text3;

    if (hrs == 9 && min == 0) {
        // SE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  09:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  09:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // SE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  09:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  09:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  09:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  09:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  09:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  09:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  09:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  09:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  09:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  09:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });
    }
    //9:55
    else if (hrs == 9 && min == 55) {
        // SE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  09:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  09:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // SE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  09:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  09:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  09:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  09:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  09:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  09:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  09:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  09:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  09:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  09:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });
    }
    // 10:50
    else if (hrs == 10 && min == 50) {
        // SE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  10:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  10:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // SE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  10:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  10:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  10:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  10:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  10:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  10:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  10:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  10:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  10:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  10:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });
    }

    // 11:10
    else if (hrs == 11 && min == 10) {
        // SE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  11:10/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  11:10/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // SE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  11:10/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  11:10/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  11:10/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  11:10/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  11:10/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  11:10/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  11:10/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  11:10/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  11:10/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  11:10/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });
    }

    //12:05
    else if (hrs == 12 && min == 5) {
        // SE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  12:05/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  12:05/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // SE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  12:05/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  12:05/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  12:05/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  12:05/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  12:05/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  12:05/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  12:05/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  12:05/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  12:05/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  12:05/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });
    }

    //01:00
    else if (hrs == 13 && min == 0) {
        // SE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  01:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  01:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // SE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  01:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  01:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  01:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  01:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  01:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  01:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  01:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  01:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  01:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  01:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });
    }

    // 02:00
    else if (hrs == 14 && min == 0) {
        // SE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  02:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  02:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // SE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  02:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  02:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  02:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  02:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  02:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  02:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  02:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  02:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  02:00/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  02:00/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });
    }

    //2:55
    else if (hrs == 14 && min == 55) {
        // SE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  02:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  02:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // SE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  02:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  02:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  02:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  02:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  02:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  02:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  02:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  02:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  02:55/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  02:55/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });
    }

    //03:50
    else if (hrs == 15 && min == 50) {
        // SE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  03:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_A/1)  03:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // SE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  03:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/SE_B/1)  03:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'SE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  03:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_A/1)  03:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // TE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  03:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/TE_B/1)  03:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'TE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_A
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  03:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_A/1)  03:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_A/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });

        // BE_B
        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  03:50/2)  Monday`)).then((snapshot) => {

            // text2 will give the name of lecture
            text2 = snapshot.val()
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `1Fd-FleFgCvXJgYJKGXiy2Msqp1oB8RoW1ZEGY_gCpa0/BE_B/1)  03:50/2)  Mon_lab`)).then((snapshot) => {

            // text3 will give the name of lab
            text3 = snapshot.val()
            text3 = lab(text3);
            text3 = lab2(text3);
            document.getElementById(text3).innerHTML = text2;

            set(ref(db, 'BE_B/'), {
                current_lec: text3 + " " + text2
            })
        }).catch((error) => {
            console.error(error);
        });
    }
}