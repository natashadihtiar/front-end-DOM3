const array =[1,2,[1.1,1.2,1.3],3];//eslint-disable-line
function generateList(array){//eslint-disable-line
    const $ul = document.createElement('ul');
    array.forEach(i => {
        const $li = document.createElement('li');
        $ul.append($li);
        if (Array.isArray(i)) {
            $li.outerHTML = generateList(i);
        } else {
            $li.textContent = i;
        }
    });
    return $ul.outerHTML;
}
document.body.outerHTML = generateList(array);
