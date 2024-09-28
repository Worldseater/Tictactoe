
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

    const winningCombinations = [
        [0, 1, 2], // Первая строка
        [3, 4, 5], // Вторая строка
        [6, 7, 8], // Третья строка
        [0, 3, 6], // Первый столбец
        [1, 4, 7], // Второй столбец
        [2, 5, 8], // Третий столбец
        [0, 4, 8], // Первая диагональ
        [2, 4, 6]  // Вторая диагональ
    ];
    
    buttonsArray.forEach((button, index) => {
        button.addEventListener('click', function() {
            
            if (button.style.backgroundColor === 'white' || button.style.backgroundColor === '') {
                button.style.backgroundColor = 'red';
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
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(1))){
                        buttonsArray[1].style.backgroundColor = 'blue';
                        usedIndexes.push(1);
                        alreadyColored = true;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(3) && !usedIndexes.includes(6))){
                        buttonsArray[6].style.backgroundColor = 'blue';
                        usedIndexes.push(6);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(3))){
                        buttonsArray[3].style.backgroundColor = 'blue';
                        usedIndexes.push(3);
                        alreadyColored = true;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(8))){
                        buttonsArray[8].style.backgroundColor = 'blue';
                        usedIndexes.push(8);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;}

                    if (!alreadyColored) {
                    let x = Math.random(); 
                    console.log('Икс1 ' + x);

                    if (b>x) {
                        if (x>0.5 && !usedIndexes.includes(1) && !usedIndexesPlayer.includes(1)) {
                            buttonsArray[1].style.backgroundColor = 'blue';
                            usedIndexes.push(1);}

                        else if (x<0.5  && !usedIndexes.includes(3) && !usedIndexesPlayer.includes(3)) {
                            buttonsArray[3].style.backgroundColor = 'blue';
                            usedIndexes.push(3);}

                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);}

                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);}}

                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);}}}

// прямые и диагонали для 2(1)
            if (i === 1) {usedIndexesPlayer.push(i); let alreadyColored = false;

                    if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(2))){
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(0))){
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        alreadyColored = true;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(7))){
                        buttonsArray[7].style.backgroundColor = 'blue';
                        usedIndexes.push(7);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(7) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;}
                
                    if (!alreadyColored) {
                    let x = Math.random(); 
                    console.log('икс' + x);

                if (b>x) {
                    if (x>0.6 && !usedIndexes.includes(0) && !usedIndexesPlayer.includes(0)) {
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);}
                    else if (x<0.6  && !usedIndexes.includes(2) && !usedIndexesPlayer.includes(2)) {
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);}
                    else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);}}
                else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                    while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                        {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                        buttonsArray[randomIndex].style.backgroundColor = 'blue';
                        usedIndexes.push(randomIndex);}}}

                    
                    // console.log('usedIndexesPlayer ' + usedIndexesPlayer);   

// прямые и диагонали для 3(2)
            if (i === 2) {usedIndexesPlayer.push(i); let alreadyColored = false;

                    if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(1))){
                        buttonsArray[1].style.backgroundColor = 'blue';
                        usedIndexes.push(1);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(1) && !usedIndexes.includes(0))){
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        alreadyColored = true;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(5) && !usedIndexes.includes(8))){
                        buttonsArray[8].style.backgroundColor = 'blue';
                        usedIndexes.push(8);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(5))){
                        buttonsArray[5].style.backgroundColor = 'blue';
                        usedIndexes.push(5);
                        alreadyColored = true;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(6))){
                        buttonsArray[6].style.backgroundColor = 'blue';
                        usedIndexes.push(6);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;}

                    if (!alreadyColored) {
                    let x = Math.random(); 
                    console.log('икс' + x);
                    
                    if (b>x) {
                        if (x>0.6 && !usedIndexes.includes(1) && !usedIndexesPlayer.includes(1)) {
                            buttonsArray[1].style.backgroundColor = 'blue';
                            usedIndexes.push(1);}
                        else if (x<0.6  && !usedIndexes.includes(5) && !usedIndexesPlayer.includes(5)) {
                            buttonsArray[5].style.backgroundColor = 'blue';
                            usedIndexes.push(5);}
                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);}
                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);}}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);}}
                    }

// прямые и диагонали для 4(3)
            if (i === 3) {usedIndexesPlayer.push(i); let alreadyColored = false;
                
                    if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(6))){
                        buttonsArray[6].style.backgroundColor = 'blue';
                        usedIndexes.push(6);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(0))){
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        alreadyColored = true;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(5))){
                        buttonsArray[5].style.backgroundColor = 'blue';
                        usedIndexes.push(5);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(5) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;}

                    if (!alreadyColored) {
                    
                    let x = Math.random(); console.log('икс' + x);
                    
                    if (b>x) {
                        if (x>0.6 && !usedIndexes.includes(0) && !usedIndexesPlayer.includes(0)) {
                            buttonsArray[0].style.backgroundColor = 'blue';
                            usedIndexes.push(0);}
                        else if (x<0.6  && !usedIndexes.includes(6) && !usedIndexesPlayer.includes(6)) {
                            buttonsArray[6].style.backgroundColor = 'blue';
                            usedIndexes.push(6);}
                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);}
                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);}}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);}}
                    }

// прямые и диагонали для 4(3)
            if (i === 5) {usedIndexesPlayer.push(i); let alreadyColored = false;
                
                    if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(8))){
                        buttonsArray[8].style.backgroundColor = 'blue';
                        usedIndexes.push(8);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(2))){
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);
                        alreadyColored = true;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(3))){
                        buttonsArray[3].style.backgroundColor = 'blue';
                        usedIndexes.push(3);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(3) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;}

                    if (!alreadyColored) {
                    let x = Math.random(); console.log('икс' + x);
                    
                    if (b>x) {
                        if (x>0.6 && !usedIndexes.includes(0) && !usedIndexesPlayer.includes(0)) {
                            buttonsArray[0].style.backgroundColor = 'blue';
                            usedIndexes.push(0);}
                        else if (x<0.6  && !usedIndexes.includes(6) && !usedIndexesPlayer.includes(6)) {
                            buttonsArray[6].style.backgroundColor = 'blue';
                            usedIndexes.push(6);}
                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);}
                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);}}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);}}
                    }

// прямые и диагонали для 7(6)
            if (i === 6) {
                usedIndexesPlayer.push(i); let alreadyColored = false;
            
                    if (!alreadyColored && (usedIndexesPlayer.includes(7) && !usedIndexes.includes(8))){
                        buttonsArray[8].style.backgroundColor = 'blue';
                        usedIndexes.push(8);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(7))){
                        buttonsArray[7].style.backgroundColor = 'blue';
                        usedIndexes.push(7);
                        alreadyColored = true;}
                    
                    if (!alreadyColored && (usedIndexesPlayer.includes(3) && !usedIndexes.includes(0))){
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(3))){
                        buttonsArray[3].style.backgroundColor = 'blue';
                        usedIndexes.push(3);
                        alreadyColored = true;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(2))){
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;}

                    if (!alreadyColored) {
                    let x = Math.random(); 
                        console.log('Икс1 ' + x);
                    if (b>x) {
                        if (x>0.5 && !usedIndexes.includes(1) && !usedIndexesPlayer.includes(1)) {
                            buttonsArray[1].style.backgroundColor = 'blue';
                            usedIndexes.push(1);}
                        
                        else if (x<0.5  && !usedIndexes.includes(3) && !usedIndexesPlayer.includes(3)) {
                            buttonsArray[3].style.backgroundColor = 'blue';
                            usedIndexes.push(3);}
                        
                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);}
                        
                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);}}

                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);}}}


// прямые и диагонали для 8(7)
            if (i === 7) {
                usedIndexesPlayer.push(i); let alreadyColored = false;

                    if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(8))){
                        buttonsArray[8].style.backgroundColor = 'blue';
                        usedIndexes.push(8);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(6))){
                        buttonsArray[6].style.backgroundColor = 'blue';
                        usedIndexes.push(6);
                        alreadyColored = true;}
                    
                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(1))){
                        buttonsArray[1].style.backgroundColor = 'blue';
                        usedIndexes.push(1);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(1) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;}
                    
             if (!alreadyColored) {
            
                let x = Math.random(); console.log('икс' + x);
            
                if (b>x) {
                    if (x>0.6 && !usedIndexes.includes(0) && !usedIndexesPlayer.includes(0)) {
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);}
                    else if (x<0.6  && !usedIndexes.includes(2) && !usedIndexesPlayer.includes(2)) {
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);}
                    else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);}}
                else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                    while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                        {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                        buttonsArray[randomIndex].style.backgroundColor = 'blue';
                        usedIndexes.push(randomIndex);}}}

// прямые и диагонали для 9(8)
            if (i === 8) {
                usedIndexesPlayer.push(i); let alreadyColored = false;

                    if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(7))){
                        buttonsArray[7].style.backgroundColor = 'blue';
                        usedIndexes.push(7);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(7) && !usedIndexes.includes(6))){
                        buttonsArray[6].style.backgroundColor = 'blue';
                        usedIndexes.push(6);
                        alreadyColored = true;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(5) && !usedIndexes.includes(2))){
                        buttonsArray[2].style.backgroundColor = 'blue';
                        usedIndexes.push(2);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(5))){
                        buttonsArray[5].style.backgroundColor = 'blue';
                        usedIndexes.push(5);
                        alreadyColored = true;}

                    if (!alreadyColored && (usedIndexesPlayer.includes(4) && !usedIndexes.includes(0))){
                        buttonsArray[0].style.backgroundColor = 'blue';
                        usedIndexes.push(0);
                        alreadyColored = true;}
                    else if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(4))){
                        buttonsArray[4].style.backgroundColor = 'blue';
                        usedIndexes.push(4);
                        alreadyColored = true;}

                    if (!alreadyColored) {
                    let x = Math.random(); 
                    console.log('икс' + x);

                    if (b>x) {
                        if (x>0.6 && !usedIndexes.includes(1) && !usedIndexesPlayer.includes(1)) {
                            buttonsArray[1].style.backgroundColor = 'blue';
                            usedIndexes.push(1);}
                        else if (x<0.6  && !usedIndexes.includes(5) && !usedIndexesPlayer.includes(5)) {
                            buttonsArray[5].style.backgroundColor = 'blue';
                            usedIndexes.push(5);}
                        else if (!usedIndexes.includes(4) && !usedIndexesPlayer.includes(4)) {
                            buttonsArray[4].style.backgroundColor = 'blue';
                            usedIndexes.push(4);}
                        else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                            while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                                {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                                buttonsArray[randomIndex].style.backgroundColor = 'blue';
                                usedIndexes.push(randomIndex);}}
                    else {let randomIndex = Math.floor(Math.random() * buttonsArray.length);
                        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex))
                            {randomIndex = Math.floor(Math.random() * buttonsArray.length);}
                            buttonsArray[randomIndex].style.backgroundColor = 'blue';
                            usedIndexes.push(randomIndex);}}
                    }

// прямые и диагонали для 5(4)
if (i === 4) {
    usedIndexesPlayer.push(i); let alreadyColored = false;

    if (!alreadyColored && (usedIndexesPlayer.includes(1) && !usedIndexes.includes(7))) {
        buttonsArray[7].style.backgroundColor = 'blue';
        usedIndexes.push(7);
        alreadyColored = true;
    } else if (!alreadyColored && (usedIndexesPlayer.includes(7) && !usedIndexes.includes(1))) {
        buttonsArray[1].style.backgroundColor = 'blue';
        usedIndexes.push(1);
        alreadyColored = true;
    }

    if (!alreadyColored && (usedIndexesPlayer.includes(3) && !usedIndexes.includes(5))) {
        buttonsArray[5].style.backgroundColor = 'blue';
        usedIndexes.push(5);
        alreadyColored = true;
    } else if (!alreadyColored && (usedIndexesPlayer.includes(5) && !usedIndexes.includes(3))) {
        buttonsArray[3].style.backgroundColor = 'blue';
        usedIndexes.push(3);
        alreadyColored = true;
    }

    if (!alreadyColored && (usedIndexesPlayer.includes(0) && !usedIndexes.includes(8))) {
        buttonsArray[8].style.backgroundColor = 'blue';
        usedIndexes.push(8);
        alreadyColored = true;
    } else if (!alreadyColored && (usedIndexesPlayer.includes(8) && !usedIndexes.includes(0))) {
        buttonsArray[0].style.backgroundColor = 'blue';
        usedIndexes.push(0);
        alreadyColored = true;
    }

    if (!alreadyColored && (usedIndexesPlayer.includes(2) && !usedIndexes.includes(6))) {
        buttonsArray[6].style.backgroundColor = 'blue';
        usedIndexes.push(6);
        alreadyColored = true;
    } else if (!alreadyColored && (usedIndexesPlayer.includes(6) && !usedIndexes.includes(2))) {
        buttonsArray[2].style.backgroundColor = 'blue';
        usedIndexes.push(2);
        alreadyColored = true;
    }
                        
    if (!alreadyColored) {
        let randomIndex = Math.floor(Math.random() * buttonsArray.length);
        while (usedIndexes.includes(randomIndex) || usedIndexesPlayer.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * buttonsArray.length);
        }
        buttonsArray[randomIndex].style.backgroundColor = 'blue';
        usedIndexes.push(randomIndex);
    } 
                    }


                });
        });
