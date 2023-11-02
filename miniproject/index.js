let countEL = document.getElementById("count-el");
        let tempEL = document.getElementById("temp-el");

        function start() {
            let min = 80;
            let max = 104; 
            let maxtemp=105;
            let mintemp=94;// Note: We use 131 to include 130 in the range
            let count = getRandomInt(min, max);
            let tempcount = getRandomInt(mintemp,maxtemp);
            countEL.textContent = count;
            tempEL.textContent = tempcount;
        }

        function getRandomInt(min, max) {
            // Adjust the formula to generate a random integer between min (inclusive) and max (inclusive)
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        setInterval(start,5000);