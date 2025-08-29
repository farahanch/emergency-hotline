console.log('testing connection')

// grab navbar counters and history elements
const heartCountEl = document.getElementById('heartCount');
const coinCountEl = document.getElementById('coinCount');
const copyCountEl = document.getElementById('copyCount');
const historyList = document.getElementById('historyList');
const clearBtn = document.getElementById('clearHistory');

// initial state from navbar
let hearts = parseInt(heartCountEl.innerText || '0', 10);
let coins = parseInt(coinCountEl.innerText || '100', 10);
let copies = parseInt(copyCountEl.innerText || '0', 10);

// heart function
const heartBtns = document.getElementsByClassName('heart-btn');
for (const btn of heartBtns) {
    btn.addEventListener('click', function () {
        hearts = hearts + 1;
        heartCountEl.innerText = hearts;
    });
}

// copy function
const copyBtns = document.getElementsByClassName('copy-btn');
for (const btn of copyBtns) {
    btn.addEventListener('click', function () {
        // find the hotline number in the same card
        const card = this.closest('.relative');
        const numberEl = card.querySelector('p.mt-3'); 
        const number = numberEl.innerText;

        // copy to clipboard
        navigator.clipboard.writeText(number).then(() => {
            alert('Copied: ' + number);

            // increase copy counter
            copies = copies + 1;
            copyCountEl.innerText = copies;
        }).catch(err => {
            console.error('Copy failed:', err);
        });
    });
}

// call function
const callBtns = document.getElementsByClassName('call-btn');
for (const btn of callBtns) {
    btn.addEventListener('click', function () {
        const name = this.getAttribute('data-name') || 'Unknown Service';
        const number = this.getAttribute('data-number') || '';

        if (coins < 20) {
            alert('Not enough coins to place a call. You need at least 20 coins.');
            return;
        }

        alert('Calling ' + name + ' at ' + number + '...');

        coins = coins - 20;
        coinCountEl.innerText = coins;

        if (historyList.children.length === 1 &&
            historyList.children[0].innerText.indexOf('No calls yet') !== -1) {
            historyList.innerHTML = '';
        }

        // get current local time
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const li = document.createElement('li');
        li.className = 'flex items-start justify-between bg-gray-50 rounded-lg px-3 py-2';

        const left = document.createElement('div');

        const p1 = document.createElement('p');
        p1.className = 'font-medium';
        p1.innerText = name;

        const p2 = document.createElement('p');
        p2.className = 'text-xs text-gray-500';
        p2.innerText = number;

        left.appendChild(p1);
        left.appendChild(p2);
        li.appendChild(left);

        // add time info
        const right = document.createElement('div');
        right.className = 'text-xs text-gray-400';
        right.innerText = timeStr;
        li.appendChild(right);

        historyList.insertBefore(li, historyList.firstChild);
    });
}

// clear function
clearBtn.addEventListener('click', function () {
    historyList.innerHTML = '<li class="text-gray-400">No calls yet.</li>';
});
