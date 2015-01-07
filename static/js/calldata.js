define([], function() {

var calls = [
    {
        "date": [
            "13/01/99",
            "22:30"
        ],
        "duration": "1:44",
        "name": "Ann",
        "time": [
            "13/01/99",
            "22:30"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "13/01/99",
            "22:29"
        ],
        "duration": "0:18",
        "name": "Saad",
        "time": [
            "13/01/99",
            "22:29"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "13/01/99",
            "22:02"
        ],
        "duration": "0:06",
        "name": "Yaser cell",
        "time": [
            "13/01/99",
            "22:02"
        ],
        "tower": "L698B"
    },
    {
        "date": [
            "13/01/99",
            "21:57"
        ],
        "duration": "0:24",
        "name": "Nisha",
        "time": [
            "13/01/99",
            "21:57"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "13/01/99",
            "21:10"
        ],
        "duration": "8:41",
        "name": "Krista",
        "time": [
            "13/01/99",
            "21:10"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "13/01/99",
            "21:03"
        ],
        "duration": "5:28",
        "name": "Krista",
        "time": [
            "13/01/99",
            "21:03"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "13/01/99",
            "21:01"
        ],
        "duration": "1:24",
        "name": "Nisha",
        "time": [
            "13/01/99",
            "21:01"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "13/01/99",
            "20:05"
        ],
        "duration": "0:13",
        "name": "Jenn pager",
        "time": [
            "13/01/99",
            "20:05"
        ],
        "tower": "L653C"
    },
    {
        "date": [
            "13/01/99",
            "20:04"
        ],
        "duration": "0:32",
        "name": "Jenn pager",
        "time": [
            "13/01/99",
            "20:04"
        ],
        "tower": "L653A"
    },
    {
        "date": [
            "13/01/99",
            "19:16"
        ],
        "duration": "0:32",
        "name": "incoming",
        "time": [
            "13/01/99",
            "19:16"
        ],
        "tower": "L689B"
    },
    {
        "date": [
            "13/01/99",
            "19:09"
        ],
        "duration": "0:33",
        "name": "incoming",
        "time": [
            "13/01/99",
            "19:09"
        ],
        "tower": "L689B"
    },
    {
        "date": [
            "13/01/99",
            "19:00"
        ],
        "duration": "0:23",
        "name": "Jenn pager",
        "time": [
            "13/01/99",
            "19:00"
        ],
        "tower": "L651A"
    },
    {
        "date": [
            "13/01/99",
            "18:59"
        ],
        "duration": "0:27",
        "name": "Yaser cell",
        "time": [
            "13/01/99",
            "18:59"
        ],
        "tower": "L651A"
    },
    {
        "date": [
            "13/01/99",
            "18:24"
        ],
        "duration": "4:15",
        "name": "incoming",
        "time": [
            "13/01/99",
            "18:24"
        ],
        "tower": "L608C"
    },
    {
        "date": [
            "13/01/99",
            "18:09"
        ],
        "duration": "0:53",
        "name": "incoming",
        "time": [
            "13/01/99",
            "18:09"
        ],
        "tower": "L608C"
    },
    {
        "date": [
            "13/01/99",
            "18:07"
        ],
        "duration": "0:56",
        "name": "incoming",
        "time": [
            "13/01/99",
            "18:07"
        ],
        "tower": "L655A"
    },
    {
        "date": [
            "13/01/99",
            "17:38"
        ],
        "duration": "0:02",
        "name": "Krista",
        "time": [
            "13/01/99",
            "17:38"
        ],
        "tower": "L653C"
    },
    {
        "date": [
            "13/01/99",
            "17:14"
        ],
        "duration": "1:07",
        "name": "# + Adnan cell",
        "time": [
            "13/01/99",
            "17:14"
        ],
        "tower": "BLTM2"
    },
    {
        "date": [
            "13/01/99",
            "17:14"
        ],
        "duration": "1:07",
        "name": "incoming",
        "time": [
            "13/01/99",
            "17:14"
        ],
        "tower": "WB443"
    },
    {
        "date": [
            "13/01/99",
            "16:58"
        ],
        "duration": "0:19",
        "name": "incoming",
        "time": [
            "13/01/99",
            "16:58"
        ],
        "tower": "L654C"
    },
    {
        "date": [
            "13/01/99",
            "16:27"
        ],
        "duration": "2:56",
        "name": "incoming",
        "time": [
            "13/01/99",
            "16:27"
        ],
        "tower": "L654C"
    },
    {
        "date": [
            "13/01/99",
            "16:12"
        ],
        "duration": "0:28",
        "name": "Jenn home",
        "time": [
            "13/01/99",
            "16:12"
        ],
        "tower": "L689A"
    },
    {
        "date": [
            "13/01/99",
            "15:59"
        ],
        "duration": "0:25",
        "name": "Patrick",
        "time": [
            "13/01/99",
            "15:59"
        ],
        "tower": "L651A"
    },
    {
        "date": [
            "13/01/99",
            "15:48"
        ],
        "duration": "1:25",
        "name": "Phil",
        "time": [
            "13/01/99",
            "15:48"
        ],
        "tower": "L651A"
    },
    {
        "date": [
            "13/01/99",
            "15:32"
        ],
        "duration": "2:22",
        "name": "Nisha",
        "time": [
            "13/01/99",
            "15:32"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "13/01/99",
            "15:21"
        ],
        "duration": "0:42",
        "name": "Jenn home",
        "time": [
            "13/01/99",
            "15:21"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "13/01/99",
            "15:15"
        ],
        "duration": "0:20",
        "name": "incoming",
        "time": [
            "13/01/99",
            "15:15"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "13/01/99",
            "14:36"
        ],
        "duration": "0:05",
        "name": "incoming",
        "time": [
            "13/01/99",
            "14:36"
        ],
        "tower": "L651B"
    },
    {
        "date": [
            "13/01/99",
            "12:43"
        ],
        "duration": "0:24",
        "name": "incoming",
        "time": [
            "13/01/99",
            "12:43"
        ],
        "tower": "L652A"
    },
    {
        "date": [
            "13/01/99",
            "12:41"
        ],
        "duration": "1:29",
        "name": "Jenn home",
        "time": [
            "13/01/99",
            "12:41"
        ],
        "tower": "L652A"
    },
    {
        "date": [
            "13/01/99",
            "12:07"
        ],
        "duration": "0:21",
        "name": "Jenn home",
        "time": [
            "13/01/99",
            "12:07"
        ],
        "tower": "L688A"
    },
    {
        "date": [
            "13/01/99",
            "10:45"
        ],
        "duration": "0:28",
        "name": "Jay",
        "time": [
            "13/01/99",
            "10:45"
        ],
        "tower": "L651A"
    },
    {
        "date": [
            "13/01/99",
            "0:35"
        ],
        "duration": "1:24",
        "name": "Hae",
        "time": [
            "13/01/99",
            "0:35"
        ],
        "tower": "L654A"
    },
    {
        "date": [
            "13/01/99",
            "0:01"
        ],
        "duration": "0:02",
        "name": "Hae",
        "time": [
            "13/01/99",
            "0:01"
        ],
        "tower": "L602C"
    },
    {
        "date": [
            "12/01/99",
            "23:27"
        ],
        "duration": "0:02",
        "name": "Hae",
        "time": [
            "12/01/99",
            "23:27"
        ],
        "tower": "L608C"
    },
    {
        "date": [
            "12/01/99",
            "23:07"
        ],
        "duration": "18:46",
        "name": "Krista",
        "time": [
            "12/01/99",
            "23:07"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "12/01/99",
            "23:05"
        ],
        "duration": "0:36",
        "name": "Nisha",
        "time": [
            "12/01/99",
            "23:05"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "12/01/99",
            "21:41"
        ],
        "duration": "3:18",
        "name": "Krista",
        "time": [
            "12/01/99",
            "21:41"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "12/01/99",
            "21:32"
        ],
        "duration": "0:28",
        "name": "# + Adnan cell",
        "time": [
            "12/01/99",
            "21:32"
        ],
        "tower": "BLTM2"
    },
    {
        "date": [
            "12/01/99",
            "21:32"
        ],
        "duration": "0:28",
        "name": "incoming",
        "time": [
            "12/01/99",
            "21:32"
        ],
        "tower": "WB443"
    },
    {
        "date": [
            "12/01/99",
            "21:26"
        ],
        "duration": "3:51",
        "name": "Yaser home",
        "time": [
            "12/01/99",
            "21:26"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "12/01/99",
            "21:24"
        ],
        "duration": "0:09",
        "name": "incoming",
        "time": [
            "12/01/99",
            "21:24"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "12/01/99",
            "21:21"
        ],
        "duration": "0:15",
        "name": "incoming",
        "time": [
            "12/01/99",
            "21:21"
        ],
        "tower": "L651C"
    },
    {
        "date": [
            "12/01/99",
            "21:18"
        ],
        "duration": "0:18",
        "name": "Jay",
        "time": [
            "12/01/99",
            "21:18"
        ],
        "tower": "L651C"
    }
]

return calls;
}
);
