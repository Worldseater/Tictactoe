
    let b = 0.9;
  
    let buttonsArray = [
        document.getElementById('button1'),
        document.getElementById('button2'),
        document.getElementById('button3'),
        document.getElementById('button4'),
        document.getElementById('button5'),
        document.getElementById('button6'),
        document.getElementById('button7'),
        document.getElementById('button8'),
        document.getElementById('button9')
    ];

    let usedIndexes = [];
    let usedIndexesPlayer = [];

    let gameActive = true;
    
    buttonsArray.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (!gameActive || button.style.backgroundColor !== '') return; 
            
            if (button.style.backgroundColor === 'white' || button.style.backgroundColor === '') {
                button.style.backgroundColor = 'red';
                checkForWin(buttonsArray);
                if (!gameActive) return; 
            } else {
                button.style.backgroundColor = 'white';
            } 

            let i = index;
            // console.log("Кнопка с индексом " + i + " нажата");
            
// прямые и диагонали для 0
             if (i === 0) {usedIndexesPlayer.push(i); let alreadyColored = false;

                    if (!alreadyColored && (usedIndexesPlayer.includes(1) && !usedIndexes.includes(2))){
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return; }
                    else if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(1))){
                        buttonsArray[1].style.backgroundColor = 'blue';
                        usedIndexes.push(1);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return; }

                    if (!alreadyColored && (usedIndexesPlayer.includes(3) && !usedIndexes.includes(6))){
                        buttonsArray[6].style.backgroundColor = 'blue';
                        usedIndexes.push(6);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(3))){
                        buttonsArray[3].style.backgroundColor = 'blue';
                        usedIndexes.push(3);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(8))){
                        buttonsArray[8].style.backgroundColor = 'blue';
                        usedIndexes.push(8);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored) {
                    let x = Math.random(); 
                    console.log('Икс1 ' + x);

                    if (b>x) {
                        if (x>0.5 && !usedIndexes.includes(1) && !usedIndexesPlayer.includes(1)) {
                            buttonsArray[1].style.backgroundColor = 'blue';
                            usedIndexes.push(1);
                            checkForWin();
                            if (!gameActive) return;}

                        else if (x<0.5  && !usedIndexes.includes(3) && !usedIndexesPlayer.includes(3)) {
                            buttonsArray[3].style.backgroundColor = 'blue';
                            usedIndexes.push(3);
                            checkForWin();
                            if (!gameActive) return;}

                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);
                            checkForWin();
                            if (!gameActive) return;}

                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);
                                checkForWin();
                                if (!gameActive) return;}}

                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);
                            checkForWin();
                            if (!gameActive) return;}}}

// прямые и диагонали для 2(1)
            if (i === 1) {usedIndexesPlayer.push(i); let alreadyColored = false;

                    if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(2))){
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(0))){
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(7))){
                        buttonsArray[7].style.backgroundColor = 'blue';
                        usedIndexes.push(7);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(7) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                
                    if (!alreadyColored) {
                    let x = Math.random(); 
                    console.log('икс' + x);

                if (b>x) {
                    if (x>0.6 && !usedIndexes.includes(0) && !usedIndexesPlayer.includes(0)) {
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        checkForWin();
                        if (!gameActive) return;}
                    else if (x<0.6  && !usedIndexes.includes(2) && !usedIndexesPlayer.includes(2)) {
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        checkForWin();
                        if (!gameActive) return;}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);
                            checkForWin();
                            if (!gameActive) return;}}
                else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                    while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                        {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                        buttonsArray[randomIndex].style.backgroundColor = 'blue';
                        usedIndexes.push(randomIndex);
                        checkForWin();
                        if (!gameActive) return;}}}

                    
                    // console.log('usedIndexesPlayer ' + usedIndexesPlayer);   

// прямые и диагонали для 3(2)
            if (i === 2) {usedIndexesPlayer.push(i); let alreadyColored = false;

                    if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(1))){
                        buttonsArray[1].style.backgroundColor = 'blue';
                        usedIndexes.push(1);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(1) && !usedIndexes.includes(0))){
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(5) && !usedIndexes.includes(8))){
                        buttonsArray[8].style.backgroundColor = 'blue';
                        usedIndexes.push(8);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(5))){
                        buttonsArray[5].style.backgroundColor = 'blue';
                        usedIndexes.push(5);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(6))){
                        buttonsArray[6].style.backgroundColor = 'blue';
                        usedIndexes.push(6);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored) {
                    let x = Math.random(); 
                    console.log('икс' + x);
                    
                    if (b>x) {
                        if (x>0.6 && !usedIndexes.includes(1) && !usedIndexesPlayer.includes(1)) {
                            buttonsArray[1].style.backgroundColor = 'blue';
                            usedIndexes.push(1);
                            checkForWin();
                            if (!gameActive) return;}
                        else if (x<0.6  && !usedIndexes.includes(5) && !usedIndexesPlayer.includes(5)) {
                            buttonsArray[5].style.backgroundColor = 'blue';
                            usedIndexes.push(5);
                            checkForWin();
                            if (!gameActive) return;}
                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);
                            checkForWin();
                            if (!gameActive) return;}
                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);
                                checkForWin();
                                if (!gameActive) return;}}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);
                            checkForWin();
                            if (!gameActive) return;}}
                    }

// прямые и диагонали для 4(3)
            if (i === 3) {usedIndexesPlayer.push(i); let alreadyColored = false;
                
                    if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(6))){
                        buttonsArray[6].style.backgroundColor = 'blue';
                        usedIndexes.push(6);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(0))){
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(5))){
                        buttonsArray[5].style.backgroundColor = 'blue';
                        usedIndexes.push(5);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(5) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored) {
                    
                    let x = Math.random(); console.log('икс' + x);
                    
                    if (b>x) {
                        if (x>0.6 && !usedIndexes.includes(0) && !usedIndexesPlayer.includes(0)) {
                            buttonsArray[0].style.backgroundColor = 'blue';
                            usedIndexes.push(0);
                            checkForWin();
                            if (!gameActive) return;}
                        else if (x<0.6  && !usedIndexes.includes(6) && !usedIndexesPlayer.includes(6)) {
                            buttonsArray[6].style.backgroundColor = 'blue';
                            usedIndexes.push(6);
                            checkForWin();
                            if (!gameActive) return;}
                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);
                            checkForWin();
                            if (!gameActive) return;}
                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);
                                checkForWin();
                                if (!gameActive) return;}}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);
                            checkForWin();
                            if (!gameActive) return;}}
                    }

// прямые и диагонали для 6(5)
            if (i === 5) {usedIndexesPlayer.push(i); let alreadyColored = false;
                
                    if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(8))){
                        buttonsArray[8].style.backgroundColor = 'blue';
                        usedIndexes.push(8);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(2))){
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(3))){
                        buttonsArray[3].style.backgroundColor = 'blue';
                        usedIndexes.push(3);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(3) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored) {
                    let x = Math.random(); console.log('икс' + x);
                    
                    if (b>x) {
                        if (x>0.6 && !usedIndexes.includes(0) && !usedIndexesPlayer.includes(0)) {
                            buttonsArray[0].style.backgroundColor = 'blue';
                            usedIndexes.push(0);
                            checkForWin();
                            if (!gameActive) return;}
                        else if (x<0.6  && !usedIndexes.includes(6) && !usedIndexesPlayer.includes(6)) {
                            buttonsArray[6].style.backgroundColor = 'blue';
                            usedIndexes.push(6);
                            checkForWin();
                            if (!gameActive) return;}
                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);
                            checkForWin();
                            if (!gameActive) return;}
                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);
                                checkForWin();
                                if (!gameActive) return;}}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);
                            checkForWin();
                            if (!gameActive) return;}}
                    }

// прямые и диагонали для 7(6)
            if (i === 6) {
                usedIndexesPlayer.push(i); let alreadyColored = false;
            
                    if (!alreadyColored && (usedIndexesPlayer.includes(7) && !usedIndexes.includes(8))){
                        buttonsArray[8].style.backgroundColor = 'blue';
                        usedIndexes.push(8);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(7))){
                        buttonsArray[7].style.backgroundColor = 'blue';
                        usedIndexes.push(7);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    
                    if (!alreadyColored && (usedIndexesPlayer.includes(3) && !usedIndexes.includes(0))){
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(3))){
                        buttonsArray[3].style.backgroundColor = 'blue';
                        usedIndexes.push(3);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(2))){
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored) {
                    let x = Math.random(); 
                        console.log('Икс1 ' + x);
                    if (b>x) {
                        if (x>0.5 && !usedIndexes.includes(1) && !usedIndexesPlayer.includes(1)) {
                            buttonsArray[1].style.backgroundColor = 'blue';
                            usedIndexes.push(1);
                            checkForWin();
                            if (!gameActive) return;}
                        
                        else if (x<0.5  && !usedIndexes.includes(3) && !usedIndexesPlayer.includes(3)) {
                            buttonsArray[3].style.backgroundColor = 'blue';
                            usedIndexes.push(3);
                            checkForWin();
                            if (!gameActive) return;}
                        
                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);
                            checkForWin();
                            if (!gameActive) return;}
                        
                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);
                                checkForWin();
                                if (!gameActive) return;}}

                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);
                            checkForWin();
                            if (!gameActive) return;}}}


// прямые и диагонали для 8(7)
            if (i === 7) {
                usedIndexesPlayer.push(i); let alreadyColored = false;

                    if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(8))){
                        buttonsArray[8].style.backgroundColor = 'blue';
                        usedIndexes.push(8);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(6))){
                        buttonsArray[6].style.backgroundColor = 'blue';
                        usedIndexes.push(6);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    
                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(1))){
                        buttonsArray[1].style.backgroundColor = 'blue';
                        usedIndexes.push(1);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(1) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    
             if (!alreadyColored) {
            
                let x = Math.random(); console.log('икс' + x);
            
                if (b>x) {
                    if (x>0.6 && !usedIndexes.includes(0) && !usedIndexesPlayer.includes(0)) {
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        checkForWin();
                        if (!gameActive) return;}
                    else if (x<0.6  && !usedIndexes.includes(2) && !usedIndexesPlayer.includes(2)) {
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        checkForWin();
                        if (!gameActive) return;}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);
                            checkForWin();
                            if (!gameActive) return;}}
                else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                    while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                        {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                        buttonsArray[randomIndex].style.backgroundColor = 'blue';
                        usedIndexes.push(randomIndex);
                        checkForWin();
                        if (!gameActive) return;}}}

// прямые и диагонали для 9(8)
            if (i === 8) {
                usedIndexesPlayer.push(i); let alreadyColored = false;

                    if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(7))){
                        buttonsArray[7].style.backgroundColor = 'blue';
                        usedIndexes.push(7);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(7) && !usedIndexes.includes(6))){
                        buttonsArray[6].style.backgroundColor = 'blue';
                        usedIndexes.push(6);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(5) && !usedIndexes.includes(2))){
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(5))){
                        buttonsArray[5].style.backgroundColor = 'blue';
                        usedIndexes.push(5);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(0))){
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;
                        checkForWin();
                        if (!gameActive) return;}

                    if (!alreadyColored) {
                    let x = Math.random(); 
                    console.log('икс' + x);

                    if (b>x) {
                        if (x>0.6 && !usedIndexes.includes(1) && !usedIndexesPlayer.includes(1)) {
                            buttonsArray[1].style.backgroundColor = 'blue';
                            usedIndexes.push(1);
                            checkForWin();
                            if (!gameActive) return;}
                        else if (x<0.6  && !usedIndexes.includes(5) && !usedIndexesPlayer.includes(5)) {
                            buttonsArray[5].style.backgroundColor = 'blue';
                            usedIndexes.push(5);
                            checkForWin();
                            if (!gameActive) return;}
                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);
                            checkForWin();
                            if (!gameActive) return;}
                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);
                                checkForWin();
                                if (!gameActive) return;}}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);
                            checkForWin();
                            if (!gameActive) return;}}
                    }

// прямые и диагонали для 5(4)
if (i === 4) {
    usedIndexesPlayer.push(i); let alreadyColored = false;

    if (!alreadyColored && (usedIndexesPlayer.includes(1) && !usedIndexes.includes(7))) {
        buttonsArray[7].style.backgroundColor = 'blue';
        usedIndexes.push(7);
        alreadyColored = true;
        checkForWin();
        if (!gameActive) return;
    } else if (!alreadyColored && (usedIndexesPlayer.includes(7) && !usedIndexes.includes(1))) {
        buttonsArray[1].style.backgroundColor = 'blue';
        usedIndexes.push(1);
        alreadyColored = true;
        checkForWin();
        if (!gameActive) return;
    }

    if (!alreadyColored && (usedIndexesPlayer.includes(3) && !usedIndexes.includes(5))) {
        buttonsArray[5].style.backgroundColor = 'blue';
        usedIndexes.push(5);
        alreadyColored = true;
        checkForWin();
        if (!gameActive) return;
    } else if (!alreadyColored && (usedIndexesPlayer.includes(5) && !usedIndexes.includes(3))) {
        buttonsArray[3].style.backgroundColor = 'blue';
        usedIndexes.push(3);
        alreadyColored = true;
        checkForWin();
        if (!gameActive) return;
    }

    if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(8))) {
        buttonsArray[8].style.backgroundColor = 'blue';
        usedIndexes.push(8);
        alreadyColored = true;
        checkForWin();
        if (!gameActive) return;
    } else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(0))) {
        buttonsArray[0].style.backgroundColor = 'blue';
        usedIndexes.push(0);
        alreadyColored = true;
        checkForWin();
        if (!gameActive) return;
    }

    if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(6))) {
        buttonsArray[6].style.backgroundColor = 'blue';
        usedIndexes.push(6);
        alreadyColored = true;
        checkForWin();
        if (!gameActive) return;
    } else if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(2))) {
        buttonsArray[2].style.backgroundColor = 'blue';
        usedIndexes.push(2);
        alreadyColored = true;
        checkForWin();
        if (!gameActive) return;
    }
                        
    if (!alreadyColored) {
        let randomIndex = Math.floor(Math.random() * buttonsArray.length);
        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * buttonsArray.length);
        }
        buttonsArray[randomIndex].style.backgroundColor = 'blue';
        usedIndexes.push(randomIndex);
        checkForWin();
        if (!gameActive) return;
    } 
                    }


                });
        });
