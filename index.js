const arr = [1,2,[1.1,1.2,1.3],3];//eslint-disable-line

function generateList(array){//eslint-disable-line
    const $ul = document.createElement('ul');
    array.forEach(i => {
        const $li = document.createElement('li');
        $ul.appendChild($li);
        if (Array.isArray(i)) {
            $li.innerHTML = generateList(i);
        } else {
            $li.textContent = i;
        }
    });
    return $ul.outerHTML;
}
document.body.outerHTML = generateList(arr);

