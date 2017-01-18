$(document).ready(function(){
    // input type=date alternative for other browsers
    $('input[type=date]').each(function() {
        if (this.type != 'date') $(this).datepicker();
    });

    $("form").submit(function(e) {
        e.preventDefault();

        var birthDate = new Date($('#date').val());

        if(Object.prototype.toString.call(birthDate) === '[object Date]' && isFinite(birthDate)) {
            var day = birthDate.getDate();
            var month = birthDate.getMonth() + 1;
            var year = birthDate.getFullYear();

            $('#chinese-zodiac').text(chineseZodiac(year));
            $('#astrological-sign').text(astrologicalSign(day, month));
            $('#birth-stone').text(stoneFlower(month)[0]);
            $('#birth-flower').text(stoneFlower(month)[1]);
            $('#err').text("");
        } else {
            $('#err').text("Invalid date input!").css("color", "red");
        }
    });

    // get chinese zodiac sign
    function chineseZodiac(year) {
        var res = [
            "Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"];

        return res[year % 12];
    }

    // get astrological sign
    function astrologicalSign(day, month) {
        if((month == '1' && day >= '21') || (month == '2' && day <= '19')) {
            return "Aquarius";
        } else if ((month == '2' && day >= '20') || (month == '3' && day <= '20')) {
            return "Pisces";
        } else if ((month == '3' && day >= '21') || (month == '4' && day <= '19')) {
            return "Aries";
        } else if ((month == '4' && day >= '20') || (month == '5' && day <= '20')) {
            return "Taurus";
        } else if ((month == '5' && day >= '21') || (month == '6' && day <= '21')) {
            return "Gemini";
        } else if((month == '6' && day >= '22') || (month == '7' && day <= '21')) {
            return "Cancer";
        } else if ((month == '7' && day >= '22') || (month == '8' && day <= '21')) {
            return "Leo";
        } else if ((month == '8' && day >= '22') || (month == '9' && day <= '22')) {
            return "Virgo";
        } else if ((month == '9' && day >= '23') || (month == '10' && day <= '22')) {
            return "Libra";
        } else if ((month == '10' && day >= '23') || (month == '11' && day <= '21')) {
            return "Scorpio";
        } else if ((month == '11' && day >= '22') || (month == '12' && day <= '21')) {
            return "Sagittarius";
        } else if ((month == '12' && day >= '22') || (month == '1' && day <= '20')) {
            return "Capricorn";
        }
    }

    // get birth stone and flower
    function stoneFlower(month) {
        var res = [
            ["Garnet", "Carnation"],
            ["Amethyst", "Iris"],
            ["Aquamarine", "Jonquil"],
            ["Diamond", "Sweet Pea"],
            ["Emerald", "Lily of the Valley"],
            ["Pearl/Alexandrite", "Rose"],
            ["Ruby", "Larkspur"],
            ["Peridot", "Gladiola"],
            ["Sapphire", "Aster"],
            ["Tarmouline/Opal", "Calendula"],
            ["Topaz", "Chrysanteum"],
            ["Turqouise/Zircon/Tanzanite", "Narcissus"]
        ];

        return res[month-1];
    }
});