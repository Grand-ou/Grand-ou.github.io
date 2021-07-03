var result = $.csv.toArrays(test.csv);
var data = $.csv2Array(csv, {
    onParseValue: $.csv.hooks.castToScalar
});
console.log(data);
Output:

    [
        734,
        4.5,
        "sda",
        555,
        4523.35,
        "af323"
    ]
]