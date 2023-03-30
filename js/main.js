customSelect('select');

/* datepicker */

const picker = new easepick.create({
    element: "#when",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
    ],
    zIndex: 10,
    lang: "ru-RU",
    grid: 2,
    format: 'DD.MM.YY',
    calendars: 2,
    plugins: [
        "RangePlugin",
        "TimePlugin"
    ]
});



